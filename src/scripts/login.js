const emailInput = document.getElementById("email-box");
const passInput = document.getElementById("password-box");
const submitButton = document.getElementById("submit-box");

submitButton.addEventListener("click", () => {
    let email = emailInput.value;
    let pass = passInput.value;
    if(email == "Thomason" && pass == "password123") {
        console.log("Should redirect");
        window.location.href= "../../homepage.html";
    }
    else {
        window.alert("Invalid Credentials!");
    }
    
});

