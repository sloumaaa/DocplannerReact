import React, { Component } from 'react';
import './docplanner.css'

class Headdt extends Component {
    render() {
        return (
            <div>
                <ul className="puces">
                    <a href={"https://www.docplanner.com/about-us"}>
                        <li style={{color: 'rgb(0, 179, 155)'}}>About us</li>
                    </a>
                    <a href={"https://www.docplanner.com/career"}>
                        <li className="colorie">Carrer</li>
                    </a>
                    <li className="colorie">Departement
                        <ul>
                            <li><a href={"https://www.youtube.com/watch?v=_e-wxg3T1nE&t=6s"}>Marketing</a></li>
                            <li><a href={"https://www.docplanner.com/department?dep=customer"}>Customer</a></li>
                            <li><a href={"https://www.docplanner.com/department?dep=it"}>IT</a></li>
                            <li><a href={"https://www.docplanner.com/department?dep=finance"}>Finance</a></li>
                            <li><a href={"https://www.docplanner.com/department?dep=hr"}>HR</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
                );
            }
        }
        
export default Headdt;