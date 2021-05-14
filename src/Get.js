import React from 'react';
import styles from './rates.module.css';

class GetQuote extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json');
  }
    render(){
        return(
          <div>
            <button className={styles.button} onClick={this.handleClick} type="button">Get Quote</button>    
            

          </div>
        )   
           
    }
}
export default GetQuote;