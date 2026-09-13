function fetchData() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

    xhr.onload = function () {

        if (xhr.status == 200) {

            var user = JSON.parse(xhr.responseText);

            document.getElementById("output").innerHTML =
                "<h3>User Details</h3>" +
                "<p>Name: " + user.name + "</p>" +
                "<p>Email: " + user.email + "</p>" +
                "<p>Phone: " + user.phone + "</p>";

        }

    };

    xhr.send();

}