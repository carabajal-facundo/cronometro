let seg;
let min;
let hora;
let centecima;
let inicio;

function iniciarCrono(){
    seg = 0;
    min = 0;
    hora = 0;
    centecima = 0;
    inicio = setInterval(cronometro, 10);
}

function cronometro(){
    let crono = document.getElementById('crono');
    crono.innerHTML = `${hora} : ${min} : ${seg} : ${centecima}`;
    centecima++;
    if(centecima>99){
        seg++;
        centecima=0;
    }
    if(seg>59){
        min++;
        seg=0;
    }
    if(min>59){
        hora++;
        min=0;
    }    
}

function resetCrono(){
    clearInterval(inicio);
    let crono = document.getElementById('crono');
    crono.innerHTML = `-- : -- : -- : --`;
}

function pararCrono(){
    clearInterval(inicio);
}