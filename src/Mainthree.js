import React, { Component } from 'react';
import './docplanner.css'
import Listder from './Listder';

class Mainthree extends Component {
    render() {
        return (
            <div className={this.props.forma}>
                <p className="color-pa">{this.props.fonctiontypeone}</p>
                <h1 className="color-tit">{this.props.fonctiontypetwo}</h1>
                <Listder exsist={this.props.exsist}/>
                <div className="overimage">
                    <img className="image" src={this.props.urlimage}/>
                    </div>
                </div>
                );
            }
        }
        
export default Mainthree;