    let numeroSecreto = 6;
    let numberUser = 0;
    let intentos = 1;
    let palabraIntento = "intento";
    let maximosIntentos = 3;
    //se añade loop/bucle para decir que mientras la condición de numero usuario es distinta a numero secreto se va a repetir el juego
    while (numberUser != numeroSecreto) { 
    //método para mostrar un cuadro de diálogo que le pide al usuario que ingrese información.
    numberUser = prompt("¿Me indicas un número entre 1 y 10?")
    // Agrega un console.log para verificar el valor de "numberUser" después de la entrada del usuario
    console.log('Valor de intento:', numberUser);

    // Agrega un console.log para verificar la comparación entre "numberUser" y "numeroSecreto"
    console.log('Resultado de la comparación:', numberUser == numeroSecreto);
    // operador de igualdad no estricta (==), JavaScript intenta convertir los operandos al mismo tipo antes de realizar la comparación. En este caso, la cadena ingresada por el usuario se convierte a número, y luego se compara con numeroSecreto. Es por eso que funciona cuando usas ==.
        if (numberUser == numeroSecreto){
            // Se emplea template string para almacenar variable
        alert(`¡Felicidades, acertaste! El número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraIntento}`)
        // también puede ser así : alert('Acertaste el número secreto es: ' + numeroSecreto);
    }else{ 
        //se añaden condicionales anidados para dar pistas al usuario
        if (numberUser > numeroSecreto){
            alert("El número secreto es menor")
        }else{
            alert("El número secreto es mayor")
        }
        //incrementamos el contador cuando el usuario no acierta
        intentos = intentos + 1;
        palabraIntento = "intentos";

        if(intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`)
            break;
        }
        // Agrega un console.log para verificar el valor de "numberUser" cuando el jugador se equivoca
        console.log('Valor del número secreto:', numeroSecreto);
        //alert("Lo siento, no acertaste el número") 
    }
    };
 /*PARA USAR LA IGUALDAD ESTRICTA PRIMERO SE TIENE QUE CONVERTIR AL MISMO TIPO EL STRING QUE EL USUARIO INGRESA A TIPO NUMERO CON parseInt 


let numeroSecreto = 6;
// Método para mostrar un cuadro de diálogo que le pide al usuario que ingrese información.
let numberUser = prompt("¿Me indicas un número, por favor?");

console.log(numberUser);

// Usar parseInt para convertir la entrada del usuario a un número
let numeroUsuarioParseado = parseInt(numberUser);

if (numeroUsuarioParseado === numeroSecreto) {
    alert("Número correcto");
} else {
    alert("Número incorrecto");
}



*/



/* EJEMPLOS DE SUMAS EN JS:
NOTA: RECUERDA QUE SIEMPRE SE TIENE QUE EJECUTAR LA FUNCIÓN 


EJEMPLO 1:

const primerNumero = 4;
const segundoNumero = 10;

function sumarNumeros(primerNumero, segundoNumero) {
    const resultado = primerNumero + segundoNumero;
    return resultado;
}

const resultadoSuma = sumarNumeros(primerNumero, segundoNumero);
console.log(resultadoSuma); 



 EJEMPLO 2 DONDE LLAMAMOS A LA FUNCIÓN:

const primerNumero = 4;
const segundoNumero = 10;

function sumarNumeros(primerNumero, segundoNumero) {
    const resultado = primerNumero + segundoNumero;
    console.log(resultado);  // Imprimir directamente desde la función
    return resultado;
}

// Llamando a la función
const resultadoSuma = sumarNumeros(primerNumero, segundoNumero);





EJEMPLO 3: 

const primerNumero = 4;
const segundoNumero = 10;

function sumarNumeros() {
    // La función accede a las variables primerNumero y segundoNumero desde el ámbito circundante
    const resultado = primerNumero + segundoNumero;
    
    return resultado;
}

// Llamando a la función
console.log(sumarNumeros());





EJEMPLO 4:
const numeroUno = 2;
const numeroDos = 4;

function sumar(numeroUno, numeroDos) {
    const resultado = numeroUno + numeroDos;
    console.log(resultado);  // Este console.log no se ejecutará si no llamamos a la función
    return resultado;
}

// Llamando a la función para que se ejecute
console.log(sumar(numeroUno, numeroDos));  // Aquí se mostrará el resultado en consola





 EJEMPLO 5:  


 function suma() {

            console.log(4 + 6)

        }

        // TIENE QUE LLAMARSE A LA FUNCIÓN PARA QUE SE EJECUTE Y APAREZCA EN CONSOLA

        suma() 

        





         ESTAS DOS FUNCIONES EJECUTAN LO MISMO:

        function suma(x, y) {
            console.log(x + y)
        }
        suma(4, 6)



        //////////////////////////


  function suma(x, y) {
          return (x + y)
        }
        suma(4, 6)


        */










       
        