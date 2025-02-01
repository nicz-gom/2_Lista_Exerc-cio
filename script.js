let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let ulElement = document.querySelector("ul");

function processador(){
    if(inputElement.value.trim() === ''){ //o trim serve para desconsiderar espaços em branco
        alert("Você precisa digitar algum número!");
        return;
    }else{
        const valor = Number(inputElement.value);
        alert(`Número digitado: ${valor}`);

        ulElement.innerHTML = "";

        let liElement = document.createElement("li");

        let textContent = "";

        if(valor == 0){  
            textContent = "O valor é igual a zero!";
        }
        if(valor > 0){
            textContent = "O valor é positivo!";
        }
        if(valor < 0){
            textContent = "O valor é negativo!";
        }

        liElement.textContent = textContent;
        ulElement.appendChild(liElement);

        inputElement.value = '';

        inputElement.focus();
    }
}

function reload(){
   addEventListener("click", () => {
        location.reload();
   })
}
