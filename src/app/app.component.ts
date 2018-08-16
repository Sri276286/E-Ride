import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  isLoggedIn = false;

  constructor(private elementRef: ElementRef,
    private _router: Router) { }
  ngOnInit() {

  }
  /**
   * login event goes here
   */
  onLoginClick() {
    this._router.navigate(['/login']);
  }
  /**
   * tab click event
   */
  onTabClick(el: HTMLElement, tabName: string) {
    if (!el.classList.contains('active')) {
      this.setActiveTab(el);
      this._router.navigateByUrl(tabName);
    }
  }

  ngAfterViewInit() {
    this.setActiveTab();
  }
  /**
   * sets active tab
   */
  setActiveTab(el?: HTMLElement) {
    if (el) {
      this.removeActive();
      el.classList.add('active');
    } else {
      this.elementRef.nativeElement.querySelector('.tabs span').classList.add('active');
    }
  }
  /**
   * removes existing active app
   */
  removeActive() {
    let nativeEl: HTMLElement = this.elementRef.nativeElement.querySelector('.tabs .active');
    if (nativeEl) {
      nativeEl.classList.remove('active')
    }
  }
}
