import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = { 
        counters: [
            
            {id: 1, value: 5},
            {id: 2, value: 0},
            {id: 3, value: 1},
            {id: 4, value: 0}
            
        ]
     };

     handleDelete = counterId => {
         //console.log("Event handler clicked", counterId )
         //get all counters expect that without this id
         const counters = this.state.counters.filter(c => c.id !== counterId);
         this.setState({counters})
     }

    render() { 
        return ( 
        <div>
            {this.state.counters.map(counter =>
             <Counter
              onDelete = {this.handleDelete}
              /* key={counter.id} id={counter.id} */ 
              value={counter.value}/>
            )}
        </div>);
    }
}
 
export default Counters;