var num1 = prompt("enter first number");
var num2 = prompt("enter second number");
var result = Number(num1) + Number(num2);

switch(result){
    case 5:
        alert(num1 + "+" + num2 + " : " + result);
        break;
    case 6:
        alert(num1 + "+" + num2 + " : " + result);
        break;
    default:
        alert("result not equal 5 or 6");
        //
}