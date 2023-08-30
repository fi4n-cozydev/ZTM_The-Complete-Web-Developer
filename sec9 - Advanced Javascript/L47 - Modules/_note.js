//*--------------------------------------------------------------------------------
//todo: IIFE
//*--------------------------------------------------------------------------------

// js1 first file load
var myApp = {}

// js2
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

// jQuery use this: allow us to use $

//*--------------------------------------------------------------------------------
//todo: CommonJS + Browserify */ --> Module bundle
//*--------------------------------------------------------------------------------

// js1 
module.exports = function add(a, b){
    return a+b;
}

// js2 -> assuming the js1 file is called add.js
var add = require("./add");

//*--------------------------------------------------------------------------------
//todo: ES6 + Webpack2
//*--------------------------------------------------------------------------------

// js1
export const add = (a, b) => a + b;  // use -->  import { add } from './add';
// or
export default function add() {      // use -->  import add from './add';
    return a+b;
}


// js2
import { add } from './add';
// or
import add from './add';