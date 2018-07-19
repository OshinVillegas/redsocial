
var provider = new firebase.auth.GoogleAuthProvider();
$('#google').click( () => {
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').show().append("<p>"+result.user.displayName+"</p>"+"<img src = '" + result.user.photoURL + "'  />")

        });
})
const log = new firebase.auth.FacebookAuthProvider();
$('#facebook').click(() => {
    log.addScope('public_profile');
    firebase.auth().signInWithPopup(log)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<p>"+result.user.displayName+"</p>"+"<img src = '" + result.user.photoURL + "'/>").show();

        });
})

$('#ingresa').click(()=>{
    const emailIngreso = document.getElementById("email").value;
    const contrasenaIngreso = document.getElementById("contrasena").value;
    firebase.auth().signInWithEmailAndPassword(emailIngreso, contrasenaIngreso)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<img src ='imagenes/sin_perfil.png' />").show();
});
})
document.getElementById('registrar').addEventListener("click", loginEmail);
function loginEmail() {


    const email1 = document.getElementById("email1").value;
    const pass = document.getElementById("pass").value;

    firebase.auth().createUserWithEmailAndPassword(email1, pass)
        .then(result => {
            const user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function () {
                // enviando Email
                console.log('enviando correo---')
            }).catch(function (error) {
                console.log(error)
            });
        })
        .catch(error => console.log(`Error ${error.code}:${error.message}`))
}
document.getElementById('cerrar').addEventListener("click", cerrar);
function cerrar(){
    firebase.auth().signOut()
        .then(function result(){
            console.log('saliendo...')
            $('#data').hide();
            $('#root').show();
        });
        } 
firebase.initializeApp({
    apiKey: "AIzaSyCK3gtzmgVwu0Z3RgTKLnCDGyqPZp56UI4",
    authDomain: "freew-b52fa.firebaseapp.com",
    projectId: "freew-b52fa"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardar() {

    let post = document.getElementById('post').value;
    db.collection("users").add({
        first: post
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("post").value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}   

// leer datos
let content = document.getElementById('content');
db.collection("users").onSnapshot((querySnapshot) => {
    console.log(querySnapshot)
    content.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(doc)
        content.innerHTML +=`
        <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="imagenes/sin_perfil.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">16 min</span>
       <div id=${doc.id}></div>
                <div>${doc.data().first}</div>
                <button class = "btn btn-danger" onclick = "eliminar('${doc.id}')">Elimina</button>           
                 <button class="btn btn-warning" onclick = "editar('${doc.id}','${doc.data().first}')">Editar</button>
       <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div> </div><br> `
    });
});

//borrar datos

function eliminar(id){
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}


//editar
function editar(id,post){
    document.getElementById('post').value = post;

    let boton = document.getElementById('botonpostea');
    boton.innerHTML = 'Editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("users").doc(id);

        let post = document.getElementById('post').value;

        return washingtonRef.update({
            first: post
        })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Comparte';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });



    }
}
function renderIlike() {
    var element = document.createElement('script'); 
    element.type = "text/javascript"; 
    element.id = "facebook-jssdk"
    element.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(element, s);
    };
    window.onload=function(){
    renderIlike();}

    function renderPlusone() {
        gapi.plusone.render("plusone-div");}
        function renderIlike() {
        var element = document.createElement('script'); 
        element.type = "text/javascript"; 
        element.id = "facebook-jssdk"
        element.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
        var s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(element, s);};
        window.onload=function(){
        renderPlusone();
        renderIlike();}
        

 //div donde se registra el usuario

var provider1 = new firebase.auth.GoogleAuthProvider();
$('#google1').click( () => {
    firebase.auth().signInWithPopup(provider1)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<p>"+result.user.displayName+"</p>"+"<img src = '" + result.user.photoURL + "'/>").show();
           
        });
})
const log1 = new firebase.auth.FacebookAuthProvider();
$('#facebook1').click(() => {
    log1.addScope('public_profile');
    firebase.auth().signInWithPopup(log1)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<p>"+result.user.displayName+"</p>"+"<img src = '" + result.user.photoURL + "'/>").show();

        });
})

$('#ingresa1').click(()=>{
    const emailIngreso1 = document.getElementById("email1").value;
    const contrasenaIngreso1 = document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(emailIngreso1, contrasenaIngreso1)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<img src ='imagenes/sin_perfil.png' />").show();
});
})

    firebase.auth().createUserWithEmailAndPassword(email1, pass)
        .then(result => {
            const user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function () {
                // enviando Email
                console.log('enviando correo---')
            }).catch(function (error) {
                console.log(error)
            }).catch(error => console.log(`Error ${error.code}:${error.message}`))
  })

