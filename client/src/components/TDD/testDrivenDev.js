function MathFun(number = 0) {
    this.number = number;
}

MathFun.prototype.plus = function(num = 0) {
    const newNum = this.number + num;
    return new MathFun(newNum);
};

MathFun.prototype.minus = function(num = 0) {
    const newNum = this.number - num;
    return new MathFun(newNum);
}

MathFun.prototype.value = function() {
    return this.number;
};

module.exports = MathFun;