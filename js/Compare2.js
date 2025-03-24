//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        // this.nome = nome
        // this.preco = preco
        // this.alturaCacamba = alturaCacamba
        // this.slturaVeiculo = alturaVeiculo
        // this.alturaSolo = alturaSolo
        // this.capacidadeCarga = capacidadeCarga
        // this.motor = motor
        // this.potencia = potencia
        // this.volumeCacamba = volumeCacamba
        // this.roda = roda
        // this.image = image
    }
    
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome);
            return i;
    }
    return -1;
}



function SetCarToCompare(el, carClass) {

    // const selectCheckbox = document.getElementsByClassName("checkbox")
    // for (let i = 0; i < selectCheckbox.length; i++) {
    //     selectCheckbox[i].addEventListener("click", addCar())
    // }

    // function addCar(info) {
       
    //     for (let i = 0; i<addCar.length; i++) {
    //         const info_nome = info[i].nome
    //         const info_preço = info[i].preco
    //         const info_alturaCacamba = info[i].alturaCacamba
    //         const info_alturaVeiculo = info[i].alturaVeiculo
    //         const info_alturaSolo = info[i].alturaSolo
    //         const info_capacidadeCarga = info[i].capacidadeCarga
    //         const info_potencia = info[i].potencia
    //         const info_volumeCacamba = info[i].volumeCacamba
    //         const info_roda = info[i].roda
    //         const info_image = info[i].image
    //         console.log(addCar)
    //     }
    // }

    if(carClass instanceof Car){       
        if(el.checked){
            // carArr.push(new Car('XL Cabine Simples 2.2 Diesel 4X4 MT 2022', 183850, 511, 1821, 232, 1234, 2.2, 160, 1420, 'Aço Estampado 16', 'img/XL Cabine.jpg'));
            // console.log(carArr);
        } else {
        } 
    } else {
        throw "Você precisa definir uma classe de carro";
    }
}

// let Checkbox = document.querySelectorAll('input[type="checkbox"]');

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    // if (Checkbox.length > Checkbox.checked) {
    //     Checkbox[1].disabled = true;
    // }
    // else {
    //     Checkbox[1].disabled = false;
    // }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "inline";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}
