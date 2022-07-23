import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carteira } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  cartao: string = '';
  competenciaInicial: string = '';
  competenciaFinal: string = '';

  data!: Carteira;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  validateCartao(): boolean {
    return this.form?.controls.cartao?.touched
    && this.form?.controls.cartao?.value.length < 8
      ? true
      : false;
  }

  pesquisar() {

    if(this.form.valid){
      this.cartao = this.form.value.cartao;
      this.competenciaInicial = this.form.value.competenciaInicial;
      this.competenciaFinal = this.form.value.competenciaFinal
      this.apiService.getCarteira(this.cartao, this.competenciaInicial, this.competenciaFinal).subscribe( res => {
        this.data = res;

        console.log('res: ', res);

      })
    }
    console.log('form: ', this.form);
  }


}
