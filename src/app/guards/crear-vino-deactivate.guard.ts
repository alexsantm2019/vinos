import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
         CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { VinoNuevoComponent } from './../vinos/vino-nuevo/vino-nuevo.component';

@Injectable()
export class NuevoVinoDeactivateGuard
    implements CanDeactivate<VinoNuevoComponent> {
  canDeactivate(component: VinoNuevoComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm('Do you want to navigate away from this page?');
  }
}