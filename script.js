




function cambiar_parrafo(){
    
    document.getElementById("descripcion-edit").style.display="block"; 
    let texto= document.getElementById("descripcion").innerText;
}

function function2(valor){
          
    document.getElementById("descripcion").innerText=valor;
}


let textarea=document.getElementById("descripcion-edit")
textarea.addEventListener('keyup', (e) => {
    
    if (e.key=="Enter") {
        document.getElementById("descripcion-edit").style.display="none";
    }

} )