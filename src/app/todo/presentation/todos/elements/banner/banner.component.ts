import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BannerService } from '../../../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  subscription!: Subscription;

  // Text de la banniere  
  titleBannerTexte: string = 'ma super Todo';

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.changeBannerText(this.titleBannerTexte);
    this.subscription = this.bannerService.currentMessage.subscribe(message => this.titleBannerTexte = message);
  }
}
