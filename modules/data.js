class Data{

      static getBitcoinData() {

          return fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/local')
          .then(
            (response) => {
              if (response.status !== 200) {
                console.log('It seems there is a problem. Status Code: ' +
                  response.status);
                return;
              }
              //if it works, this piece of code is returned
              return response.json();
            }

          )
          .catch((err) => {
            console.log('Catch Error :-S', err);
          });
      }

    }

    export default Data;
