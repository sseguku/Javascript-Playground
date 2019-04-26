import React, { Component } from 'react';

class Counter extends Component {
    //helps to add any data that component needs
    state = {
        count: 0,
        // imageURL : "https://picsum.photos/200"

    };

    styles ={
        fontSize: 15,
        fontWeigt: 'bold'
    };
    render() { 
        return (
            //helps to avoid adding unnessary divs
            <React.Fragment>
                {/* <h1> Hello Counter Cart</h1> */}
                {/* //setting attributes */}
                {/* <img src = {this.state.imageURL} alt = ""/> */}
                {/* <span style={{fontSize: 30}} className="badge badge-primary m-2"> {this.formatCount()}</span> */}
                <span style={this.styles} className="badge badge-primary m-2"> {this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;