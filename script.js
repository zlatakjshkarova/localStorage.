//запись даныч в LocalStorage
//setItem - принимает два параметра:ключ и значение
localStorage.setItem("key", "text")
//получить данные из локального xранилища
//getItem - принимает один  параметр:ключ

let str = localStorage.getItem('key')
console.log(str)









localStorage.setItem("nut", 2)
localStorage.setItem("nat", 3)
localStorage.setItem("ner", 5)
let t = localStorage.getItem("nut")
let nat = localStorage.getItem("nat")
let der = localStorage.getItem("ner")
let syt = +t + +nat + +der
console.log(syt)
//oчистка локального хранили
//localStorage.clear()

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    localStorage.clear()
}
)

//удалить коркретный ключь
localStorage.removeItem('key');


localStorage.setItem('nat', 1000)

//1получить текущее значение счетчик
let count = localStorage.getItem('reloadCount')
console.log(count)
//2если значение нет(первый заход)- усанавливаем 0
if (count === null) {
    count = 0;
} else {
    //3если такой клуч есть то его значение преобразуем в число и записываем в переменую
    count = +count
}
//4увеличить счетчик на 1
count = count + 1;
//5 сохраня
localStorage.setItem('reloadCount', count)
document.querySelector('#counter').textContent = count;



let count2 = localStorage.getItem('reload')
console.log(count2)
//2если значение нет(первый заход)- усанавливаем 0
if (count2 === null || count2 == 10) {
    count2 = 0;
} else {
    //3если такой клуч есть то его значение преобразуем в число и записываем в переменую
    count2 = +count2
}
//4увеличить счетчик на 1
count2 = count2 + 1;
//5 сохраня
localStorage.setItem('reload', count2)
document.querySelector('#counter2').textContent = count2;


//количесто записей в LS
console.log('количество', localStorage.length);

//получения ключа по индексу

console.log('ключ по индексу', localStorage.key(0))

//перебор хранилища по индексу

for (let i = 0; i < localStorage.length; i++) {
    // в переменную key записываем ключ по индексу
    let key = localStorage.key(i);
    // в переменную  value записываем значение по полученному ключу
    let value = localStorage.getItem(key);
    console.log(value)
}

//массивы ключей и значений 
//получить все ключи
console.log(Object.keys(localStorage));

//получить все значения из LS
console.log(Object.values(localStorage));


//вывести всех значений LS
let values = Object.values(localStorage)
let keys = Object.keys(localStorage)


for (let key of keys) {
    let value = localStorage.getItem(key)
    console.log(key, ":", value)
}
//xранение труктур