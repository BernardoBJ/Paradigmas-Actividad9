var Msg = (nombre, sexo) => `${sexo == "masculino" ? "Bienvenido " : "Bienvenida "} ${nombre}`;
function Invertir() {
    var texto = document.getElementById('Texto').value;
    var invertido = texto.split('').reverse().join('');
    document.getElementById('Invertido').value = invertido;
}