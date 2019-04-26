import React, { Component } from 'react';

class Counter extends Component {
    //helps to add any data that component needs
    state = {
        count: 0,
        // imageURL : "https://picsum.photos/200"
        tags: ['tag1','tag2','tag3']
    };

    styles ={
        fontSize: 15,
        fontWeigt: 'bold'
    };
    render() { 

       
        return (
            //helps to avoid adding unnessary divs
            <div>
                {/* <h1> Hello Counter Cart</h1> */}
                {/* //setting attributes */}
                {/* <img src = {this.state.imageURL} alt = ""/> */}
                {/* <span style={{fontSize: 30}} className="badge badge-primary m-2"> {this.formatCount()}</span> */}
                {/* <span style={this.styles} className={this.badgeDesign()}> {this.formatCount()}</span> */}
                <span className={this.badgeDesign()}> {this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key ={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    badgeDesign() {
        let countingDesign = "badge m-2 badge-";
        countingDesign += this.state.count === 0 ? "warning" : "primary";
        return countingDesign;
    }

    formatCount(){
       
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;