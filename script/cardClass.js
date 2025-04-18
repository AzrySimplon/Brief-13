//class for every memory card created
export class Card {
    constructor(id, img) {
        this.id = id;
        this.img = img;
        this.isFaceUp = false;
        this.HtmlElement = null;
        this.isMatched = false;
    }
    //turns card
    turn() {
        this.isFaceUp = !this.isFaceUp;
        this.HtmlElement.classList.toggle('is-turned');
    }
    //define HtmlElement
    setHtmlElement(element) {
        this.HtmlElement = element;
    }
    //edit css when pair matches
    matches(){
        this.isMatched = true;
        this.HtmlElement.classList.add('is-matched');
        setTimeout(() => {
            this.HtmlElement.classList.add('is-hidden');
        }, 1500);
    }
}