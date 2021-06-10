// import React from 'react';
// import styles from './rates.module.css';

// class Telephones extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {Telephone: ''};
//     this.handleChangePhone = this.handleChangePhone.bind(this);
//     this.handleClick = this.handleClick.bind(this);

//   }

// handleChangePhone(event){
//   this.setState({ Telephone: event.target.value });
 
//   console.log('Telephone' + this.state);    
// }
// handleClick() {
//   console.log(this.state);
// }
//     render(){
//       return(
//         <div>
//           <p>Telephone/Mobile</p>
// 						<select className={styles.dropdown}>
// 							<option value="+91">+91</option>
// 							<option value="+91">+98</option>
// 							<option value="+91">+62</option>
// 							<option value="+91">+98</option>
// 							<option value="+91">+80</option>
// 						</select>
//             <input className={styles.textlongbox} type="tel" onClick={this.handleClick} onChange={this.handleChangePhone}name="Telephone"></input>
//         </div> 
//       )
//     }
// }
// export default Telephones;