import React from 'react';
import './shopitems.css';


const ShopItems = ( {model,price,img,foncount,changCounts,changCountDecriments,defaultNuber,} )=>{

    return(
        <div className="items">
            <div className="topdiv">
                <img alt="iphon" src={img} />

            </div>
            <h1>{model}</h1>
            <h4>{`our best price is ${price}$`}</h4>
            <h5>Pelletesque ac dui elit
               <span id="stock"> our stocks in stock</span>
              <br/>  <span id="span">{foncount}</span> </h5><div className="product__value_btn">
            <h6><a href="google.com">BY NOW</a></h6>      <span className="basket" onClick={changCountDecriments} ><i
            className="fas fa-shopping-cart"></i></span>

        </div>



        </div>
    )
}

export default ShopItems;