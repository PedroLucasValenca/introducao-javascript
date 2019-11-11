let titulo = document.querySelector(".titulo");
titulo.textContent = " Aparecida Nutricionista ";


let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length ; i++ ){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    
    let tdImc = paciente.querySelector(".info-imc");
    
    
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    if (!pesoValido){
        console.log("Peso invalido");
        tdImc.textContent = "Peso invalido";
        pesoValido = false;

        paciente.classList.add("pacienteInvalido");
    
    }
    
    if (!alturaValida) {
        console.log("Altura Invalida");
        tdImc.textContent = "Altura Invalida";
        alturaValida = false;

        paciente.classList.add("pacienteInvalido");
    }
    
    if (pesoValido && alturaValida) {
        let imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){

    if(peso >= 0  && peso < 1000){
        return true;
    }else{
        return false;
    }

}

function validaAltura(altura){

    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

