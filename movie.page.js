import { Page } from './page';

class movieePage extends Page {

    get movieSelection() { return browser.element('#27993-cinepolis-san-pedro-pie-pequeno'); }
    

    scrollToHotel(movie) {
        const movieSelection = this.movieSelection
        if (movie >= movieSelection.length || movie < 0) throw 'Hotel is out of range'
        /super.scrollTo(movieSelection[movie]);
    }

}

export default new movieePage();

