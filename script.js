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

document.getElementById("output").innerHTML = smoothie.describe();

document.getElementById("smoothieForm").reset();


});






