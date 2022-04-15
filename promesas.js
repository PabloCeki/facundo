const serv1 = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //resolve('Pablo')
            reject('Error en el nombre')
    }, 2000)
})

const serv2 = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(35)
    }, 2000)
})

const serv3 = () => new Promise((resolve, reject) => {
    setTimeout(function () {
         reject('Error en el servidor')
       // resolve('concep')
    }, 2000)
})


// serv1().then(nombre => {
//     serv2().then(edad => {
//         serv3().then(ciudadNac => {
//             console.log(`El es ${nombre} tiene ${edad} y nacio en ${ciudadNac}`)

//         }).catch (err => {
//             console.log('El error es: ', err)
//         })
//     })



// })

async function iniciar() {

    try {
        const nombre = await serv1();
        const edad = await serv2();
        const ciudadNac = await serv3().catch( err => {});

        console.log(`El es ${nombre} tiene ${edad} y nacio en ${ciudadNac || 'sin ciudad'}`)
    } catch (err) {
        console.log(err)
    }
}


iniciar();
