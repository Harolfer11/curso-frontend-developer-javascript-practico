const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.burgerMenu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenuIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togglemenuCarritoIcon)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
}
function togglemenuCarritoIcon(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    } else
    
    aside.classList.toggle('inactive');
  }

  const productList = [];
  productList.push({
    name: 'Bike',
    price: 120000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  });

  productList.push({
    name: 'TV Xiaomi',
    price: 2600000,
    image: 'https://i.blogs.es/3389c2/tele-transparente/1366_2000.jpg'
  });

  productList.push({
    name: 'Iphone 11 pro 128 GB',
    price: 2400000,
    image: 'https://images.pexels.com/photos/3973023/pexels-photo-3973023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  });

  /*


  <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>


  */

    function renderProducts (arr){
        for(product of arr){
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div')
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productInfoFigure = document.createElement('figure');
            const productImgCard = document.createElement('img');
            productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        
            productInfoFigure.appendChild(productImgCard);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
            
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        }
    }

    renderProducts(productList);
  