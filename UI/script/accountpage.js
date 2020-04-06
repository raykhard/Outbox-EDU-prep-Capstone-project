function taptocomment(event) {
    event.preventDefault();
    var commentbox = document.getElementById("commentBox").value;
    if (commentbox===""){
        alert("Enter your comment...")
        return false;
    }
    else {
        alert("Your comment is here...")
        doneComment = document.getElementById("done-comments"). innerHTML = commentbox;
        
        return true;
    }
}
//cart-section
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Action',
        tag:'Blood-shot',
        price:    15000,
        inCart:0
    },
    {
        name:'Romance',
        tag:'I still believe',
        price:15000,
        inCart:0
    },
    {
        name:'Horror',
        tag:'Invisible man',
        price:15000,
        inCart:0
    },
    {
        name:'Animation',
        tag:'onward',
        price:15000,
        inCart:0
    },
    {
        name:'Adventure',
        tag:'Jungle cruise',
        price:15000,
        inCart:0
    },
    {
        name:'Comedy',
        tag:'Jexi',
        price:15000,
        inCart:0
    },
    {
        name:'  Animation',
        tag:'Spider-verse',
        price:15000,
        inCart:0
    },
    {
        name:'Animation',
        tag:'spies in disguise',
        price:10000,
        inCart:0
    },
    {
        name:'Thriller',
        tag:'Joker',
        price:10000,
        inCart:0
    },
    {
        name:'War',
        tag:'Extraction',
        price:15000,
        inCart:0
    },
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
        window.alert("Item has been added.");
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify 
    (cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    console.log('my cartcost is',cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                    <div class="product">
                        <img src="/UI/static/image-posters/${item.tag}.jpg">
                        <span>${item.tag}</span>
                    </div>
                    <div class="quantity">
                        <span>${item.name}</span>
                    </div>
                    <div class="total">
                        Ugx${item.price}
                    </div>
            `;
        });

        productContainer.innerHTML +=`
            <div class="totalContainer">
                <h4 class="totalTile">
                Total cost :
                </h4>
                <h4 class="finalTotal">
                    Ugx${cartCost}
                <h4>
            </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();