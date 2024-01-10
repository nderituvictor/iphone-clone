import { products, tabs } from "./products.js"

let productItem = ""
products.forEach( (product) => {
    productItem += ` <div class="products-wrapper" id="${product.id}">
    <img src="${product.image}" alt="">
    <p class="brand">IPHONE</p>
    <p class="phone-name">${product.name}</p>
    <p class="product-price">Ksh ${product.price}</p>
    <button id="js-add-to-cart">Add to Cart</button>
  </div>`
} )
const wrapper = document.querySelector('.main-content-container').innerHTML = productItem

let tabsItems = ""
tabs.forEach( (tab) =>{
  tabsItems += `<div class="tabs-wrapper id="${tab.id}">
  <img src="${tab.image}" alt="">
  <p class="tab-brand">TABLET</p>
  <p class="tab-name">${tab.name}</p>
  <p class="tab-price">Ksh ${tab.price}</p>
</div>`
})
document.querySelector('.tabs-container').innerHTML = tabsItems
const button = document.getElementById('js-add-to-cart')

button.addEventListener('click', () => {
  
})

