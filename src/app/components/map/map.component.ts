import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl, { Marker, Popup } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { CoordinatesService } from '../../services/coordinates.service';
import { SellerModel } from '../../types/Seller';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hbGVzZSIsImEiOiJjbHNscXd1YWUwYnh6MmtsOXFtaXBnbmQ2In0.jhoVfDA2A5ZGzwBOmf9-JQ';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement: ElementRef;
  longitud: number = 0;
  latitud: number = 0


  constructor(private coordinatesSvc: CoordinatesService) {
  }

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [40.0, 40.0],
      zoom: 9
    });
    // Suscribirse a los cambios en las coordenadas
    this.coordinatesSvc.coordinatesChanged.subscribe(() => {
      const popup = new Popup().setHTML(`
  <div style="padding: 10px; min-width: 145px;">
    <image src="${this.getSellerImage(this.coordinatesSvc.sellerSelected)}" style="display: block; margin-bottom: 10px; border-radius: 10px;" />
    <h1 style="margin-bottom: 5px;"> ${this.coordinatesSvc.sellerSelected.name} </h1>
    <span style="display: block; margin-bottom: 5px;"> ${this.coordinatesSvc.sellerSelected.category} </span>
    <button style="background-color: blue; color: white; border: none; border-radius: 5px; padding: 8px 16px; cursor: pointer;"> Ver </button>
  </div>
`);
      // Actualizar el centro del mapa cuando cambien las coordenadas
      console.log(this.coordinatesSvc.sellerSelected)
      map.setCenter([this.coordinatesSvc.sellerSelected.coordinates.longitude, this.coordinatesSvc.sellerSelected.coordinates.latitude]);
      //Create the Marker
      let el = document.createElement('div');
      el.className = 'marker';
      switch (this.coordinatesSvc.sellerSelected.vehicle) {
        case ('moto'):
          el.style.backgroundImage = 'url(/assets/moto.svg)';
          break;
        case ('carro'):
          el.style.backgroundImage = 'url(/assets/carro.svg)';
          break;
        case ('ambulancia'):
          el.style.backgroundImage = 'url(/assets/ambulancia.svg)';
          break;
        case ('grua'):
          el.style.backgroundImage = 'url(/assets/grua.svg)';
          break;
        default:
          el.style.backgroundImage = 'url(/assets/sinvehiculo.svg)';
      }
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.backgroundRepeat = 'no-repeat';
      el.style.backgroundSize = 'contain';
      new Marker(el).setLngLat([this.coordinatesSvc.sellerSelected.coordinates.longitude, this.coordinatesSvc.sellerSelected.coordinates.latitude]).setPopup(popup).addTo(map);
    });
  }

  getSellerImage(seller: SellerModel): string {
    switch (seller.photo) {
      case ('person1'):
        return 'assets/person1.jpg'
      case ('persona2'):
        return 'assets/person2.jpg'
      case ('persona3'):
        return 'assets/person3.jpg'
      case ('persona4'):
        return 'assets/person4.jpg'
      case ('persona5'):
        return 'assets/person5.jpg'
      default:
        return 'assets/person1.jpg'
    }
  }

}
