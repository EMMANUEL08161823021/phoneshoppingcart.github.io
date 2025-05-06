const features = document.getElementById('features');
const seriesOne = document.getElementById('series1');
const seriesTwo = document.getElementById('series2');
const seriesThree = document.getElementById('series3');
const seriesFour = document.getElementById('series4');
const seriesFive = document.getElementById('series5');
const seriesSix = document.getElementById('series6');
const seriesSE = document.getElementById('seriesSE');
const cartButton = document.getElementById('button');
const cartNumber = document.getElementById('cart-number', update);
const quantityNumber = document.getElementById('quantity-number');
const subject  = document.getElementById('subject');
const subjectOne  = document.getElementById('subject1');


//for laptops
// const macbook = document.getElementById('macbook');

const myGoods = [
    {
        id : 'series1',
        name : 'Series 1',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  90 
    },
    {
        id : 'series2',
        name : 'Series 2',
        weight: '13g',
        height: '6inches',
        battery: '100',
        capacity: '64gb',
        amount:  80 
    },
    {
        id : 'series3',
        name : 'Series 3',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  80
    },
    {
        id : 'series4',
        name : 'Series 4',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  100
    },
    {
        id : 'series5',
        name : 'Series 5',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  300 
    },
    {
        id : 'series6',
        name : 'Series 6',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  400 
    },
    {
        id : 'seriesSE',
        name : 'Series SE',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 500 
    },

]
// subject.addEventListener('click', ()=> {
//     console.log('kkkk');
//     subject.forEach(option => {
//         color.innerHTML === option.innerHTML;
        
//     });

// })

let featuresItem;
let myCart = [];
// JSON.parse(localStorage.getItem("products")) ||
const addToCart = (id) => {
    let searchResult = myCart.find(item => item.id === id);
    console.log(searchResult);
    if(searchResult) {
        alert('Your Cart has been updated!');
        return update();
    }
    else {
        myCart.push({
            id,
            quantity: parseInt(quantityNumber.innerHTML)
        })
    }
    console.log(myCart)
    calculation()
}

cartButton.addEventListener("click", () => {
    if(featuresItem){
        addToCart(featuresItem.id)
    }
    else {
        console.log("Nothing to do");
        return null;
    }
})

let generateFeatures = () => {
    console.log("FEatures item: ", featuresItem)
        let {id, name, weight, height, battery, capacity, amount } = featuresItem;

        return features.innerHTML = `
            <thead ${id}>
                <tr>
                    <th scope="col">INFO</th>
                    <th scope="col">Amount Range</th>
                </tr>
            </thead>
            <tbody ${id}>
                <tr>
                    <td>Name</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>${weight}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>${height}</td>
                </tr>
                <tr>
                    <td>Battery Health</td>
                    <td>${battery}</td>
                </tr>
                <tr>
                    <td>Capacity</td>
                    <td><i class="bi bi-skip-backward"></i> ${capacity} <i class="bi bi-skip-forward"></i></td>
                </tr>
                <tr>
                    <td>Amount</td>
                    <td>$ ${amount}</td>
                </tr>
            </tbody>
        `
    // }));
}
const scrollContainer = document.getElementById('part-one');
const backBtn = document.getElementById('backward');
const forwardBtn = document.getElementById('forward');
scrollContainer.addEventListener("wheel", (e)=> {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
});
forwardBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft += 300;
})
backBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft -= 300;
})


seriesOne.addEventListener('click', ()=> {

    featuresItem = {...myGoods[0]};
    return generateFeatures();
    
})
// const subjectTwo  = document.getElementById('subject2');
let colorNumber = document.getElementById('color');
seriesTwo.addEventListener('click', ()=> {
    // colorNumber.innerHTML = subjectOne.value;
    featuresItem = {...myGoods[1]};
    // featuresItem.color = subjectTwo.value;
    return generateFeatures();
    
})
seriesThree.addEventListener('click', ()=> {
    // colorNumber.innerHTML = subjectOne.value;
    featuresItem = {...myGoods[2]};

   return generateFeatures();
    
})
seriesFour.addEventListener('click', ()=> {
    featuresItem = {...myGoods[3]};
   return generateFeatures();
    
})
seriesFive.addEventListener('click', ()=> {
    featuresItem ={...myGoods[4]};
   return generateFeatures();
    
})
seriesSix.addEventListener('click', ()=> {
    featuresItem = {...myGoods[5]};
   return generateFeatures();
    
})
seriesSE.addEventListener('click', ()=> {
    featuresItem = {...myGoods[6]};
   return generateFeatures();
    
})
//laptop function
// macbook.addEventListener('click', ()=> {
//     featuresItem = [myGoods[7]];
//    return generateFeatures();
    
// })

// Quantity Number
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

plus.addEventListener('click', ()=> {
    quantityNumber.innerHTML =  Number(quantityNumber.innerHTML) + 1;
})
minus.addEventListener('click', ()=> {
    if(Number(quantityNumber.innerHTML) >= 2){
        quantityNumber.innerHTML =  Number(quantityNumber.innerHTML)  - 1;
    }

})

// cartNUMBER
function update(id) {
    let search = myCart.find((x) => x.id === id);
    console.log(search.quantity);
    calculation();
}

function calculation() {

    cartNumber.innerHTML = myCart.map((x) =>x.quantity).reduce((x, y) => (Number(x) + Number(y)), 0);

}
calculation();

const cartPage = document.getElementById('cartPage');
const cartIcon = document.getElementById('cart-icon');
const removeIcon = document.getElementById('icon');
const cartProducts = document.getElementById('cart-products');
const clearCarts = document.getElementById('clear-carts');
// const buttons = document.getElementById('buttons');

cartIcon.addEventListener('click', cartFunction);

function cartFunction(){
    // console.log(removeIcon);
    cartPage.classList.add("active");
    cartProducts.innerText = myCart;
    clearCarts.style.display = 'inline-flex';
    // buttonsDiv.innerHTML = `<h3>Your cart is empty</h3>`;

    if(myCart.length !== 0 ) {
        return (cartProducts.innerHTML = myCart.map((x)=> {
            let {id, name, quantity} = x;
            // myCart = myCart.filter((x)=> x.quantity === 0);
            let search = myGoods.find((e)=> e.id === id) || [];
            return `
            <div class = 'cart-item' id='cartItem'>
                <img width ="300"/>
                <div class="details">
                    <div class="detailsOne">
                        <h4>${search.name}</h4>
                        <h4 class="amount">$ ${search.amount}</h4>
                        <h4>${search.capacity}</h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>
                    <div class="quantity" style="display: flex; flex-direction: row;">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <span id="quantity-number">${quantity}</span>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                    <span class="totalNumber">$ ${quantity * (search.amount)}</span>
                </div>
            </div>
            `;
        }).join(''));
  
    } 
    cartProducts.style.textAlign = 'center';
    // generateFeatures();
}

// document.getElementById('total-payment')
let totalPayment = ()=> {
    if(myCart.length !== 0) {
        let totalNumber = myCart
        .map((x)=> {
            let {quantity, id} = x;
            let search = myGoods.find((y) => y.id === id) || [];

            return quantity * search.amount;
        })
        .reduce((x, y) => x + y, 0);

        label.innerHTML = `
        <h2>Total Bill : $ ${totalNumber}</h2>
        `;
    } else return;
};

totalPayment();


removeIcon.addEventListener('click', ()=> {
    console.log('yello');
    cartPage.classList.remove("active");
});
clearCarts.addEventListener('click', ()=> {
    console.log('ffbnbf');
    cartProducts.style.textAlign = 'center';
    cartProducts.innerHTML = '';
    cartNumber.innerHTML = 0;
   
});
let removeItem = (id) => {
    let selectedItem = id;
    myCart = myCart.filter((x) => x.id !== selectedItem.id);
    // localStorage.setItem('products', JSON.stringify(myCart));
    calculation();
    cartFunction();
};

function increment(id){  
    console.log("HELLO WORLD")
    let item = myCart.find(item=> item.id === id.getAttribute("id"));
    console.log("ITEM: ", item)
    item.quantity = parseInt(item.quantity) + 1;
    generateFeatures(id);
    calculation();
    console.log("mycardt", myCart);
    // localStorage.setItem('products', JSON.stringify(myCart));


    return (cartProducts.innerHTML = myCart.map((x)=> {
        let {id, name, quantity} = x;
        // myCart = myCart.filter((x)=> x.quantity === 0);
        let search = myGoods.find((e)=> e.id === id) || [];
        return `
        <div class = 'cart-item' id='cartItem'>
            <img width ="300"/>
            <div class="details">
                <div class="detailsOne">
                    <h4>${search.name}</h4>
                    <h4 class="amount">$ ${search.amount}</h4>
                    <h4>${search.capacity}</h4>
                    <span ><i onclick="removeItem(${id})" class="bi bi-x-lg"></i></span>
                </div>
                <div class="quantity" style="display: flex; flex-direction: row;">
                    <span onclick="decrement(${id})"><i class="bi bi-dash-lg"></i> </span>

                    <span style="margin: 0 1em;" id="quantity-number">${quantity}</span>
                    
                    <span onclick="increment(${id})"><i class="bi bi-plus-lg"></i></span>
                </div>
                <span class="totalNumber">$ ${quantity * (search.amount)}</span>
            </div>
        </div>
        `;
    }).join(''));
    
}
// increment();

function decrement(id) { 
    console.log("HELLO WORLD")
    let item = myCart.find(item=> item.id === id.getAttribute("id"));
    console.log("ITEM: ", item);
    if(item.quantity >= 1) {
        console.log('yello');
        item.quantity = parseInt(item.quantity) - 1;
    } 
    if(item.quantity === 0) {
        removeItem(id);
    }
    generateFeatures(id);
    calculation();
    console.log("mycardt", myCart);
    localStorage.setItem('products', JSON.stringify(myCart));

    return (cartProducts.innerHTML = myCart.map((x)=> {
        let {id, name, quantity} = x;
        // myCart = myCart.filter((x)=> x.quantity === 0);
        let search = myGoods.find((e)=> e.id === id) || [];
        return `
        <div class = 'cart-item' id='cartItem'>
            <img width ="300"/>
            <div class="details">
                <div class="detailsOne">
                    <h4>${search.name}</h4>
                    <h4 class="amount">$ ${search.amount}</h4>
                    <h4>${search.capacity}</h4>
                    <span ><i onclick="removeItem(${id})" class="bi bi-x-lg"></i></span>
                </div>
                <div class="quantity" style="display: flex; flex-direction: row; justify-content: start;">
                    <span onclick="decrement(${id})"><i class="bi bi-dash-lg"></i></span>
                    <span style="margin: 0 1em;" id="quantity-number">${quantity}</span>
                    <span onclick="increment(${id})"><i class="bi bi-plus-lg"></i></span>
                </div>
                <span class="totalNumber">$ ${quantity * (search.amount)}</span>
            </div>
        </div>
        `;
    }).join(''));
}


// ipone scroll

const forwardIcon = document.getElementById('forward');
const backwardIcon = document.getElementById('backward');
const listOne = document.getElementById('list1');
const listTwo = document.getElementById('list2');
const listThree = document.getElementById('list3');
const listFour = document.getElementById('list4');
const buttonsDiv = document.getElementById('buttons');

const clear = document.getElementById('cartItem');

// cartFunction();
// const totalPayment = document.getElementById('totalPayment');

// let totalPayment = ()=> {
//     if(myCart.length !== 0) {
//         let totalNumber = myCart
//         .map((x)=> {
//             let {quantity, id} = x;
//             let search = myGoods.find((y) => y.id === id) || [];

//             return quantity * search.amount;
//         })
//         .reduce((x, y) => x + y, 0);
//     }
// }
// totalPayment();

