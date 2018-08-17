import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFullScreen]'
})
export class FullScreenDirective {
  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    console.log(event, (event.target as HTMLElement).parentElement);
  }
}
