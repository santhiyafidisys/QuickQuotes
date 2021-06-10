// import React from 'react';
// import styles from './rates.module.css';

// class GetQuote extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       ofx: ' ',
//      values: ''};
//     this.handleClick = this.handleClick.bind(this);
//     this.fetchApi = this.fetchApi.bind(this);
//    const { ToCurrency, fromcurrency, money}=this.state;

//   }
//   handleClick() {
//     console.log('click happened'+this.state.values);
//     this.fetchApi();
//   }
  
//   //  fetchApi() {
//   // //  fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/INR/10000?format=json')
//   //   fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/'+this.state.values.FromCurency+'/'+this.state.values.ToCurrency+'/'+this.state.values.Money+'?format=json')
//   //  .then(response => response.json())
//   //  .then(data => {
//   //   this.setState({ofx: data})
//   //   console.log(this.state.values);
//   //   })
    

    
//   //  }
//     // render(){
//     //     return(
//     //       <div>
//     //         <button className={styles.button} onClick={this.handleClick} onSubmit={this.handleSubmit} type="submit">Get Quote</button>
//     //       </div>
//     //     )        
//     // }
//   }
// export default GetQuote;
