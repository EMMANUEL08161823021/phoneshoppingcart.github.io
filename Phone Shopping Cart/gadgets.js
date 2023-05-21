const features = document.getElementById('features');
const iphoneFive = document.getElementById('iphone5');
const iphoneSix = document.getElementById('iphone6');
const iphoneSixS = document.getElementById('iphoneSixs');
const iphoneSixPlus = document.getElementById('iphoneSixPlus');
const iphoneSeven = document.getElementById('iphone7');
const iphoneSevenPlus = document.getElementById('iphone7Plus');
const iphoneEight = document.getElementById('iphone8');
const iphoneEightPlus = document.getElementById('iphone8Plus');
const iphoneSE = document.getElementById('iphoneSE');
const iphoneX = document.getElementById('iphonex');
const iphoneXS = document.getElementById('iphonexs');
const iphoneXSmax = document.getElementById('iphonexsmax');
const iphoneXR = document.getElementById('iphonexr');
const iphone11 = document.getElementById('iphone11');
const iphone11P = document.getElementById('iphone11p');
const iphone11PM = document.getElementById('iphone11pm');
const iphone12 = document.getElementById('iphone12');
const iphone12P = document.getElementById('iphone12p');
const iphone12PM = document.getElementById('iphone12pm');
const iphone13 = document.getElementById('iphone13');
const iphone13P = document.getElementById('iphone13p');
const iphone13PM = document.getElementById('iphone13pm');
const iphone14 = document.getElementById('iphone14');
const iphone14P = document.getElementById('iphone14p');
const iphone14PM = document.getElementById('iphone14pm');
const cartButton = document.getElementById('button');
const cartNumber = document.getElementById('cart-number', update);
const quantityNumber = document.getElementById('quantity-number');
const subject  = document.getElementById('subject');
const subjectOne  = document.getElementById('subject1');


//for laptops
// const macbook = document.getElementById('macbook');
let img = document.getElementById('image');
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
        id : 'iphoneSixs',
        name : 'iPhone6s',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount:  80
    },
    {
        id : 'iphoneSixPlus',
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
        id : 'iphone8Plus',
        name : 'iPhone8Plus',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 600
    },
    {
        id : 'iphoneSE',
        name : 'iPhoneSE',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 700 
    },
    {
        id : 'iphonex',
        name : 'iPhone X',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 750 
    },
    {
        id : 'iphonexs',
        name : 'iPhone XS',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 800 
    },
    {
        id : 'iphonexsmax',
        name : 'iPhone XS max',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 850 
    },
    {
        id : 'iphonexr',
        name : 'iPhone XR',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 900 
    },
    {
        id : 'iphone11',
        name : 'iPhone 11',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 950 
    },
    {
        id : 'iphone11p',
        name : 'iPhone 11Pro',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1000 
    },
    {
        id : 'iphone11pm',
        name : 'iPhone 11ProMax',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1050 
    },
    {
        id : 'iphone12',
        name : 'iPhone 12',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1150 
    },
    {
        id : 'iphone12p',
        name : 'iPhone 12Pro',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1200 
    },
    {
        id : 'iphone12pm',
        name : 'iPhone 12ProMax',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1250 
    },
    {
        id : 'iphone13',
        name : 'iPhone 13',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1300 
    },
    {
        id : 'iphone13p',
        name : 'iPhone 13Pro',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1350 
    },
    {
        id : 'iphone13pm',
        name : 'iPhone 13ProMax',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1400 
    },
    {
        id : 'iphone14',
        name : 'iPhone 14',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1600 
    },
    {
        id : 'iphone14p',
        name : 'iPhone 14Pro',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 1700 
    },
    {
        id : 'iphone14pm',
        name : 'iPhone 14ProMax',
        weight: '13g',
        height: '6inches',
        battery: '99',
        capacity: '128gb',
        amount: 2000 
    },

]
// subject.addEventListener('click', ()=> {
//     console.log('kkkk');
//     subject.forEach(option => {
//         color.innerHTML === option.innerHTML;
        
//     });

// })

let featuresItem;
var myCart = [];

// function plus(id){
    // let item = myCart.find(item=> item.id === id);
    // item.quantity+=1;
// }
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


iphoneFive.addEventListener('click', ()=> {
    img.innerHTML = 'samsung.jpg';
    featuresItem = {...myGoods[0]};
    return generateFeatures();
    
})
// const subjectTwo  = document.getElementById('subject2');
let colorNumber = document.getElementById('color');
iphoneSix.addEventListener('click', ()=> {
    // colorNumber.innerHTML = subjectOne.value;
    featuresItem = {...myGoods[1]};
    // featuresItem.color = subjectTwo.value;
    return generateFeatures();
    
});
iphoneSixS.addEventListener('click', ()=> {
    // colorNumber.innerHTML = subjectOne.value;
    featuresItem = {...myGoods[2]};

   return generateFeatures();
    
});
iphoneSixPlus.addEventListener('click', ()=> {
    featuresItem = {...myGoods[3]};
   return generateFeatures();
    
});
iphoneSeven.addEventListener('click', ()=> {
    featuresItem = {...myGoods[4]};
   return generateFeatures();
    
});
iphoneSevenPlus.addEventListener('click', ()=> {
    featuresItem = {...myGoods[5]};
   return generateFeatures();
    
});
iphoneEight.addEventListener('click', ()=> {
    featuresItem = {...myGoods[6]};
   return generateFeatures();
    
});
iphoneEightPlus.addEventListener('click', ()=> {
    featuresItem = {...myGoods[7]};
   return generateFeatures();
    
});
iphoneX.addEventListener('click', ()=> {
    featuresItem = {...myGoods[9]};
   return generateFeatures();
    
});
iphoneXS.addEventListener('click', ()=> {
    featuresItem = {...myGoods[10]};
   return generateFeatures();
    
});
iphoneSE.addEventListener('click', ()=> {
    featuresItem = {...myGoods[8]};
   return generateFeatures();
    
});
iphoneXSmax.addEventListener('click', ()=> {
    featuresItem = {...myGoods[11]};
   return generateFeatures();
    
});
iphoneXR.addEventListener('click', ()=> {
    featuresItem = {...myGoods[12]};
   return generateFeatures();
    
});
iphone11.addEventListener('click', ()=> {
    featuresItem = {...myGoods[13]};
   return generateFeatures();
    
});
iphone11P.addEventListener('click', ()=> {
    featuresItem = {...myGoods[14]};
   return generateFeatures();
    
});
iphone11PM.addEventListener('click', ()=> {
    featuresItem = {...myGoods[15]};
   return generateFeatures();
    
});
iphone12.addEventListener('click', ()=> {
    featuresItem = {...myGoods[16]};
   return generateFeatures();
    
});
iphone12P.addEventListener('click', ()=> {
    featuresItem = {...myGoods[17]};
   return generateFeatures();
    
});
iphone12PM.addEventListener('click', ()=> {
    featuresItem = {...myGoods[18]};
   return generateFeatures();
    
});
iphone13.addEventListener('click', ()=> {
    featuresItem = {...myGoods[19]};
   return generateFeatures();
    
});
iphone13P.addEventListener('click', ()=> {
    featuresItem = {...myGoods[20]};
   return generateFeatures();
    
});
iphone13PM.addEventListener('click', ()=> {
    featuresItem = {...myGoods[21]};
   return generateFeatures();
    
});
iphone14.addEventListener('click', ()=> {
    featuresItem = {...myGoods[22]};
   return generateFeatures();
    
});
iphone14P.addEventListener('click', ()=> {
    featuresItem = {...myGoods[23]};
   return generateFeatures();
    
});
iphone14PM.addEventListener('click', ()=> {
    featuresItem = {...myGoods[24]};
   return generateFeatures();
    
});
// Quantity Number
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

function addin() {
    quantityNumber.innerHTML =  Number(quantityNumber.innerHTML) + 1;
}

plus.addEventListener('click', addin)

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
    // localStorage.setItem("products", JSON.stringify(myCart));

}

function calculation() {
    cartNumber.innerHTML = myCart.map((x) =>x.quantity).reduce((x, y) => (Number(x) + Number(y)), 0);

}
calculation();

const cartPage = document.getElementById('cartPage');
const cartIcon = document.getElementById('cart-icon');
const removeIcon = document.querySelector('#icon ');
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
const totalPay = document.getElementById('total-payment');

totalPay.innerText ==  'cjjv';

// myCart.map((x)=> {
//     let {quantity, id} = x;
//     let search = myGoods.find((y) => y.id === id) || [];

//     return quantity * search.amount;
// })

// .reduce((x, y) => x + y, 0);
// console.log(totalPay);


removeIcon.addEventListener('click', ()=> {
    console.log('yello');
    cartPage.classList.remove("active");
});
clearCarts.addEventListener('click', ()=> {
    cartProducts.innerHTML = '';
    myCart = [];
    featuresItem=undefined;
    cartProducts.style.textAlign = 'center';
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

                    <span id="quantity-number">${quantity}</span>
                    
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
                    <span id="quantity-number">${quantity}</span>
                    <span onclick="increment(${id})"><i class="bi bi-plus-lg"></i></span>
                </div>
                <span class="totalNumber">$ ${quantity * (search.amount)}</span>
            </div>
        </div>
        `;
    }).join(''));
}
// decrement();






// ipone scroll

const forwardIcon = document.getElementById('forward');
const backwardIcon = document.getElementById('backward');
// const listOne = document.getElementById('list1');
// const listTwo = document.getElementById('list2');
// const listThree = document.getElementById('list3');
// const listFour = document.getElementById('list4');
const buttonsDiv = document.getElementById('buttons');


