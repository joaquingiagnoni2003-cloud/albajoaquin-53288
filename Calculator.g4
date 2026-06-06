grammar Calculator;

programa : usuario+ EOF ;

usuario : USUARIO ID_TOKEN LLAVE_A atributo* LLAVE_C ;

atributo : ID_TOKEN ASIGNAR valor PUNTOCOMA ;

valor : NUMERO | CADENA | BOOLEANO ;

// --- REGLAS LÉXICAS ---
USUARIO  : 'usuario' ;
LLAVE_A  : '{' ;
LLAVE_C  : '}' ;
ASIGNAR  : '=' ;
PUNTOCOMA: ';' ;

BOOLEANO : 'verdadero' | 'falso' ;
CADENA   : '"' [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]* '"' ;
ID_TOKEN : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMERO   : [0-9]+ ;
WS       : [ \t\r\n]+ -> skip ;
COMMENT  : '//' ~[\r\n]* -> skip ; 
