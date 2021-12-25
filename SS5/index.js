// ôn js

 ///các kiểu dữ liệu cơ bản trong js
 /*  
  - Number: số                  //123
  - String: chuỗi               // "Hi"   
  - Boolean: True/False         // true false
  - Object: đối tượng           // {}
  - Null: Null                  // null
  - undefined: không xác định   // undefined
*/

//////// Khai báo biến trong js (biến dùng để lưu trữ giá trị)

// Khai báo biến: let/var/const

let a = 1;
var b = 2;
const Pi = 3.14;

///////// toán tử trong js
/*
    Toán tử số học: +, -, *, /
    Toán tử gán: = (thay thế giá trị cho biến)

    Toán tử so sánh: >, <, >= , <=, =, ==
*/

///// VD: toán tử số học:
let add = 1 + 2;
let divide = 1 / 2;
console.log(add);

///// VD: toán tử so sánh

/////////////// Câu điều kiện trong JS
/* 
Kiểm tra điểm thí sinh đạt được trong kỳ thi c3
- lớp chọn: >8đ
- lớp khá: >6.5đ
- lớp thường: >5đ
- lớp bổ trợ: <5đ
- ko nhân học sinh :0đ
*/

// khai báo biến điểm

let diemToan = 7;
if (diemToan > 8) {
    console.log('Đủ vào lớp chọn')
} 
else if(diemToan > 6.5) {
    console.log('đủ vào lớp khá')
}
else if(diemToan > 5) {
    console.log(" vào lớp thường nhé")
}
else if(diemToan == 0){
    console.log('học lại đi :v')
}
else {
    console.log('vào lớp bổ trợ em nhé')
}


////// Vòng lặp trong Js: while, do - while, for
/*
in ra các số từ 0 -> 10
*/



// logic: kiểm tra đk (đúng) -> chạy code bên trong -> về lại ktra đk
// lưu ý: khi nào ktra đk (sai) -> thoát khỏi loop
// điều kiện dừng: dùng để dừng loop

// while (i < 10) {
//     
// }

// do - while

// do {
//     console.log(i);
//     i = i + 1;
// }
// while ( i <= 10 );

// let i = 0;
// for(;i <= 10;){
//     console.log(i);
//     i = i + 1
// }


/*
for :
- con1: truyền biến vô
- con2: đk dừng
-con3: câu lệnh thực hiện sau khi kết thúc
*/

// let i;
// for (i = 0; i <= 10 ; i++) {
//     console.log(i);

// }

// khai báo mảng
let arr = [];
// kiểm tra xem kiểu dữ liệu có phải mảng ko
console.log(
    Array.isArray(arr)
);

let animals = ['dog', 'cat', 'fish'];
console.log(animals)

////// thao tác với mảng: CRUD (create,read,update,delete)
//// thêm phần tử vào cuối mảng: push
// thêm phần tử: "snake" vào cuối mảng và in ra:
animals.push('snake');
console.log('Mảng sau khi thêm snake vô cuối :' + animals);

/// Read arr
console.log(animals);

/// U: Update: Sửa thành phần trong mảng (biết vị trí phần tử muốn sửa)
animals[0] = 'chicken';
console.log('Mảng sau khi sửa vị trí đầu :' + animals);

/// D: delete: xóa thành phần trong mảng: (biết vị trí muốn xóa ở đâu)
/*
- con1: chọn vị trí trong mảng
- con2: xóa mấy phần tử từ vị trí đã chọn
- con3: thêm mấy phần vào vị trí đã chọn
*/
animals.splice(1, 1);
console.log('Mảng sau khi xóa cat là : ' + animals)

// bài toán đặt ra: là thế nào để timg phần tử
// dùng array.indexOf(...) để tìm kiếm và trar về vị trí của chúng
let snakeIndexInAnimals = animals.indexOf('snake')
console.log("Vị trí của snake trong mảng là " + snakeIndexInAnimals)

///////// Yêu cầu xóa phần tử "snake" và thay thế bằng "anaconda"
// C1: dùng phép gán
// animals[snakeIndexInAnimals] = 'anaconda'
// console.log('Mảng sau khi xóa snake và thay băng anaconda là ' + animals);

// C2 : dùng splice
animals.splice(snakeIndexInAnimals, 1, 'anaconda')
console.log('Mảng sau khi xóa snake và thay băng anaconda là ' + animals);