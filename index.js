const counter = document.querySelectorAll('.num')
const speed = 200

counter.forEach(counter =>{
    const animate = () => {
        const value = +counter.getAttribute('ldig')
        const data = +counter.innerText

        const time = value / speed
        if(data < value) {
            counter.innerText = Math.ceil(data + time)
            setTimeout(animate , 1)
        }else{
            counter.innerText = value
        }
    }
    animate()
})