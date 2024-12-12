import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Propiedad de productos
  products = [
    { 
      name: 'MESSI 1', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://img2.rtve.es/v/6753970?w=1600&preview=1670619705279.jpg'
    },
    { 
      name: 'MESSI 2', 
      price: 150, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-11/Lionel%20Messi%20Inter%20Miami%202024.jpg?h=3e124502&itok=-Z8iPV_k'
    },
    { 
      name: 'MESSI 3', 
      price: 200, 
      inventoryStatus: 'In Stock', 
      image: 'https://ocdn.eu/sport-images-transforms/1/bLZk9lBaHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMvTURBXy9kOTc4ZTFkYzk1ODQzODFjYTM1ZmMzNmQ2YWY4NmQ2MS5qcGeTlQMAAM0Imc0E15UCzQOwAMLDkwmmODAzMDVhBt4AAqEwBqExAQ/leo-messi.avif'
    },
    { 
      name: 'MESSI 4', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://s7d2.scene7.com/is/image/TWCNews/lionel_messi_AP23239056067210_ca_0904?wid=1250&hei=703&$wide-bg$'
    },
    { 
      name: 'MESSI 5', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-10/nba-plain--3a138067-ca08-4634-983f-43dc2d3dd29b.png?h=920929c4&itok=N6-zrn8W'
    },
    { 
      name: 'MESSI 6', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.directvsports.com/__export/1721236790735/sites/dsports/img/2024/07/17/messi_maximo_ganador.jpg_1309147466.jpg'
    },


    // Agrega más productos si es necesario
  ];

  // Opciones de visibilidad y desplazamiento para el carrusel
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 5,
      numScroll: 1
    }
  ];

  // Método para determinar la severidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';  // Severidad para "En Stock"
      case 'Out of Stock':
        return 'danger';   // Severidad para "Agotado"
      case 'Low Stock':
        return 'warning';  // Severidad para "Bajo stock"
      default:
        return 'info';     // Severidad por defecto
    }
  }
}
