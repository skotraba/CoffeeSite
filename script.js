var order1 = document.getElementById('order1');
var order2 = document.getElementById('order2');
var order3 = document.getElementById('order3');
var purchase = document.getElementById('purchase');

var shoppingCart = [];

var light = {
    name: 'Light',
    price: 1.99
};
var medium = {
    name: 'Medium',
    price: 1.99
};
var dark = {
    name:'Dark',
    price: 1.99
};

function addOrder(item) {
    shoppingCart.push(item);
    
}

order1.addEventListener('click', function() {
    shoppingCart.push(light);
    
})

order2.addEventListener('click', function() {
    shoppingCart.push(medium);
    
})

order3.addEventListener('click', function() {
    shoppingCart.push(dark);
   
})

var items = document.getElementById('items');
var row = document.getElementById('row')

purchase.onclick = function() {

    let hasPrevious = document.querySelectorAll('tr.temp')
    if(hasPrevious.length != 0) {
        hasPrevious.forEach((Element => {
            Element.remove()
        }))
    }

    var totalnum = 0

    for (i = 0; i <shoppingCart.length; i++) {
        var temprow = document.createElement('tr')
        temprow.classList.add('temp');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(`${shoppingCart[i].name}`)
        var text2 = document.createTextNode(`${shoppingCart[i].price}`)


        td1.appendChild(text1);
        td2.appendChild(text2);


        temprow.appendChild(td1);
        temprow.appendChild(td2);

        items.appendChild(temprow)
        
        
        totalnum += shoppingCart[i].price
        
        
    }

        var num = totalnum.toFixed(2)

        let total = document.getElementById('total')
        var tr3 = document.createElement('tr');
        tr3.classList.add("temp");

        var text3 = document.createTextNode(`${num}`)
        tr3.appendChild(text3);
        total.appendChild(tr3);
    
    
}

var clear = document.getElementById('clear')


clear.onclick = function() {

    let hasPrevious = document.querySelectorAll('tr.temp')
    if(hasPrevious.length != 0) {
        hasPrevious.forEach((Element => {
            Element.remove()
        }))
    }
    shoppingCart = []
}

var confirm = document.getElementById('confirm');

confirm.onclick = function() {
    let hasPrevious = document.querySelectorAll('tr.temp')
    if(hasPrevious.length != 0) {
        hasPrevious.forEach((Element => {
            Element.remove()
        }))
    }
    shoppingCart = []

    alert('Thank you For your Purchase!')
}
