// alert filling the form
var once = false;
function caution(){
    if(once == false) {
        alert('Please fill out the form!');
        once = true;
    }
};


let users = [];

// Nen co dong nay.
if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify(users))
}


// LocalStorage: luu tru duoi dang String (chuoi)
// if(localStorage.getItem("users"));


const signUp = document.getElementById("sign-up");
signUp.addEventListener("submit", (event) => {
    event.preventDefault();
  // dung de chan su kien reload mac dinh cua trinh duyet
    const data = {
        email: signUp.email.value,
        password: signUp.password.value
    }
    console.log(data);
  // LAY DL tren localStorage ve
    let getUsersOnLocalStorage = JSON.parse(localStorage.getItem("users"));
    getUsersOnLocalStorage.push(data);
    localStorage.setItem('users', JSON.stringify(getUsersOnLocalStorage))

    signUp.email.value = ""
    signUp.password.value = ""


  // windows.location.href = '../signIn.html'
    window.location.href = "https://github.com/dinhbaokhanh/HDT-JSA16/blob/main/Project-cu%E1%BB%91i-kh%C3%B3a/login.html";
})