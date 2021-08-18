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

username = localStorage.getItem("username");
naming = localStorage.getItem("room_namers");

function send() {
      variable = document.getElementById("msg").value
      firebase.database().ref(naming).push({
            name: username,
            message: variable,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function loggingouttanowhere() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_namers");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + naming).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;



                        //Start code

                        console.log(firebase_message_id);
                        console.log(message_data);
                        name_1 = message_data['name']
                        message = message_data['message']
                        likes = message_data['like']
                        name_with_tag = "<h4>" + name_1 + "<image class='user_tick' src='tick.png'>"
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
                        like_button = "<button class='btn btn-danger' id=" + firebase_message_id + "value=" + like + "onclick='like_button(this.id)'>"
                        span_with_tag = "<span class=''glyphicon gliphicon-thumbs-up>Like:" + like + "</span></button><hr>"

                        row = name_with_tag + message_with_tag + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function like_button(message_id) {
      console.log("clicked on like button" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      udated_likes = Number(likes) + 1;
      console.log(udated_likes);

      firebase.database().ref(naming).child(message_id).update({
            like : udated_likes
      });

}

function log_it_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_namers");
      window.location = "index.html"; 
}