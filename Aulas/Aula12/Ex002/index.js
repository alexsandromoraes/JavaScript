//Horas
var tempo = new Date()
var hora = tempo.getHours()
console.log(`São ${hora} Horas!`)
if (hora < 6){
    console.log('Boa Madrugada')
} else if (hora < 12) {
        console.log('Bom dia')
} else if(hora < 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa noite')
}