// Paesers y el Abstract Syntax Tree

const PI = 3.1415;
const half_pi = 1.57075;
// variable constantes
// variables que guarden un numero

// El nombre de la variable tiene que estar en UPPERCASE

export default function(context) {
  return {
    VariableDeclaration (node) {
       // Tipo variable const
    if (node.kind === "const") {
    	const declaration = node.declarations[0]
        // Asegurarnos que el valor es un numero
        if (typeof declaration.init.value === "number") {
        	if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            	context.report({
                	node: declaration.id,
                  	message: "El nombre de la constante debe estar en mayuscula",
                  	fix: function(fixer) {
                    	return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                    }
                })
            }
        }
    }
    }

  };
};
