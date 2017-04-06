/**
 * @param {function} cb
 */
_.onReady = (cb) => {
    document.onreadystatechange = () => {
        if(document.readyState == "complete") {
            cb();
        }
    }
}

class Display {
    /**
     * @constructor
     */
    constructor(config) {
        this.element = config.element
        this.text = [
            ""
        ];
        this.cursor = [0, 0];
        this.MAX_COLONS = config.MAX_COLONS;
        this.TAB_SIZE = this.tab(config.TAB_SIZE);
    }

    incrementCursor() {
        if(this.cursor[1] == this.MAX_COLONS) {
            this.newLine();
        } else {
            this.cursor[1]++;
        }
    }

    decrementCursor() {
        if(this.cursor[0] == 0 && this.cursor[1] == 0) return;
        
        if(this.cursor[1] == 0) {
            this.cursor[0]--;
            this.cursor[1] = this.text[this.cursor[0]].length;
        } else {
            this.cursor[1]--;
        }
    }

    newLine() {
        this.cursor[0]++;
        this.cursor[1] = 0;
        this.text.push("");
    }

    /**
     * @param {string} c
     */
    addChar(c) {
        if(typeof c != "string") return console.error("Can only add 1 character given as string. Received type: " + typeof c);
        if(c.length > 1) return console.error("Can only add 1 character at once. Given string lenght: " + c.length);
        if(c == '\t' && this.text[this.cursor[0]].length % this.MAX_COLONS > 3) c = this.TAB_SIZE;
        
        if(c != '\n') {
            let line = this.text[this.cursor[0]];
            line = line.substring(0, this.cursor[1]) + c + line.substring(this.cursor[1]);
            this.text[this.cursor[0]] = line;
            this.incrementCursor();
        } else {
            this.newLine();
        }
        this.render();
    }

    removeChar() {
        if(this.cursor[0] == 0 && this.cursor[1] == 0) return;
        if(this.cursor[1] == 0) {
            if(this.text[this.cursor[0]].length + this.text[this.cursor[0] - 1].length > this.MAX_COLONS) {
                return console.error("Temporary error, above line is to big to remove the current new line");
            } else {
                this.text[this.cursor[0] - 1] += this.text[this.cursor[0]];
                this.text.splice(this.cursor[0], 1);
            }
        } else {
            let line = this.text[this.cursor[0]];
            line = line.substring(0, this.cursor[1]) + line.substring(this.cursor[1] + 1);
            this.text[this.cursor[0]] = line;
        }
        this.decrementCursor();
        this.render();
    }

    /**
     * @param {number} size
     * @returns {string}
     */
    tab(size) {
        let str = "";
        for(let i = 0; i < size; i++) {
            str += " ";
        }
        return str;
    }

    render() {
        if(Object.prototype.toString.call(this.element) != "[object HTMLPreElement]") return console.error("Can only render on a HTMLPreElement");
 
        let html = "";
        this.text.forEach( (str) => {
            html += str;
            html += '\n';
        });
        this.element.innerHTML = html;
    }
}

class Keyboard {
    constructor(config) {
        
    }
}

let config = {
    display : {
        element : "output-display",
        TAB_SIZE : 4,
        MAX_COLONS : 110
    },
    keyboard : {
        element : "keyboard"
    }
};

let display;
let keyboard;

// custom on ready
_.onReady( () => {
    config.element = document.getElementById(config.element);
    display = new Display(config.display);
    keyboard = new Keyboard(config.keyboard);
});