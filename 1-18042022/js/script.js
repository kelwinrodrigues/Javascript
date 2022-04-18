// Janela de alerta criada em javascript
// alert("Olá. Seja bem vinde");

// Vamos solicitar ao usuário que entre com o seu nome
// Utilzarems o prompt associado à uma variável
/*var nome = "";
nome= prompt("Digite seu nome");
alert(nome.toUpperCase()); //nome em letras maiusculas
*/

// Calcular as 5 operações aritmeticas
var numero1 = prompt("Digite um número");
var numero2 = prompt("Digite outro número");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar  = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
    "Os resultados são: \n\n"+
    "soma: "+soma+
    "\nsubtração: "+subtrair+
    "\nmultiplicação: "+multiplicar+
    "\ndivisão: "+dividir+
    "\nresto: "+resto
);
