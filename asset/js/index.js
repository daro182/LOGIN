import { mail, pass } from "./userDB.js";
import {aproved} from "./respuestas.js"

/*declaracion de variables ingreso*/
let mailin, passin;

for (let i = 1; i < 4 ; i++) {
    alert("Intento numero: " + i)
    mailin = prompt("Por favor ingrese el mail registrado:")
    passin = prompt("Por favor ingrese su password:")
    if (mailin == mail && passin == pass)
        {
        document.body.innerHTML = aproved;
        break;
        }else
            {
            if (mailin != mail)
                {
                    alert ("Mail incorrecto, vuelva a intentarlo")
                }else
                    {if(passin != pass)
                        {
                        alert ("contraseña incorrecta, vuelva a intentarlo")
                        }
                        else{
                        alert("ERROR!!!")
                        }
                }   
            }
}