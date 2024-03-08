for (let i = 2; i <= 10; i++) {
    let table = ''
    for (let j = 1; j <= 10; j++) {
        let result = i * j
        table += `${i} x ${j} = ${result}\n`
    }
    console.log(`Table of ${i}:\n${table}`)
}
