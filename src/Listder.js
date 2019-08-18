import React, { Component } from 'react';
import './docplanner.css'

class Listder extends Component {
    render() {
        var tablistder = ['CHOOSE COUNTRY', 'ARGENTINA', 'AUSTRALIA', 'Brazil', 'Chile', 'Colombia', 'Czech', 'FRANCE', 'Italy', 'Mexico', 'Peru', 'Poland', 'Portugal', 'Spain', 'Turkey', 'UK'];
    if (this.props.exsist==1){
        return (
            <div>
                <form>
                    <select name="Country">
                        {tablistder.map(x => <option>{x}</option>)}
                    </select>
                </form>
            </div>
        );
    }
    else 
    return null;
    }
}

export default Listder;