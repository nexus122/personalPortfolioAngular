import { Component, Input } from '@angular/core';
import { OpenLinkService } from 'src/app/services/open-link.service';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss']
})
export class HeroComponentComponent {
  @Input() user?:any

  constructor(public openLinkService:OpenLinkService) { }      
  
}
