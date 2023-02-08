import { Injectable } from '@angular/core';
import { vinoService } from './vino.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Vino } from '../model/Vino';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
    
    
export class VinoLoadResolverService implements Resolve<Vino> {

    private wineId: any = ""; 
    
  constructor(private vinoService: vinoService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Vino | Observable<Vino> | Promise<Vino> {
      
    this.wineId = route.paramMap.get('id');
    return this.vinoService.getWineByIdService(this.wineId);
    }

}