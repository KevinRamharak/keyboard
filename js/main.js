let _ = {};

_.WEIRD_MODE = true;
_.SUPER_WEIRD_MODE = false;
_.STICKY_MODE = false;

_.generateRandomColor = function generateRandomColor() {
    let r = Math.floor(Math.random() * 1000 % 255);
    let g = Math.floor(Math.random() * 1000 % 255);
    let b = Math.floor(Math.random() * 1000 % 255);

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    let color = "#";

    color += (r.length != 1) ? r : "0" + r;
    color += (g.length != 1) ? g : "0" + g;
    color += (b.length != 1) ? b : "0" + b;
    return color;
}

_.dimColor = function dimColor(color) {
    if(color == "#000000") return "";

    let r = color.substr(1, 2);
    let g = color.substr(3, 2);
    let b = color.substr(5, 2);

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    r = (r - 5 > 0) ? r - 5 : 0;
    g = (g - 5 > 0) ? g - 5 : 0;
    b = (b - 5 > 0) ? b - 5 : 0;

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    color = "#";

    color += (r.length != 1) ? r : "0" + r;
    color += (g.length != 1) ? g : "0" + g;
    color += (b.length != 1) ? b : "0" + b;
    return color;
}

_.KEY_COUNT = 64;

_.TYPES = {
    CONTROL : 0,
    CHARACTER : 1
};

_.state = {
    capslock : false,
    shift : false,
    control : false,
    function : false,
    super : false,
    alt : false
};

_.display = {
    text : "",
    cursor : 0,
    addChar : function(c) {
        this.text = this.text.substring(0, this.cursor) + c + this.text.substring(this.cursor);
        this.cursor++;
        if(this.cursor > this.text.length) this.cursor = this.text.length;
    },
    removeChar : function() {
        this.text = this.text.substring(0, this.cursor - 1) + this.text.substring(this.cursor);
        this.cursor--;
        if(this.cursor < 0) this.cursor = 0;
    },
    getCursorChar() {
        return this.text[this.cursor - 1] || "";
    }
};

_.keys = [
    {
        type : _.TYPES.NONE
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '`',
            shift : '~'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '1',
            shift : '!'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '2',
            shift : '@'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '3',
            shift : '#'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '4',
            shift : '$'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '5',
            shift : '%'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '6',
            shift : '^'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '7',
            shift : '&'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '8',
            shift : '*'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '9',
            shift : '('
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '0',
            shift : ')'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '-',
            shift : '_'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '=',
            shift : '+'
        }
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.display.removeChar();
        },
        identifier : "backspace"
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '\t'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'q',
            shift : 'Q'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'w',
            shift : 'W'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'e',
            shift : 'E'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'r',
            shift : 'R'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 't',
            shift : 'T'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'y',
            shift : 'Y'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'u',
            shift : 'U'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'i',
            shift : 'I'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'o',
            shift : 'O'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'p',
            shift : 'P'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '[',
            shift : '{'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : ']',
            shift : '}'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '\\',
            shift : '|'
        }
    },
    {
        type : _.TYPES.CONTROL,
        event : () => {
            _.state.capslock = !_.state.capslock;
        },
        identifier : "capslock"
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'a',
            shift : 'A'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 's',
            shift : 'S'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'd',
            shift : 'D'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'f',
            shift : 'F'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'g',
            shift : 'G'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'h',
            shift : 'H'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'j',
            shift : 'J'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'k',
            shift : 'K'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'l',
            shift : 'L'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : ';',
            shift : ':'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '\'',
            shift : '"'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '\n'
        }
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.shift = !_.state.shift;
        },
        identifier : "left-shift"
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'z',
            shift : 'Z'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'x',
            shift : 'X'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'c',
            shift : 'C'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'v',
            shift : 'V'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'b',
            shift : 'B'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'n',
            shift : 'N'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : 'm',
            shift : 'M'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : ',',
            shift : '<'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '.',
            shift : '>'
        }
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : '/',
            shift : '?'
        }
    },
    {
        type: _.TYPES.CONTROL,
        event: () => {
            
        },
        identifier : "up-arrow"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.shift = !_.state.shift;
        },
        identifier : "right-shift"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.control = !_.state.control;
        },
        identifier : "left-control"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.function = !_.state.function;
        },
        identifier : "function"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.super = !_.state.super;
        },
        identifier : "super"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.alt = !_.state.alt;
        },
        identifier : "left-alt"
    },
    {
        type: _.TYPES.CHARACTER,
        character : {
            normal : ' '
        }
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.alt = !_.state.alt;
        },
        identifier : "right-alt"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            _.state.control = !_.state.control;
        },
        identifier : "right-control"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            let n = _.display.cursor - 1;
            _.display.cursor = (n >= 0) ? n : 0;
        },
        identifier : "left-arrow"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {

        },
        identifier : "down-arrow"
    },
    {
        type: _.TYPES.CONTROL,
        event : () => {
            let n = _.display.cursor + 1;
            _.display.cursor = (n < _.display.text.length) ? n : _.display.text.length;
        },
        identifier : "right-arrow"
    }
];

_.CONTROL_MAP = {
    SHIFT : [42, 54],
    CONTROL : [55, 61],
    ALT : [58, 60],
    CAPSLOCK : 29,
    FUNCTION : 56,
    SUPER : 57,
    ARROWS : {
        UP : 53,
        LEFT : 62,
        DOWN : 63,
        RIGHT : 64
    }
}


document.onreadystatechange = () => {
    if(document.readyState == "complete") {

        let mode_buttons = {
            "WEIRD_MODE" : document.getElementById("button-weird-mode"),
            "SUPER_WEIRD_MODE" : document.getElementById("button-super-weird-mode"),
            "STICKY_MODE" : document.getElementById("button-sticky-mode"),
            "RESET_MODES" : document.getElementById("button-reset")
        };

        mode_buttons["WEIRD_MODE"].onclick = () => {
            _.WEIRD_MODE = !_.WEIRD_MODE;
            (_.WEIRD_MODE) ? mode_buttons["WEIRD_MODE"].classList.add("btn-success") : mode_buttons["WEIRD_MODE"].classList.remove("btn-success");
        };

        mode_buttons["SUPER_WEIRD_MODE"].onclick = () => {
            _.SUPER_WEIRD_MODE = !_.SUPER_WEIRD_MODE;
            (_.SUPER_WEIRD_MODE) ? mode_buttons["SUPER_WEIRD_MODE"].classList.add("btn-success") : mode_buttons["SUPER_WEIRD_MODE"].classList.remove("btn-success");
        };

        mode_buttons["STICKY_MODE"].onclick = () => {
            _.STICKY_MODE = !_.STICKY_MODE;
            (_.STICKY_MODE) ? mode_buttons["STICKY_MODE"].classList.add("btn-success") : mode_buttons["STICKY_MODE"].classList.remove("btn-success");
        };

        mode_buttons["RESET_MODES"].onclick = () => {
            _.WEIRD_MODE = false;
            _.SUPER_WEIRD_MODE = false;
            _.STICKY_MODE = false;
            mode_buttons["WEIRD_MODE"].classList.remove("btn-success");
            mode_buttons["SUPER_WEIRD_MODE"].classList.remove("btn-success");
            mode_buttons["STICKY_MODE"].classList.remove("btn-success");
        };

        _.display.element = document.getElementById("output-display");

        let shifts = [
            document.getElementById('key-' + _.CONTROL_MAP.SHIFT[0]),
            document.getElementById('key-' + _.CONTROL_MAP.SHIFT[1])
        ];

        let controls = [
            document.getElementById('key-' + _.CONTROL_MAP.CONTROL[0]),
            document.getElementById('key-' + _.CONTROL_MAP.CONTROL[1])
        ];

        let alts = [
            document.getElementById('key-' + _.CONTROL_MAP.ALT[0]),
            document.getElementById('key-' + _.CONTROL_MAP.ALT[1])
        ]

        let capslock = document.getElementById('key-' + _.CONTROL_MAP.CAPSLOCK);
        let functionKey = document.getElementById('key-' + _.CONTROL_MAP.FUNCTION);
        let superKey = document.getElementById('key-' + _.CONTROL_MAP.SUPER);

        _.display.update = () => {
            shifts.forEach((ele) => {
                if(_.state.shift) {
                    ele.classList.add("btn-warning");
                } else {
                    ele.classList.remove("btn-warning");
                }
            });

            alts.forEach((ele) => {
                if(_.state.alt) {
                    ele.classList.add("btn-warning");
                } else {
                    ele.classList.remove("btn-warning");
                }
            });

            controls.forEach((ele) => {
                if(_.state.control) {
                    ele.classList.add("btn-warning");
                } else {
                    ele.classList.remove("btn-warning");
                }
            });

            if(_.state.capslock) {
                capslock.classList.add("btn-warning");
            } else {
                capslock.classList.remove("btn-warning")
            }

            if(_.state.function) {
                functionKey.classList.add("btn-warning");
            } else {
                functionKey.classList.remove("btn-warning");
            }

            if(_.state.super) {
                superKey.classList.add("btn-warning");
            } else {
                superKey.classList.remove("btn-warning");
            }

            let output = _.display.text.substring(0, _.display.cursor - 1) +
                         "<ins>" + _.display.getCursorChar() + "</ins>" +
                         _.display.text.substring(_.display.cursor);

            _.display.element.innerHTML = output;
        }

        for(let i = 0; i <= _.KEY_COUNT; i++) {
            let e = document.getElementById("key-" + i);

            _.keys[i].element = e;

            if(_.keys[i].type == _.TYPES.CHARACTER) {
                e.onclick = (mouseEvent) => {
                    if(_.state.capslock) {
                        _.display.addChar(_.keys[i].character.shift);
                    } else if(_.state.shift) {
                        _.state.shift = false;
                        _.display.addChar(_.keys[i].character.shift);
                    } else {
                        _.display.addChar(_.keys[i].character.normal);
                    }

                    e.classList.add("disabled");
                    setTimeout(() => {
                        e.classList.remove("disabled");
                    }, 250);

                    _.display.update();
                };
                
            }
            
            if(_.keys[i].type == _.TYPES.CONTROL) {
                e.onclick = (mouseEvent) => {
                    _.keys[i].event();

                    e.classList.add("disabled");
                    setTimeout(() => {
                        e.classList.remove("disabled");
                    }, 250);

                    _.display.update();
                };
            }
        }

        document.onkeydown = (ev) => {

            if(ev.key == "Backspace") {
                ev.preventDefault();
                _.keys[14].element.click();
                return;
            } else if (ev.key == "Enter") {
                ev.preventDefault();
                _.keys[41].element.click();
                return;
            } else if (ev.key == "Tab") {
                ev.preventDefault();
                _.keys[15].element.click();
                return;
            }

            switch(ev.code) {
                case "CapsLock":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.CAPSLOCK].element.click();
                    break;
                case "ShiftLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.SHIFT[0]].element.classList.add("disabled");
                    break;
                case "ShiftRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.SHIFT[1]].element.classList.add("disabled");
                    break;
                case "ControlLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.CONTROL[0]].element.classList.add("disabled");
                    break;
                case "MetaLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.SUPER].element.classList.add("disabled");
                    break;
                case "AltLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ALT[0]].element.classList.add("disabled");
                    break;
                case "AltRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ALT[1]].element.classList.add("disabled");
                    break;
                case "ControlRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.CONTROL[1]].element.classList.add("disabled");
                    break;
                case "ArrowLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ARROWS.LEFT].element.click();
                    break;
                case "ArrowUp":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ARROWS.UP].element.click();
                    break;
                case "ArrowDown":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ARROWS.DOWN].element.click();
                    break;
                case "ArrowRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ARROWS.RIGHT].element.click();
                    break;
            }

            _.keys.forEach((key) => {
                if(key.type == _.TYPES.CHARACTER) {
                    if(key.character.normal == ev.key) {
                        if(_.WEIRD_MODE) {
                            let color = _.generateRandomColor();
                            key.element.style.backgroundColor = color;
                            key.element.style.borderColor = color;
                            
                            if(_.SUPER_WEIRD_MODE) {
                                let interval = setInterval( () => {
                                    color = _.dimColor(color);
                                    key.element.style.backgroundColor = color;
                                    key.element.style.borderColor = color;
                                    if(color == "") clearInterval(interval);
                                }, 250);
                            }
                        }
                        if(_.STICKY_MODE) {
                            let color = "#e22620";
                            key.element.style.backgroundColor = color;
                            key.element.style.borderColor = color;
                            if(key.interval != false) clearInterval(key.interval);
                            let interval = setInterval( () => {
                                    color = _.dimColor(color);
                                    key.element.style.backgroundColor = color;
                                    key.element.style.borderColor = color;
                                    key.interval = interval;
                                    if(color == "") {
                                        clearInterval(interval);
                                        key.interval = false;
                                    }
                            }, 100);
                        }

                        ev.preventDefault();
                        key.element.click();
                        return;// break out of function
                    } else if (key.character.shift == ev.key) {
                        if(_.WEIRD_MODE) {
                            let color = _.generateRandomColor();
                            key.element.style.backgroundColor = color;
                            key.element.style.borderColor = color;
                            if(_.SUPER_WEIRD_MODE) {
                                let interval = setInterval( () => {
                                    color = _.dimColor(color);
                                    key.element.style.backgroundColor = color;
                                    key.element.style.borderColor = color;
                                    if(color == "") clearInterval(interval);
                                }, 250);
                            }
                        }
                        if(_.STICKY_MODE) {
                            let color = "#e22620";
                            key.element.style.backgroundColor = color;
                            key.element.style.borderColor = color;
                            if(key.interval != false) clearInterval(key.interval);
                            let interval = setInterval( () => {
                                    color = _.dimColor(color);
                                    key.element.style.backgroundColor = color;
                                    key.element.style.borderColor = color;
                                    key.interval = interval;
                                    if(color == "") {
                                        clearInterval(interval);
                                        key.interval = false;
                                    }
                            }, 100);
                        }
                        ev.preventDefault();
                        _.state.shift = true;
                        _.display.update();
                        key.element.click();
                        return;// break out of function
                    }
                }
            });
        }

        document.onkeyup = (ev) => {
            switch(ev.code) {
                case "ShiftLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.SHIFT[0]].element.classList.remove("disabled");
                    break;
                case "ShiftRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.SHIFT[1]].element.classList.remove("disabled");
                    break;
                case "ControlLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.CONTROL[0]].element.classList.remove("disabled");
                    break;
                case "MetaLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.SUPER].element.classList.remove("disabled");
                    break;
                case "AltLeft":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ALT[0]].element.classList.remove("disabled");
                    break;
                case "AltRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.ALT[1]].element.classList.remove("disabled");
                    break;
                case "ControlRight":
                    ev.preventDefault();
                    _.keys[_.CONTROL_MAP.CONTROL[1]].element.classList.remove("disabled");
                    break;
            }
        }
    }
}