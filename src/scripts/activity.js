
 
 
 async function getActivity(email) {
    const url = `http://localhost:3200/activity/${email}`;
    console.log(email);
    try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json["data"]);
            document.getElementById("user-points-display").textContent = `${json["data"]["points"]} pts`;
            document.getElementById("activities-counter").textContent = `${json["data"]["activities"]}`;
            document.getElementById("streak-counter").textContent = `${josn["data"]["streak"]}`;

    

        } 
    catch (error) {
        window.alert("Invalid Credentials!");
    }
 }
 



 let email = localStorage.getItem("email");
 getActivity(email);
 
 // Checkout functionality
 const pointsInput = document.getElementById("points-to-redeem");
 const redemptionDisplay =
     document.getElementById("redemption-amount");
 const redeemBtn = document.getElementById("redeem-btn");
 // Conversion rate: 100 points = $1.00 (i.e., each point = $0.01)
 const conversionRate = 0.01;

 pointsInput.addEventListener("input", () => {
     let pointsToRedeem = parseInt(pointsInput.value, 10) || 0;
     // Ensure points do not exceed available points
     if (pointsToRedeem > userPoints) {
         pointsToRedeem = userPoints;
         pointsInput.value = userPoints;
     }
     const redeemValue = (pointsToRedeem * conversionRate).toFixed(
         2
     );
     redemptionDisplay.textContent = `Redeem Value: $${redeemValue}`;
 });

 redeemBtn.addEventListener("click", () => {
     const pointsToRedeem = parseInt(pointsInput.value, 10) || 0;
     if (pointsToRedeem > 0 && pointsToRedeem <= userPoints) {
         // Simulate checkout process
         alert(
             `You have redeemed ${pointsToRedeem} points for $${(
                 pointsToRedeem * conversionRate
             ).toFixed(2)}!`
         );
         // Deduct redeemed points
         userPoints -= pointsToRedeem;
         updateUserPointsDisplay();
         // Reset input field and redemption display
         pointsInput.value = "";
         redemptionDisplay.textContent = "Redeem Value: $0.00";
     } else {
         alert("Please enter a valid number of points to redeem.");
     }
 });

 // Existing Activities and Modal Code (as provided)
 // Mock activities data
 const activities = [
     {
         id: 1,
         name: "Read a Book",
         points: 10,
         icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
     },
     {
         id: 2,
         name: "Exercise Session",
         points: 10,
         icon: '<path d="M18.285 18.285a2 2 0 0 1-2.285.715L5.714 15.714a2 2 0 0 1-1.429-1.429L1 4a2 2 0 0 1 .715-2.285A2 2 0 0 1 4 1l10.285 3.285a2 2 0 0 1 1.429 1.429L19 16a2 2 0 0 1-.715 2.285z"/>',
     },
     {
         id: 3,
         name: "Meditation",
         points: 10,
         icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/>',
     },
     {
         id: 4,
         name: "Arts & Crafts",
         points: 10,
         icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
     },
 ];

 // Function to create activity cards
 function createActivityCard(activity) {
     const template = document.getElementById(
         "activity-card-template"
     );
     const card = template.content.cloneNode(true);

     // Set activity name and points
     card.querySelector(".activity-name").textContent =
         activity.name;
     card.querySelector(
         ".activity-points"
     ).textContent = `+${activity.points} points`;

     // Set icon
     const iconContainer = card.querySelector(".activity-icon");
     const svg = document.createElementNS(
         "http://www.w3.org/2000/svg",
         "svg"
     );
     svg.setAttribute("viewBox", "0 0 24 24");
     svg.setAttribute("fill", "none");
     svg.setAttribute("stroke", "currentColor");
     svg.setAttribute("stroke-width", "2");
     svg.setAttribute("class", "w-6 h-6");
     svg.innerHTML = activity.icon;
     iconContainer.appendChild(svg);

     // Add click handler for submit proof button
     const submitButton = card.querySelector(".submit-proof-btn");
     submitButton.addEventListener("click", () =>
         openSubmitProofModal(activity)
     );

     return card;
 }

 // Render activity cards
 const activitiesContainer = document.querySelector(".grid.gap-4");
 activities.forEach((activity) => {
     activitiesContainer.appendChild(createActivityCard(activity));
 });

 // Modal handling
 const modal = document.getElementById("submit-proof-modal");
 const closeModal = document.getElementById("close-modal");
 const cancelSubmit = document.getElementById("cancel-submit");
 const fileUpload = document.getElementById("file-upload");
 const uploadArea = document.getElementById("upload-area");
 const previewArea = document.getElementById("preview-area");
 const previewImage = document.getElementById("preview-image");
 const removeImage = document.getElementById("remove-image");
 const confirmSubmit = document.getElementById("confirm-submit");
 const customActivityInput = document.getElementById(
     "custom-activity-input"
 );
 const activityNameInput = document.getElementById(
     "activity-name-input"
 );

 function openSubmitProofModal(activity, isCustom = false) {
     if (isCustom) {
         customActivityInput.classList.remove("hidden");
         document.getElementById("modal-activity-name").textContent =
             "Submit New Activity";
     } else {
         customActivityInput.classList.add("hidden");
         document.getElementById(
             "modal-activity-name"
         ).textContent = `Submit Proof - ${activity.name}`;
     }
     modal.classList.remove("hidden");
 }

 function closeSubmitProofModal() {
     modal.classList.add("hidden");
     resetUpload();
     activityNameInput.value = "";
 }

 function resetUpload() {
     fileUpload.value = "";
     previewArea.classList.add("hidden");
     uploadArea.classList.remove("border-primary");
     uploadArea.classList.remove("hidden");
     previewImage.src = "";
 }

 // Event listeners for modal
 closeModal.addEventListener("click", closeSubmitProofModal);
 cancelSubmit.addEventListener("click", closeSubmitProofModal);
 modal.addEventListener("click", (e) => {
     if (e.target === modal) closeSubmitProofModal();
 });

 // File upload handling
 fileUpload.addEventListener("change", (e) => {
     const file = e.target.files[0];
     if (file) {
         const reader = new FileReader();
         reader.onload = (e) => {
             previewImage.src = e.target.result;
             uploadArea.classList.add("hidden");
             previewArea.classList.remove("hidden");
         };
         reader.readAsDataURL(file);
     }
 });

 removeImage.addEventListener("click", resetUpload);

 // Drag and drop handling
 uploadArea.addEventListener("dragover", (e) => {
     e.preventDefault();
     uploadArea.classList.add("border-primary");
 });

 uploadArea.addEventListener("dragleave", (e) => {
     e.preventDefault();
     uploadArea.classList.remove("border-primary");
 });

 uploadArea.addEventListener("drop", (e) => {
     e.preventDefault();
     uploadArea.classList.remove("border-primary");

     const file = e.dataTransfer.files[0];
     if (file && file.type.startsWith("image/")) {
         fileUpload.files = e.dataTransfer.files;
         const event = new Event("change");
         fileUpload.dispatchEvent(event);
     }
 });

 // Submit handling for proof
 confirmSubmit.addEventListener("click", () => {
     if (
         customActivityInput.classList.contains("hidden") ||
         activityNameInput.value.trim()
     ) {
         // Simulate verification process
         confirmSubmit.textContent = "Verifying...";
         confirmSubmit.disabled = true;

         setTimeout(() => {
             closeSubmitProofModal();
             // Update points (in a real app, this would be handled by the backend)
             userPoints += 10;
             updateUserPointsDisplay();

             // If it's a custom activity, add it to the list
             if (!customActivityInput.classList.contains("hidden")) {
                 const newActivity = {
                     id: activities.length + 1,
                     name: activityNameInput.value.trim(),
                     points: 10,
                     icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
                 };
                 activities.push(newActivity);
                 activitiesContainer.appendChild(
                     createActivityCard(newActivity)
                 );
             }

             confirmSubmit.textContent = "Submit for Verification";
             confirmSubmit.disabled = false;
         }, 2000);
     }
 });

 // Initial update for user points display
 updateUserPointsDisplay();