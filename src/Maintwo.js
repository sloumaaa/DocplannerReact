import React, { Component } from 'react';
import './docplanner.css'

class Maintwo extends Component {
    render() {
        return (

            <div className={this.props.design}>
                <p>{this.props.paragraphe}</p>
            </div>

        );
    }
}

export default Maintwo;