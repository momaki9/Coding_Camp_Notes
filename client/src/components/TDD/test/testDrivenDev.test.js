//Example tests
const MathFun = require("../testDrivenDev");

describe("MathFun", ()=> {
    describe("start", () => {
        it("should return an obj containing a number when called with the new keyword", () => {
            const obj = new MathFun();
            expect("number" in obj).toEqual(true);
        });
    });
    
});