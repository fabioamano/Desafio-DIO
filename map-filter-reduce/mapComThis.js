//map, filter e reduce

//map: cria um novo array, não modifica o original e realiza as operações em ordem

Array.map(callback, thisArg)

//filter: retorna apenas os arrays que passaram pelo filtro

//reduce: executa uma função em todos os elemntos do array, retonando valor único

Array.reduce(callback, initialValue)

const maca = {
    value: 2
}

const laranja = {
    value: 3
}

function mapComThis(arr, thisArg){
    return arr.map(function (item){
        return item = this.value;
    }, thisArg)
}

const nums = [1,2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

