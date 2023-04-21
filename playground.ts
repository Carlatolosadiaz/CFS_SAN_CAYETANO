import * as rls from "readline-sync";
const vuelta1: number =rls.questionInt("ingrese tiempo de la primer vuelta:");
const vuelta2: number =rls.questionInt("ingrese tiempo de la segunda vuelta:");
const vuelta3: number =rls.questionInt("ingrese tiempo de la tercer vuelta:");
const vuelta4: number =rls.questionInt("ingrese tiempo de la cuarta vuelta:");
console.log("tiempo total es de", vuelta1 + vuelta2 + vuelta3 + vuelta4);
console.log("elpromedio de vuelta es", (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4);