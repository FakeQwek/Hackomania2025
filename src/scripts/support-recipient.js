// State management
const state = {
    view: "donor",
    donationType: "one-time",
    donationAmount: 25,
    milestones: [
        { amount: 500, title: "First counseling session", achieved: true },
        { amount: 1000, title: "Digital detox workshop", achieved: false },
        { amount: 2000, title: "3-month support program", achieved: false },
    ],
};

// Function to create a card
function createCard(title, content, extraClass = "") {
    const card = document.createElement("div");
    card.className = `bg-white rounded-lg shadow-lg p-6 w-full max-w-md ${extraClass}`;
    card.innerHTML = `<h2 class="text-lg font-semibold mb-4">${title}</h2>${content}`;
    return card;
}

// Function to render donor view
function renderDonorView() {
    const container = document.createElement("div");
    container.className = "flex justify-center items-start min-h-screen w-full"; // Center content

    // Center Column (Profile & Support Cards)
    const centerColumn = document.createElement("div");
    centerColumn.className = "flex flex-col items-center gap-6 w-full max-w-lg"; // Center & set width

    // Profile Card
    const profileCard = createCard(
        "Sarah's Recovery Journey",
        `
        <img src="/api/placeholder/300/200" alt="Profile" class="w-full h-48 object-cover rounded-lg">
        <p class="mt-4">Working to overcome gaming addiction and rebuild real-world connections.</p>
        <ul class="mt-4 space-y-2">
            <li>Member since Jan 2024</li>
            <li>45 supporters</li>
            <li>15-day streak</li>
        </ul>
    `
    );

    // Append both cards into the center column
    centerColumn.appendChild(profileCard);

    // Right Sidebar (Journey Progress) - **Now Smaller**
    const sidebar = document.createElement("div");
    sidebar.className =
        "fixed right-0 top-[80px] h-[calc(100vh-80px)] w-[12rem] min-w-[16rem] shadow-lg p-3 flex flex-col items-start bg-white mr-5"; // Reduce width properly

    sidebar.innerHTML = `
        <h2 class="text-lg font-semibold mb-2">Journey Progress</h2>
        <div class="flex justify-between text-sm mb-2 w-full">
            <span>$750 raised</span>
            <span>Goal: $2000</span>
        </div>
        <div class="bg-gray-200 h-2 w-full rounded-full mb-4">
            <div class="bg-blue-500 h-full rounded-full" style="width: 37.5%"></div>
        </div>
        <h3 class="text-sm font-medium mb-2">Milestones</h3>
        <div class="flex flex-col gap-2 w-full">
            ${state.milestones
                .map(
                    (m) => `
                <div class="p-2 rounded-lg border w-full ${
                    m.achieved
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                }">
                    <span class="text-sm">$${m.amount} - ${m.title}</span>
                </div>
            `
                )
                .join("")}
        </div>
    `;

    // Append both columns to the container
    container.appendChild(centerColumn);
    container.appendChild(sidebar);

    // Insert into main content
    document.getElementById("mainContent").innerHTML = "";
    document.getElementById("mainContent").appendChild(container);
}

// Function to render
function render() {
    renderDonorView();
}

// Initial render
render();
