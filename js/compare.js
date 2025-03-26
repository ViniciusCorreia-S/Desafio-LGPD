//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
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

    let index = GetCarArrPosition(carArr,carClass);

    if (el.checked){
        
        if(carClass instanceof Car){       
            if(carArr.length < 2){
                carArr.push(carClass);
                console.log(carArr);
            }
            else {
                alert("Só é possivel selecionar no maximo dois veiculos");
                el.checked = false;
            }
        }
    }
    else {
        if (index !== -1) {
            carArr.splice( index , 1);
        }
    }

}
function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}


function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    for (let i = 0; i < carArr.length; i++) {
       
        document.querySelector(`#compare_modelo_${i}`).innerHTML = carArr[i].nome;
        console.log(carArr[i].nome);
        document.querySelector(`#compare_alturacacamba_${i}`).innerHTML = carArr[i].alturaCacamba;
        document.querySelector(`#compare_alturaveiculo_${i}`).innerHTML = carArr[i].alturaVeiculo;
        document.querySelector(`#compare_alturasolo_${i}`).innerHTML = carArr[i].alturaSolo;
        document.querySelector(`#compare_capacidadecarga_${i}`).innerHTML = carArr[i].capacidadeCarga;
        document.querySelector(`#compare_motor_${i}`).innerHTML = carArr[i].motor;
        document.querySelector(`#compare_potencia_${i}`).innerHTML = carArr[i].potencia;
        document.querySelector(`#compare_volumecacamba_${i}`).innerHTML = carArr[i].volumeCacamba;
        document.querySelector(`#compare_roda_${i}`).innerHTML = carArr[i].roda;
        document.querySelector(`#compare_preco_${i}`).innerHTML = carArr[i].preco;
        document.querySelector(`#compare_image_${i}`).innerHTML = `<img src = "${carArr[i].image}"></img>`;
    }
}
