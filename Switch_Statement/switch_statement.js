/* In the example I will have a weekday variable and for each day there is a different activity
    mapping one activity to each day */

const day = 'wednesday';

switch(day) {
    case 'monday': // day === 'monday' and if this is true then the below will be executed
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Go to gym');
        break;
    case 'wednesday':
        console.log('Driving lessons');
        break;
    case 'thursday':
    case 'friday':
        console.log('Work');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Not working');
        break;
    default:
        console.log('Not a valid day!')
}


// A method that can be used, but the above is a shorter, cleaner method and should be used
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Go to gym');
} else if (day === 'wednesday') {
    console.log('Driving lessons');
} else if (day === 'thursday' || day === 'friday') {
    console.log('Not working');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Not working');
} else {
    console.log('Not a valid day!')
}