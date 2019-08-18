import React, { Component } from 'react';
import './docplanner.css'

class Mainnine extends Component {
    render() {
        return (
            <div className="arr-plan">
                <a href={this.props.mainneuf.lien}>
                    <img src={this.props.mainneuf.lienimg} />
                    <div className="Pay">
                        <p className="c-l">{this.props.mainneuf.ville}</p>
                        <p className="paraa">See Openings</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Mainnine;