
import { parseISO, isAfter, isBefore} from 'date-fns';

function beforeOrAfter(){
    const now = new Date();
    let chosenDate = document.getElementById("daypicker");
    let choice = parseISO(chosenDate.value);
    let answer =  document.getElementById("result");
    if (isAfter(choice, now)) {
       
       answer.innerText = "Your chosen date is after todays date"
    }
    else if (isBefore(choice, now)) {
        answer.innerText = "Your chosen date is before todays date"
    }
    
    document.getElementById("beforeOrAfter").addEventListener("click", beforeOrAfter)
    }

    export {beforeOrAfter}