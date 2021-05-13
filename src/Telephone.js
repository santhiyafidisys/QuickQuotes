import React from 'react';
import styles from './rates.module.css';

class Telephones extends React.Component{
    render(){
      return(
        <div>
          <p>Telephone/Mobile</p>
						<select className={styles.dropdown}>
							<option value="+91">+91</option>
							<option value="+91">+98</option>
							<option value="+91">+62</option>
							<option value="+91">+98</option>
							<option value="+91">+80</option>
						</select>
            <input className={styles.textlongbox} type="tel" name=""></input>

        </div> 
      )
    }
}
export default Telephones;