import React,{Component} from 'react';

import './listItems.css';

class ListItem extends Component{
    state ={
        myCount:0,
        price:this.props.price
    }

  foncountId = this.props.foncountId;
    amauntCountPlus = ()=>{

        this.setState(({myCount})=> {
            const num = myCount + 1
           return{ myCount:num}
        })
    }
    amauntCountMinus = ()=>{
        this.props.changStock(this.foncountId.id,true)
        this.setState(({state})=> {
                 if (this.state.myCount){
                     const num = this.state.myCount - 1;
                    const defaultPrice = this.props.price
                     return{ myCount:num,
                             price:this.state.price - defaultPrice
                      }
                           }
        })
    }
 myCount = ()=>{
     this.props.changStock(this.foncountId.id,false)
    this.setState(({state})=> {
        const num = this.state.myCount + 1;
         const defaultPrice = this.props.price
        return{ myCount:num,
                price:this.state.price + defaultPrice
      }
    })

 }
 amaunt = this.state.price;

    render(){
        const {model,price,img,} = this.props






        return (
            <div className="shopBascet">
                <div className="phoneImg">  <img alt="iphon" src={img} /></div>
            <div className="kk"> {model} </div>
               <div id="price"> {`oure best price is ${price}$`}</div>
             <div className="controlers">
                 <span onClick={this.myCount } ><i className="plus fas fa-plus"></i></span>
                <span className="amaunt">{this.state.myCount}</span><span ><i onClick={this.amauntCountMinus} className="plus fas fa-minus"></i></span>

             </div>   <p>amaunt: {this.state.price}$</p>
                <div className="trash"><span onClick={this.props.deletItm}><i className="fas fa-trash-alt"></i></span></div>


            </div>
        )

    }
}



export default ListItem;
