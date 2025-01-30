let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let ulElement = document.querySelector("ul");

function processador(){
    if(inputElement.value === ''){
        alert("Você precisa digitar algum número!");
    }else{
        const valor = Number(inputElement.value);
        alert(`Número digitado: ${valor}`);
        
        let liElement = document.createElement("li");
        let resultElement = document.createElement("a");


        if(valor == 0){  
            let text = document.createTextNode(`O valor é igual a zero!`);
            resultElement.appendChild(text);
            liElement.appendChild(resultElement);
            ulElement.appendChild(liElement);
            ulElement = '';
            ulElement.innerHTML;
        }
        if(valor > 0){
            let text = document.createTextNode(`O valor é positivo!`);
            resultElement.appendChild(text);
            liElement.appendChild(resultElement);
            ulElement.appendChild(liElement);
            ulElement = '';
            ulElement.innerHTML;
        }
        if(valor < 0){
            let text = document.createTextNode(`O valor é negativo!`);
            resultElement.appendChild(text);
            liElement.appendChild(resultElement);
            ulElement.appendChild(liElement);
            ulElement = '';
            ulElement.innerHTML;
        }
    }
}
