const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const burguerMenu = document.querySelector('.menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];

for(let i=0; i<12; i++){
    productList.push({
        name: 'bike',
        price: 200,
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
}

for (product of productList) {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    let productInfoDiv = document.createElement('div');

    let productPrice = document.createElement('p');
    productPrice.innerText = '$' +  product.price;

    let productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    let productInfoFigure = document.createElement('figure');

    let productInfoImgCart = document.createElement('img');
    productInfoImgCart.setAttribute('src', './assets/Platzi_YardSale_Icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}