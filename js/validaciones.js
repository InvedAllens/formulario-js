// const inputFecha=document.querySelector("#birth");
// inputFecha.addEventListener("blur",validarEdad);

const mensajesError={
    nombre:{
        valueMissing:"Este campo no puede estar vacio",
    },
    email:{
        valueMissing:"Este campo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    password:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    
    nacimiento:{
        valueMissing:"Este campo no puede estar vacio",
        customError:"Debes de ser mayor de 18 años para registrarte"
    },
    telefono:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"El formato deben ser 10 digitos XX-XXXX-XXXX"
    },
    direccion:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"La direccion debe contener almenos 5 caracteres y maximo 40"
    },
    ciudad:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"La ciudad debe contener almenos 3 caracteres y maximo 30"
    },
    estado:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"El estado debe contener almenos 3 caracteres y maximo 30"
    }
    
};
const verificarTipoInput={
    nacimiento:(e)=>{validarEdad(e);}
}
export function validarInput(e){

    const tipoInput=e.target.dataset.tipo;
    if(verificarTipoInput[tipoInput]){
        verificarTipoInput[tipoInput](e);
    }
    if(e.target.validity.valid){
        e.target.parentElement.classList.remove("input-container--invalid");
        console.log(e.target.validity);
    }else{
        e.target.parentElement.classList.add("input-container--invalid");
        e.target.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeError(tipoInput,e.target);
    }
}

function mostrarMensajeError(tipoInput,input){
    //console.log(mensajesError);
    console.log(input.validity);
    console.log(input.value);
    let mensajes='';
    console.log(mensajesError[tipoInput])
    for(const [clave,valor] of Object.entries(mensajesError[tipoInput])){
            if(input.validity[clave]){
                mensajes=valor;
            }
        
    }
    //console.log(mensajes);
    return mensajes;
}


function validarEdad(e){
    const inputFecha=new Date(e.target.value);
    const fechaCliente=new Date(inputFecha.getUTCFullYear()+18,inputFecha.getUTCMonth(),inputFecha.getUTCDate());
    const fechaActual=new Date();
    const esMayorEdad=(fechaCliente<=fechaActual);
    if(!esMayorEdad){
         e.target.setCustomValidity("Debes de ser mayor de 18 años para registrarte");
         e.target.value=null;
    }else{
        e.target.setCustomValidity('');
    }

    console.log(fechaCliente);
    console.log(esMayorEdad);
}
