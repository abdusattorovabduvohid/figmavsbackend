async function getProduct() {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("err", err);
  }
}

function createPizzaCard(element) {
  const card = document.createElement("div");
  card.classList.add("pizza-card");

  const img = document.createElement("img");
  img.src = element.image;
  img.alt = element.name;
  img.classList.add("pizza-img");
  img.onclick = () => window.location.href = `about.html?id=${element.id}`;

  const title = document.createElement("h3");
  title.textContent = element.name;
  title.classList.add("pizza-title");
  title.onclick = () => window.location.href = `about.html?id=${element.id}`;

  const desc = document.createElement("p");
  desc.textContent = `Filling: ${element.desc}`;
  desc.classList.add("pizza-desc");

  const sizeSelector = document.createElement("div");
  sizeSelector.classList.add("size-selector");

  [22, 28, 33].forEach((size, idx) => {
    const btn = document.createElement("button");
    btn.textContent = size;
    btn.classList.add("size-btn");
    if (idx === 1) btn.classList.add("active");
    sizeSelector.appendChild(btn);
  });

  const ingredientsBtn = document.createElement("button");
  ingredientsBtn.textContent = "+ Ingredients";
  ingredientsBtn.classList.add("ingredients-btn");

  const bottomSection = document.createElement("div");
  bottomSection.classList.add("mt-auto", "w-full");

  const footer = document.createElement("div");
  footer.classList.add("card-footer");

  const priceText = document.createElement("span");
  priceText.classList.add("price-text");
  priceText.textContent = `${element.price.toLocaleString()} UZS`;

  const counterWrapper = document.createElement("div");
  counterWrapper.classList.add("counter-wrapper");

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";
  minusBtn.classList.add("minus-btn");

  const countDisplay = document.createElement("span");
  countDisplay.textContent = "1";
  countDisplay.classList.add("count-display");

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  plusBtn.classList.add("plus-btn");

  counterWrapper.append(minusBtn, countDisplay, plusBtn);
  footer.append(priceText, counterWrapper);

  const orderBtn = document.createElement("button");
  orderBtn.textContent = "Order Now";
  orderBtn.classList.add("order-now-btn");

  bottomSection.append(footer, orderBtn);
  card.append(img, title, desc, sizeSelector, ingredientsBtn, bottomSection);

  return card;
}

async function renderMenu(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const products = await getProduct();
  if (!products) return;

  grid.textContent = "";

  // Берем только первые 4 товара, чтобы они выстроились в один ряд
  const itemsToShow = products.slice(0, 4);

  itemsToShow.forEach((product) => {
    grid.appendChild(createPizzaCard(product));
  });
}

renderMenu("menu-grid");
renderMenu("popular-grid");
