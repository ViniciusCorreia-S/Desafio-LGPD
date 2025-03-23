
//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome
       this.preco = preco
       this.alturaCacamba = alturaCacamba
       this.slturaVeiculo = alturaVeiculo
       this.alturaSolo = alturaSolo
       this.capacidadeCarga = capacidadeCarga
       this.motor = motor
       this.potencia = potencia
       this.volumeCacamba = volumeCacamba
       this.roda = roda
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
   
    if(carClass instanceof Car){       
        if(el.checked){
               
            
        } else {
          
        } 
    } else {
        throw "Você precisa definir uma classe de carro";
    }
}

let Checkbox = document.querySelectorAll('input[type="checkbox"]');
Checkbox = []

    for (let i = 0; Checkbox.checked = true; i++) {
        Checkbox = 1;
    } return;

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        // return;
    }
    else {
        document.getElementById("compare").style.display = "block";
    }
    if (carArr.length >= 3) {
        alert("Só é posivel marcar no maximo 2 carros para a comparação!");
        // return;
    }

    // UpdateCompareTable() 
        
    
    
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}
