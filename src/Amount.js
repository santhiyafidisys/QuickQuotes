import React from 'react';
import styles from './rates.module.css';

class Amounts extends React.Component{
    render(){
        return(
          <div>
            <label for="Amount">Amount</label>
            <ul>
            <input  className={styles.textarea} type="text" placeholder="Amount" name=" " required></input>
            </ul> 
          </div>
        )
    }
}
export default Amounts;