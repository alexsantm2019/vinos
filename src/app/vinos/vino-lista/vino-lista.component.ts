import { Vino } from '../../model/Vino';
import { vinoService } from '../../services/vino.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, switchMap,
         distinctUntilChanged, startWith,
         share, merge } from 'rxjs/operators';
import { VinoCambioCantidad } from '../../model/Vino-cambio-cantidad';


@Component({
  selector: 'app-vino-lista',
  templateUrl: './vino-lista.component.html',
  styleUrls: ['./vino-lista.component.scss']
})
export class VinoListaComponent {

  public vinos$!: Observable<Vino[]>;
  public searchString: string = '';

  private searchTerms: Subject<string> = new Subject();
  private reloadListaVinos: Subject<void> = new Subject();

  constructor(private vinoService: vinoService) { }

  ngOnInit() {

    this.vinos$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.reloadListaVinos),
      switchMap(() => this.vinoService.getWinesService(this.searchString)),
      share()
    );

  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  onQuantityChange(change: VinoCambioCantidad) {
    this.vinoService.changeQuantityService(change.vino.id, change.changeInQuantity)
        .subscribe((res) => this.reloadListaVinos
        .next());
  }

  onCreate() {
    this.reloadListaVinos.next();
  }



}
