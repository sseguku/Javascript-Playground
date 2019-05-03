import React, { Component } from 'react';

class Counter extends Component {
    //helps to add any data that component needs
    state = {
        count: this.props.value
        // imageURL : "https://picsum.photos/200"
        //tags: ['tag1','tag2','tag3']
    };
   /*  constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */
    handleIncrement = () => {
        //this.state.count++;
        //console.log("Increment clicked Now", this);
        this.setState({count: this.state.count + 1});
    }

    render() { 

        //console.log(this.props);
       
        return (
           
            //helps to avoid adding unnessary divs
            <div>
                 {/*this.props.children*/}
                {/* <h1> Hello Counter Cart</h1> */}
                {/* //setting attributes */}
                {/* <img src = {this.state.imageURL} alt = ""/> */}
                {/* <span style={{fontSize: 30}} className="badge badge-primary m-2"> {this.formatCount()}</span> */}
                {/* <span style={this.styles} className={this.badgeDesign()}> {this.formatCount()}</span> */}
                <span className={this.badgeDesign()}> {this.formatCount()}</span>
                <button 
                 onClick = {this.handleIncrement}
                 className="btn btn-secondary btn-sm">
                 Increment
                </button>
                <button 
                    onClick = {() => this.props.onDelete(this.props.id)}
                className="btn btn-danger btn-sm m-2">
                Delete
                </button>
                
            
                {/* <ul>{this.renderTags()}</ul> */}
            </div>
        );
    }


    //Empty array 

    renderTags(){
        if(this.state.tags.length === 0 ) return <p>"There no tags!"</p>;
        return this.state.tags.map(tag =><li key ={tag}>{tag}</li>);
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

   /*  styles ={
        fontSize: 15,
        fontWeigt: 'bold'
    }; */

}
 
export default Counter;