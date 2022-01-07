import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-deskop-ui',
  templateUrl: './deskop-ui.component.html',
  styleUrls: ['./deskop-ui.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class DeskopUIComponent implements OnInit {


  isFixedNavbar;
  @HostBinding('class.navbar-opened') navbarOpened = false;


  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F0F0';
  }
  ngOnInit() {

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10)
    {
      this.isFixedNavbar = true;
    }
    else
    {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar()
  {
    this.navbarOpened = !this.navbarOpened;
  }

}
