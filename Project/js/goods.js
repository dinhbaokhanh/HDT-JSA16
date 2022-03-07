// sildeshow

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

// set option
function sel(id) {
    var divs = document.getElementById('container').getElementsByTagName('label');  //get all divs from div called container
    for(var i = 0; i<divs.length;  i++) {
        if(divs[i] != id) {  
            divs[i].className='options';
        }
    }
    id.className='selected-option';  
}

// quantity
function decrease(){
  var textBox = document.getElementById("quantity-input");
    if (textBox.value > 1 ) {
        textBox.value--;
  }
}
function increase(){
    var textBox = document.getElementById("quantity-input");
    textBox.value++;  
} 


// Modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("cart");
let success_card = document.getElementsByClassName("success-card")
let close = document.getElementsByClassName("close")[0];
let close_footer = document.getElementsByClassName("close-footer")[0];
let order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
order.onclick = function () {
    alert("Thank you for your payment !")
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
    let button = remove_cart[i]
    button.addEventListener("click", function () {
        let button_remove = event.target
        button_remove.parentElement.parentElement.parentElement.remove()
    })
}

function updatecart() {
    let cart_item = document.getElementsByClassName("cart-items")[0];
    let cart_rows = cart_item.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cart_rows.length; i++) {
        let cart_row = cart_rows[i]
        let price_item = cart_row.getElementsByClassName("cart-price")[0]
        let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        let price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
        let quantity = quantity_item.value // lấy giá trị trong thẻ input
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VND'
   
}

