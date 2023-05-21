const features = document.getElementById('features');
const iphoneFive = document.getElementById('iphone5');
const iphoneSix = document.getElementById('iphone6');
const iphoneSixS = document.getElementById('iphoneSixs');
const iphoneSixPlus = document.getElementById('iphoneSixPlus');
const iphoneSeven = document.getElementById('iphone7');
const iphoneSevenPlus = document.getElementById('iphone7Plus');
const iphoneEight = document.getElementById('iphone8');
const cartButton = document.getElementById('button');
const cartNumber = document.getElementById('cart-number', update);
const quantityNumber = document.getElementById('quantity-number');
const subject  = document.getElementById('subject');
const subjectOne  = document.getElementById('subject1');


//for laptops
// const macbook = document.getElementById('macbook');

const myGoods = [
    {
        id : 'iphone5',
        name : 'iPhone5',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  90 
    },
    {
        id : 'iphone6',
        name : 'iPhone6',
        weight: '13g',
        height: '6inches',
        battery: '100',
        capacity: '64gb',
        amount:  80 
    },
    {
        id : 'iphone6s',
        name : 'iPhone6s',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  80
    },
    {
        id : 'iphone6sPlus',
        name : 'iPhone6sPlus',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  100
    },
    {
        id : 'iphone7',
        name : 'iPhone7',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  300 
    },
    {
        id : 'iphone7Plus',
        name : 'iPhone7Plus',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  400 
    },
    {
        id : 'iphone8',
        name : 'iPhone8',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 500 
    },
    {
        id : 'macbook',
        name : 'Macbook',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1000 
    }
    

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
let generateFeatures = () => {

    return (features.innerHTML = featuresItem.map((x)=>{
        let {id, name, weight, height, battery, capacity, amount } = x;
        cartButton.addEventListener('click', ()=> {
            if(cartNumber.innerHTML !== 0) {
                let search = myCart.find((x) => x.id === id);
                let quantity = quantityNumber.innerHTML;
                if(search === undefined)  {
                    myCart.push({
                        id : id,
                        quantity : quantityNumber.innerHTML,
                    });
                } 
                calculation();
                console.log(myCart);
                update(id);
            }
        })
        return`
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
    }));
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


iphoneFive.addEventListener('click', ()=> {

    featuresItem = [myGoods[0]];
    return generateFeatures();
    
})
// const subjectTwo  = document.getElementById('subject2');
let colorNumber = document.getElementById('color');
iphoneSix.addEventListener('click', ()=> {
    // colorNumber.innerHTML = subjectOne.value;
    featuresItem = [myGoods[1]];
    // featuresItem.color = subjectTwo.value;
    return generateFeatures();
    
})
iphoneSixS.addEventListener('click', ()=> {
    // colorNumber.innerHTML = subjectOne.value;
    featuresItem = [myGoods[2]];

   return generateFeatures();
    
})
iphoneSixPlus.addEventListener('click', ()=> {
    featuresItem = [myGoods[3]];
   return generateFeatures();
    
})
iphoneSeven.addEventListener('click', ()=> {
    featuresItem = [myGoods[4]];
   return generateFeatures();
    
})
iphoneSevenPlus.addEventListener('click', ()=> {
    featuresItem = [myGoods[5]];
   return generateFeatures();
    
})
iphoneEight.addEventListener('click', ()=> {
    featuresItem = [myGoods[6]];
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
    localStorage.setItem('products', JSON.stringify(myCart));
    calculation();
    cartFunction();
};

function increment(id){
    let item = myCart.find(item=> item.id === id.getAttribute("id"));
    console.log("ITEM: ", item)
    item.quantity = parseInt(item.quantity) + 1;
    generateFeatures();
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
                    <span onclick="decrement()"><i class="bi bi-dash-lg"></i></span>
                    <span id="quantity-number">${quantity}</span>
                    <span onclick="increment(${id})"><i class="bi bi-plus-lg"></i></span>
                </div>
                <span class="totalNumber">$ ${quantity * (search.amount)}</span>
            </div>
        </div>
        `;
    }).join(''));
    
}
increment();

function decrement(id) {
    let item = myCart.find(item=> item.id === id.getAttribute("id"));
    console.log("ITEM: ", item);
    if(item.quantity >= 1) {
        console.log('yello');
        item.quantity = parseInt(item.quantity) - 1;
    } 
    if(item.quantity === 0) {
        cartProducts[0].innerHTML = '';
    }
    // generateFeatures(id);
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
                    <span id="quantity-number">${quantity}</span>
                    <span onclick="increment()"><i class="bi bi-plus-lg"></i></span>
                </div>
                <span class="totalNumber">$ ${quantity * (search.amount)}</span>
            </div>
        </div>
        `;
    }).join(''));
}
decrement();


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

