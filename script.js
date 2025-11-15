// Smoothie Class 
class Smoothie {
    constructor(name, size, ingredients, sweetness) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }

    // Method 1: Describe Smoothie
    describe() {
        return `
        <strong>Name:</strong> ${this.name} <br>
        <strong>Size:</strong> ${this.size} <br>
        <strong>Ingredients:</strong> ${this.ingredients.join(", ")} <br>
        <strong>Sweetness:</strong> ${this.sweetness}
        `;
    }

    // Method 2: Price Calculator
    calculatePrice() {
        let basePrice = 0;

        if (this.size === "Small") basePrice = 4;
        if (this.size === "Medium") basePrice = 5;
        if (this.size === "Large") basePrice = 6;

        let ingredientCost = this.ingredients.length * 1;

        return (basePrice + ingredientCost).toFixed(2); // 2 decimal places
    }
}


// Event Listener for Submit
document.getElementById("orderBtn").addEventListener("click", function () {

    // Validation: Name Required
    const nameInput = document.getElementById("customerName");
    if (nameInput.value.trim() === "") {
        document.getElementById("output").innerHTML =
            "<p style='color:red;'>Please enter your name.</p>";
        return;
    }

    const name = nameInput.value;
    const size = document.getElementById("size").value;

    console.log("Name and size collected");

    // Collect ingredients
    const ingredientBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let ingredients = [];

    ingredientBoxes.forEach(item => ingredients.push(item.value));

    console.log("Ingredients collected");

    // Sweetness selection
    const sweetness = document.querySelector('input[name="sweetness"]:checked').value;

    console.log("Sweetness collected");

    // Create Smoothie Object
    const smoothie = new Smoothie(name, size, ingredients, sweetness);

    console.log("Smoothie object created", smoothie);

    // Output to Screen
    document.getElementById("output").innerHTML =
        smoothie.describe() +
        `<br><strong>Total Price:</strong> $${smoothie.calculatePrice()}`;

    // Show Smoothie Image
    let imagePath = "";

    if (ingredients.includes("Banana")) imagePath = "images/banana.png";
    else if (ingredients.includes("Strawberry")) imagePath = "images/strawberry.png";
    else if (ingredients.includes("Mango")) imagePath = "images/mango.png";
    else if (ingredients.includes("Blueberry")) imagePath = "images/blueberry.png";
    else if (ingredients.includes("Spinach")) imagePath = "images/spinach.png";

    const img = document.getElementById("smoothieImage");

    if (imagePath !== "") {
        img.src = imagePath;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }

    // Reset form AFTER output and image load
    document.getElementById("smoothieForm").reset();
});
