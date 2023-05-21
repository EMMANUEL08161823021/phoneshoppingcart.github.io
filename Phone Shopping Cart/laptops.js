const features = document.getElementById('features');
const macbook13 = document.getElementById('macbook13');
const macbook14 = document.getElementById('macbook14');
const macbook15 = document.getElementById('macbook15');
const macbook16 = document.getElementById('macbook16');
const macbook17 = document.getElementById('macbook17');
const macbook18 = document.getElementById('macbook18');
const macbook19 = document.getElementById('macbook19');
const macbook20 = document.getElementById('macbook20');
const macbook21 = document.getElementById('macbook21');
const macbook22 = document.getElementById('macbook22');
const macbookP13 = document.getElementById('macbookP13');
const macbookP14 = document.getElementById('macbookP14');
const macbookP15 = document.getElementById('macbookP15');
const macbookP16 = document.getElementById('macbookP16');
const macbookP17 = document.getElementById('macbookP17');
const macbookP18 = document.getElementById('macbookP18');
const macbookP19 = document.getElementById('macbookP19');
const macbookP20 = document.getElementById('macbookP20');
const macbookP21 = document.getElementById('macbookP21');
const macbookP22 = document.getElementById('macbookP22');
const macbookA13 = document.getElementById('macbookA13');
const macbookA14 = document.getElementById('macbookA14');
const macbookA15 = document.getElementById('macbookA15');
const macbookA16 = document.getElementById('macbookA16');
const macbookA17 = document.getElementById('macbookA17');
const macbookA18 = document.getElementById('macbookA18');
const macbookA19 = document.getElementById('macbookA19');
const macbookA20 = document.getElementById('macbookA20');
const macbookA21 = document.getElementById('macbookA21');
const macbookA22 = document.getElementById('macbookA22');
const cartButton = document.getElementById('button');
const cartNumber = document.getElementById('cart-number', update);
const quantityNumber = document.getElementById('quantity-number');
const subject  = document.getElementById('subject');


//for laptops
// const macbook = document.getElementById('macbook');

const myGoods = [
    {
        id : 'macbook13',
        name : 'MacBook 2013',
        year: [2014],
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  90 
    },
    {
        id : 'macbook14',
        name : 'Macbook 2014',
        year: '2018',
        weight: '13g',
        height: '6inches',
        battery: '100',
        capacity: '64gb',
        amount:  80 
    },
    {
        id : 'macbook15',
        name : 'Macbook 2015',
        year: '2018',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  80
    },
    {
        id : 'macbook16',
        name : 'Macbook 2016',
        year: '2014',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  100
    },
    {
        id : 'macbook17',
        name : 'Macbook 2017',
        year: '2015',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  300 
    },
    {
        id : 'macbook18',
        name : 'Macbook 2018',
        year: '2017',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  400 
    },
    {
        id : 'macbook19',
        name : 'Macbook 2019',
        year: '2021',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 500 
    },
    {
        id : 'macbook20',
        name : 'Macbook 2020',
        year: '2015',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  550 
    },
    {
        id : 'macbook21',
        name : 'Macbook 2021',
        year: '2017',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  600 
    },
    {
        id : 'macbook22',
        name : 'Macbook 2022',
        year: '2021',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 650 
    },
    {
        id : 'macbookP13',
        name : 'MacBook Pro 2013',
        year: [2014],
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  90 
    },
    {
        id : 'macbookP14',
        name : 'Macbook Pro 2014',
        year: '2018',
        weight: '13g',
        height: '6inches',
        battery: '100',
        capacity: '64gb',
        amount:  80 
    },
    {
        id : 'macbookP15',
        name : 'Macbook Pro 2015',
        year: '2018',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  80
    },
    {
        id : 'macbookP16',
        name : 'Macbook Pro 2016',
        year: '2014',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  100
    },
    {
        id : 'macbookP17',
        name : 'Macbook Pro 2017',
        year: '2015',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  300 
    },
    {
        id : 'macbookP18',
        name : 'Macbook Pro 2018',
        year: '2017',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  400 
    },
    {
        id : 'macbookP19',
        name : 'Macbook Pro 2019',
        year: '2021',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 500 
    },
    {
        id : 'macbookP20',
        name : 'Macbook Pro 2020',
        year: '2015',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  550 
    },
    {
        id : 'macbookP21',
        name : 'Macbook Pro 2021',
        year: '2017',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  600 
    },
    {
        id : 'macbookP22',
        name : 'Macbook Pro 2022',
        year: '2021',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 650 
    },
    {
        id : 'macbookA13',
        name : 'MacBook Air 2013',
        year: [2014],
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  90 
    },
    {
        id : 'macbookA14',
        name : 'Macbook Air 2014',
        year: '2018',
        weight: '13g',
        height: '6inches',
        battery: '100',
        capacity: '64gb',
        amount:  80 
    },
    {
        id : 'macbookA15',
        name : 'Macbook Air 2015',
        year: '2018',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  80
    },
    {
        id : 'macbookA16',
        name : 'Macbook Air 2016',
        year: '2014',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  100
    },
    {
        id : 'macbookA17',
        name : 'Macbook Air 2017',
        year: '2015',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  300 
    },
    {
        id : 'macbookA18',
        name : 'Macbook Air 2018',
        year: '2017',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  400 
    },
    {
        id : 'macbookA19',
        name : 'Macbook Air 2019',
        year: '2021',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 500 
    },
    {
        id : 'macbookA20',
        name : 'Macbook Air 2020',
        year: '2015',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  550 
    },
    {
        id : 'macbookA21',
        name : 'Macbook Air 2021',
        year: '2017',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  600 
    },
    {
        id : 'macbookA22',
        name : 'Macbook Air 2022',
        year: '2021',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 650 
    },
    

]
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

macbook13.addEventListener('click', ()=> {
    featuresItem = {...myGoods[0]};
    return generateFeatures();
   
})
macbook14.addEventListener('click', ()=> {
    featuresItem = {...myGoods[1]};
    // featuresItem.color = subjectTwo.value;
    // colorNumber.innerHTML = subjectTwo.value;
    return generateFeatures();
    
})
macbook15.addEventListener('click', ()=> {
    featuresItem = {...myGoods[2]};
   return generateFeatures();
    
})
macbook16.addEventListener('click', ()=> {
    featuresItem = {...myGoods[3]};
   return generateFeatures();
    
})
macbook17.addEventListener('click', ()=> {
    featuresItem = {...myGoods[4]};
   return generateFeatures();
    
})
macbook18.addEventListener('click', ()=> {
    featuresItem = {...myGoods[5]};
   return generateFeatures();
    
})
macbook19.addEventListener('click', ()=> {
    featuresItem = {...myGoods[6]};
   return generateFeatures();
    
})
macbook20.addEventListener('click', ()=> {
    featuresItem = {...myGoods[7]};
   return generateFeatures();
    
})
macbook21.addEventListener('click', ()=> {
    featuresItem = {...myGoods[8]};
   return generateFeatures();
    
})
macbook22.addEventListener('click', ()=> {
    featuresItem = {...myGoods[9]};
   return generateFeatures();
    
})
macbookP13.addEventListener('click', ()=> {
    featuresItem = {...myGoods[10]};
    return generateFeatures();
   
})
macbookP14.addEventListener('click', ()=> {
    featuresItem = {...myGoods[11]};
    // featuresItem.color = subjectTwo.value;
    // colorNumber.innerHTML = subjectTwo.value;
    return generateFeatures();
    
})
macbookP15.addEventListener('click', ()=> {
    featuresItem = {...myGoods[12]};
   return generateFeatures();
    
})
macbookP16.addEventListener('click', ()=> {
    featuresItem = {...myGoods[13]};
   return generateFeatures();
    
})
macbookP17.addEventListener('click', ()=> {
    featuresItem = {...myGoods[14]};
   return generateFeatures();
    
})
macbookP18.addEventListener('click', ()=> {
    featuresItem = {...myGoods[15]};
   return generateFeatures();
    
})
macbookP19.addEventListener('click', ()=> {
    featuresItem = {...myGoods[16]};
   return generateFeatures();
    
})
macbookP20.addEventListener('click', ()=> {
    featuresItem = {...myGoods[17]};
   return generateFeatures();
    
})
macbookP21.addEventListener('click', ()=> {
    featuresItem = {...myGoods[18]};
   return generateFeatures();
    
})
macbookP22.addEventListener('click', ()=> {
    featuresItem = {...myGoods[19]};
   return generateFeatures();
    
})
macbookA13.addEventListener('click', ()=> {
    featuresItem = {...myGoods[20]};
    return generateFeatures();
   
})
macbookA14.addEventListener('click', ()=> {
    featuresItem = {...myGoods[21]};
    // featuresItem.color = subjectTwo.value;
    // colorNumber.innerHTML = subjectTwo.value;
    return generateFeatures();
    
})
macbookA15.addEventListener('click', ()=> {
    featuresItem = {...myGoods[22]};
   return generateFeatures();
    
})
macbookA16.addEventListener('click', ()=> {
    featuresItem = {...myGoods[23]};
   return generateFeatures();
    
})
macbookA17.addEventListener('click', ()=> {
    featuresItem = {...myGoods[24]};
   return generateFeatures();
    
})
macbookA18.addEventListener('click', ()=> {
    featuresItem = {...myGoods[25]};
   return generateFeatures();
    
})
macbookA19.addEventListener('click', ()=> {
    featuresItem = {...myGoods[26]};
   return generateFeatures();
    
})
macbookA20.addEventListener('click', ()=> {
    featuresItem = {...myGoods[27]};
   return generateFeatures();
    
})
macbookA21.addEventListener('click', ()=> {
    featuresItem = {...myGoods[28]};
   return generateFeatures();
    
})
macbookA22.addEventListener('click', ()=> {
    featuresItem = {...myGoods[29]};
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
    console.log("my cart", myCart)
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
                    <div class="quantity" style=["display: flex; flex-direction: row;">
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
    // decrement();
    // increment();
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
    localStorage.setItem('products', JSON.stringify(myCart));
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
                    
                    <span onclick="increment(${id})"> <i class="bi bi-plus-lg"></i></span>
                </div>
                <span class="totalNumber">$ ${quantity * (search.amount)}</span>
            </div>
        </div>
        `;
    }).join(''));
    
}

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
                <div class="quantity" style="display: flex; flex-direction: row;">
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

