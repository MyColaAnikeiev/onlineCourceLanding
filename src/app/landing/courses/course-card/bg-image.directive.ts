import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBgImage]'
})
export class BgImageDirective {

  @Input('appBgImage') set imageSource(src: string){
    this.backgoundImage = 'url("' + src + '")'
  }

  @HostBinding('style.background-image') backgoundImage = 'none'

  constructor() { }

}
