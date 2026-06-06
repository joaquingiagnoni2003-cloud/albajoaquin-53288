import CalculatorVisitor from './CalculatorVisitor.js';

export default class CustomCalculatorVisitor extends CalculatorVisitor {
    
    visitPrograma(ctx) {
        let jsCode = `
function crearUsuario(id, atributos) {
    console.log(\`Creando usuario: \${id}\`);
    atributos.forEach(({ clave, valor }) => {
        console.log(\`  { clave: "\${clave}", valor: \${typeof valor === 'string' ? '"' + valor + '"' : valor} }\`);
    });
}
\n`;
        const usuarios = ctx.usuario();
        if (usuarios) {
            for (let i = 0; i < usuarios.length; i++) {
                jsCode += this.visit(usuarios[i]);
            }
        }
        return jsCode;
    }

    visitUsuario(ctx) {
        const id = ctx.ID_TOKEN().getText();
        let jsCode = `crearUsuario("${id}", [\n`;

        const atributos = ctx.atributo();
        if (atributos) {
            const attrsCode = atributos.map(attrCtx => this.visit(attrCtx)).join(',\n');
            jsCode += attrsCode;
        }

        jsCode += `\n]);\n`;
        return jsCode;
    }

    visitAtributo(ctx) {
        const clave = ctx.ID_TOKEN().getText();
        const valor = this.visit(ctx.valor());
        return `  { clave: "${clave}", valor: ${valor} }`;
    }

    visitValor(ctx) {
        if (ctx.NUMERO()) {
            return ctx.NUMERO().getText();
        } else if (ctx.CADENA()) {
            return ctx.CADENA().getText();
        } else if (ctx.BOOLEANO()) {
            return ctx.BOOLEANO().getText() === 'verdadero' ? 'true' : 'false';
        }
        return null;
    }
} 