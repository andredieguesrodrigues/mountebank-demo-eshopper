function callMockLogin() {

    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dataString = 'email=' + email + '&password=' + password;


    if (email == '' || password == '') {
        alert("Please Fill All Fields");

    }
    else {
        fetch('http://localhost:5550/login?email=' + email + '&password=' + password, options).then(response => {

            return response.json();

        }).then(data => {
            console.log(data);
            window.location.href = "shop.html";

        }).catch(err => {
            alert('Error Call Mountebank ' + err);
        });

    }


}