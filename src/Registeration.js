import React, { Component } from 'react';
import './App.css';


class Registeration extends Component {
  constructor (){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.matchPassword = this.matchPassword.bind(this);
    this.state = {
      stage: 0,
      validNext: false    
    }
  }
   handleChange(e){
    var x = e.target.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        this.setState({
          emailerr: 'Invalid Email',
          stage:0    
        });
        return false;
    } else {
      this.setState({
          emailerr: '',
          stage: 1
        });
    }
  }
  handlePassword(e){
    var x = e.target.value;
    if(x.length<6){
      this.setState({
        passworderr:'Password should be 6 characters long.'
      });
    }
    if(x.length>6){
      this.setState({
        passworderr:'',
        stage:2,
        pwd:x
      });
    }
  }
  matchPassword(e){
    var x = e.target.value;
    if(x!==this.state.pwd){
      this.setState({
        notmatcherr: 'Password not match'
      });
    } 
    else{
        this.setState({
        notmatcherr: '',
        stage:3,
        validNext: true
      });
    }
  }
  nextStep(){
     var data = {
      password : this.refs.password.value,
      email    : this.refs.email.value,
    }
    this.props.saveValues(data)
    if(this.state.validNext===true){
        this.props.nextStep()
    }    
  }
    render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{marginTop:20+'em'}}>
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">
                Sign Up
              </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style={{width: this.state.stage*10+'%' }}>                 
                </div>
            </div>
            <div className="form-group">
              <label>Email is required</label>
              <input type="email" ref="email" defaultValue={this.props.fieldValues.email} className="form-control" placeholder="Enter email"  onChange={this.handleChange}/> 
              <label className="error">{this.state.emailerr}</label>             
            </div>
            <div className="form-group">
              <label>password</label>
              <input type="password" ref="password" defaultValue={this.props.fieldValues.password} className="form-control" placeholder="Enter your password" onChange={this.handlePassword}/> 
              <label className="error">{this.state.passworderr}</label>             
            </div>
            <div className="form-group">
              <label>Confirm your password</label>
              <input type="password" ref="password" defaultValue={this.props.fieldValues.password} className="form-control" placeholder="Confirm your password" onChange={this.matchPassword}/>
              <label className="error">{this.state.notmatcherr}</label>   
            </div>
            <div className="form-group" id="next">
              <button className="btn btn-default" onClick={this.nextStep.bind(this)} id="next_btn" >Next-></button>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registeration;
