function Hero(image, top, left, width, height) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.height = height;
    this.width = width;

    this.getHeroElement=function () {
        return '<img width="'+ this.width + '"' +

            ' height="'+ this.height + '"' +

            ' src="' + this.image +'"' +

            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left +=2;
    };
    this.moveLeft = function () {
        this.left -=2;
    };
    this.moveUp = function () {
        this.top -=5;
    };
    this.moveDown = function () {
        this.top +=5;
    };
}
let hero = new Hero("star.png",0,0,200,250);
console.log(window.innerHeight);
console.log(window.innerWidth);
function start() {
    if (hero.left < (window.innerWidth - hero.width) && hero.top === 0 ){
        hero.moveRight();
    }
    if (hero.left === (window.innerWidth - hero.width) && (hero.top <window.innerHeight -hero.height) ){
        hero.moveDown();
    }
    if (hero.top === (window.innerHeight - hero.height) && hero.left > 0 ){
        hero.moveLeft();
    }
    if (hero.left === 0 && hero.top > 0 ){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start,10)
}

start();