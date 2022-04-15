const servidor1 = (callback) => setTimeout(function () {
    callback('pablo')
}, 2000)

const servidor2 = (callback) => setTimeout(function () {
    callback(35)
}, 2000)

const servidor3 = (callback) => setTimeout(function () {
    callback('Concepcion')
}, 2000)


servidor1(function(nombre){
    servidor2(function(edad){
        servidor3(function(ciudadNac){

            console.log(`El es ${nombre} tiene ${edad} y nacio en ${ciudadNac}`)

        })
    })
})