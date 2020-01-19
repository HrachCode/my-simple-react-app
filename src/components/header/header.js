import React,{Component} from 'react';
import './header.css';


export default class Header extends Component{
    state = {
        term:''
    };

onSerchChang = (e)=>{
        const term = e.target.value;
        this.setState({term})
        this.props.onSerchChang(term)

}
    render(){
        return(
            <header>
                <div className="hederContent">
                    <div className="leftchapter">
                        <h1>search your fone</h1>
                        <input type="text"
                               id="input" className="Input-text"
                               placeholder="searchfone"
                               value={this.state.term}
                               onChange={this.onSerchChang}

                        /> <span><i className="fas fa-search"></i></span>
                    </div>
                    <div className="chapterright">
                        <div className="datacenters">
                            <h1><i  className="fas fa-coins"></i>Online Shop</h1> <h3 >
                            best prices</h3>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
