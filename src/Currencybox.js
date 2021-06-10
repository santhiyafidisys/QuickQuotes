import React from 'react';
import styles from './rates.module.css';

class Currency extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstname: '', lastname: '', email: '',Telephone: '',
      fromcurrency: 'AUD', tocurrency: 'CNY',money: '',ofx: '', itemvalues:''
    };
   
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeMoney = this.handleChangeMoney.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChangeForm = this.handleDropdownChangeForm.bind(this);
    this.handleDropdownChangeTo = this.handleDropdownChangeTo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleReset = this.handleReset.bind(this);
     // this.myFunction = this.myFunction.bind(this); 
  }
  handleChangeFirstname(event){
    this.setState({ firstname: event.target.value });
   console.log('FirstName ' + this.state.firstname);    
  }

  handleChangeLastname(event){
    this.setState({ lastname: event.target.value });
    console.log('lastname ' + this.state.lastname);
  }
  handleChangeEmail(event){
    this.setState({ email: event.target.value });
    console.log('email ' + this.state.email);
  }
  handleChangePhone(event){
    this.setState({ Telephone: event.target.value });
    console.log('Telephone' + this.state.Telephone);    
  }
  handleClick() {
    console.log(this.state);
  }
  handleDropdownChangeForm(event) {
    this.setState({ fromcurrency: event.target.value });
    console.log('From Curency ' + this.state.fromcurrency);  
  }
  handleDropdownChangeTo(e) {
    this.setState({ tocurrency: e.target.value });
    console.log('To Curency ' + this.state.tocurrency);  
  }
//define amount
  handleChangeMoney(event){
    this.setState({ money: event.target.value });
    console.log('Money values ' + this.state.money); 
  }   
  handleSubmit(event) {
    event.preventDefault();
  }
  handleClick() {
  console.log('click happened'+this.state.ofx);
  this.fetchApi();
}
    //api call
fetchApi() {
  console.log(this.state.fromcurrency, this.state.tocurrency, this.state.money)
// fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/INR/10000?format=json')
   fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/'+this.state.fromcurrency+'/'+this.state.tocurrency+'/'+this.state.money+'?format=json')
    .then(response => response.json())
    .then(data => {
      this.setState({ofx: data})
    console.log(this.state.ofx);
    })
}
// hide/show and clear and reset data
myFunction = () => {
  this.setState({
    firstname: '',
    lastname: '',
    email: '',
    Telephone: '',
    money: '', 
});
  console.log('clickhappened');
    var x = document.getElementById("myhide");
      if (x.style.display === "none") {
       x.style.display = "block";    
  }
  else {
     x.style.display = "none";
  }
}
  render(){
    return(
      <div>
        <div id="myhide" >
          <h1 className={styles.back}>Quick Quote</h1>
            <div className={styles.rule}></div>
            <div>
              <div  className={styles.section}>
                <form>
                  <p>First Name</p>
                  <input value={this.state.firstname}  className={styles.textarea} type="text" placeholder="First name"   onClick={this.handleClick} onChange={this.handleChangeFirstname} name="firstname" required/>
                </form>
                <form>
                  <p>Last Name</p> 
                  <input value={this.state.lastname} className={styles.textarea} type="text" placeholder="Last name" onClick={this.handleClick} onChange={this.handleChangeLastname} name="lastname" required></input>
                </form>
              </div>
                <form>
                  <p>Email</p>
                  <input value={this.state.email} className={styles.textsarea} type="email" placeholder="Email"  onClick={this.handleClick} onChange={this.handleChangeEmail} name="email" required></input>
                </form>
              </div> 
              <div>
                <p>Telephone/Mobile</p>
                <select  className={styles.dropdown}>
                  <option value="+91">+91</option>
                  <option value="+91">+98</option>
                  <option value="+91">+62</option>
                  <option value="+91">+98</option>
                  <option value="+91">+80</option>
                </select>
                <input value={this.state.Telephone} className={styles.textlongbox} type="tel" onClick={this.handleClick} onChange={this.handleChangePhone}name="Telephone"></input>
              </div> 
              <div>
                <div  className={styles.ratebox}>
                  <div className={styles.section}>
                    <div >
                      <label for="From Currency">From Currency</label> 
                      <select value={this.state.FromCurrency}  onClick={this.myFunction}onChange={this.handleDropdownChangeForm}onClick={this.myFunction} onClick={this.handleClick} className={styles.textareas}>
                        <option value="AUD">Austraila Dollar[AUD]</option>
                        <option value="GBP">United Kingdom Pound</option>
                        <option value="CNY">Chinese Yuan[CNY]</option>
                        <option value="US">United States Dollar[US]</option>
                        <option value="RUB">Russian Rouble [RUB]</option>
                      </select>
                    </div>
                    <div >
                      <label for="to Currency">To Currency</label> 
                      <select value={this.state.ToCurrency}  onChange={this.handleDropdownChangeTo} onClick={this.handleClick} className={styles.textareas}>
                        <option value="US">United States Dollar[US]</option>
                        <option value="RUB">Russian Ruble [RUB]</option>
                        <option value="CHN">China Yuan[CHN]</option>
                        <option value="GBP">United Kingdom Pound</option>
                        <option value="AuD">Austrailan Dollar[AuD]</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <p>Amount</p>
                    <form onSubmit={this.handleSubmit}>
                      <input  className={styles.textarea} type="text" onClick={this.handleClick} onChange={this.handleChangeMoney} placeholder="Amount" value={this.state.money} required />
                    </form>
                  </div>  
                  <div >
                    <button className={styles.button} onClick={this.myFunction}   onSubmit={this.handleSubmit} type="submit">Get Quote</button>
                  </div>    
                </div>
              </div>
            </div>
          <div>
            <h1 className={styles.back}>Quick Quote</h1>
              <div className={styles.rule}>
                <div className={styles.center}>
                  <h5>OFX Customer Rate</h5>
                  <div  className={styles.hmocIu}>{this.state.ofx.CustomerRate}</div>
                  <p>From</p>
                  <h6>{this.state.fromcurrency} <span style={{color: "blue"}}>{this.state.money}</span></h6>
                  <p>To</p>
                  <h6 >{this.state.ofx.DeliveryCountry}  <span style={{color: "blue"}}>{this.state.ofx.CustomerAmount}</span></h6>
                 <button  className={styles.buttons}  onChange={this.myFunctionChange} onClick={this.myFunction}type="button">START NEW QUOTE</button> 
                </div>
              </div>
          </div>
        </div>
        
      )
    }
  }

export default Currency;
