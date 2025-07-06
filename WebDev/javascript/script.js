// //var let const
// var a=13; //
// var a;
// a=15; //var
// //declaration and initialization
// var a;//declare karna
// var a=15; //decare and initialize


// //variable is a functional scope
// //window mein me add hota hai
// //function scoped hota hai
// //aap firse declare kr skte and error will not come
// //same name se

// var a=19;
// var a=30;

// //use let always for secure 
// //const-when you know don't need to change the value in future then you can use const
// var a=18;
// let a=90;

// // function abcd(){//fucntion scope
// //     if(true){
// //         var a=19;
// //     }
// // }

// //scope(gloabl,block,functional)
// var a=19; //aesa variable jo kisi bhi curly bracket ke ander nhi hai this is called global varible
// {
//     //block 
//     //eske ander var this is called as block scope
//     let a =19;//let= block scope
// }

// function abcd(){
//     if(true){
//         let a=19;
//     }
// }

// //reassignment redeclaration
// var a=18;
// a=90;

// let b=89;
// b=70;//reassignment;
// //redeclaartion is possible with var but redeclaration is not possible with let

// //temproal dead zone: utna area jitna main js ko pta toh hai ki variable access krta hai but wo aapko acces nhi de skta 

// console.log(c);
// let c=90;

//hoisting impact per type
//hoisting->ek variable ko jab js me banante hai to wo varaible do hisse me tut jata hai and uska declare part uper chla  jata hai and uska initialization part niche reh jata hai.
//hoisting tino (let var const)me hoti hai
var name="beauty"
//pehla hissa declare part
var name=undefined;
//dushra hisssaa initialization part
name="beauty";

// var->hoist->undefined
// let->hoist->novalue does setInterval.
// const->hoist-> no value set undefined


//pratice
//Q1:
console.log(nm);
var nm="Harsh"; //undefined



