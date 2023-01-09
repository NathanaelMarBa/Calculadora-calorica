calculadora();

function calculoh(){

    let obj = parseInt(prompt("Cual es tu objetivo?" + "\n" + "1-Deficit" + "\n" + "2-Superavit" + "\n" + "3-Mantenimiento"))
    let edad = parseInt(prompt("Ingresa tu edad"))
    let peso = parseFloat(prompt("Ingresa tu peso en kg"))
    let estatura = parseFloat(prompt("Ingresa tu estatura en cm"))
    var mb = 66.4730+(13.7516*peso)+(5.0033*estatura)-(6.7550*edad)
    var rd = 0;
    var d = [];
    let act = parseInt(prompt("Activamente como te consideras:" + "\n" + "1-Sedentario" + "\n" + "2-Ligeramente activo" + "\n" + "3-Activo" + "\n" + "4-Bastante Activo" + "\n" + "5-Extremadamente Activo"));
    
    switch(act){
        case 1:
            rd = 1.1 * mb;
            d.push(rd);
            break;
        case 2:
            rd = 1.2 * mb;
            d.push(rd);
            break;
        case 3:
            rd = 1.35 * mb;
            d.push(rd);
            break;
        case 4:
            rd = 1.6 * mb;
            d.push(rd);
            break;
        case 5:
            rd = 1.8 * mb;
            d.push(rd);
            break;
        default:
            alert("Nivel de actividad invalido")
    }
    switch (obj) {
        case 1:
            deficith(d,peso)
            break;
        case 2:
            superavith(d);
            break;
        case 3:
            mantenimientoh(d);
            break;
        default:
            alert("Opcion invalida")
    }
}

function calculom(){

    let obj = parseInt(prompt("Cual es tu objetivo?" + "\n" + "1-Deficit" + "\n" + "2-Superavit" + "\n" + "3-Mantenimiento"))
    let edad = parseInt(prompt("Ingresa tu edad"))
    let peso = parseFloat(prompt("Ingresa tu peso en kg"))
    let estatura = parseFloat(prompt("Ingresa tu estatura en cm"))
    var mb = 66.4730+(13.7516*peso)+(5.0033*estatura)-(6.7550*edad)
    var rd = 0;
    var d = [];
    let act = parseInt(prompt("Activamente como te consideras:" + "\n" + "1-Sedentario" + "\n" + "2-Ligeramente activo" + "\n" + "3-Activo" + "\n" + "4-Bastante Activo" + "\n" + "5-Extremadamente Activo"));
    
    switch(act){
        case 1:
            rd = 1.1 * mb;
            d.push(rd);
            break;
        case 2:
            rd = 1.2 * mb;
            d.push(rd);
            break;
        case 3:
            rd = 1.35 * mb;
            d.push(rd);
            break;
        case 4:
            rd = 1.6 * mb;
            d.push(rd);
            break;
        case 5:
            rd = 1.8 * mb;
            d.push(rd);
            break;
        default:
            alert("Nivel de actividad invalido")
    }
    switch (obj) {
        case 1:
            deficitm(d,peso)
            break;
        case 2:
            superavitm(d);
            break;
        case 3:
            mantenimientom(d);
            break;
        default:
            alert("Opcion invalida")
    }
}

function deficith (rd, peso) {
    if(peso >= 100){
        let defmin = (rd - 800);
        let defmax = (rd - 500);
        alert("Su deficit sera entre: " + Math.round(defmin) + " Calorias como Minimo y " + Math.round(defmax) + " Como Maximo");
    } else {
        let defmin = (rd - 500);
        let defmax = (rd - 200);
        alert("Su deficit sera entre: " + Math.round(defmin) + " Calorias como Minimo y " + Math.round(defmax) + " Como Maximo");
    }
}

function superavith (rd){
    a = 100;
    b = 300;
    alert(rd)
    let supmin = rd + a;
    let supmax = rd + b;
    alert("Su Superavit sera entre: " + Math.round(supmin) + " Calorias como Minimo y " + Math.round(supmax) + " Como Maximo");
}

function mantenimientoh (rd) {
    alert("Sus calorias de mantenimiento son de: " + Math.round(rd) + " Calorias");
}

function deficitm (rd, peso) {
    if(peso >= 100){
        let defmin = (rd - 800);
        let defmax = (rd - 500);
        alert("Su deficit sera entre: " + Math.round(defmin) + " Calorias como Minimo y " + Math.round(defmax) + " Como Maximo");
    } else {
        let defmin = (rd - 500);
        let defmax = (rd - 200);
        alert("Su deficit sera entre: " + Math.round(defmin) + " Calorias como Minimo y " + Math.round(defmax) + " Como Maximo");
    }
}

function superavitm (rd){
    const a = 100;
    const b = 300;
    alert(rd)
    let supmin = (rd + a);
    let supmax = (rd + b);
    alert("Su Superavit sera entre: " + Math.round(supmin) + " Calorias como Minimo y " + Math.round(supmax) + " Como Maximo");
}

function mantenimientom (rd) {
    alert("Sus calorias de mantenimiento son de: " + Math.round(rd) + " Calorias")
}

function calculadora() {
    alert("Bienvenido a la calculadora calorica")
    let sexo = prompt("Cual es tu sexo? H/M")
    switch (sexo) {
        case "H":
            calculoh();
            break;
        case "M":
            calculom();
            break;
        default:
            alert("Opcion invalida")
    }
}