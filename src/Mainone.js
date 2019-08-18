import React, { Component } from 'react';
import './docplanner.css'

class Mainone extends Component {
    render() {
        return (
            <div>
                <div className="divposition">
                    <img src={"https://www.docplanner.com/img/sygnet.png"} />
                </div>
                <div className="divposition">
                    <h1 style={{ fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: '300', letterSpacing: '.3px', fontSize: '2.125rem', color: '#00b39b' }}>Making the
                healthcare experience more human</h1>
                </div>
            </div>
        );
    }
}

export default Mainone;