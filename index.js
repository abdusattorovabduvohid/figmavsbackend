const container = document.getElementById("products-container");
const modal = document.getElementById("product-modal");

fetch("http://localhost:5000/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <img src="${item.image}">
          <b><h3>${item.name}</p></h3>
              <div class="card__tt">
          <p>${item.desc}</p>
             </div>
                   <div class="card__buttons">
        <button>22</button>
        <button>28</button>
        <button>33</button>
    </div>

    <div class="card__price">
    
          <p>Narxi: $${item.price}</p>
              <div class="card__but">
               <button>-</button>
               <p>1</p>
                <button>+</button>
            </div>
            </div>

            <button class="btt">Order Now</button>

      `;

      card.onclick = () => {
        modal.innerHTML = `
          <div class="modal-content">
            <img src="${item.image}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
      
            <button onclick="closeModal()">Yopish</button>
          </div>
        `;
        modal.style.display = "block";
      };

      container.appendChild(card);
    });
  });

function closeModal() {
  modal.style.display = "none";
}
