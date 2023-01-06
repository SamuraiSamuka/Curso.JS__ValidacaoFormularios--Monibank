export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    
    validaNumerosRepetidos(cpf)? console.log('numero repetido'): 
        validaPrimeiroDigito(cpf)? console.log('primeiro dígito inválido'):
            validaSegundoDigito(cpf)? console.log('segundo dígito inválido'):
            console.log("CPF válido!");
    console.log(gerarCpfValidoAleatorio())
    // console.log(validaPrimeiroDigito(cpf))
}

function validaNumerosRepetidos (cpf, digitos) {
    digitos === undefined ? digitos = 11 : '';

    // gera numeros repetidos
    const repetirNumeros = (digito) => {
        let numeroAtual = digito
        for(let i = 0; i < (digitos-1); i++){numeroAtual = numeroAtual.concat(digito)}
        return numeroAtual
    }

    // gera numeros repetidos
    const numerosRepetidos = ['1','2','3','4','5','6','7','8','9','0'].map(digito => repetirNumeros(digito))
    
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf, gerarDigito) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma+= cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;
    
    if(soma === 10 || soma === 11){
        soma = 0;
    }

    if(gerarDigito){
        console.log(soma)
        return soma
    } else {
        return soma != cpf[9]
    }
    // return validaSegundoDigito(cpf.toString().concat(soma))
}

function validaSegundoDigito(cpf, gerarDigito) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma+= cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;
    
    if(soma === 10 || soma === 11){
        soma = 0;
    }

    if(gerarDigito){
        console.log(soma)
        return soma
    } else {
        return soma != cpf[10]
    }

}

function gerarCpfValidoAleatorio(){
    let numeroAleatorio = Math.floor(Math.random()*1000000000)
    
    while (validaNumerosRepetidos(numeroAleatorio, 9)){
        console.log('geraCpfAleatório() diz: numero aleatorio substituído')
        numeroAleatorio = Math.floor(Math.random()*1000000000)
    }

    let cpfAleatorio = numeroAleatorio.toString()
    cpfAleatorio = cpfAleatorio.concat(validaPrimeiroDigito(cpfAleatorio, true))
    cpfAleatorio = cpfAleatorio.concat(validaSegundoDigito(cpfAleatorio, true))
    
    return cpfAleatorio
}

/*
0 Rio Grande do Sul

1 Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins

2 Amazonas, Pará, Roraima, Amapá, Acre e Rondônia

3 Ceará, Maranhão e Piauí

4 Paraíba, Pernambuco, Alagoas e Rio Grande do Norte

5 Bahia e Sergipe

6 Minas Gerais

7 Rio de Janeiro e Espírito Santo

8 São Paulo

9 Paraná e Santa Catarina
*/