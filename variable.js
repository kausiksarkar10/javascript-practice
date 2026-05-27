//const a=10;
//let b=20;
//var c=30;
//console.log(a);
//console.log(b);
//console.log(c); 

//const a=101; // Uncaught SyntaxError: Identifier 'a' has already been declared
//let b=21; // Uncaught SyntaxError: Identifier 'b' has already been declared
//var c=35; // No error, var allows redeclaration
//console.log(a); 
//console.log(b); 
//c//onsole.log(c); 
// we can reassign values to let and var but not to const
// a=100; // Uncaught TypeError: Assignment to constant variable.
// b=200; // No error, b is declared with let
// c=300; // No error, c is declared with var
//console.log(a); 
//console.log(b); 
//console.log(c);

//const -> Best practice
//let -> Use when you need to reassign values
//var-> scope issues, avoid using var in modern JavaScript development

if (true){
    let x=10;
    //x=12;
    console.log(x); 
}
