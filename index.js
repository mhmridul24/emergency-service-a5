

//  Navbar default values
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Get elements from Navbar
let heartCountElement = document.querySelectorAll("nav .font-bold")[1]; 
let coinCountElement = document.querySelectorAll("nav .font-bold")[2]; 
let copyCountElement = document.querySelector("nav button span"); 

// Call History Section
let historyList = document.createElement("ul");
let historySection = document.querySelector(".col-span-2");
historySection.appendChild(historyList);

// heart button
let allHearts = document.querySelectorAll(".fa-heart");
for (let i = 0; i < allHearts.length; i++) {
    allHearts[i].addEventListener("click", function () {
        heartCount = heartCount + 1;
        heartCountElement.innerText = heartCount;
    });
}

//  COPY BUTTON 
let allCopyButtons = document.querySelectorAll(".fa-copy");
for (let i = 0; i < allCopyButtons.length; i++) {
    allCopyButtons[i].parentElement.addEventListener("click", function () {
        // find number from the card
        let card = allCopyButtons[i].closest(".p-4");
        let number = card.querySelector("p.mt-3 span").innerText;

        // copy to clipboard
        navigator.clipboard.writeText(number);

        // show alert
        alert("Copied: " + number);

        // increase counter
        copyCount = copyCount + 1;
        copyCountElement.innerText = copyCount;
    });
}

// ===== CALL BUTTON =====
let allCallButtons = document.querySelectorAll(".fa-phone");
for (let i = 0; i < allCallButtons.length; i++) {
    allCallButtons[i].parentElement.addEventListener("click", function () {
        let card = allCallButtons[i].closest(".p-4");
        let serviceName = card.querySelector("h1").innerText;
        let serviceNumber = card.querySelector("p.mt-3 span").innerText;

        // check if enough coins
        if (coinCount < 20) {
            alert("Not enough coins! You need 20 to make a call.");
            return;
        }

        // deduct coins
        coinCount = coinCount - 20;
        coinCountElement.innerText = coinCount;

        // show alert
        alert("Calling " + serviceName + " at " + serviceNumber);

        // add to history
         let time = new Date().toLocaleTimeString();
        let div = document.createElement("div");
        div.className =
            "flex justify-between items-center bg-gray-50 rounded-lg shadow-sm px-3 py-2 mb-2 mr-2 ml-2";

        div.innerHTML = `
            <div>
                <p class="font-semibold">${serviceName}</p>
                <p class="text-sm text-gray-600">${serviceNumber}</p>
            </div>
            <div class="text-xs text-gray-500">${time}</div>
        `;

        historyList.appendChild(div);
    });
}

// ===== CLEAR HISTORY BUTTON =====
let clearButton = historySection.querySelector("button");
clearButton.addEventListener("click", function () {
    historyList.innerHTML = "";
});
