

;(async () => {
    let navBarEl
    await new Promise(resolve => {
        const iv = setInterval(() => {
            if (navBarEl = document.querySelector('.navbar')) {
                resolve()
                clearInterval(iv)
            }
        },  10)
    })
})()