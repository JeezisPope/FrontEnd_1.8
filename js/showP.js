function mostrar(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }

    var qlq = document.getElementById("boton");
    if(qlq.textContent == "Show Password"){
        qlq.textContent = "Hide Password"
    } else{
        qlq.textContent = "Show Password"
    }
}

function favoritos(){
    var tipo = document.getElementById("favoritos");
    alert("Agregado a Favoritos")
}

function validar(){
    var tipo = document.getElementById("password");
    var validacion = document.getElementById("Sign");
    var fono = document.getElementById("cel")



    if(tipo.textContent == " "){
        alert("alo");
    }else if(fono.length > 8){
        alert("Digitar un numero de 8 Digitos");
    }else{
        alert("Ha iniciado sesion")
    }

}


