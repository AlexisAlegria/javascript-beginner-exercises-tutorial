const sing = () => {
    let lib = "let it be";
    let letra = "";
    for(i = 1; i <= 4; i++){
        letra += lib + ", "
        //concatenar          
    }

    letra += "words of wisdom, ";

     for(i = 1; i <= 5; i++){
        letra += lib + ", "
        //concatenar          
    }

    letra += "there will be an answer, ";
    letra += lib;
    return letra;
}
console.log(sing());