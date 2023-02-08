import { vinoService } from './../../services/vino.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Vino } from '../../model/Vino';
import { Router } from '@angular/router';

//Custom validator
export function NameVinoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    ['Laya', 'K-Naina', 'Verdejo', 'Monastrell'].includes(control.value)
      ? null
      : { wrongWineName: control.value };
}

@Component({
  selector: 'app-vino-nuevo',
  templateUrl: './vino-nuevo.component.html',
  styleUrls: ['./vino-nuevo.component.scss'],
})
export class VinoNuevoComponent {
  
  constructor(
    private formBuilder: FormBuilder,
    private vinoService: vinoService,
    private router: Router
  ) {
    this.createForm();
  }
 

  public message = '';
  public vino!: FormGroup;
  public RegEx =
    '^((?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?).(png|jpg|jpeg|gif|PNG|JPG|JPEG|GIF)$';
  public customFoodPairing = [
    {
      name: 'Embutidos',
      glutten: false,
      kcal: 600,
      vegan: false,
    },
    {
      name: 'Patés',
      glutten: false,
      kcal: 200,
      vegan: false,
    },
  ];

  @Output() private vinoCreado: EventEmitter<void> = new EventEmitter();



  ngOnInit(): void {}

  createForm() {
    this.vino = this.formBuilder.group({
      name: [
        null,
        // Validators.compose([Validators.required, NameVinoValidator()]),
        Validators.compose([Validators.required]),
      ],
      price: [
        null,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      imageUrl: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.RegEx),
        ]),
      ],
      isOnSale: [null],
    });
  }

  get f() {
    return this.vino.controls;
  }
  onlyNumber(event: any) {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
      // 46 is dot
      event.preventDefault();
    }
  }

  //Función para validar formulario en caso de hacer submit
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  createvino() {
    if (this.vino.valid) {
      //Añador al campo foodParing el array por defecto
      this.vino.value.foodPairing = this.customFoodPairing;

      const vino: Vino = this.vino.value;
      this.vinoService.createWineService(vino).subscribe(
        (res) => {
          this.message = 'vino successfully created.';
          console.log('Triggered event emitter');
          this.vinoCreado.next();
          this.goListavinos();
        },
        (err) => {
          this.message = 'Unable to create vino, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.vino); // llamado a función para validar una vez hecho Submit
      console.error('vino form is in an invalid state');
    }
  }

  goListavinos() {
    this.router.navigateByUrl('/vino/Lista');
  }
}
