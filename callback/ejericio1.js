function traerNombreInternet(callback){
    setTimeout(function(){
    callback('Pablo')
    },3000)
}

traerNombreInternet(function(nombre){
    console.log('Internet me devolvio: ',nombre)
})


console.log('Fin del programa')