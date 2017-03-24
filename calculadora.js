window.onload = function(){
pantalla = document.getElementById("pantallita");
}
var numPantalla = "0";
var iniPantalla = 1;
var decimal = 0;
var ni = 0;
var op = "no";

function numero(num) {
         if (numPantalla == "0" || iniPantalla == 1  ) {
            pantalla.innerHTML = num;
            numPantalla = num;
            if (num == ".") {
               pantalla.innerHTML = "0.";
               numPantalla = num;
               decimal = 1;
               }
           }
           else {
               if (num == "." && decimal == 0) {
                   pantalla.innerHTML += num;
                   numPantalla += num;
                   decimal = 1;
               }
               else if (num == "." && decimal == 1) {}
               else {
                   pantalla.innerHTML += num;
                   numPantalla += num
               }
            }
            iniPantalla = 0
         }
function operar(s) {
         igual()
         ni = numPantalla
         op = s;
         iniPantalla = 1;
         }
function igual() {
         if (op == "no") {
            pantalla.innerHTML = numPantalla;
            }
         else {
            sl = ni + op + numPantalla;
            sol = eval(sl)
            pantalla.innerHTML = sol
            numPantalla = sol;
            op = "no";
            iniPantalla = 1;
            }
        }
function raizcuadrada() {
         numPantalla = Math.sqrt(numPantalla)
         pantalla.innerHTML = numPantalla;
         op = "no";
         iniPantalla = 1;
         }
function porcentaje() {
         numPantalla = numPantalla/100
         pantalla.innerHTML = numPantalla;
         igualar()
         iniPantalla = 1
         }
function opuesto() {
         nx = Number(numPantalla);
         nx =- nx;
         numPantalla = String(nx);
         pantalla.innerHTML = numPantalla;
         }
function exponente() {
         numPantalla = Math.pow( numPantalla)
         pantalla.innerHTML = numPantalla;
         iniPantalla = 1;
         }
