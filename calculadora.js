window.onload = function(){
pantalla=document.getElementById("pantallita");
}
numPantalla="0";
xi=1;
decimal=0;
ni=0;
op="no";

function numero(num) {
         if (numPantalla=="0" || xi==1  ) {
            pantalla.innerHTML=num;
            numPantalla=num;
            if (num==".") {
               pantalla.innerHTML="0.";
               numPantalla=num;
               decimal=1;
               }
           }
           else {
               if (num=="." && decimal==0) {
                   pantalla.innerHTML+=num;
                   numPantalla+=num;
                   decimal=1;
               }
               else if (num=="." && decimal==1) {}
               else {
                   pantalla.innerHTML+=num;
                   numPantalla+=num
               }
            }
            xi=0
         }
function operar(s) {
         igual()
         ni=numPantalla
         op=s;
         xi=1;
         }
function igual() {
         if (op=="no") {
            pantalla.innerHTML= numPantalla;
            }
         else {
            sl=ni+op+numPantalla;
            sol=eval(sl)
            pantalla.innerHTML=sol
            numPantalla=sol;
            op="no";
            xi=1;
            }
        }
function raizcuadrada() {
         numPantalla=Math.sqrt(numPantalla)
         pantalla.innerHTML=numPantalla;
         op="no";
         xi=1;
         }
function porcentaje() {
         numPantalla=numPantalla/100
         pantalla.innerHTML=numPantalla;
         igualar()
         xi=1
         }
function opuesto() {
         nx=Number(numPantalla);
         nx=-nx;
         numPantalla=String(nx);
         pantalla.innerHTML=numPantalla;
         }
function exponente() {
         numPantalla = Math.pow(numPantalla,2)
         pantalla.innerHTML=numPantalla;
         xi=1;
         }
