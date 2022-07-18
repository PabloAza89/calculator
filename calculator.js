'use strict'

function Calculator() {
    this._firstNumber = false;
    this._secondNumber = 0;
    this._plus = false;
    this._minus = false;
    this._equal = 0
}

Calculator.prototype.number = function(number) {
    if (this._firstNumber === false && this._secondNumber === 0) return 0
    if (this._firstNumber === false && this._secondNumber !== 0) {
        let first = this._secondNumber
        let second = number
        let concat = first.toString() + second.toString()
        this._secondNumber = parseInt(concat, 10);
    }
    return this._secondNumber;
}

Calculator.prototype.plus = function() {
    if (!this._firstNumber && this._secondNumber === 0) return 'Error'
    this._plus = true
    return ' '
}

Calculator.prototype.minus = function() {
    if (this._minus = true) return ' '
}

Calculator.prototype.equal = function() {
    if (this._firstNumber === false && this._secondNumber === 0) return 0
    if (this._firstNumber === false && this._secondNumber !== 0) return this._secondNumber
    if (this._plus === true) {
        this._equal = this._firstNumber + this._secondNumber
        this._secondNumber = this._firstNumber + this._secondNumber
        this.plus === false
        return this._equal;
    }
    if (this._minus === true) {
        //this._secondNumber = this._firstNumber - this._secondNumber
        this._equal = this._firstNumber - this._secondNumber
        return this._equal;
    }
}

Calculator.prototype.clear = function() {
    this._firstNumber = false;
    this._secondNumber = 0;
    this._plus = false;
    this._minus = false;
    this._equal = 0;
    return 0
}

let qq =  new Calculator()
 console.log(qq.plus())
 console.log(qq.equal())
 console.log(qq.equal())
 console.log(qq.equal())
  console.log(qq.number(0)) 
  console.log(qq.number(0)) 
  console.log(qq.number(0)) 
  console.log(qq.number(0)) 
  console.log(qq.clear())
  console.log(qq.number(2)) 

//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.clear())
//  console.log(qq.clear())
//  console.log(qq.clear())
//  console.log(qq.plus())
//  console.log(qq.plus())
//  console.log(qq.clear())
//  console.log(qq.number(1)) 
//  console.log(qq.number(1)) 
//  console.log(qq.number(1))






//  console.log(qq.plus())
//  console.log(qq.number(3))
//  console.log(qq.equal())
//  console.log(qq.clear())
//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.number(13))
//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.number(13))
//  console.log(qq.number(13))
//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.clear())
//  console.log(qq.equal())
//  console.log(qq.equal())
//  console.log(qq.number(3))
//  console.log(qq.number(4))
//  console.log(qq.plus())
//  console.log(qq.number(1))
//  console.log(qq.equal())




















 





 
