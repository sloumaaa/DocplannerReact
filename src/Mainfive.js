import React, { Component } from 'react';
import './docplanner.css'

class Mainfive extends Component {
    render() {
        return (
            <div className={this.props.maincinq.nomdeclas}>
            <a href={this.props.maincinq.urladress}>
                <h3 className="tittres"><i className="fas fa-star-of-life"></i>{this.props.maincinq.titttre}</h3>
            </a>
        </div>
        );
    }
}

export default Mainfive;