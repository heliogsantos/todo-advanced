import { Router } from '@angular/router';

export class CheckUrl {
    constructor(public router: Router){}

    route: any;

    checkRouter(): string {
        this.router.events.subscribe(params => {
            this.route = params;
          });
        return this.route;
    }
}