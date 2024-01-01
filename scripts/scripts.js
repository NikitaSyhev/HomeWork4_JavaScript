
let automobile = {
    manufacturer: 'BMW',
    model: '7-series',
    year: 2015,
    'average speed': 200,
}

function showInfo(automobile) {
    alert(`Производитель: ${automobile.manufacturer}, модель: ${automobile.model}, год: ${automobile.year}, средняя скорость: ${automobile['average speed']} км в ч.`);
}

alert('Задание 1: ');
showInfo(automobile);

alert('Задание 2: ');

let distance = +prompt('Введите расстояние в километрах: ');

function time(distance){
    let time = distance / automobile['average speed'];
    let timeRelax = (time % 4) ==  0? (time/4 | 0) - 1: time/4| 0;
    alert (`Время в пути: ${time + timeRelax} час(ов).`);
}

time(distance);


alert('Задание 3: ');

function yearFromProduction(automobile) {
    let date = new Date(); // текущая дата
    let result = date.getFullYear() - automobile.year;
    alert(`Прошло с момента выпуска автомобиля ${result}.`);
}

yearFromProduction(automobile);

