const tecnologia = "React";

function objetivoDoCurso(tecnologia) {
    return (`Meu objetivo é aprender ${tecnologia}.`);   
}

console.log("\nFunction");
console.log(objetivoDoCurso(tecnologia));

const objetivoDoCurso2 = (tecnologia) => {
    return (`Meu objetivo é aprender ${tecnologia}.`);   
}

console.log("\nArrow Function")
console.log(objetivoDoCurso2(tecnologia));
