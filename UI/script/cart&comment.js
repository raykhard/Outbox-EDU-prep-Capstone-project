// function passvalues()
// {
//     var firstname=document.getElementById("videos").value;
//     localStorage.setItem("video/mp4value",firstname);
//     return false;
// }
// nav-bar
function toggleNav(){
    document.querySelector(".access-point").classList.toggle("access-point--open");
}

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Corona Fear',
        tag: 'greytshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Corona Fear',
        tag: 'greytshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Corona Fear',
        tag: 'greytshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Corona Fear',
        tag: 'greytshirt',
        price: 15,
        inCart:0
    }
]

for (let i=0; i < carts.length; i++){
    carts(i).addEventListener('click', () =>{
        cartNumbers(products[1]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }

}
function cartNumbers(products){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = products+1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
}
function setItems(product){
    console.log("inside of SetItems function");
    console.log("My product is", product);
    product.inCart = 1;
    let cartItems ={
        [product.tag]:product
    }
   
    localStorage.setItem("productsInCart")
}
onLoadCartNumbers();