import React from 'react';
import styles from './rates.module.css';

class GetQuote extends React.Component{
    render(){
        return(
          <div>
            <button className={styles.button} onclick="href://api.ofx.com/PublicSite.ApiService/OFX/spotrate/individual/AUD/GBP/10000?format=json" type="button">Get Quote</button>    
            

          </div>
        )   
           
    }
}
export default GetQuote;