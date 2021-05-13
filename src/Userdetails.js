import React from 'react';
import styles from './rates.module.css';


class Userdata extends React.Component{
    render(){
      return(
        <div >
          <div className={styles.section}>
            <div>
            <label for="first-name">First Name</label>
            <ul>
              <input className={styles.textarea} type="text" placeholder="First name" name="" required></input>
            </ul>  
            </div>
            <div>
            <label for="last-name">Last Name</label> 
            <ul>
              <input className={styles.textarea} type="text" placeholder="Last name" name="" required></input>
            </ul> 
            </div>
          
          </div>
          
          <label for="Email">Email</label>
            <ul>
             <input className={styles.textsarea} type="email" placeholder="Email" name="" required></input>
            </ul>
            
        </div> 
      )
    }
}
export default Userdata;