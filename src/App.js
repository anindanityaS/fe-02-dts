
import Header from './header/header';
import React, {Component} from 'react';
import './App.css';
import Content from './content/Content';
import MyForm from './contact-form/MyForm'
import Footer from './footer/Footer'

class App extends Component{
  render() {
    return(
      <div className="App">
      <Header />
        <Content />
        <MyForm />
        <Footer />
          
      </div>
    );
  }
}
export default App;