import React from 'react';
import styles from './rates.module.css';

class Rates extends React.Component{
    render(){
        return(
          <div>
            <h1 className={styles.back}>Quick Quote</h1>
              <div className={styles.rule}>
                <div className={styles.center}>
                  <h5>OFX Customer Rate</h5>
                  <h6 style={{color: "green"}}>0.7618</h6>
                  <h5>From</h5>
                  <h6 >AUD <span style={{color: "blue"}}>25,000.00</span></h6>
                  <h5>To</h5>
                  <h6 >USD <span style={{color: "blue"}}>19,045.00</span></h6>
                 <button className={styles.buttons}  type="button">START NEW QUOTE</button> 
                </div>
              </div>

          </div>
        
              )
    }
    }

    export default Rates;
