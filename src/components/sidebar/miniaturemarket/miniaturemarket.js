import React from 'react';
import MiniatureMarketSponsor from '../../../images/Miniature.png';
import './miniaturemarket.css';



const MiniatureMarket = () => {
    return ( 
        <div className="miniholder">
        <a href="https://www.miniaturemarket.com">
            <img className="minimarket" src={MiniatureMarketSponsor} alt="Our proud sponsor, miniature market" />
            </a>
        </div>
     );
}
 
export default MiniatureMarket;