const openshop=document.querySelector('.shooping')
const closeshop=document.querySelector('.closeshop');
const list=document.querySelector('.list');
const listcard=document.querySelector('.listcard')
const total=document.querySelector('.total');
const body=document.querySelector('body');
const quantity=document.querySelector('.quantity');

openshop.addEventListener('click',()=>{
    body.classList.add('active');
})
closeshop.addEventListener('click',()=>{
    body.classList.remove('active')
})
let products=[
    {
    id:1,
    name:'product 1',
    price:100,
    images:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/e/f/h/-original-imags3atdahsjgb2.jpeg?q=70",

},
    {
    id:2,
    name:'product 2',
    price:100,
    images:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/y/i/v/-original-imagzmsgvzmjfng9.jpeg?q=70",

},
    {
    id:3,
    name:'product 3',
    price:300,
    images:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/3/9/d/-original-imagtsgj45uphg8b.jpeg?q=70",
},
    {
    id:4,
    name:'product 4',
    price:400,
    images:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/u/b/o/-original-imagq425qdzgyzhn.jpeg?q=70",

},
    {
    id:5,
    name:'product 5',
    price:500,
    images:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/7/h/-original-imagyxv3ff7d7hz9.jpeg?q=70",
},



]
let listcards=[];
const inapp=()=>{
    products.forEach((value,key) => {
        let newdiv=document.createElement('div');
        newdiv.classList.add('item');
        newdiv.innerHTML=`
        <img src='${value.images}'>
        <div class='title'>${value.name}</div>
        <div class='price'>${value.price.toLocaleString()}</div>
<button class='one' onclick="addToCard(${key})">Add to card</button>
        `;
        list.appendChild(newdiv)
    })
}
inapp();


const addToCard = (key)=>{
if(listcards[key]==null){
    listcards[key]=JSON.parse(JSON.stringify(products[key]));
    listcards[key].quantity= 1
}

reloadcard();
}
const reloadcard=()=>{
    listcard.innerHTML = "";
    let count=0;
    let totalprice=0;
    listcards.forEach((value, key)=>{
       totalprice=totalprice+value.price;

        count=count+value.quantity;
        if(value != null){
            let newdiv=document.createElement('li');
            newdiv.innerHTML=`
            <div><img src = '${value.images}'></div>
            <div class='cardtitle'>${value.name}</div>
            <div class='cardPrice'>${value.price.toLocaleString()}</div>
            <div>

            <button style='background-color:red;' class='cardbutton' onclick='changeQuantity(${key}, ${value.quantity - 1})'>-</button>
<div class='count'>${value.quantity}</div>
            <button style='background-color:black' class='cardbutton' onclick='changeQuantity(${key},${value.quantity + 1})'>+</button>
            
            </div>
            `
            listcard.appendChild(newdiv);



        }
    
total.innerText=totalprice.toLocaleString();
quantity.innerText = count;

    })
}
const changeQuantity=(key,quantity)=>{
    if(quantity==0){
        delete listcards[key]
    }
    else{
        listcards[key].quantity = quantity;
        listcards[key].price = quantity * products[key].price
    }
    reloadcard();
}