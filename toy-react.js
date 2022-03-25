// UI = render(data)

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(component) {
        this.root.appendChild(component.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
}

export function createElement(tagName, attributes, ...children) {
    let e;
    console.log(tagName)

    if (typeof tagName === 'string') {
        e = new ElementWrapper(tagName);
    } else {
        e = new tagName;
    }

    for (let attr in attributes) {
        e.setAttribute(attr, attributes[attr]);
    }

    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === 'string' || typeof child === 'number') {
                child = new TextWrapper(child);
            }

            if (typeof child === 'object' && child instanceof Array) {
                insertChildren(child)
            } else {
                e.appendChild(child); // 如果e是一个元素，则无法定制 appendChild 方法，因此需要一个类
            }
        }
    }

    insertChildren(children);

    return e;
}

export class Component {
    constructor() {
        this.props = Object.create(null); // 创建绝对空的一个对象
        this.children = [];
        this._root = null;
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component);
    }

    get root() {
        if (!this._root) {
            this._root = this.render().root; // 最后一定会是一个 ElementWrapper 或者 TextWrapper 创建的节点，都有自己的 root
        }

        return this._root;
    }
}

export function render(component, parentELement) {
    parentELement && parentELement.appendChild(component.root);
}

// setState: 修改 state 并且 render，如果有多次 state，则只进行一个 render
