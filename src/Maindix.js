import React, { Component } from 'react';
import './docplanner.css'

class Maindix extends Component {
    render() {
        return (
            <footer>
                <div className="fini">
                    <p>We are leaders in 10 countries: <a href={"https://www.znanylekarz.pl/"}>Poland</a> ,<a
                        href={"https://www.doktortakvimi.com/"}>Turkey</a>,<a href={"https://www.doctoralia.es/"}>Spain</a>,<a
                            href="https://www.miodottore.it/">Italy</a>,<a href="https://www.znamylekar.cz/">Czech
                    Republic</a>,<a href={"https://www.doctoralia.com.mx/"}>Mexico</a>,<a
                            href={"https://www.doctoralia.com.mx/"}>Colombia</a>,<a
                                href={"http://www.doctoralia.com.br/"}>Brazil</a>,<a href={"http://www.doctoraliar.com/"}>Argentina</a>
                        and <a href={"http://www.doctoralia.cl/"}>Chile</a></p>
                </div>
                <div className="finitwo">
                    <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify
                        the
                conditions for storing or accessing cookies on your browser.</p>
                </div>
                <div className="finitwo">
                    <p id="der">www.docplanner.com © 2019</p>
                </div>
            </footer>
        );
    }
}

export default Maindix;