function callMockShop() {
    const options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    fetch('http://localhost:5550/shop', options).then(response => {
        return response.json();

    }).then(data => {
        if (data.message == 'Access denied') {
            alert(data.message);
            window.location.href = "index.html";
        }

        //alert("ID -> " + data.products[11].id + "Descrição -> " + data.products[11].description + "Preço -> " + data.products[11].price );

        document.getElementById('price_text-center_0').innerHTML = '$' + data.products[0].price;
        document.getElementById('product_text-center_0').innerHTML = data.products[0].description;

        document.getElementById('price_overlay-content_0').innerHTML = '$' + data.products[0].price;
        document.getElementById('product_overlay-content_0').innerHTML = data.products[0].description

        document.getElementById('price_text-center_1').innerHTML = '$' + data.products[1].price;
        document.getElementById('product_text-center_1').innerHTML = data.products[1].description;

        document.getElementById('price_overlay-content_1').innerHTML = '$' + data.products[1].price;
        document.getElementById('product_overlay-content_1').innerHTML = data.products[1].description;

        document.getElementById('price_text-center_2').innerHTML = '$' + data.products[2].price;
        document.getElementById('product_text-center_2').innerHTML = data.products[2].description;

        document.getElementById('price_overlay-content_2').innerHTML = '$' + data.products[2].price;
        document.getElementById('product_overlay-content_2').innerHTML = data.products[2].description;

        document.getElementById('price_text-center_3').innerHTML = '$' + data.products[3].price;
        document.getElementById('product_text-center_3').innerHTML = data.products[3].description;

        document.getElementById('price_overlay-content_3').innerHTML = '$' + data.products[3].price;
        document.getElementById('product_overlay-content_3').innerHTML = data.products[3].description;

        document.getElementById('price_text-center_4').innerHTML = '$' + data.products[4].price;
        document.getElementById('product_text-center_4').innerHTML = data.products[4].description;

        document.getElementById('price_overlay-content_4').innerHTML = '$' + data.products[4].price;
        document.getElementById('product_overlay-content_4').innerHTML = data.products[4].description;

        document.getElementById('price_overlay-content_5').innerHTML = '$' + data.products[5].price;
        document.getElementById('product_overlay-content_5').innerHTML = data.products[5].description;

        document.getElementById('price_text-center_5').innerHTML = '$' + data.products[5].price;
        document.getElementById('product_text-center_5').innerHTML = data.products[5].description;

        document.getElementById('price_text-center_6').innerHTML = '$' + data.products[6].price;
        document.getElementById('product_text-center_6').innerHTML = data.products[6].description;

        document.getElementById('price_overlay-content_6').innerHTML = '$' + data.products[6].price;
        document.getElementById('product_overlay-content_6').innerHTML = data.products[6].description;

        document.getElementById('price_text-center_7').innerHTML = '$' + data.products[7].price;
        document.getElementById('product_text-center_7').innerHTML = data.products[7].description;

        document.getElementById('price_overlay-content_7').innerHTML = '$' + data.products[7].price;
        document.getElementById('product_overlay-content_7').innerHTML = data.products[7].description;

        document.getElementById('price_text-center_8').innerHTML = '$' + data.products[8].price;
        document.getElementById('product_text-center_8').innerHTML = data.products[8].description;

        document.getElementById('price_overlay-content_8').innerHTML = '$' + data.products[8].price;
        document.getElementById('product_overlay-content_8').innerHTML = data.products[8].description;

        document.getElementById('price_text-center_9').innerHTML = '$' + data.products[9].price;
        document.getElementById('product_text-center_9').innerHTML = data.products[9].description;

        document.getElementById('price_overlay-content_9').innerHTML = '$' + data.products[9].price;
        document.getElementById('product_overlay-content_9').innerHTML = data.products[9].description;

        document.getElementById('price_text-center_10').innerHTML = '$' + data.products[10].price;
        document.getElementById('product_text-center_10').innerHTML = data.products[10].description;

        document.getElementById('price_overlay-content_10').innerHTML = '$' + data.products[10].price;
        document.getElementById('product_overlay-content_10').innerHTML = data.products[10].description;

        document.getElementById('price_text-center_11').innerHTML = '$' + data.products[11].price;
        document.getElementById('product_text-center_11').innerHTML = data.products[11].description;

        document.getElementById('price_overlay-content_11').innerHTML = '$' + data.products[11].price;
        document.getElementById('product_overlay-content_11').innerHTML = data.products[11].description;
        

        console.log(data);

    }).catch(err => {
        alert('Error Call Mountebank ' + err);
    });

}