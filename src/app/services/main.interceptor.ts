import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MainInterceptor implements HttpInterceptor{

    constructor(private adminService: AdminService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = this.adminService.getLocalStorage().token;

        let request = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + token) 
        })
        return next.handle(request);
    }

}