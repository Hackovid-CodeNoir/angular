import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { markers } from './markers';

@Component({
  selector: 'app-product-map',
  templateUrl: './product-map.component.html',
  styleUrls: ['./product-map.component.scss'],
})
export class ProductMapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  lat = 41.387124;
  lng = 2.170037;
  map: google.maps.Map;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14,
    scrollwheel: false,
  };

  markers = markers;

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.markers.forEach((markerInfo) => {
      const marker = new google.maps.Marker({ ...markerInfo });
      marker.setMap(this.map);
    });
  }
}
