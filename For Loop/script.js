function iteracion(numeroTotal) {

    for (i = 0; i <= numeroTotal; i++) {
        if (i + (i+1)+(i+2) == 45) {
            let consecutivo1 = i;
            let consecutivo2 = i + 1;
            let consecutivo3 = i + 2;
            let edadNiño = consecutivo3 / 2;
    console.log(`Los numeros son: ${consecutivo1}, ${consecutivo2}, ${consecutivo3}. Y la edad del niño es: ${edadNiño}.`) 
        }
    }
}

iteracion(45);