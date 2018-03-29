class PriseButton {
  constructor(x = 0) {
    this.x = x;
  }
  add(x){
    return this.x += 1;
  }
}

class Thumb extends PriseButton {
  constructor(x) {
    super(x);
  }
}
let a = new Thumb();