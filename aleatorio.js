const misModulos = require('./misModulos');
const menu = "Bienvenido al juego de adivinanzas\n"
             +"Opciones:\n"
             +"\n"
             +"1 - nuevo juego\n"
             +"2 - reanudar juego\n"
             +"3 - salir"


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async function game(){
    console.log(menu)
    while (1){
        let n = await misModulos.readLine()
        if (n == 3) break;
        else if ( n == 1)
        console.log('Ingrese un numero para el juego: ')
        else if (n == 2){
        console.log('No hay juego para reanudar')
        break;
        
        }else 
        {
            console.log('No existe esa opcion, ingrese nuevamente')
        }
 
    }
    console.log('Fin del juego')
   
  }

(async function(){
 
    const numeroRandom = getRandomInt(0,11)
    for (let i=0; i < 3;i++){
        process.stdout.write('Ingrese un numero:')
     let miNumero = await misModulos.readLine()
      //laburo


      //fin laburo
       console.log('\n')
    }


})()





