//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const meetup = (year , month , desc , day) => {
    const days = 
  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weekRng = { first: 1, second: 8, third: 15, fourth: 22, teenth: 13 ,last: new Date(year, month, 0).getDate() - 6};
    const dayIndex = days.indexOf(day);
    const fdFr = weekRng[desc] ;
    const firstDay = new Date(year, month-1, fdFr).getDay()
    const date = fdFr + (dayIndex - firstDay + 7) % 7
    
    return new Date(year, month-1, date)
  };
  