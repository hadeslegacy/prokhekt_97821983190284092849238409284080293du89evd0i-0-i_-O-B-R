function Get_in() {
    user_name = document.getElementById("enes").value;

    localStorage.setItem("username", user_name);

    window.location = "kwitter_room.html"
}