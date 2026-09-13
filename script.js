const pastries = [
    { name: "Chocolate Croissant" },
    { name: "Blueberry Muffin" },
    { name: "Cinnamon Roll" },
    { name: "Chocolate Chip Cookie" },
    { name: "Brownie" },
    { name: "Cupcake" }
];
const pastryOptions = document.getElementById("pastry-options");
const selectedPastriesList = document.getElementById("selected-pastries");
const boxMessage = document.getElementById("box-message");

let selectedPastries = [];
function displayPastries() {
    pastries.forEach(function(pastry) {
        const button = document.createElement("button");
        button.textContent = pastry.name;
        button.type = "button";
        button.addEventListener("click", function() {
            addPastry(pastry.name);
    });

        pastryOptions.appendChild(button);
    });
}
function addPastry(pastryName) {
    if (selectedPastries.length < 4) {
        selectedPastries.push(pastryName);
        updateBox();
    }
}
function updateBox() {
    selectedPastriesList.innerHTML = "";

    selectedPastries.forEach(function(pastryName) {
        const listItem = document.createElement("li");
        listItem.textContent = pastryName;
        selectedPastriesList.appendChild(listItem);
    });

    boxMessage.textContent = selectedPastries.length + " of 4 pastries selected.";
    localStorage.setItem("bakeryBox", JSON.stringify(selectedPastries));
}
if (pastryOptions && selectedPastriesList && boxMessage) {
    const savedBox = localStorage.getItem("bakeryBox");

    if (savedBox) {
        selectedPastries = JSON.parse(savedBox);
        updateBox();
    }

    displayPastries();
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    contactForm.addEventListener("submit", function(event) {
        nameError.textContent = "";
        emailError.textContent = "";

        let formIsValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            formIsValid = false;
        }

        if (!emailInput.value.includes("@")) {
            emailError.textContent = "Please enter a valid email address.";
            formIsValid = false;
        }

        if (!formIsValid) {
            event.preventDefault();
        }
    });
}

const clearBoxButton = document.getElementById("clear-box");

if (clearBoxButton) {
    clearBoxButton.addEventListener("click", function() {
        selectedPastries = [];
        updateBox();
    });
}