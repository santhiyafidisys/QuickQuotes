// import React from 'react';
// import styles from './rates.module.css';

// class Userdata extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {firstname: '', lastname: '', email: ''};
//     this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
//     this.handleChangeLastname = this.handleChangeLastname.bind(this);
//     this.handleChangeEmail = this.handleChangeEmail.bind(this);
//     this.handleClick = this.handleClick.bind(this);

//   }
//   handleChangeFirstname(event){
//     this.setState({ firstname: event.target.value });
   
//     console.log('FirstName ' + this.state);    
//   }

//   handleChangeLastname(event){
//     this.setState({ lastname: event.target.value });
//     console.log('lastname ' + this.state);
//   }
//   handleChangeEmail(event){
//     this.setState({ email: event.target.value });
//     console.log('email ' + this.state.email);
//   }
//   handleClick() {
//     console.log(this.state);
//   }
//  myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
 
  
//     render(){
//       return(
//         <div  >
//           <div  className={styles.section}>
     
//             <form>
//               <p>First Name</p>
              
//                 <input className={styles.textarea} type="text" placeholder="First name"   onClick={this.myFunction} onClick={this.handleClick} onChange={this.handleChangeFirstname} name="firstname" required/>
//             </form>
//             <form>
//               <p>Last Name</p> 
//                 <input className={styles.textarea} type="text" placeholder="Last name"  onClick={this.myFunction} onClick={this.handleClick} onChange={this.handleChangeLastname} name="lastname" required></input>
//             </form>
//           </div>
//           <form>
//             <p>Email</p>
//               <input className={styles.textsarea} type="email" placeholder="Email"  onClick={this.myFunction}onClick={this.handleClick} onChange={this.handleChangeEmail} name="email" required></input>
//           </form>
//         </div> 
//       )
//     }
    
      
   
//       }  


// export default Userdata;