var firebaseConfig = {
      apiKey: "AIzaSyBUhyjPEVEy7U6IpbPj1CNCfonMXKKbKCc",
      authDomain: "project-93-to-97.firebaseapp.com",
      databaseURL: "https://project-93-to-97-default-rtdb.firebaseio.com",
      projectId: "project-93-to-97",
      storageBucket: "project-93-to-97.appspot.com",
      messagingSenderId: "77990633500",
      appId: "1:77990633500:web:0f7b6ee995e30833f47fd9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class='naming' id='" + Room_names + "' onclick='naming_function(this.id)'>" + Room_names + " </div>"
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();

function naming_function(room) {
      console.log(room);
      localStorage.setItem("room_namers", room);
      window.location = "kwitter_page.html";
}


username = localStorage.getItem("username");
document.getElementById("name").innerHTML = "Welcome " + username + "!";

function room_add() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "lets mine some diamonds"
      })

      localStorage.setItem("room_namers", room_name);

      window.location = "kwitter_page.html";
}

function log_it_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_namers");
      window.location = "index.html"; 
}