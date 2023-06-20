import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenLinkService {

  openLink(enlace: string) {
    if(!enlace.includes('https')) enlace = 'https://'+ enlace
    window.open(enlace, "_blank"); 
  }

  constructor() { }
}
