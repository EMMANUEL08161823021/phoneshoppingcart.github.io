let navLinks = document.querySelectorAll('navlink');

navLinks.forEach(navlink => {
    navlink.addEventListener('click', function() {
        navLinks.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

const cartPage = document.getElementById('cartPage');
const cartIcon = document.getElementById('cart-icon');
const removeIcon = document.getElementById('icon');


cartIcon.addEventListener('click', cartFunction);

function cartFunction() {
    cartPage.classList.add("active");
    cartProducts.innerText = myCart;
    clearCarts.style.display = 'inline-flex';
    // buttonsDiv.innerHTML = `<h3>Your cart is empty</h3>`;

    if(myCart.length !== 0 ) {
        return (cartProducts.innerHTML = myCart.map((x)=> {
            let {id, name, quantity} = x;
            myCart = myCart.filter((x)=> x.quantity === 0);
            let search = myGoods.find((e)=> e.id === id) || [];
            return `
            <div class = 'cart-item' id='cartItem'>
                <img width ="300" />
                <div class="details">
                    <div class="detailsOne">
                        <h4>${search.name}</h4>
                        <h4 class="amount">$ ${search.amount}</h4>
                        <h4>${search.capacity}</h4>
                        <span id="clear" onclick="clearItem()"><i class="bi bi-x-lg"></i></span>
                    </div>
                    <div class="quantity" style="display: flex; flex-direction: row;">
                        <span onclick="decrement()"><i class="bi bi-dash-lg"></i></span>
                        <span id="quantity-number">${quantity}</span>
                        <span onclick="increment()"><i class="bi bi-plus-lg"></i></span>
                    </div>
                    <span class="totalNumber">$ ${quantity * (search.amount)}</span>
                </div>
            </div>
            `;
        }).join(''));

    
    } else {
        // buttonsDiv.remove();
    }
    cartProducts.style.textAlign = 'center';
    // generateFeatures();
}
removeIcon.addEventListener('click', ()=> {
    cartPage.classList.remove("active");
});