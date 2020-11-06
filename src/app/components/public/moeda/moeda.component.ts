import {
    Component,
    OnInit
} from '@angular/core';

import {
    MoedaService
} from 'src/app/services/public/moeda.service';

@Component({
    selector: 'app-moeda',
    templateUrl: './moeda.component.html',
    styleUrls: ['./moeda.component.css']
})
export class MoedaComponent implements OnInit {
    dolar: any; euro: any; libra: any; peso: any; bitcoin: any;
    constructor(private moedaService: MoedaService) { }
    ngOnInit(): void {
        this.getDolar();
        this.getEuro();
        this.getPeso();
        this.getLibra();
        this.getBitcoin();
    }
    getDolar(): any {
        return this.moedaService.dolar()
            .subscribe((resposta: any[]) => this.dolar = resposta);
    }
    getEuro(): any {
        return this.moedaService.euro()
            .subscribe((resposta: any[]) => this.euro = resposta);
    }
    getLibra(): any {
        return this.moedaService.libra()
            .subscribe((resposta: any[]) => this.libra = resposta);
    }
    getPeso(): any {
        return this.moedaService.peso()
            .subscribe((resposta: any[]) => this.peso = resposta);
    }
    getBitcoin(): any {
        return this.moedaService.bitcoin()
            .subscribe((resposta: any) => this.bitcoin = resposta);
    }
}
