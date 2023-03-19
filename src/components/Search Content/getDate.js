const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const getDate= (newDate)=>{
    let date = newDate;
    let day = days[date.getDay()];
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    date = yyyy + '-' + mm + '-' + dd;

    return {day, dd, mm, yyyy, date};
}