import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    tabBadgeRoute: number;
    tabBadgeBooking: number;
    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = ContactPage;

    constructor() {
        this.tabBadgeRoute = 5
        this.tabBadgeBooking = 20
    }

    removeBadgeRoute() {
        console.log("clicked");
        this.tabBadgeRoute = 0;
    }
    removeBadgeBooking() {
        this.tabBadgeBooking = 0;
    }
}