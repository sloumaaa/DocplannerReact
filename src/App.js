import React from 'react';
import Headgch from './Headgch'
import Headdt from './Headdt'
import Mainone from './Mainone'
import Maintwo from './Maintwo'
import Mainthree from './Mainthree';
import Mainfors from './Mainfors';
import Mainfive from './Mainfive';
import Mainsix from './Mainsix';
import Mainseven from './Mainseven';
import photo from './docplanner.PNG';
import Maineyt from './Maineyt';
import Mainnine from './Mainnine';
import Maindix from './Maindix';


function App() {
  var paragraphe1 = "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.";
  var paragraphe2 = "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.";
  var designone = 'partageone';
  var designtwo = 'partagetwo';
  var formaone = 'patient';
  var formatwo = 'doctor';
  var fonctiontypeone1 = 'For patients';
  var fonctiontypeone2 = 'For doctors';
  var fonctiontypetwo1 = 'Find a doctor, book a visit and solve any health-related doubt';
  var fonctiontypetwo2 = 'Save time managing visits and cut no-shows by half';
  var urlimageone = 'https://www.docplanner.com/img/screen-marketplace@2x.png';
  var urlimagetwo = 'https://www.docplanner.com/img/screen-saas@2x.png';
  var main5one = { nomdeclas: 'global-comp1one', urladress: 'https://www.znanylekarz.pl/', titttre: ' ZnanyLekarz' };
  var main5two = { nomdeclas: 'global-comp1one', urladress: 'https://www.doctoralia.es/', titttre: ' Doctoralia' };
  var main5three = { nomdeclas: 'global-comp1one', urladress: 'https://www.miodottore.it/', titttre: ' MioDottore' };
  var main5fors = { nomdeclas: 'global-comp1one', urladress: 'https://www.doktortakvimi.com/', titttre: ' DoktorTakvimi' };
  var main5five = { nomdeclas: 'global-comp1two', urladress: 'https://www.znamylekar.cz/', titttre: ' ZnamyLekar' };
  var listmaincinq = [];
  listmaincinq.push(main5one, main5two, main5three, main5fors, main5five);
  var main7one = { Nomdelaclasse: 't-pays yasar', imagee: 'https://www.docplanner.com/img/flag.png', tit: 'Leader in 10 countries', directionclass: 'yasarthree', tite: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile' };
  var main7two = { Nomdelaclasse: 't-pays yamin', imagee: 'https://www.docplanner.com/img/visits.png', tit: '1.5 million appointments', directionclass: 'yaminthree', tite: 'booked last month' };
  var main7three = { Nomdelaclasse: 't-pays yasar', imagee: 'https://www.docplanner.com/img/patients.png', tit: '30 million unique patients', directionclass: 'yaminthree', tite: 'visit us every month' };
  var main7fors = { Nomdelaclasse: 't-pays yamin', imagee: 'https://www.docplanner.com/img/doctors.png', tit: '2 million active doctors', directionclass: 'yaminthree', tite: 'trust in our solutions' };
  var listmainsept = [];
  listmainsept.push(main7one, main7two, main7three, main7fors);
  var main9one = { lien: 'https://www.docplanner.com/career?&loc=poland#jobs-offers', lienimg: 'https://www.docplanner.com/images/warsaw.png', ville: 'Warsaw' };
  var main9two = { lien: 'https://www.docplanner.com/career?&loc=spain#jobs-offers', lienimg: 'https://www.docplanner.com/images/barcelona.png', ville: 'Barcelona' };
  var main9three = { lien: 'https://www.docplanner.com/career?&loc=rome#jobs-offers', lienimg: 'https://www.docplanner.com/images/istanbul.png', ville: 'Istanbul' };
  var main9fors = { lien: 'https://www.docplanner.com/career?&loc=italy#jobs-offers', lienimg: 'https://www.docplanner.com/images/rome.png', ville: 'Rome' };
  var main9five = { lien: 'https://www.docplanner.com/images/mexico-city.png', lienimg: 'https://www.docplanner.com/images/mexico-city.png', ville: 'Mexico-city' };
  var main9six = { lien: 'https://www.docplanner.com/images/curitiba.png', lienimg: 'https://www.docplanner.com/images/curitiba.png', ville: 'Curitiba' };
  var listmainneuf = [];
  listmainneuf.push(main9one, main9two, main9three, main9fors, main9five, main9six);




  return (
    <div>
      <header style={{ "position": "fixed", "top": "0", "left": "0", "width": "100%", "zIndex": "3", "background": "hsla(0,0%,100%,.98)", "transition": "box-shadow .25s ease 0s" }} >
        <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '-150px', marginTop: '10px' }}>
          <Headgch />
          <Headdt />
        </div>
      </header>
      <main>
        <Mainone />
        <div className="partage">
          <Maintwo paragraphe={paragraphe1} design={designone} />
          <Maintwo paragraphe={paragraphe2} design={designtwo} />
        </div>
        <div className="patient-doctor">
          <Mainthree forma={formaone} fonctiontypeone={fonctiontypeone1} fonctiontypetwo={fonctiontypetwo1} urlimage={urlimageone} exsist={1} />
          <Mainthree forma={formatwo} fonctiontypeone={fonctiontypeone2} fonctiontypetwo={fonctiontypetwo2} urlimage={urlimagetwo} exsist={0} />
        </div>
        <div className="symbol">
          <Mainfors />
          <div className="global-comp1">
            {listmaincinq.map(x => <Mainfive maincinq={x} />)}
          </div>
        </div>
        <div className="world" style={{ backgroundImage: "url(" + photo + ")" }} >
          <Mainsix />
          <div className="kolpays">
            {listmainsept.map(x => <Mainseven mainsept={x} />)}
          </div>
        </div>
        <Maineyt />
        <div className="Pays">
          {listmainneuf.map(x => <Mainnine mainneuf={x} />)}
        </div>
      </main>
      <Maindix />
    </div>
  );
}

export default App;
