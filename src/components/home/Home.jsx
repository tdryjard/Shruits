import React, { useEffect } from 'react';
import setFullMobileHeight from '../../utils/fullMobileHeight';
import { faBell, faLeaf, faTractor, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

    useEffect(() => {
        setFullMobileHeight();
    }, []);

    return (
        <div className="homepage">
            <div className="heading search">
                <div className="content">
                    <img src={require('../../images/suburbs_district.svg')} alt="" className="illustration" />
                    <div className="command-form">
                        <p className="title">
                            Achetez des dizaines de fruits et légumes et échangez avec les producteurs près de chez vous.
                        </p>
                        <form className="search-address" onSubmit={event => event.preventDefault()}>
                            <input type="text" placeholder="Où êtes-vous ?" className="search-bar-address" />
                            <button type="submit" className="submit">Rechercher</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="heading country">
                <div className="content">
                    <div className="hang">
                        <span className="title">
                            <h4>En consommant sur Shruits vous :</h4> 
                            <ul className="country-advantages">
                                <li>
                                    <FontAwesomeIcon icon={faTractor} className="advantage-icon" />
                                    <span>
                                        Soutenez l'agriculture française (moins d'importation)
                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLeaf} className="advantage-icon" />
                                    <span>Vous respectez l'environnement (moins d'emballage, produits BIO, peu de transport)</span> 
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMapMarker} className="advantage-icon" />
                                    <span>Sensibilisez votre entourage à consommer local et favorisez les échanges</span> 
                                </li>
                            </ul>
                        </span>
                    </div>
                    <img src={require('../../images/country_girl.svg')} alt="" className="illustration" />
                </div>
            </div>
            <div className="heading command">
                <div className="content">
                    <img src={require('../../images/command_girl.svg')} alt="" className="illustration" />
                    <div className="hang">
                        <span className="title">
                            Devenez premium et commandez l'exclusivité !
                        </span>
                        <Link className="btn">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="text">Devenir premium</span> 
                        </Link>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default Home;
