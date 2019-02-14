class Vec {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    //Function in class (a + a and b + b)
    plus(tweede){
        return new Vec(this.a + tweede.a , this.b + tweede.b);
    }
    //Function in class (a - a and b - b)
    minus(tweede){
        return new Vec(this.a - tweede.a , this.b - tweede.b);
    }
    //Function in class (a * a + b * b)
    //with sqrt the system is going to return the square root of the number
    //get is used instead of length()
    get length(){
        return Math.sqrt(this.a * this.a + this.b * this.b);
    }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length;
//// → 5

