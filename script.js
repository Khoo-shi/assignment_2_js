class Smoothie {
    constructor(name, size, ingredients, sweetness) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }

    describe() {
    return `
        <strong>Name:</strong> ${this.name} <br>
        <strong>Size:</strong> ${this.size} <br>
        <strong>Ingredients:</strong> ${this.ingredients.join(", ")} <br>
        <strong>Sweetness:</strong> ${this.sweetness}
    `;

    
}


calculatePrice() {
    let basePrice = 0;

    if (this.size === "Small") basePrice = 4;
    if (this.size === "Medium") basePrice = 5;
    if (this.size === "Large") basePrice = 6;

    let ingredientCost = this.ingredients.length * 1;

    return basePrice + ingredientCost;
}


}
document.getElementById("orderBtn").addEventListener("click", function () {

    if (document.getElementById("customerName").value.trim() === "") {
    document.getElementById("output").innerHTML = "<p style='color:red;'>Please enter your name.</p>";
    return;
}


    const name = document.getElementById("customerName").value;
    const size = document.getElementById("size").value;

    console.log("Name and size collected");

    const ingredientBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
let ingredients = [];

ingredientBoxes.forEach(item => ingredients.push(item.value));

console.log("Ingredients collected");


const sweetness = document.querySelector('input[name="sweetness"]:checked').value;

console.log("Sweetness collected");


const smoothie = new Smoothie(name, size, ingredients, sweetness);

console.log("Smoothie object created", smoothie);

document.getElementById("output").innerHTML = smoothie.describe()+ "<br><strong>Total Price:</strong> $" + smoothie.calculatePrice();

document.getElementById("smoothieForm").reset();



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




});






