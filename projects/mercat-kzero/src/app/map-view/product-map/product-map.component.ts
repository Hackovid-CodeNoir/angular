import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { google } from 'google-maps';
import { mapStyles } from './map-styles';
import { producersMock } from '../../core/producer/producers-mock';

@Component({
  selector: 'app-product-map',
  templateUrl: './product-map.component.html',
  styleUrls: ['./product-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductMapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) public gmap: ElementRef;
  private lat = 41.387124;
  private lng = 2.170037;
  private map: google.maps.Map;
  private coordinates = new google.maps.LatLng(this.lat, this.lng);
  private mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
    scrollwheel: false,
    gestureHandling: 'cooperative',
    styles: mapStyles
  };

  private producers = producersMock;

  public ngAfterViewInit(): void {
    this.mapInitializer();
  }

  private mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    const icon = 'assets/icons/kzero-pin.png';
    this.producers.forEach((producer) => {
      const marker = new google.maps.Marker({ ...producer, icon });
      marker.addListener('click', (_) => this.onMarkerClick(producer));
      marker.setMap(this.map);
    });
  }

  private onMarkerClick(producer): void {
    console.log(producer);
  }
}
