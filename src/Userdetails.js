import React from 'react';
import styles from './rates.module.css';

class Userdata extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstname: ' ', lastname: ''};
    this.handleChange = this.handleChange.bind(this);
   

  }
  handleChange(event){
    this.setState({firstname: event.target.value});
    console.log(this.state.firstname) 
    console.log('FirstName ' + this.state.firstnames)
  }
 
  
    render(){
      return(
        <div>
          <div className={styles.section}>
            <form>
              <p>First Name</p>
                <input className={styles.textarea} type="text" placeholder="First name" onChange={this.handleChange} name="firstname" required/>
            </form>
            <form>
              <p>Last Name</p> 
                <input className={styles.textarea} type="text" placeholder="Last name" onChange={this.handleChange} name="lastname" required></input>
            </form>
          </div>
          <form>
            <p>Email</p>
              <input className={styles.textsarea} type="email" placeholder="Email" onChange={this.handleChange} name="" required></input>
          </form>
        </div> 
      )
    }
}
export default Userdata;