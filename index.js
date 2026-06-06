import antlr4 from 'antlr4';
import fs from 'fs';
import CalculatorLexer from './CalculatorLexer.js';
import CalculatorParser from './CalculatorParser.js';
import CustomCalculatorVisitor from './CustomCalculatorVisitor.js';

if (process.argv.length < 3) {
    console.log('Error: Debes indicar el archivo a analizar.');
    console.log('Uso: node index.js <archivo.txt>');
    process.exit(1);
}

const filename = process.argv[2];

try {
    const input = fs.readFileSync(filename, 'utf8');

    const chars = new antlr4.InputStream(input);
    const lexer = new CalculatorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokens);

    parser.buildParseTrees = true;

    console.log(`\n======================================================`);
    console.log(`   ANALIZANDO ARCHIVO: ${filename}`);
    console.log(`======================================================`);

    // --- TAREA 1: Análisis léxico y sintáctico ---
    const tree = parser.programa();

    if (parser._syntaxErrors > 0) {
        console.log(`\n❌ [TAREA 1] Se encontraron ${parser._syntaxErrors} errores de sintaxis.`);
    } else {
        console.log('\n✅ [TAREA 1] Análisis léxico y sintáctico exitoso: La estructura es CORRECTA.');

        // --- TAREA 2: Tabla de lexemas-tokens ---
        console.log('\n--- [TAREA 2] TABLA DE LEXEMAS-TOKENS ---');
        console.log('LEXEMA'.padEnd(25) + ' | ' + 'TOKEN');
        console.log('--------------------------|------------------');
        tokens.fill(); 
        
        // Mapeo directo y seguro desde la clase del Lexer
        const symbolicNames = CalculatorLexer.symbolicNames || lexer.symbolicNames || [];
        
        for (let token of tokens.tokens) {
            if (token.type !== antlr4.Token.EOF) {
                const tokenName = symbolicNames[token.type] || "DESCONOCIDO";
                const lexeme = token.text.replace(/\r?\n/g, '\\n').replace(/\t/g, '\\t');
                console.log(`${lexeme.padEnd(25)} | ${tokenName}`);
            }
        }

        // --- TAREA 3: Árbol de análisis sintáctico ---
        console.log('\n--- [TAREA 3] ÁRBOL DE ANÁLISIS SINTÁCTICO ---');
        console.log(tree.toStringTree(parser.ruleNames));

        // --- TAREA 4: Interpretación ---
        console.log('\n--- [TAREA 4] INTERPRETACIÓN (Traducción y Ejecución) ---');
        
        const visitor = new CustomCalculatorVisitor();
        const jsCode = visitor.visit(tree);
        
        console.log('>> Código Traducido a JavaScript:');
        console.log(jsCode);
        
        console.log('>> Ejecutando el código traducido en consola:');
        console.log('------------------------------------------------------');
        try {
            eval(jsCode); 
        } catch (e) {
            console.error("Error en tiempo de ejecución:", e);
        }
        console.log('------------------------------------------------------\n');
    }

} catch (err) {
    console.error('No se pudo ejecutar el análisis debido a un error externo:', err.message);
} 