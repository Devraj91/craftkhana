import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    constructor() { }

    getMenus() {
        //This could be a service call for dynamic menus
        return [
            { id: 0, text: 'Utilities ', name: 'Utilities', url: '/utilities' },
            { id: 1, text: 'Jewellery', name: 'Jewellery', url: '/jewellery' },
            { id: 2, text: 'Home Decor', name: 'Home Decor', url: '/decor' },
            { id: 3, text: 'Bags and Purses', name: 'Bags and Purses', url: '/bags' },
            { id: 4, text: 'Yoga Section', name: 'Yoga Section', url: '/dashboard' },
        ];
    }

}
