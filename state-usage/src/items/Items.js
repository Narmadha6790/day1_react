import React, {Component} from 'react';

class Items extends Component {
   state = {
       soaps: [
           {name: "Lux", qty: 30, cost: 35.0},
           {name: "Dove", qty: 23, cost: 45.0},
           {name: "Cinthol", qty: 40, cost: 23.0},
           {name: "Margo", qty: 30, cost: 38.0},
           {name: "Marvel", qty: 30, cost: 42.0},
           {name: "Fa", qty: 21, cost: 32.5},
           {name: "Pears", qty: 9, cost: 54.0}           
       ],
       title: "Soap Item Details"
   }
   removeRow(index){
       console.log(index);
       const current = this.state;
       let newSoaps = current.soaps.filter((soap,ind) => {
            return ind !== index;
       });
       this.setState(state => ({soaps: newSoaps}));   
       
   }
   updateCost(index){
    const current = this.state;
    let newSoaps = current.soaps.map((soap,ind) => {
        if(ind === index) {
           soap.cost += (soap.cost) * 0.05; 
        }  
        return soap;
    });
    this.setState(state => ({soaps: newSoaps}));   
   }

   
   render(){
       return (<div><h1>{this.state.title}</h1><table><tr><td>Name</td><td>Quantity</td><td>Cost</td></tr>
           {
             this.state.soaps.map((soap,index)=> {
              return(<tr key={index}><td>{soap.name}</td><td>{soap.qty}</td><td>{soap.cost}</td><td><button onClick={()=>{this.removeRow(index)}}>Delete</button></td><td><button onClick={()=>{this.updateCost(index)}}>Update Cost by 5%</button></td></tr>) 
              })
            }
            </table></div>
        );       
   } 
}

export default Items;