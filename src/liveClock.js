import { format} from 'date-fns';



const liveClock = () => {
    // creating new date
    // formatting dates, hours, minutes and seconds using date-fns library
    const now = new Date();
    const formattedDate = format(now, 'EEEE do MMM yyyy');
    const formattedClock = format(now, 'HH : mm : ss aaa');
    let clock = document.getElementById("date");
    //injecting span elements with formatted dates to HTML
    clock.innerHTML = `
        <span>${formattedDate}</span><br>
        <span>${formattedClock}</span>
    `;
    // console.log("tset");

};


export {liveClock}