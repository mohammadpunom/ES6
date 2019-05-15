import Lasagne from '../modules/Lasagne.js';
import { resolve } from 'url';

let lasagne = new Lasagne();
fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/local')
.then((response) => {response.json()
.then((body) => {
  
    // initial body
    console.log(body)
}
}