/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

*/

const test = 45

console.log('Tengo 45 años de edad');
console.log('Tengo '+test + ' años de edad')
console.log(`Tengo ${test} años de edad`);

const matriz = 
[ 
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

// for (let i= 0; i < 3;i++){
//     for (let u = 0; u < 3 ;u++){
       
//        if (i == 0){
//         if ( u==0){
//        matriz[i][u] = 'x';
        
//         }

//        }
//        if (i == 1){
//         if ( u==1){
//        matriz[i][u] = 'x';
        
//         }

//        }      if (i == 2){
//               if ( u==2){
//        matriz[i][u] = 'x';
        
//         }

//        }
        
//     }

// }

for (let i = 0,e = 2; i < 3;i++,e--){
    matriz[i][i] = matriz[i][e]= 'x'
    
}  

mostrarMatriz(matriz,3)


function mostrarMatriz(matriz,longitud){
    for (let i= 0; i < longitud;i++){
        for (let u = 0; u < longitud ;u++){
            let elemento = matriz[i][u]
            process.stdout.write(`${elemento} `)
        }
        process.stdout.write('\n')
        
    }
}