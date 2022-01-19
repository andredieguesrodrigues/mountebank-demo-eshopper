function callMockDetails() {
    const options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    fetch('http://localhost:5550/product_details', options).then(response => {
        return response.json();
    }).then(data => {
        if (data.message == 'Access denied') {
            alert(data.message);
            window.location.href = "index.html";
        }

       document.getElementById('description_product').innerHTML = data.description;
       document.getElementById('web_id').innerHTML = data.web_id;
       document.getElementById('price').innerHTML = '$' + data.price;
       document.getElementById('quantity').setAttribute('value',data.quantity);
       document.getElementById('availability').innerHTML = data.availability;
       document.getElementById('condition').innerHTML = data.condition;
       document.getElementById('brand').innerHTML = data.brand;

        console.log(data);

    }).catch(err => {
        alert('Error Call Mountebank ' + err);
    });

}