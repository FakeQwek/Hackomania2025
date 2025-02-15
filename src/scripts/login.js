const emailInput = document.getElementById("email-box");
const passInput = document.getElementById("password-box");
const submitButton = document.getElementById("submit-box");
localStorage.clear();
async function login(email) {
    const url = `http://localhost:3200/user/${email}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          localStorage.setItem("email", email);
          window.location.href = "./homepage.html";

        } 
    catch (error) {
        window.alert("Invalid Credentials!");
    }
}




submitButton.addEventListener("click", () => {
    let email = emailInput.value;
    let pass = passInput.value;
    login(email);
    /*
    if(email == "Thomason" && pass == "password123") {
        console.log("Should redirect");
        window.location.href= "../../homepage.html";
    }
    else {
        window.alert("Invalid Credentials!");
    }
    */
    
});

