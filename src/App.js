import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor() {
        super(); //gives 'this' the context for this component and not the parent React.Component
        this.state = {
            value: 0
        }
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({
            value: this.state.value + 1
        });
    }

    componentWillMount() {
        console.log('will mount');
    }

    render() {
        console.log('render');
        return <button onClick={this.update}>{ this.state.value }</button>
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillUnmount() {
        console.log('will unmount');
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDom.render(<App />, document.getElementById('a'));
    }
    unmount() {
        ReactDom.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;
