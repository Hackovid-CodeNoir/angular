import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProducerService } from '../../../core/producer/producer.service';

@Component({
  selector: 'app-orchard-list',
  templateUrl: './orchard-list.component.html',
  styleUrls: ['./orchard-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrchardListComponent implements OnInit {
  public constructor(public producerService: ProducerService) {}

  public ngOnInit(): void {}
}
