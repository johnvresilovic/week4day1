// const logNumbers = () => {for (i = 1; i < 21; i++) {console.log(i)}}
// logNumbers()

// const logEvenNumbers = () => {
//     for (i = 1; i < 201; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// logEvenNumbers()

const fizzBuzz = () => {
    for (i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else {
            if (i % 5 === 0) {
                console.log('Buzz')
                } else {
                    if (i % 3 === 0) {
                        console.log('Fizz')
                    } else {
                        console.log(i)
                    }
                }
            }
        }
    }
fizzBuzz()