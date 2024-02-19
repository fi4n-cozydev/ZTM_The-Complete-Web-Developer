import './Hello.css';
import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p>Welcome to React</p>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;