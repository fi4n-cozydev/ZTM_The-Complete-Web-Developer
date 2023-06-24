// root (window)
var fun = 5;
console.log("1", fun)

function A() {
    // change value of global variable
    fun = "Dojo Cat";
    console.log("2", fun);
}

function B() {
    // make a new local variable
    var fun = "Elon Musk";
    console.log("3", fun);
}
