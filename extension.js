// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('extension.createJsBaseClass', async function () {
		// Solicita ao usuário o nome da classe
		let className = await vscode.window.showInputBox({
			prompt: 'Name of your JsBaseClass (e.g., App, Manager)',
			placeHolder: 'ClassName'
		});

		if (!className) {
			vscode.window.showErrorMessage('No class name provided!');
			return;
		}

		// force className string to first letter uppercase and the rest lowercase
		className = className.charAt(0).toUpperCase() + className.slice(1).toLowerCase();

		// Template da classe
		const classTemplate = `class JsBase${className} extends JsBaseClass {
    async handle() {
        // Your initialization code here
    }

    async onDomContentLoaded() {
        // On DOM content loaded (page load)
    }
}

window.jsBase${className} = new JsBase${className}();
window.jsBase${className}.init();
`;

		// Obtém o editor ativo e insere o template no cursor
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit((editBuilder) => {
				const position = editor.selection.active;
				editBuilder.insert(position, classTemplate);
			});
		}
	});

	context.subscriptions.push(disposable);

}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
