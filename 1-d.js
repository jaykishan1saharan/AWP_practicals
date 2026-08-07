document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let branch = document.getElementById("branch").value;
    let pass = document.getElementById("password").value;

    document.getElementById("output").innerHTML =
        "<h3>Registration Successful</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Roll No: " + roll + "</p>" +
        "<p>Branch: " + branch + "</p>" +
        "<p>Password: " + "*".repeat(pass.length) + "</p>";

});