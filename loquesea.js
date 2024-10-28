function agregarBordeImagen1(){
    document.getElementById("imagen1").classList.add("BordeImagen1");
    }
function agregarBordeImagen2(){
    document.getElementById("imagen2").classList.add("BordeImagen2");
    
}

function quitarBordeImagen1(){
    document.getElementById("imagen1").classList.remove("BordeImagen1");
}

function quitarBordeImagen2(){
    document.getElementById("imagen2").classList.remove("BordeImagen2");
}

function cambiarImagen1(){
    document.getElementById("imagen1").src = "./imagenes/Front Lenguajes.png";
}

function cambiarImagen2(){
document.getElementById("imagen2").src = "./imagenes/Back Lenguajes.png";
}