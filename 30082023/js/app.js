
// NO HAGAN NUNCA ESTO!!!!! XXXXXXXXXXXX
const ar = [3, 4, -9, [true, false, false], -885, NaN, 0, "hola",  undefined, null, 779, {id:9}];

//console.log('%capp.js line:5 ar', 'color: #007acc;', ar);

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

console.log('%capp.js line:9 meses', 'color: #007acc;', meses);

meses.push("Mayo");

meses.push("Junio", "Julio", "Agosto");

console.log('%capp.js line:13 meses', 'color: #007acc;', meses);

console.log('%capp.js line:17 object', 'color: #007acc;', meses.push(null));

const mes = meses.pop();

console.log('%capp.js line:21 mes', 'color: #007acc;', mes);

const primeros = meses.slice(0, 4);
const ultimos = meses.slice(5);

console.log('%capp.js line:26 primeros, ultimos', 'color: #007acc;', primeros, ultimos);


// Borrar el primer elemento del arreglo y lo retorna (modifica el arreglo original)
const primerElemento = meses.splice(0, 1);

//borrar los tres primeros elementos y agrega los tres siguientes strings al arreglo original
meses.splice(0, 3, "uno", "dos", "tres");

//List<String> list = new ArrayList();

const notas = [4, 5, 4, 3, 2, 1, 0, 5, 4, 5, 3];


// creacion de objetos de forma literal
const persona = { 
    _id: 1, 
    _nombre: 'Roberto',
    _email: 'rober@email.com',

    padres: ["Bill Gates", "Melinda Gates"],

    setNombre: function(name) { this._nombre = name },
    cantar: function(){ 
        console.log('%capp.js line:46 this', 'color: #007acc;', this);
        alert(" Aleeeluyaa! Soy " + this._nombre); }
 };

//const lapiz = new Object();

console.log('%capp.js line:43 persona', 'color: #007acc;', persona);


function sumar(a, b){
    return a + b;
}

const mult = function(a, b){ 
    return a * b; 
}

function dividir(a, b){
    console.log('%capp.js line:68 a/b', 'color: #007acc;', a/b);
}

console.log('%capp.js line:63 sumar(3, 5)', 'color: #007acc;', sumar(3, 5));



//const ar2 = new Array(25);
//ar2[10] = "Fiuni";
//ar2[30] = "Uni";
//console.log("Arreglos: ", ar, ar.length, ar2, ar2.length);





function fn(){
    console.log('%cindex.html line:11', 'color: #007acc;', "Funciona ejecutada");
    document.getElementById("myDiv").innerHTML = "CONTENIDO DEL DIV MODIFICADO";
}