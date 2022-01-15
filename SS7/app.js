// /*
// 1. Hằng số
// 2. Các biến và các hàm có phạm vi khối
// 3. Arrow Function (hàm mũi tên)
// 4. Các tham số mặc định
// 5. Các tham số còn lại
// 6. String templating
// 7. Thuộc tính đối tượng
// 8. Cú pháp xác định lớp chính thức (Lập trình hướng đối tượng).
// */

// // 1. Hằng số: const (ES6): Hằng số là các giá trị chỉ có thể xác định 1 lần duy nhất. (được gán 1 lần duy nhất)
// const Pi = 3.14;
// // Pi = "Đây là chuỗi được gán"; // Không được khai báo hằng số.
// // Khả thi hay không?

// // 2. Các biến và các hàm có phạm vi khối: var/let/
// // VD:
// {
//   let x = "hello";
//   {
//     let x = "world";
//     console.log("inner block, x = " + x); // world:

//     var y = "Hello world";
//   }
//   console.log("outer block, x = " + x); // hello

//   console.log(y); //
// }

// //// 3. Arrrow function (ham mui ten)

// // VD: hàm cơ bản: In ra Hello World;
// //C1
// function helloWorld() {
//   alert("Hello World");
// }

// // helloWorld();// cú pháp gọi hàm

// // Trong ES6:
// //C2:
// const helloWorld1 = function () {
//   alert("Hello World");
// };
// // helloWorld();
// // C3: Arrow function (nên dùng)
// let cong1 = (a) => a + 1; // KHai báo hàm cong1. Nó rất gọn.
// console.log(cong1(3)); // ?

// //  Viết lại dưới dạng hàm thường
// let cong2 = (a) => {
//   return a + 1;
// };
// console.log(cong2(5)); // => 6

// // VD: 
// [1,2,3,4,5,6].forEach(a=> console.log(a + " => " + a*a)); // Bình phương của từng số trong mảng
// // 1,4,9,16

//// 4. Các tham số mặc định

// let hamX = (a, b = 1) => a*b;
// console.log(hamX(2)); //2
// console.log(hamX(2,2)); //4

