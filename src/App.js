import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super(); //gives 'this' the context for this component and not the parent React.Component
        this.state = {
            text: 'This is state text'
        }
    }
    update (event) {
        this.setState({text: event.target.value});
    }

    render () {
        let text = this.props.text;
        let cat = this.props.cat;

        return (
            //wrap jsx elements in a parent node to return multiple nodes
            <div>
                <h1 className="">{this.state.text}</h1>
                <Widget update={this.update.bind(this)}/>
                <h1 className="">{`I have ${cat} cats`}</h1>
            </div>
        );
    }
}

App.propTypes = {
    text: PropTypes.string,
    cat: PropTypes.number.isRequired,
}

//stateless function component below, obviously can't have state like the class component
const Widget = (props) =>
    <input type="text" onChange={props.update}/>;

export default App;
