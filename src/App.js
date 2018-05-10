import React from 'react';

class App extends React.Component {
    constructor () {
        super(); //gives 'this' the context for this component and not the parent React.Component
        this.state = {
            a: '',
            b: ''
        }
    }
    update () {
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        });
    }

    render () {
        return (
            //wrap jsx elements in a parent node to return multiple nodes
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                {this.state.b}
            </div>
        );
    }
}

export default App;
