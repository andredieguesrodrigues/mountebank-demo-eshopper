function callMockCheckout() {
    const options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    fetch('http://localhost:5550/checkout', options).then(response => {
        return response.json();
    }).then(data => {
        if (data.message == 'Access denied') {
            alert(data.message);
            window.location.href = "index.html";
        }

       document.getElementById('user_register_account').setAttribute('checked',data.user.register_account);

       document.getElementById('shopper_information_display_name').setAttribute('value',data.shopper_information.display_name);
       document.getElementById('shopper_information_username').setAttribute('value',data.shopper_information.username);
       document.getElementById('shopper_information_password').setAttribute('value',data.shopper_information.password);
       document.getElementById('shopper_information_password2').setAttribute('value',data.shopper_information.password);
       document.getElementById('shopper_information_password3').setAttribute('value',data.shopper_information.password);

       document.getElementById('bill_to_company_name').setAttribute('value',data.bill_to.company_name);
       document.getElementById('bill_to_email').setAttribute('value',data.bill_to.email);
       document.getElementById('bill_to_title').setAttribute('value',data.bill_to.title);
       document.getElementById('bill_to_first_name').setAttribute('value',data.bill_to.first_name);
       document.getElementById('bill_to_middle_name').setAttribute('value',data.bill_to.middle_name);
       document.getElementById('bill_to_last_name').setAttribute('value',data.bill_to.last_name);
       document.getElementById('bill_to_address_1').setAttribute('value',data.bill_to.address_1);
       document.getElementById('bill_to_address_2').setAttribute('value',data.bill_to.address_2);
       document.getElementById('bill_to_postal_code').setAttribute('value',data.bill_to.postal_code);
       //document.getElementById('bill_to_country').setAttribute('value',data.bill_to.country);
       //document.getElementById('bill_to_state').setAttribute('value',data.bill_to.state);
       document.getElementById('bill_to_country').value = data.bill_to.country;
       document.getElementById('bill_to_state').value = data.bill_to.state;
       document.getElementById('bill_to_phone').setAttribute('value',data.bill_to.phone);
       document.getElementById('bill_to_mobile_phone').setAttribute('value',data.bill_to.mobile_phone);
       document.getElementById('bill_to_fax').setAttribute('value',data.bill_to.fax);
       //document.getElementById('bill_to_notes').setAttribute('value',data.bill_to.notes);
       document.getElementById('bill_to_notes').value += data.bill_to.notes;


       document.getElementById('review_payment_description').innerHTML = data.review_payment.description;
       document.getElementById('review_payment_web_id').innerHTML = data.review_payment.web_id;
       document.getElementById('review_payment_price').innerHTML = data.review_payment.price;
       //document.getElementById('review_payment_quantity').innerHTML = data.review_payment.quantity;
       document.getElementById('review_payment_quantity').setAttribute('value',data.review_payment.quantity);
       document.getElementById('review_payment_total').innerHTML = data.review_payment.card_sub_total;
       document.getElementById('review_payment_card_sub_total').innerHTML = data.review_payment.card_sub_total;
       document.getElementById('review_payment_exo_tax').innerHTML = data.review_payment.exo_tax;
       document.getElementById('review_payment_shipping_cost').innerHTML = data.review_payment.shipping_cost;
       document.getElementById('review_payment_total2').innerHTML = data.review_payment.total;

       console.log(data);

    }).catch(err => {
        alert('Error Call Mountebank ' + err);
    });

}