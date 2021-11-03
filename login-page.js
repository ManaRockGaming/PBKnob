const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //<html oncontextmenu="return false"> 
    //</html>

    

    if (username === "freshman" && password === "guest1") {
        alert("You have successfully logged in.");
        window.open('https://www.pbknob.com/PBHome.11022021.html','_blank').focus();
        //window.open('https://www.pbknob.com/PBHome.11022021.html','_blank').focus();
    }
    if (username === "sophmore" && password === "guest2") {
        alert("You have successfully logged in.");
        window.open('https://www.pbknob.com/PBHome.11022021.html','_blank').focus();
    }
    if (username === "junior" && password === "guest3") {
        alert("You have successfully logged in.");
        window.open('https://www.pbknob.com/PBHome.11022021.html','_blank').focus();
    }
    if (username === "senior" && password === "guest4") {
        alert("You have successfully logged in.");
        window.open('https://www.pbknob.com/PBHome.11022021.html','_blank').focus();
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})