import Data from './data.js';
import Common from './Common.js';

class Lasagne{

  constructor() {
    this.listBitcoinData();
  }

  async listBitcoinData() {

   let bitCoinData = await Data.getBitcoinData();

   let time = bitCoinData.time;
   let timeElement = Common.toDom(`<p>Pulled from: ${time}</p>`);


   for(let currency of Object.keys(bitCoinData.rates)){
     
     let iLoveLasagneElement = document.querySelector(".iLoveLasagne");
     let data = bitCoinData.rates[currency];


     console.log(currency);
     console.log(`Shows the rate: ${data.rate} and shows the name of the currency ${data.name}`);



     
       let listElement = Common.toDom(`
         <table class="mytable">

         <tr>
            <th style="width:50%; border-bottom:solid gray 1px;">${currency} (${data.name})</th>
            <td style="width:50%; border-bottom:solid gray 1px; padding-left:4vw;">${data.rate}</td>
         </tr>
         </table>
         `);

         iLoveLasagneElement.appendChild(timeElement);
       iLoveLasagneElement.appendChild(listElement);

    }


   }
  }
  export default Lasagne;
