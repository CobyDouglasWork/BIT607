window.onload = function(){
    
    //display message for sign up form
    function displayMessage(){
        //get field values
        let firstName = document.getElementById('firstNameField').value;
        let lastName = document.getElementById('lastNameField').value;
        let email = document.getElementById('emailField').value;
        let address = document.getElementById('addressField').value;
        let numberOfPeople = document.getElementById('numberOfPeople').value;
        let Table = document.getElementById('Table').value;
        //build message
        var information = "Thank you your booking has been confirmed";
        //validate field inputs
        if(firstName == ""){
            window.alert("Please enter your first name");
        }
        else if(lastName == ""){
            window.alert("Please enter your last name");
        }
        else if(email == ""){
            window.alert("Please enter your email name");
        }
        else if(address == ""){
            window.alert("Please enter your address name");
        }
        else if(numberOfPeople == ""){
            window.alert("Please enter the number of people coming");
        }
        else if(Table == ""){
            window.alert("Please enter your table number");
        }
        //send message alert
        else{
            window.alert(information);
        }
    }   

    var reservationbutton = document.getElementById("reservationbutton");
    reservationbutton.addEventListener("click", displayMessage);
}