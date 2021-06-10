import React from 'react';
import ReactDOM from 'react-dom';
import styles from './rates.module.css';
import Userdata from './Userdetails';
import Telephones from './Telephone';
import Currency from './Currencybox';
class Quotes extends React.Component{
  render(){
    return(
      <div  className={styles.center}>
  
      <Currency />
          
      </div>
    )
  }
}
ReactDOM.render(<Quotes />, document.getElementById('root'))