import React from 'react';
import Listitem from '../listItems/listItems'
import './footer.css';


const Footer = ({ prop,deletItm,changStock})=>{

    const elements = prop.map((item) => {
        const { id, ...itemProps } = item;

        return (
          <div key={id} className="liWraper">

                  <Listitem {...itemProps } deletItm={()=>{deletItm(id)}} changStock={changStock} />
          </div>
        );
    });
    return(
        <footer>
            <div className="list-group">
                { elements }
            </div>
        </footer>
    )
}

export default Footer;