import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render () {
        let text = this.props.text;
        let cat = this.props.cat;

        return (
            //wrap jsx elements in a parent node to return multiple nodes
            <div>
                <h1 className="">{text}</h1>
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
// const App = () => <h1>Hello World</h1>;

export default App;
