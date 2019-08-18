import React, { Component } from 'react';

class Mainseven extends Component {
    render() {
        return (
            <div className={this.props.mainsept.Nomdelaclasse}>
                <div className="yasarone">
                    <img src={this.props.mainsept.imagee} style={{ width: "25px", height: "25px" }} />
                </div>
                <div className="yasartwo">
                    <h2 className="titre3">{this.props.mainsept.tit}</h2>
                </div>
                <div className={this.props.mainsept.directionclass}>
                    <p className="c-l">{this.props.mainsept.tite}</p>
                </div>
            </div>
        );
    }
}

export default Mainseven;