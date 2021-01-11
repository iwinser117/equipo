/* var nombre = "dylan";
edad = 3;
numero1 = 7;
numero2 = 3;
// esto es un objeto
var carro = {type:"renault", modelo:2020, color:"rojo"};
// este es otro obbejo
var pesronax = {
    nombre:"iwinser",
    edad:26,
    color:"black",
    año:1995,
    completo: function() {
        return this.nombre + " " + this.edad;
    }
};
// alert(nombre);
// document.write(pesronax[15]); 
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }; */
//  var animales = ["perro", "gato", "gallina", "pato", "paloma",];
//  alert(animales);

function suma(numero1, numero2) {
    numero1 = prompt("numero");
    numero2 = prompt("numerro");
    document.write(parseInt(numero1) + parseInt(numero2));
    document.write( "<br>" );
}
suma();

 document.write(prompt("escribe tu nombre"));