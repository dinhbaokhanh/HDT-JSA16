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

