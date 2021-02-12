import React from 'react';

class HomePage extends React.Component {
    render() {
        return <div>
            <h1> Hello, { this.props.firstName }</h1>
            { this.props.showQuestion === true && <h2>do you prefer react, angular, or vue?</h2> }
        </div>
    }
}

export default HomePage;