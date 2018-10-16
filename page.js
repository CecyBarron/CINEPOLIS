export class Page {

    constructor() {
        this.url = 'http://www.cinepolis.com/#';
    }

    open(path = '') {
        browser.url(this.url + path);
        browser.pause(8000);
    }

    scrollTo(element) {
        browser.execute( (y) => {
            window.scrollTo(0, Number(y));
        }, element.getLocation('y'));
    }

    maximize() {
        browser.windowHandleFullscreen();
    }

}
