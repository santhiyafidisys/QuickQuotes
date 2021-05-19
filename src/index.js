import React from 'react';
import ReactDOM from 'react-dom';
import styles from './rates.module.css';
import Userdata from './Userdetails';
import Telephones from './Telephone';
import Currency from './Currencybox';
import Rates from './Rates';
class Quotes extends React.Component{
  render(){
    return(
      <div className={styles.center}>
      <h1 className={styles.back}>Quick Quote</h1>
      <div className={styles.rule}>
      <Userdata />
      <Telephones />
      <Currency />
      <Rates />
      </div>    
      </div>
    )
  }
}
ReactDOM.render(<Quotes />, document.getElementById('root'))