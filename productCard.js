export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.element = this.createCardElement();
  }

  createCardElement() {
    const card = document.createElement("div");
    card.classList.add("list-item");

    card.innerHTML = `
      <img src="${this.product.image}" alt="" />
      <h3>${this.product.name}</h3>
      <p class="item-description">
        Lorem ipsum dolor sit amet elit. Ipsa quis unde sequi iure nesciunt.
      </p>
      <div class="item-price">$ ${this.product.price}</div>
      <button class="addCart">add to cart</button>
    `;

    return card;
  }
}
