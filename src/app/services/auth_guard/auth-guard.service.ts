import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminService } from '../admin.service';


@Injectable()
export class AuthGuardService implements CanActivate{
    
    constructor(private adminService: AdminService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

        if(this.adminService.getUserAuthStatus() === false){
            this.router.navigate(['/admin']);
            return false;
        }
        return true;
    }
    
}