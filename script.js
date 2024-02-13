/*Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno,
znak tečka, vaše příjmení a koncovku @mujmail.com.
Celou e-mailovou adresu vypište do stránky.*/


/*let jmeno= "marta"
let prijmeni= "bakesova"
let koncovka= "mujmail.com"

document.body.innerHTML= jmeno + "." + prijmeni +"@"+ koncovka
*/

let mail= "marta" + "." + "bakesova" + "@" + "mujmail.com"
document.body.innerHTML += mail;

//+= znamena pricti k puvodni i to nove (u cisle by se ale secetly)