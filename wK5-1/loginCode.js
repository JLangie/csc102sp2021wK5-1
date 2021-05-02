//Function to validate credentials needed to proceed to main page.
function checkCreds() {
    //Creates credentials required to sumbit.
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName
    //Set parameters and conditions for credential validation. Full name 1-20 characters, badge number between 1-999.
    if (fullName.length > 20 || fullName.length == 1) {
        // if true,
        document.getElementById("loginStatus").innerHTML = "Full name invalid!"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!"
    }
    else {
        alert("Acess Granted!! Welcome" + " " + fullName + "!");
        location.replace("index.html");
    }
}