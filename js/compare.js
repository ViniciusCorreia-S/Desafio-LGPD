
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

// pesquisa na matriz se existe carClass retornando 1 se não retorna -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome);
            return i;
    }
    return -1;
}



function SetCarToCompare() {

   let Checkbox = document.querySelectorAll('input[type="checkbox"]');

    // if(carClass instanceof Car){       
        if(Checkbox.checked){
            Checkbox = 1
            document.querySelector(Checkbox).addEventListener(SetCarToCompare())
            console.log(Checkbox);
        }
        // else {
        //     throw "Você precisa definir uma classe de carro";
        // }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    else {
        document.getElementById("compare").style.display = "inline";
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
