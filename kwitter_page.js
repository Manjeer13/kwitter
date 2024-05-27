var firebaseConfig = {
    apiKey: "AIzaSyDcqrz3_QoxMn1b29I9Ijuu-qrQFi6xDv8",
    authDomain: "kwitter-current.firebaseapp.com",
    projectId: "kwitter-current",
    storageBucket: "kwitter-current.appspot.com",
    messagingSenderId: "149001059920",
    appId: "1:149001059920:web:eec776ac2475c13cba9b55"
  };
  firebase.InitializeApp(firebaseConfig);

  room_name=localStorage.getItem("roomname");
  user_name=localStorage.getItem("username");


  console.log("roomname"+room_name);
  console.log("username"+user_name);

  function logout() {
    localStorage.removeItem("roomname");
    localStorage.removeItem("username"); 
    window.location = "index.html";
  }
  function send() { 
    msg=document.getElementById("msg").value;
    console.log("Message "+msg); 
    firebase.database().ref(room_name).push({
        username: user_name,
        message: msg, 
        like: 0
    });
    document.getElementById("msg").value ="";
  }

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();