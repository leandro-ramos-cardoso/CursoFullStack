const tecnologia = "React";

function objetivoDoCurso (nomeDaTecnologia) {
    return `O objetivo do curso é aprender ${nomeDaTecnologia}`;
}

// Arrow Function
const objetivoDoCurso2 = (nomeDaTecnologia) => {
    return `O objetivo do curso é aprender ${nomeDaTecnologia}`;
}

console.log(objetivoDoCurso(tecnologia));