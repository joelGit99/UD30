var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C',
                'K','E','T'];

var numeroDni = prompt("Introduce el número del DNI");
if(numeroDni < 0 || numeroDni > 99999999) {
    var alerta = alert("El número proporcionado no es válido");
}
var letra = prompt("Introduce la letra del DNI");
var letraResultado = numeroDni % 23;
var letraArray = letras[letraResultado];

if(letra != letraArray) {
    var alerta = alert("La letra no es correcta");
} else {
    var alerta = alert("El número y la letra del DNI son correctos");
}