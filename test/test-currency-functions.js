// Destructuring
import { canadianToUs } from "./currency-functions";

console.log("50 Canadian dollars equals this amount of US dollars:");
console.log(canadianToUs(50));

// Alias
import * as currency from "./currency-functions";

console.log("30 US dollars equals this amount of Canadian dollars:");
console.log(currency.usToCanadian(30));
