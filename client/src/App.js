import React from 'react';
import './App.css';
import Header from './Components/Header/header.js';
// import Footer from './Components/Footer/footer.js';
import Routes from './routes.js';

class App extends React.Component {
  constructor(){
    super();
    this.state=({
      headerName:'CoffeeBug'
    })
  }
  render(){
  return (
    <div className="App">
      <Header name={this.state.headerName}/>
      <Routes name={this.state.headerName}/>
      {/* <Footer/> */}
    </div>
  );
  }
}

export default App;
