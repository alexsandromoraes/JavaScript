var agora = new Date()
var diasem = agora.getDay()
/* os dia de acodo com o getday
    0 - Domingo
    1 - segunda
    2 - terça
    3 - quarta
    4 - quinta 
    5 - sexta
    6 - sabado
*/
console.log(`hoje é `)
switch(diasem){
    case 0: 
    console.log(`Domingo`)
    break
    case 1: 
    console.log(`Segunda`)
    break
    case 1: 
    console.log(`Terça`)
    break
    case 3: 
    console.log(`Quarta`)
    break
    case 4: 
    console.log(`Quinta`)
    break
    case 5: 
    console.log(`Sexta`)
    break
    case 5: 
    console.log(`Sabado`)
    break
    default: 
    console.log(`[ERRO] Dia Invalido!!!`)
}