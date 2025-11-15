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

    const name = document.getElementById("customerName").value;
    const size = document.getElementById("size").value;

    console.log("Name and size collected");
});



