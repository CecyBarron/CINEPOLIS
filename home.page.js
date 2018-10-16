import { Page } from './page';

class HomePage extends Page {

    get searchCity()  { return browser.element('#uniform-cmbCiudades'); }
    get searchCine() { return browser.element('#uniform-cmbComplejos'); }
   
    checkMovies(moviesList) {
        let i = 0;
        let a = browser.getAttribute(".descripcion", "id");
        for (i = 0; i < a.length; i = i + 1) {
          //let id = movies[i].ELEMENT;
          let selectorA;
          let j = 1;
          console.log(a[i]);
          while (true) {
            selectorA = `//*[@id=\"${a[i]}"]/div/div/div[2]/time[${j}]`;
            if (browser.isExisting(selectorA)) {
              let hora = browser.getText(selectorA);
              console.log(hora);
              j++;
            } else {
              break;
            }
          }
        }
      }


}
    
export default new HomePage();
