import { Component, Input } from '@angular/core';
import { OpenLinkService } from 'src/app/services/open-link.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() repo:any
  constructor(public openLinkService:OpenLinkService) { }
}
