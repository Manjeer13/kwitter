var firebaseConfig = {
  apiKey: "AIzaSyDGwGvi8Cabw576YR4Nl4A9FXP9HUHBKyE",
  authDomain: "kwitter-cecfa.firebaseapp.com",
  databaseURL: "https://kwitter-cecfa-default-rtdb.firebaseio.com",
  projectId: "kwitter-cecfa",
  storageBucket: "kwitter-cecfa.appspot.com",
  messagingSenderId: "151670990276",
  appId: "1:151670990276:web:b501092866fb09ee30b091"
};

// Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" !";

function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding Room Name"
  });
  localStorage.setItem("roomname",Room_names);

  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("roomname", name); 
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("roomname");
  localStorage.removeItem("username"); 
  window.location = "index.html";
}