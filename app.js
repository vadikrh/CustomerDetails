   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyCu5XiKvGiYkAhFDHEXkUjeLXjCQRLiwl0",
    authDomain: "customer-details-27f73.firebaseapp.com",
    databaseURL: "https://customer-details-27f73.firebaseio.com",
    projectId: "customer-details-27f73",
    storageBucket: "customer-details-27f73.appspot.com",
    messagingSenderId: "876711003639",
    appId: "1:876711003639:web:bc779cf0164a3966"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  var db = firebase.firestore();

//Write into Firebase
function writeData(){
    db.collection("users").add({
        name:document.getElementById('name').value,
        mobNo:document.getElementById('phoneNo').value,
        address:document.getElementById('address').value,
        issue:document.getElementById('issue').value

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
   //Clear text after submitting form
    document.getElementById('name').value='';
    document.getElementById('phoneNo').value='';
    document.getElementById('address').value='';
    document.getElementById('issue').value='';
    document.querySelector('.alert').style.display='block';

}
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }