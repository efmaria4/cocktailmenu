const recipes = {
  1: { name: "Porn Star", recipe: "Vodka, passion fruit purée, vanilla syrup, lime juice" },
  2: { name: "Sour Apple Martini", recipe: "Vodka, sour apple purée, orange liqueur, lemon juice" },
  3: { name: "Paloma", recipe: "Tequila blanco, lime juice, grapefruit soda" },
  4: { name: "Tropical Paloma", recipe: "Tequila blanco, tropical tequila, lime juice, grapefruit soda" },
  5: { name: "Margarita", recipe: "Tequila blanco, triple sec, lime juice" },
  6: { name: "Passion Fruit Margarita", recipe: "Tequila blanco, passion fruit purée, triple sec, lime juice" },
  7: { name: "Whiskey Sour", recipe: "Bourbon, lemon juice, sugar syrup" },
  8: { name: "Tom Collins", recipe: "Bourbon, lemon juice, sugar syrup" },
  9: { name: "Old Fashioned", recipe: "Bourbon, sugar syrup, bitters, orange peel" },
  10: { name: "Long Island Iced Tea", recipe: "Vodka, gin, rum, tequila blanco, triple sec, lemon juice, cola" },
  11: { name: "Cuba Libre", recipe: "White rum, lime wedges, cola" },
  12: { name: "Daiquiri", recipe: "White rum, lime juice, sugar syrup" },
  13: { name: "Mojito", recipe: "White rum, lime juice, sugar syrup, mint, soda water" },
  14: { name: "Moscow Mule", recipe: "Vodka, lime wedges, ginger beer" },
  15: { name: "Dark and Stormy", recipe: "Dark rum, lime juice, ginger beer" },
  16: { name: "Cucumber Snap", recipe: "Cucumber, gin, lime, syrup, tonic (optional)" },
  17: { name: "Cucumber Gimlet", recipe: "Cucumber, mint/basil, lime, honey, soda" },
  18: { name: "Watermelon Cooler", recipe: "Watermelon, mint/basil, lime, soda" },
  19: { name: "Rosemary Grapefruit", recipe: "Grapefruit soda, lime, honey, rosemary" },
  20: { name: "Citrus Bitters", recipe: "Orange, lemon, soda, honey, bitters" },
};

const modal = document.getElementById("modal");
const title = document.getElementById("cocktail-title");
const recipe = document.getElementById("cocktail-recipe");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.dataset.id;
    title.innerText = recipes[id].name;
    recipe.innerText = recipes[id].recipe;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
