import React from 'react';

class App extends React.Component {
    render () {
        return (
            //wrap jsx elements in a parent node to return multiple nodes
            <div>
                <h1 className="">Hello World</h1>
                <h1 className="">Test a second one</h1>
            </div>
        );
    }
}

//stateless function component below, obviously can't have state like the class component
// const App = () => <h1>Hello World</h1>;

export default App;
