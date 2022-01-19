function callMockPayment() {

    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    var number = document.getElementById("number").value;
    var expiration_date = document.getElementById("expiration_date").value;
    var cvc = document.getElementById("cvc").value;
    var owner = document.getElementById("owner").value;

    if (number == '' || expiration_date == ''|| cvc == ''|| owner == '') {
        alert("Please Fill All Fields");

    }
    else {
        fetch('http://localhost:5550/payment?number=' + number + '&expiration_date=' + expiration_date + '&cvc=' + cvc + '&owner=' + owner , options).then(response => {

            return response.json();

        }).then(data => {
            console.log(data);

            alert(data.message);

            window.location.href = "shop.html";

        }).catch(err => {
            alert('Error Call Mountebank ' + err);
        });

    }


}