"use strict"
let form = document.querySelector("#form");

let personas = [];

form.addEventListener("submit", function (e){
    e.preventDefault();
    let formData = new FormData(form);
    let dni=formData.get("dni");
    let edad=formData.get("edad");
    let ciudad=formData.get("ciudad");
    
    let persona = {"dni":dni,
        "edad":edad,
        "ciudad":ciudad,
    }
    personas.push(persona);

    console.table(personas);
});

let divBuscar = document.querySelector("#buscarpordni");

    divBuscar.addEventListener("submit",function(e){
    e.preventDefault();

    let inputBuscar = document.querySelector("#inputbuscar").value;
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML="";

    personas.forEach(element => {
        if (inputBuscar==element.dni){
            resultado.innerHTML+=
            `DNI:${element.dni}
             EDAD:${element.edad}
             CIUDAD:${element.ciudad}`;
        } else {
            resultado.innerHTML="La persona que buscas no está registrada";
        }
    });
    console.log(inputBuscar);
});