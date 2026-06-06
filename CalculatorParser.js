// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,11,34,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,0,1,0,1,1,1,1,1,1,1,1,5,1,20,8,1,10,1,12,1,23,9,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,2,0,6,7,9,9,31,
0,9,1,0,0,0,2,15,1,0,0,0,4,26,1,0,0,0,6,31,1,0,0,0,8,10,3,2,1,0,9,8,1,0,
0,0,10,11,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,13,1,0,0,0,13,14,5,0,0,1,
14,1,1,0,0,0,15,16,5,1,0,0,16,17,5,8,0,0,17,21,5,2,0,0,18,20,3,4,2,0,19,
18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,
1,0,0,0,24,25,5,3,0,0,25,3,1,0,0,0,26,27,5,8,0,0,27,28,5,4,0,0,28,29,3,6,
3,0,29,30,5,5,0,0,30,5,1,0,0,0,31,32,7,0,0,0,32,7,1,0,0,0,2,11,21];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'usuario'", "'{'", "'}'", "'='", "';'" ];
    static symbolicNames = [ null, "USUARIO", "LLAVE_A", "LLAVE_C", "ASIGNAR", 
                             "PUNTOCOMA", "BOOLEANO", "CADENA", "ID_TOKEN", 
                             "NUMERO", "WS", "COMMENT" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.usuario();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 13;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.match(CalculatorParser.USUARIO);
	        this.state = 16;
	        this.match(CalculatorParser.ID_TOKEN);
	        this.state = 17;
	        this.match(CalculatorParser.LLAVE_A);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 18;
	            this.atributo();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(CalculatorParser.LLAVE_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(CalculatorParser.ID_TOKEN);
	        this.state = 27;
	        this.match(CalculatorParser.ASIGNAR);
	        this.state = 28;
	        this.valor();
	        this.state = 29;
	        this.match(CalculatorParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 704) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.USUARIO = 1;
CalculatorParser.LLAVE_A = 2;
CalculatorParser.LLAVE_C = 3;
CalculatorParser.ASIGNAR = 4;
CalculatorParser.PUNTOCOMA = 5;
CalculatorParser.BOOLEANO = 6;
CalculatorParser.CADENA = 7;
CalculatorParser.ID_TOKEN = 8;
CalculatorParser.NUMERO = 9;
CalculatorParser.WS = 10;
CalculatorParser.COMMENT = 11;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_usuario = 1;
CalculatorParser.RULE_atributo = 2;
CalculatorParser.RULE_valor = 3;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_usuario;
    }

	USUARIO() {
	    return this.getToken(CalculatorParser.USUARIO, 0);
	};

	ID_TOKEN() {
	    return this.getToken(CalculatorParser.ID_TOKEN, 0);
	};

	LLAVE_A() {
	    return this.getToken(CalculatorParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(CalculatorParser.LLAVE_C, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_atributo;
    }

	ID_TOKEN() {
	    return this.getToken(CalculatorParser.ID_TOKEN, 0);
	};

	ASIGNAR() {
	    return this.getToken(CalculatorParser.ASIGNAR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(CalculatorParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(CalculatorParser.CADENA, 0);
	};

	BOOLEANO() {
	    return this.getToken(CalculatorParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.UsuarioContext = UsuarioContext; 
CalculatorParser.AtributoContext = AtributoContext; 
CalculatorParser.ValorContext = ValorContext; 
