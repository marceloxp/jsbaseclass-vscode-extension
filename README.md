# JsBaseClass VSCode Extension

A Visual Studio Code extension that simplifies the creation of JavaScript classes extending **JsBaseClass**. With a single command, you can generate a customizable class template, ready to use in your projects.

---

## **Features**

- 🚀 **Quick Class Generation**: Create a new `JsBaseClass` based class with a custom name in seconds.
- 🛠️ **Dynamic Naming**: Automatically generates class and instance names based on user input.
- 📂 **Template-Based**: Uses the standard **JsBaseClass** template, ensuring consistency across your codebase.
- 💻 **Cursor Placement**: Inserts the template at the cursor position in the active editor.

---

## **Installation**

1. **Install via VS Code Marketplace**:
   - Open VS Code.
   - Go to the Extensions view (`Ctrl+Shift+X`).
   - Search for **"JsBaseClass Extension"**.
   - Click **Install**.

2. **Manual Installation**:
   - Download the `.vsix` file from the [Releases page](https://github.com/marceloxp/jsbaseclass-vscode-extension/releases).
   - Open VS Code.
   - Go to the Extensions view (`Ctrl+Shift+X`).
   - Click the `...` menu and select **"Install from VSIX"**.
   - Choose the downloaded `.vsix` file.

---

## **Usage**

1. Open a JavaScript file in VS Code.
2. Press `Ctrl+Shift+P` to open the Command Palette.
3. Type **"New JsBaseClass"** and select the command.
4. Enter the name of your class (e.g., `App`, `Manager`).
5. The template will be inserted at the cursor position.

---

## **Example**

### **Input**
- Class Name: `App`

### **Generated Code**
```javascript
class JsBaseApp extends JsBaseClass {
    async handle() {
        // Your initialization code here
    }

    async onDomContentLoaded() {
        // On DOM content loaded (page load)
    }
}

window.jsBaseApp = new JsBaseApp();
window.jsBaseApp.init();
```

---

## **Template Details**

The generated template includes:

- **Class Definition**: A class extending `JsBaseClass` with a dynamic name.
- **`handle` Method**: For initialization code that runs immediately.
- **`onDomContentLoaded` Method**: For code that depends on the DOM being fully loaded.
- **Instance Initialization**: Automatically creates and initializes an instance of the class.

---

## **Why Use This Extension?**

- **Saves Time**: No need to manually type out the boilerplate code.
- **Consistency**: Ensures all classes follow the same structure.
- **Flexibility**: Customizable class and instance names.
- **Seamless Integration**: Works directly in your editor, right where you need it.

---

## **Contributing**

Contributions are welcome! If you'd like to improve this extension, follow these steps:

1. Fork the repository: [marceloxp/jsbaseclass-vscode-extension](https://github.com/marceloxp/jsbaseclass-vscode-extension).
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a detailed description of your changes.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Support**

If you encounter any issues or have suggestions for improvement, please [open an issue](https://github.com/marceloxp/jsbaseclass-vscode-extension/issues) on GitHub.

---

## **Credits**

Developed by [Your Name] with ❤️.  
Inspired by the **JsBaseClass** library.

---

Start building smarter and more efficient JavaScript applications with the **JsBaseClass VSCode Extension**! 🚀

---

### **Screenshots (Optional)**

If you want to add screenshots, you can include them like this:

#### **Command Palette**
![Command Palette](https://example.com/command-palette.png)

#### **Generated Code**
![Generated Code](https://example.com/generated-code.png)
