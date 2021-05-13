import React from 'react';
import styles from './rates.module.css';
import Amounts from './Amount';
import GetQuote from './Get';

class Currency extends React.Component{
    render(){
      return(
        <div className={styles.ratebox}>
          <div className={styles.section}>
            <div>
            <label for="From Currency">From Currency</label> 
             <select className={styles.textareas}>
							<option value="Austrailan Dollar[Aus]">Austrailan Dollar[Aus]</option>
							<option value="India Rupees[IND]">India Rupees[IND]</option>
							<option value="China Yuan[CHN">China Yuan[CHN</option>
							<option value="United States Dollar[US]">United States Dollar</option>
							<option value="Russian Ruble [RUB]">Russian Ruble [RUB]</option>
						</select>
            </div>
          <div>
          <label for="to Currency">To Currency</label> 
          <select className={styles.textareas}>
							<option value="United States Dollar[US]">United States Dollar[US]</option>
							<option value="Russian Ruble [RUB]">Russian Ruble [RUB]</option>
							<option value="China Yuan[CHN]">China Yuan[CHN]</option>
							<option value="India Rupees[IND]">India Rupees[IND]</option>
							<option value="Austrailan Dollar[Aus]">Austrailan Dollar[Aus]</option>
						</select>

          </div>
          
           </div>
           <Amounts rates="250000"/>   
           <GetQuote /> 
        </div>
      )
    }
}
export default Currency;