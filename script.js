let lang = prompt("Введите язык ru или en");

if (lang == 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 
                'Пятница', 'Суббота', 'Воскресенье'); 
} else if (lang == 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                'Friday', 'Saturday', 'Sunday');
} else if (lang != 'ru' && lang != 'en') {
    console.log("Вы ввели не верно язык");
};

switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 
                    'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                    'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log("Вы ввели не верно язык");
        break;    
};

let arrWeeks = [];
    arrWeeks.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 
                    'Пятница', 'Суббота', 'Воскресенье'];
    arrWeeks.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                    'Friday', 'Saturday', 'Sunday'];
    console.log(arrWeeks[lang]); 
    
let  namePerson = 'Александр';
console.log(
    (namePerson === 'Артем') ? 'Директор' :
    (namePerson === 'Александр') ? 'Преподователь':'Студент');