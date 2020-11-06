import {
    Component
} from '@angular/core';

import {
    MoedaService
} from 'src/app/services/public/moeda.service';

@Component({
    selector: 'app-conversor',
    templateUrl: './conversor.component.html',
    styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

    inreais: any; indolares: any; ineuros: any; inlibras: any; inpesos: any; inbitcoins: any;
    dolar: any; euro: any; libra: any; peso: any; bitcoin: any;
    message: any = 'Permitido apenas numeros';

    constructor(moeda: MoedaService) {
        this.dolar = moeda.dolar().subscribe((r: any) => this.dolar = r);
        this.euro = moeda.euro().subscribe((r: any) => this.euro = r);
        this.libra = moeda.libra().subscribe((r: any) => this.libra = r);
        this.peso = moeda.peso().subscribe((r: any) => this.peso = r);
        this.bitcoin = moeda.bitcoin().subscribe((r: any) => this.bitcoin = r);
    }

    cotacao(moedas: any): any {for(const moeda of moedas){return moeda.ask;}}

    converterReal(valor: number): any {
        if (isNaN(valor)) {
            window.alert(this.message);
            this.clear();
        } else if (valor > 0) {
            const dolar = this.cotacao(this.dolar);
            this.indolares = (valor / dolar).toFixed(2);
            const euro = this.cotacao(this.euro);
            this.ineuros = (valor / euro).toFixed(2);
            const libra = this.cotacao(this.libra);
            this.inlibras = (valor / libra).toFixed(2);
            const peso = this.cotacao(this.peso);
            this.inpesos = (valor / peso).toFixed(2);
            const bitcoin = this.cotacao(this.bitcoin);
            this.inbitcoins = (valor / bitcoin).toFixed(7);
        } else {
            this.clear();
        }
    }

    converterDolar(valor: number): any {
        if (isNaN(valor)) {
            window.alert(this.message);
            this.clear();
        } else if (valor > 0) {
            const dolar = this.cotacao(this.dolar);
            this.inreais = (valor * dolar).toFixed(2);
            const euro = this.cotacao(this.euro);
            this.ineuros = ((valor * dolar) / euro).toFixed(2);
            const libra = this.cotacao(this.libra);
            this.inlibras = ((valor * dolar) / libra).toFixed(2);
            const peso = this.cotacao(this.peso);
            this.inpesos = ((valor * dolar) / peso).toFixed(2);
            const bitcoin = this.cotacao(this.bitcoin);
            this.inbitcoins = ((valor * dolar) / bitcoin).toFixed(7);
        } else {
            this.clear();
        }
    }

    converterEuro(valor: number): any {
        if (isNaN(valor)) {
            window.alert(this.message);
            this.clear();
        } else if (valor > 0) {
            const euro = this.cotacao(this.euro);
            this.inreais = (valor * euro).toFixed(2);
            const dolar = this.cotacao(this.dolar);
            this.indolares = ((valor * euro) / dolar).toFixed(2);
            const libra = this.cotacao(this.libra);
            this.inlibras = ((valor * euro) / libra).toFixed(2);
            const peso = this.cotacao(this.peso);
            this.inpesos = ((valor * euro) / peso).toFixed(2);
            const bitcoin = this.cotacao(this.bitcoin);
            this.inbitcoins = ((valor * euro) / bitcoin).toFixed(7);
        } else {
            this.clear();
        }
    }

    converterLibra(valor: number): any {
        if (isNaN(valor)) {
            window.alert(this.message);
            this.clear();
        } else if (valor > 0) {
            const libra = this.cotacao(this.libra);
            this.inreais = (valor * libra).toFixed(2);
            const euro = this.cotacao(this.euro);
            this.ineuros = ((valor * libra) / euro).toFixed(2);
            const dolar = this.cotacao(this.dolar);
            this.indolares = ((valor * libra) / dolar).toFixed(2);
            const peso = this.cotacao(this.peso);
            this.inpesos = ((valor * libra) / peso).toFixed(2);
            const bitcoin = this.cotacao(this.bitcoin);
            this.inbitcoins = ((valor * libra) / bitcoin).toFixed(7);
        } else {

            this.clear();
        }
    }

    converterPeso(valor: number): any {
        if (isNaN(valor)) {
            window.alert(this.message);
            this.clear();
        } else if (valor > 0) {
            const peso = this.cotacao(this.peso);
            this.inreais = (valor * peso).toFixed(2);
            const euro = this.cotacao(this.euro);
            this.ineuros = ((valor * peso) / euro).toFixed(2);
            const dolar = this.cotacao(this.dolar);
            this.indolares = ((valor * peso) / dolar).toFixed(2);
            const libra = this.cotacao(this.libra);
            this.inlibras = ((valor * peso) / libra).toFixed(2);
            const bitcoin = this.cotacao(this.bitcoin);
            this.inbitcoins = ((valor * peso) / bitcoin).toFixed(7);
        } else {
            this.clear();
        }
    }

    converterBitcoin(valor: number): any {
        if (isNaN(valor)) {
            window.alert(this.message);
            this.clear();
        } else if (valor > 0) {
            const bitcoin = this.cotacao(this.bitcoin);
            this.inreais = (valor * bitcoin).toFixed(2);
            const euro = this.cotacao(this.euro);
            this.ineuros = ((valor * bitcoin) / euro).toFixed(2);
            const dolar = this.cotacao(this.dolar);
            this.indolares = ((valor * bitcoin) / dolar).toFixed(2);
            const libra = this.cotacao(this.libra);
            this.inlibras = ((valor * bitcoin) / libra).toFixed(2);
            const peso = this.cotacao(this.peso);
            this.inpesos = ((valor * bitcoin) / peso).toFixed(2);
        } else {

            this.clear();
        }
    }

    clear(): void {
        this.inlibras = '';
        this.indolares = '';
        this.inreais = '';
        this.ineuros = '';
        this.inpesos = '';
        this.inbitcoins = '';
    }

}
