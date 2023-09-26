import { mail, pass } from "./userDB.js";
import {aproved, denied} from "./respuestas.js"

/*declaracion de variables ingreso*/
let mailin, passin;

for (let i = 1; i < 4 ; i++)
    {
    alert("Intento numero: " + i)
    mailin = prompt("Por favor ingrese el mail registrado:")
        
            if (mailin != mail)
                {
                    alert ("Mail incorrecto")
                }
                else
                    {
                    passin = prompt("Por favor ingrese su password:")
                    if(passin != pass)
                        {
                        alert ("contraseña incorrecta")
                        }
                        else
                            {
                                document.body.innerHTML = aproved;
                                break;
                            }
                }   
                document.body.innerHTML = denied;
            
    }


