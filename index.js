const getUser = async () => {
    try {
        const res = await fetch('https://google.com')
        const data = await res.json()
    } catch (e) {
        console.log(e)
    }

}

getUser()