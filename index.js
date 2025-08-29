

//  Navbar default values
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//  Navbar theke elements gula change korar jonno variable set korlam
let heartCountElement = document.getElementById("heartCount"); 
let coinCountElement = document.getElementById("coinCount"); 
let copyCountElement = document.getElementById("copyCount"); 

// console.log(heartCountElement)

// Call History Section
let historyList = document.createElement("ul");
let historySection = document.getElementById("callhistory");
historySection.appendChild(historyList);

// heart button
let allHearts = document.getElementsByClassName("heart-btn");
// let hasan = allHearts.length 
// console.log(hasan)
for (let i = 0; i < allHearts.length; i++) {
    allHearts[i].addEventListener("click", function () {
        // Check if heart is already red
        if (allHearts[i].classList.contains("text-red-500")) {
            // Remove red color
            allHearts[i].classList.remove("fa-solid","text-red-500");
            // heartCount -= 1; 
            heartCount += 1; 
        } else {
            
            allHearts[i].classList.add("fa-solid","text-red-500");
            heartCount += 1; 
        }

        heartCountElement.innerText = heartCount;
    });
}

//  copy button 
let allCopyButtons = document.querySelectorAll(".fa-copy");
for (let i = 0; i < allCopyButtons.length; i++) {
    allCopyButtons[i].parentElement.addEventListener("click", function () {
        // find number from the card
        let card = allCopyButtons[i].closest(".p-4");
        let number = card.querySelector("p.mt-3 span").innerText;

        // copy to clipboard
        navigator.clipboard.writeText(number);

        alert("Copied: " + number);

        // increase counter
        copyCount +=  1;
        copyCountElement.innerText = copyCount;
    });
}

// CALL BUTTON 
let allCallButtons = document.querySelectorAll(".fa-phone");
for (let i = 0; i < allCallButtons.length; i++) {
    allCallButtons[i].parentElement.addEventListener("click", function () {
        let card = allCallButtons[i].closest(".p-4");
        let serviceName = card.querySelector("h1").innerText;
        let serviceNumber = card.querySelector("p.mt-3 span").innerText;

        if (coinCount < 20) {
            alert("You don't have enough coin! You need 20 to make a call.");
            return;
        }


        
        coinCount = coinCount - 20;
        coinCountElement.innerText = coinCount;

       
        alert("Calling " + serviceName + " at" + serviceNumber);

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

// clear history button
let clearButton = historySection.querySelector("button");
clearButton.addEventListener("click", function () {
    historyList.innerHTML = "";
});
