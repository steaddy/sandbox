
const listItems = [
    {name: 'dress', price: 100},
    {name: 'pants', price: 120},
    {name: 'shoes', price: 200},
    {name: 'hat', price: 70},
    ];

const itemHTML = function({name, price}) {
     return `<div class='item'><h3>${name}</h3><span>${price}</span></div>`;
};

document.querySelector('.goods').innerHTML = listItems.map(itemHTML).join('');