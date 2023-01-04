export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(cpf); 
}

'/d{2}/.?/d{3}/.?/d{3}/d{4}/-?/d{3}'