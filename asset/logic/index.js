setDate = () =>{
    const secondHand = document.querySelector(".second-hand");
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getDate();
    const minutes = now.getMinutes();
    const secondsDegrees = ((seconds / 60) * 360) +90;
    const hoursDegrees = ((hours / 60) * 360) +90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    hourHand.style.transform =  `rotate(${hoursDegrees}deg)`
    console.log(seconds);
    console.log(hours);                                                                                                                                                                                 
};

setInterval(setDate, 1000);