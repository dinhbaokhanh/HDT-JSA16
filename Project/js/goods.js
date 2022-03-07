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
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var success_card = document.getElementsByClassName("success-card")
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
//Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
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

var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i]
    button.addEventListener("click", function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.parentElement.remove()
    })
}

function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_item = cart_row.getElementsByClassName("cart-price")[0]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
        var quantity = quantity_item.value // lấy giá trị trong thẻ input
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VND'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}