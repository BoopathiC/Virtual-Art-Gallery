import React, {Component} from 'react';
class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count: 0,
        };
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    };

    render() {
        return (
           <div><center>
            <h2>Class Counter</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handleIncrement}>Increment</button>
            </center>
           </div>
        );
    }
}


export default ClassCounter;