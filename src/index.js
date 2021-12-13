import './style.css';
import {liveClock} from "./liveClock";
import {beforeOrAfter} from "./beforeOrAfter";
import { howLong } from './howLong';


    // refreshing clock every second
    setInterval(liveClock, 1000);

    // howLong();
    setInterval(howLong, 1000)

//before or after function
beforeOrAfter();







