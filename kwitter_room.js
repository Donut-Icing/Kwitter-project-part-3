
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {apiKey: "AIzaSyDR3-2EUSZ_aZ1f-nvT4hUzBUdxXj-HuRA",
  authDomain: "kwitterproject-3a1cd.firebaseapp.com",
  databaseURL: "https://kwitterproject-3a1cd-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-3a1cd",
  storageBucket: "kwitterproject-3a1cd.appspot.com",
  messagingSenderId: "862966753305",
  appId: "1:862966753305:web:6f5361a8ed6e04bc1a6288",
  measurementId: "G-N43J0XCTBN"}

  const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData()
 {firebase.database().ref("/").on('value',
  function(snapshot) 
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("room name"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      //Start code

      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}