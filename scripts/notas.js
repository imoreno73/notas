var nota=5;
function notas(nota){
    switch (nota) {
        case (nota=0):
            return ("Muy deficiente");
            break;
        case (nota=1):
            return ("Muy deficiente");
            break;
        case (nota=2):
            return ("Muy deficiente");
            break;
        case (nota=3):
            return ("Insuficiente");
            break;
        case (nota=4):
            return ("Insuficiente");
            break;
        case (nota=5):
            return ("Suficiente");  
            break;
        case (nota=6):
            return ("Bien");  
            break;
        case (nota=7):
            return ("Notable");  
            break;
        case (nota=8):
            return ("Notable");  
            break;    
        case (nota=9):
            return ("Sobresaliente");  
            break;
        case (nota=10):
            return ("Sobresaliente");  
            break;

    }

}

module.exports = notas;