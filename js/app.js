import {validarInput} from "./validaciones.js";
(()=>{
    document.addEventListener("DOMContentLoaded",()=>{
        const inputs=document.querySelectorAll("input");
        inputs.forEach(input =>{
        input.addEventListener("blur",validarInput);
    });


    })

})();