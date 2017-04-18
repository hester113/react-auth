import React, { Component } from 'react';
import './App.css';
import Registeration from './Registeration';
import Accountinfo from './Accountinfo';
import Complete from './Complete';
import assign from 'object-assign'
var fieldValues = {
  email: null,
  password: null,
  date_of_birth:{},
  gender:'',
  how_hear_about_us:''
}
class App extends Component {
  state = {
    step: 1,
    data:''
  };
  constructor (props){
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }
  nextStep(){
    return this.setState({step: this.state.step+1});    
    //alert('ras');
    }
  previousStep(){
    this.setState({
      step: this.state.step-1
    });
  }
  saveValues(field_value){
    return (
      fieldValues=assign({},fieldValues,field_value)
    );
  }
  submitRegistration (){

  }
  showStep(){
    switch(this.state.step){
      case 1:
      return <Registeration fieldValues={fieldValues}
                    nextStep={this.nextStep}
                    saveValues={this.saveValues}/>
      case 2:
      return <Accountinfo fieldValues={fieldValues}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    saveValues={this.saveValues}/>
      case 3:
      return <Complete fieldValues={fieldValues}
                    saveValues={this.saveValues}
                    submitRegistration={this.submitRegistration}/>
    }
  }
  render() {
    return (
      <main>
        {this.showStep()}
      </main>
    );
  }
}

export default App;
