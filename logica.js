//att 1
function ingual (num1, num2){
    if (num1>=num2){
        return "num1 é maior ou igual num2"
    }
    else {
        console.log ("número 2 é maior que o número 1")
    }
}
ingual (1,6) 

//att2

function idade (idade1){
    let calculadorIdade = (idade1*365) //valor de dias
    if (calculadorIdade<0) {
        return "espertinho"
    }
    else {
        return calculadorIdade
    }
}
console.log (idade(12))

//att3

function mesesfoda (meses){
    switch(meses){
        case 1:
            return "Janeiro"
            break; 
          case 2:
            return "Fevereiro"
            break;
                case 3:
                return "Março"
                break;
                     case 4:
                     return "Abril"
                    break;
                             case 5:
                                return "Maio"
                                break;
                                    case 6:
                                        return "Junho"
                                        break;
                                        case 7:
                                        return "Julho"
                                        break;
                                            case 8:
                                                return "Agosto"
                                                break;
                                                case 9:
                                                    return "Setembro"
                                                    break;
                                                    case 10:
                                                        return "Outubro"
                                                        break;
                                                        case 11:
                                                            return "Novembro"
                                                            break;
                                                            case 12:
                                                                return "Dezembro"
                                                                break;
            default:
                return "aiaiaiaiai nasci no L"
                break;
    
    }
}
console.log (mesesfoda(1))

//att5

function mult (num1*num2){
    if (num1<0){
        return "NEGATIVO"
    }
    else {