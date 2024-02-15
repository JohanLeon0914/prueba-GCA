# Prueba Técnica - GCA

## Repositorio

El proyecto se encuentra disponible en el siguiente repositorio público de GitHub: https://github.com/JohanLeon0914/prueba-GCA

## Descripción

Este proyecto es una aplicación desarrollada en TypeScript utilizando el framework Angular. El objetivo de esta prueba técnica es demostrar habilidades en el desarrollo de aplicaciones web utilizando Angular, consumiendo datos de una API REST, integrando un mapa de Google, y creando componentes interactivos.

## Desarrollador

Este proyecto fue desarrollado por Johan León.

## Instalación y Ejecución

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio desde [(https://github.com/JohanLeon0914/prueba-GCA)].
2. Instala las dependencias con `npm install`.
3. Ejecuta `ng serve` para iniciar el servidor de desarrollo.
4. Abre tu navegador web y visita `http://localhost:4200/`.

## Recursos Adjuntos

El proyecto utiliza los recursos adjuntos proporcionados en la prueba técnica, incluyendo imágenes y datos de la API REST.

## Funcionalidades

1. **Pantalla Principal**: La pantalla principal muestra un mapa de Google en la parte izquierda y una lista de vendedores disponibles en la parte derecha.
   
2. **Consumo de API REST**: Los datos de los vendedores se obtienen a través de la API REST proporcionada.
   
3. **Menú y Pestañas**: El menú ofrece varias opciones, incluyendo la opción de cambiar entre distintas pestañas. Al seleccionar la pestaña 1, el contenido de la parte izquierda cambia a otro componente diseñado por el aspirante.
   
4. **Seguimiento de Vendedores**: En el mapa se muestran pines para el seguimiento de los vendedores, utilizando las coordenadas proporcionadas por la API. Al hacer clic en un pin, se muestra un diálogo con el nombre del vendedor, su tipo y un botón para ver más detalles.
   
5. **Creación de Vendedor**: Bajo la lista de vendedores, se incluye un botón para crear un nuevo vendedor. Al presionar el botón, se abre un popup para ingresar los datos del nuevo vendedor.
   
6. **Actualización Programada**: Se implementa una actualización programada para realizar un seguimiento continuo de los vendedores, ya que los datos de coordenadas y actividad son diferentes cada vez que se consume la API.

