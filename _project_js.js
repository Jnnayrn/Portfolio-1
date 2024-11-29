function validateForm() {
    var x = document.forms["#loginForm"]["username"].value;
    var y = document.forms["#loginForm"]["password"].value;

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    if (y == "") {
      alert("Name must be filled out");
      return false;
    }

    if ((x == "Emman") && (y == "2000")) {
        // Redirect to another HTML page
        window.location.href = "file:C:\Users\asus\Desktop\OTHER FILES 23\main_page.html";
    } else {
        // You can add code here for what happens if the condition is not met.
        window.location.href = "C:\Users\asus\Desktop\OTHER FILES 23\about_me.html";

    }


}

