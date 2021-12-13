import { isValid, isFuture , parseISO, formatDuration, intervalToDuration} from 'date-fns';



function howLong(){
    
    let chosenDate = document.getElementById("daypicker");
    let choice = parseISO(chosenDate.value);
    let result = document.getElementById("howlong");
    if (isValid(choice) && isFuture(choice)) {
        let now = new Date();        
        result.innerText = formatDuration(intervalToDuration({start: now, end: choice}));
        
    }

    else{
        result.innerText = "This date is invalid or in the past"
    }
    

    
    
    }

    
    export {howLong}

    // 