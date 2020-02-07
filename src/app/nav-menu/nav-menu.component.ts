import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  isExpanded = false;
  opened = false;
  mobileQuery: MediaQueryList;

  fillerNav: any;

  fillerContent = Array.from({ length: 50 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const menuList = [
      {
        text: 'Submission Form',
        link: 'submission-form',
        icon: 'keyboard_arrow_right'
      },
  
      {
        text: 'Basic Settings',
        icon: 'settings_applications',
        SubList: [
          {
            text: 'Decision Labels',
            link: 'decision',
            icon: 'keyboard_arrow_right'
          }, {
            text: 'Status',
            link: 'status',
            icon: 'keyboard_arrow_right'
          },
          {
            text: 'Scheme',
            link: 'settings',
            icon: 'keyboard_arrow_right'
          }],

      },
      {
        text: 'User Settings',
        icon: 'people_alt',
        SubList: [{
          text: 'Sur Names',
          link: 'sur-name',
          icon: 'keyboard_arrow_right'
        }],

      },
      {
        text: 'Manage Users',
        icon: 'account_circle',
        SubList: [
          {
            text: 'Users',
            link: 'user',
            icon: 'keyboard_arrow_right'
          }
        ],
      },
    ];
    this.fillerNav = menuList;
  }
  collapse() {
    this.isExpanded = false;
  }
  close(event: any) {
    event.stopPropagation();
    if (event.target.tagName === 'MAT-SIDENAV-CONTENT') {
      this.sidenav.close();
    }
    if (event.target === event.currentTarget) {
      this.sidenav.close();
    }
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  changenavigation(event: any, nav: any) {
    event.preventDefault();
    const currentstatus = nav.showsubmenu;
    for (let i = 0; i < this.fillerNav.length; i++) {
      this.fillerNav[i].showsubmenu = false;
    }
    nav.showsubmenu = currentstatus === true ? false : true;
    return false;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}


