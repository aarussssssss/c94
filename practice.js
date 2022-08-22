
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCdhUVx8xqAPoI1rQIaCa9OssmH8MdyrMg",
    databaseURL:"https://kweet-ac5fd-default-rtdb.firebaseio.com",
    authDomain: "kweet-ac5fd.firebaseapp.com",
    projectId: "kweet-ac5fd",
    storageBucket: "kweet-ac5fd.appspot.com",
    messagingSenderId: "591511100858",
    appId: "1:591511100858:web:cbc6b617267b3b0237d183"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }