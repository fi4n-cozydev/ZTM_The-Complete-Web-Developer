var name = "Billy";
if(name === "Billy") {
    alert("hi Billy!");
}
// hi Billy!

name = "Joe";
if(name === "Billy") {
    alert("hi Billy!");
}
// undefined

// ! ------------------------------------------------------
name = "John"
if(name === "Billy") {
    alert("hi Billy!");
} else {
    alert("hmm.. I don't know you");
}
// hmm.. I don't know you

// ! ------------------------------------------------------
name = "John"
if(name === "Billy") {
    alert("hi Billy!");
} else if (name === "John") {
    alert("hi John!");
} else {
    alert("hmm.. I don't know you");
}
// hi John!
