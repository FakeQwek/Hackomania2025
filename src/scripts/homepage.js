
async function getUsers(){
    const url = "http://localhost:3200/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();

          console.log("Beginning of stuff");
          for(let i = 0; i < json["data"].length; i++) {
            console.log(json["data"][i]);
            creatorsGrid.appendChild(createCreatorCard(json["data"][i]));
          }
       
        } 
        catch (error) {
          console.error(error.message);
        }
}

getUsers();

// Function to format currency
function formatCurrency(amount) {
    return `$${amount.toLocaleString()}`;
}

// Function to create creator cards
function createCreatorCard(creator) {
    const template = document.getElementById(
        "creator-card-template"
    );
    const card = template.content.cloneNode(true);

    // Set image and alt text
    const img = card.querySelector("img");
    img.src = creator.image;
    img.alt = creator.name;

    // Set name and description
    card.querySelector("h3").textContent = creator.name;
    card.querySelector("p").textContent = creator.description;

    // Set progress bar
    card.querySelector(".raised").textContent = formatCurrency(
        creator.raised
    );
    card.querySelector(".goal").textContent = formatCurrency(
        creator.goal
    );
    console.log(creator.raised + " " + creator.goal);
    const percentage = Math.min(
        (creator.raised / creator.goal) * 100,
        100
    );
    console.log(percentage);
    card.querySelector(
        ".progress-bar"
    ).style.width = `${percentage}%`;

    // Set supporters
    card.querySelector(".supporters").textContent =
        creator.supporters;

    // Add click handler to support button
    const supportButton = card.querySelector("button");
    supportButton.addEventListener("click", () => {
        window.location.href = `/fund/${creator.id}`;
    });

    return card;
}

// Render creator cards
const creatorsGrid = document.getElementById("creators-grid");