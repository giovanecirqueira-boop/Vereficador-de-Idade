const campoIdade = document.getElementById('idade');
const botao = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function() {
    const idade = Number(campoIdade.value);

    if (campoIdade.value.trim() === "" || !Number.isInteger(idade) || idade < 0) {
        resultado.textContent = "Por favor, insira uma idade válida.";
    } else if (idade ===0)  {
        resultado.textContent = "Você é recém-nascido.";
    } else if (idade >60) {
        resultado.textContent = "Você é idoso.";    
    } else if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
    } else if (idade < 18 && idade >= 13) {
        resultado.textContent = "Você é adolescente."; 
    } else if (idade < 13 && idade >= 3) {
        resultado.textContent = "Você é criança.";
    } else if (idade < 3 && idade >= 1) {
        resultado.textContent = "Você é bebê.";
    }  
});