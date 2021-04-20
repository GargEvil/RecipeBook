import { Component} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    isShown: boolean;

    ngOnInit(): void {
        this.isShown = false;
    }

    toggleShow() {
        this.isShown = ! this.isShown;
      }


}