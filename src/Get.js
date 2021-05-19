import React from 'react';
import styles from './rates.module.css';

class GetQuote extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ofx: " "
      };
    this.handleClick = this.handleClick.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }
  handleClick() {
    console.log('click happened');
    this.fetchApi();
  }
   fetchApi() {
    fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json')
   .then(response => response.json())
   .then(data => {
    this.setState({ofx: data})
    console.log(this.state.ofx);
    
    })
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
