function callMockCart() {
    const options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    fetch('http://localhost:5550/cart', options).then(response => {
        return response.json();
    }).then(data => {
        if (data.message == 'Access denied') {
            alert(data.message);
            window.location.href = "index.html";
        }

       document.getElementById('item').innerHTML = data.item;
       document.getElementById('web_id').innerHTML = data.web_id;
       document.getElementById('price').innerHTML = '$' + data.price;
       document.getElementById('quantity').setAttribute('value',data.quantity);
       document.getElementById('total').innerHTML = data.total;
       document.getElementById('card_sub_total').innerHTML = '$' + data.card_sub_total;
       document.getElementById('eco_tax').innerHTML = '$' + data.eco_tax;
       document.getElementById('shipping_cost').innerHTML = data.shipping_cost;
       document.getElementById('price_total').innerHTML = '$' + data.price;

        console.log(data);

    }).catch(err => {
        alert('Error Call Mountebank ' + err);
    });

}