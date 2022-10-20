// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const angle01 = -10;
const angle02 = 20;
const angle03 = 150;

if (angle01 < 0 || angle02 < 0 || angle03 < 0) {
    console.log("Foi inserido um angulo negativo");
} else if ((angle01 + angle02 + angle03) == 180) {
    console.log("true");
}
else {
    console.log("false");
}