// using alert
// alert("I'm Javascript!");

// let admin, name, str;

// name = `John`;
// admin = name;
// str = `Hi I am the admin here and my name is ${admin}`;

// alert(str);
// alert(9007199254740991 + 3);


// using confirm and prompt
// let isEligible = confirm("Are you 18 or older?");

// if(isEligible) {
//     let age = prompt("What is your age?", "18");
//     if(age!=undefined) alert(`Welcome!`);
// }
// else {
//     alert("Sorry, you're not eligible to view this website");
// }


// Type conversion
// let s = "1234";
// alert(Number(s));
// alert(Boolean(s));
// s+='z';
// alert(`${s} : To number becomes - ${Number(s)}`);
// s="";
// alert(Boolean(s));
// let isTrue = true;
// alert(Number(isTrue));
// alert(String(isTrue));


// If else construct
// let result = prompt("What is the official name of Javascript?");
// result == "ECMAscript" ? alert("Right.") : alert("You don't know? It's ECMAscript.");


let n = prompt("Enter a number");
if(n==0) {
    alert(0);
}
else if(n>0) {
    alert(1);
}
else if(n<0) { 
    alert(-1);
}