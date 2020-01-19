import React from 'react';
import ShopItems from '../shopItems/shopitems'
import './content.css';
import Footer from "../footer/footer";



const Content = ({state,footer,deletItm,changCountDecriments,changStock,counter})=>{

        const elements = state.map((item) => {
            const { id, ...itemProps } = item;

            return(
              <div key={id} className="wrap">
                  <ShopItems {...itemProps }
                             changCountDecriments={()=> changCountDecriments(id)} />
              </div>
            )
        });


    return(
        <div className="cotent">
            {elements}
            <Footer prop={footer}  deletItm={deletItm} changStock={changStock} />
        </div>
    )

};

export default Content;