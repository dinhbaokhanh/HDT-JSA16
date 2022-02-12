// let equation = (a,b) => {
//     let x = -b/a;
//     console.log(x);
// }
// equation(5,8)


let triangle = (x,y) => {
    let canh_huyen = Math.sqrt(x*x + y*y);
    console.log("Do dai canh huyen la" + canh_huyen);
    let h = (x*y)/canh_huyen;
    console.log("Duong cao la" + h);
    let B = Math.asin(x/canh_huyen);
    let C = Math.asin(x/canh_huyen);
    console.log("Do lon 2 goc la " + B + " va " + C);
}