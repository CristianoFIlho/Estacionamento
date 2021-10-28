import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.services';
declare var $: any;
@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: any;
  novoVeiculo: any;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.novoVeiculo = {ocorrencia_id_ocorencia: ''};
    this.buscaVeiculo();
  }

  criaVeiculo() {
    this.service.criaVeiculo(this.novoVeiculo).subscribe((data: any) => {
      this.buscaVeiculo();
      this.showNotification('Veiculo Criado Com Sucesso', 'success')
    });
  }

  buscaVeiculo() {
    this.service.buscaVeiculos().subscribe((data: any) => {
      this.veiculos = data;
    });
  }

  showNotification(message, type){

    $.notify({
        icon: "notifications",
        message

    },{
        type: type,
        timer: 4000,
        placement: {
            from: 'top',
            align: 'rigth'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

}
