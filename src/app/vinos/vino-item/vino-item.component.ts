import { VinoCambioCantidad } from './../../model/Vino-cambio-cantidad';
import { Vino } from '../../model/Vino';
import { vinoService } from '../../services/vino.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
@Component({
  selector: 'app-vino-item',
  templateUrl: './vino-item.component.html',
  styleUrls: ['./vino-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinoItemComponent implements OnInit {

   // Recibe el parámetro "wine"
  @Input() public vino!: Vino;

  // Envia el parámetro al padre
  @Output() public quantityInCart: EventEmitter<VinoCambioCantidad> = new EventEmitter();

  constructor(private vinoService: vinoService, private router: Router) { }

  incrementInCart() {
    this.quantityInCart.emit({ vino: this.vino, changeInQuantity: 1 });   
  }

  decrementInCart() {
    if (this.vino.quantityInCart > 0) {
      this.quantityInCart.emit({ vino: this.vino, changeInQuantity: -1 });
    }
  }

  goToWineDetail(id: number) {
    this.router.navigate(['/vino/Detalle/' + id]);
  }

  ngOnInit(): void { }

}

