import { Vino } from '../../model/Vino';
import { vinoService } from '../../services/vino.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-wine-detail',
  templateUrl: './vino-detalle.component.html',
  styleUrls: ['./vino-detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VinoDetalleComponent implements OnInit {
  private vinoId: any = '';
  public vino!: Vino;

  constructor(
    private route: ActivatedRoute,
    private vinoService: vinoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.vinoId = this.route.snapshot.paramMap.get('id');
    this.vinoService
      .getWineByIdService(this.vinoId)
      .subscribe((response) => (this.vino = response));
  }

  goBack() {
    this.location.back();
  }
}
