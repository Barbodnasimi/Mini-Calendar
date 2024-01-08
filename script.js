// const dayElement = document.querySelector('#day');
// const monthElement = document.querySelector('#month');
// const yearElement = document.querySelector('#year');
// const weakDayElement = document.querySelector('#weakDay');
// const newDate = new Date();

// function calendar() {
// const currentDay = newDate.getDate();
// const currentMonth = newDate.toLocaleDateString('en-US', { month: 'long' });
// const currentYear = newDate.getFullYear();
// const currentWeakDay = newDate.toLocaleDateString('en-US', { weekday: 'long' });

// dayElement.textContent = currentDay;

// monthElement.textContent = currentMonth

// yearElement.textContent = currentYear;

// weakDayElement.textContent = currentWeakDay;

// }
// calendar()

// window.addEventListener('keydown' , (e)=>{
//     if (e.keyCode === 39) {
//         const newDate = new Date(+1);
//         console.log(newDate);
//     }else if(e.keyCode === 37){
//         const newDate = new Date(-1);
//         console.log(newDate);
//     }
// })
const dayElement = document.querySelector('#day');
const monthElement = document.querySelector('#month');
const yearElement = document.querySelector('#year');
const weakDayElement = document.querySelector('#weakDay');
let currentDate = new Date();

function updateCalendar() {
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const currentWeakDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    dayElement.textContent = currentDay;
    monthElement.textContent = currentMonth;
    yearElement.textContent = currentYear;
    weakDayElement.textContent = currentWeakDay;
}

updateCalendar();

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
        currentDate.setDate(currentDate.getDate() + 1);
        updateCalendar();
    } else if (e.keyCode === 37) {
        currentDate.setDate(currentDate.getDate() - 1);
        updateCalendar();
    }
});
