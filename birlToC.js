/**********************************************************************
* 
* birlToC.js: recebe um código em BIRL e retorna o mesmo traduzido
* para C.
*
***********************************************************************/
module.exports = function (birlCode) {
    // A tradução é feita com um simples replace no código birl com o seu respectivo valor
    //em C, a regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro
    //de aspas.
    var code = birlCode;

    if (code == null) return "";

    //Traduzindo a MAIN
    code = code.replace(/(EAI PIAZADA)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {'); 
    //Traduzindo o BIRL
    code = code.replace(/(ADEUS PIAZADA)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(COM VOC[EÊ]S QUE EU ESTOU FALANDO)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(TARZAN ACABOU DE ME MANDAR UM FAX)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(LEVE UMA FLOR PRA MULHER)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(SE NAO DER LEVE UM GALHO SECO)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //Traduzindo else if
    code = code.replace(/(VAI SE O HOMEM DA VIDA DELA)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(CAVOCA AS CACHOPA DOS PINHEIRO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(VAMOS CORRER TUDO PELADO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(MAGYVER EU LEMBRO DE VOCE[ \t]*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(MAGYVER HOJE VOC[EÊ] [EÉ][H]? UM HOMEM FORMADO)(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(DIRETO DO TUNEL DO TEMPO)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    //Traduzindo parada no código
    code = code.replace(/(IA CAGAR ABANDONEI)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //Traduzindo continuar o código
    code = code.replace(/(TO AQUI PELADO)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');

    //Traduzindo os tipos de dados
    code = code.replace(/(FRANGO)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(MONSTRO)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(MONSTRINHO)(?=(?:[^"]|"[^"]*")*$)/g, 'short');
    code = code.replace(/(MONSTR[ÃA]O)(?=(?:[^"]|"[^"]*")*$)/g, 'long');
    code = code.replace(/(TRAP[EÉ]ZIO DESCENDENTE)(?=(?:[^"]|"[^"]*")*$)/g, 'double');
    code = code.replace(/(TRAP[EÉ]ZIO)(?=(?:[^"]|"[^"]*")*$)/g, 'float');
    code = code.replace(/(B[IÍ]CEPS)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    console.log ('-----------------------------------------');
    console.log ('CODIGO GERADO:');
    console.log (code);
    console.log ('-----------------------------------------');

    return code;
}
