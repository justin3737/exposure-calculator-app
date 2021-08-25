const rewire = require("rewire")
const calculator = rewire("./calculator")
const Calculator = calculator.__get__("Calculator")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new Calculator()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
