let botaoAdicionarEx = document.querySelector("#buscar-pacientes");

botaoAdicionarEx.addEventListener("click", function(){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if (xhr.status == 200){

            let resposta = xhr.responseText;
    
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log( xhr.status);
            
        }
    });

    xhr.send();
})