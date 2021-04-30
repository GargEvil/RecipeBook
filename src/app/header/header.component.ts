import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component} from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    isAuthenticated = false;
    isShown: boolean;
    userSub: Subscription;

    constructor(private dataService: DataStorageService,
                private authService: AuthService){}

    ngOnInit(): void {
        this.isShown = false;
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user// same as -> ? false : true;
        });
    }

    toggleShow() {
        this.isShown = ! this.isShown;
    }

    onSaveData(){
        this.dataService.storeRecipes();
    }

    onLogout(){
        this.authService.logout();
    }
    onLoadData(){
        this.dataService.fetchRecipes().subscribe();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}