import { createElement, render, Component } from "./toy-react";

class MyComponent extends Component {
    constructor() {
        super();

        this.state = {
            a: 1,
            b: 2
        }
    }

    render() {
        return <div>
            <h1>标题</h1>
            <h4>{this.state.a.toString()}</h4>
            {this.children}
        </div>
    }
}

render(<MyComponent>
    <div>1</div>
    <div>2</div>
</MyComponent>, document.body);
