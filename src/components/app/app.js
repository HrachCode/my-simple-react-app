import React, { Component } from 'react';

import Header from '../header/header';
import Content from '../content/content'

import './app.css';


export default class App extends Component {
    // genrate id for items
    newId = 100;
    state = {
        data : [
            this.createTodoItem('Iphone 6',650,'https://clck.ru/JCzd6',28),
            this.createTodoItem('xiaomi mi 9',700,'https://clck.ru/JCzeY',30),
            this.createTodoItem('Sony 8',850,'https://clck.ru/JCzi3',85),
            this.createTodoItem('Iphone 7',980,'https://clck.ru/JCznC',25),
            this.createTodoItem('huawei ip30 ',400,'https://clck.ru/JKCtD',10),
            this.createTodoItem('xiaomi mi pro',450,'https://clck.ru/JK3Yi',3),
            this.createTodoItem('samsung s5',500,'https://clck.ru/JK3Ze',50),
            this.createTodoItem('samsung s6',550,'https://clck.ru/JKCrz',35)

        ],
        purchasePrice:[

        ],
        term:''

    };
// creating items function
    createTodoItem(model,price,img,foncount,id, ){
        return {
            model,
            price,
            img,
            foncount,
            id:this.newId++,
            defaultNuber:0,
            purchasePrice:0
        }
    }
    createPurchasePriceItem(model,price,img, foncountId,id){
        return{
            model,
            price,
            img,
            foncountId,
            id:this.newId++,
        }

    }

getIndex = (data,id)=>{
    const idx = data.findIndex((el) => el.id === id);
        return idx
}

// counter of fone in stock
    changStock = (id,inc)=>{

        this.setState(({data})=> {
            const selectFone = this.state.data.filter((item)=>{
                return item.id === id
            })
            const idx = data.findIndex((el) => el.id === selectFone[0].id);
            const olditem = data[idx];
                   if (inc){
                       var newItem = {
                           ...olditem,foncount:olditem.foncount  + 1
                       }
                   }
                   else{
                  newItem = {
                       ...olditem,foncount:olditem.foncount - 1
                   }
               }
                const befor = data.slice(0,idx);
                const after =data.slice(idx + 1);
                const newArey = [...befor,newItem,...after];
                return {
                    data: newArey
                }


        })
    };

    changCountIncriment = (id)=>{
        this.setState(({data})=> {
            const idx = data.findIndex((el) => el.id === id);
            const olditem = data[idx];
            if(olditem){
                const newItem = {
                    ...olditem,defaultNuber:olditem.defaultNuber - 1,foncount:olditem.foncount + 1
                }

                const befor = data.slice(0,idx);
                const after =data.slice(idx + 1);
                const newArey = [...befor,newItem,...after];
                return {
                    data: newArey
                }
            }else{

                return
            }

        })
    }
    changCountDecriments = (id)=>{
        let data = this.state.data;
        const idx = this.getIndex(data,id)
        const olditem = this.state.data[idx];
        const model = olditem.model;
        const price = olditem.price;
        const img = olditem.img;
        const foncountId = olditem;
        const newItem = this.createPurchasePriceItem(model,price,img,foncountId)
              this.setState(({purchasePrice})=>{
            const newarr =[
                ...purchasePrice,
                newItem
            ];
            return {
                purchasePrice:newarr
            }
        })
    };

    deletItm = (id)=>{
        this.setState(({purchasePrice})=>{
            const idx = purchasePrice.findIndex((el)=>el.id === id)
            const befor = purchasePrice.slice(0,idx);
            const after =purchasePrice.slice(idx + 1);
            const newArey = [...befor,...after];
                  return {
                purchasePrice:newArey
            }
        })
    }
    onSerchChang = (term)=>{
         this.setState({term})
    }
    serch(items,term){
        if (term.length === 0){
            return items
        }
        return  items.filter((item)=>{
           return  item.model.toLowerCase().indexOf(term.toLowerCase()) > -1;

       })
    }

  render() {
        const {data,term} = this.state;
        const visiblItems = this.serch(data,term)

    return (
      <div className="wraper">
            <Header onSerchChang={this.onSerchChang}/>
            <Content state={visiblItems}
                     footer={this.state.purchasePrice}
                     deletItm={this.deletItm}
                     changCountDecriments={this.changCountDecriments}
                     changStock={this.changStock}

            />

      </div>
    );
  }
};
