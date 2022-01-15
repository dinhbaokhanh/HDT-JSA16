// B1
// var student = function student(name, age, address) { 
//     return { 
//         name: name,
//         age: age, 
//         address: address,
//     }; 
// };
// console.log(student("Khanh", 18, "Hanoi"))


//B2
// var smartPhones = [ 
//     { name: 'iphone', price: 649 }, 
//     { name: 'Galaxy S6', price: 576 }, 
//     { name: 'Galaxy Note 5', price: 489 } 
// ];
// console.log(smartPhones.map(function(smartPhone){
//     return smartPhone.price;
// }));

//B3
// let foo = (x,y,z) => console.log(x,y,z);

// let foo = () => alert('Hello');

// let foo = (a,b) => {
//     a + b*100
// }

//B4
// function clock(){
//     var timer = new Date();
//     var hour = timer.getHours();  
//     var minute = timer.getMinutes();  
//     var second = timer.getSeconds();  

//     if(hour < 10) {
//     hour = "0" + hour;
//     }
//     if(minute < 10) {
//     minute = "0" + minute;
//     }
//     if(second < 10) {
//     second = "0" + second;
//     }
//     document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
// }
// setInterval("clock()",1000);

    var timer = new Date();
    var hour = timer.getHours();  
    var minute = timer.getMinutes();  
    var second = timer.getSeconds();

