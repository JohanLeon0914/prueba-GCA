export interface SellerModel {
    id: string;
    name: string;
    category: string;
    address: string;
    isActive: boolean;
    coordinates: CoordinatesModel;
    photo: string;
    vehicle: string;
  }
  
  interface CoordinatesModel {
    latitude: number;
    longitude: number;
    height: number;
  }