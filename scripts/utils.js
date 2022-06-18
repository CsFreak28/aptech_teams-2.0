export default class AddToolTip {
  constructor(elements) {
    this.elements = [...elements];
    this.container = document.createElement("div");
  }
  addToolTip() {
    console.log(this.elements)
    this.elements.forEach((elem) => {
        console.log(elem)
        elem.addEventListner('click',()=>{})
    });
  }
  showToolTip(e) {
    console.log(e);
  }
}
