// kiem tra xem co local storage ko
// if (typeof (Storage) !== 'undefined'){
//     alert("yes, this browser have it")
// }
// else {
//     alert("no, it isn't");
// }

///// Khởi tạo storage
//C1:
localStorage.setItem('key', ' ổ khóa nhé');
//C2:
localStorage.test = "Lưu trữ thành công với cách 2"
//      test: key, value: ,.... chuỗi bên trên

// VD: từ khóa NTH: giá trị đi kèm là: Teacher of HDT-JSA16

//// Sử dụng Local Storage
//C1
localStorage.NTH = "Teacher of HDT-JSA16";
console.log(localStorage.getItem("NTH"));

// VD: lưu trữ CMTND
localStorage.setItem("123457689", "Nguyễn Trung Hiếu, số tiền gửi là: 100 tỷ đồng, Quê quán HN, Nghề Nghiệp, Giám Đốc MindX");


////// Sử dụng Local Storage
// C1:
localStorage.getItem("123457689");
console.log(localStorage.getItem("123457689"));// 

// C2:
localStorage.NTH
console.log(localStorage.NTH);

//// Xóa Local Storage
localStorage.removeItem("NTH")
