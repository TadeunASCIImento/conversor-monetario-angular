import {
    Injectable
} from '@angular/core';

import {
    HttpClient
} from '@angular/common/http';

@Injectable()
export class MoedaService {

    constructor(private http: HttpClient) { }

    dolar(): any {
        return this.http
            .get<any>('https://economia.awesomeapi.com.br/json/USD');
    }

    euro(): any {
        return this.http
            .get<any>('https://economia.awesomeapi.com.br/json/EUR');
    }

    libra(): any {
        return this.http
            .get<any>('https://economia.awesomeapi.com.br/json/GBP');
    }

    peso(): any {
        return this.http
            .get<any>('https://economia.awesomeapi.com.br/json/ARS');
    }

    bitcoin(): any {
        return this.http
            .get<any>('https://economia.awesomeapi.com.br/json/BTC');
    }
}

