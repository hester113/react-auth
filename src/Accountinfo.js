import React, { Component } from 'react';
import './App.css';
class Accountinfo extends Component {
    constructor (){
    super();
    this.state = {
        stage:3,
        dateErr:'',
        gender:'',
        monthErr:'',
        yearErr:'',
        maleActive:'',
        femaleActive:'',
        noActive:'',
        validNext: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.handleBirthDate = this.handleBirthDate.bind(this);
    this.handleBirthMonth = this.handleBirthMonth.bind(this);
    this.handleBirthYear = this.handleBirthYear.bind(this);
    this.setSex = this.setSex.bind(this);
  }
  setSex(e){
      var x= e.target.getAttribute('name');      
          this.setState({
                gender:x
            })
      if(x==='male'){
          this.setState({
            maleActive: 'active'
          })
      }
       if(x==='female'){
          this.setState({
            femaleActive: 'active'
          })
      }
      if(x==='unspecifized'){
          this.setState({
            noActive: 'active'
          })
      }    
  }
  handleBirthDate(e){
    var x= e.target.value;
    if(x<1||x>31){
        this.setState({
            dateErr:'error'           
        });
    }
    else {
        this.setState({
            dateErr:'',
            stage: 4
        });
    }
  }
  handleBirthMonth(e){
    var x= e.target.value;
    if(x<1||x>12){
        this.setState({
            monthErr:'error'
        });
    }
    else {
        this.setState({
            monthErr:'',
            stage: 5
        })
    }
  }
  handleBirthYear(e){
    var x= e.target.value;
    if(x.length<4||x.length>5){
        this.setState({
            yearErr:'error'
        });
    }
    else {
        this.setState({
            yearErr:'',
            stage: 6
        });
    }
  }
  nextStep(){
    var data = {
      date_of_birth:{
      date : this.refs.date.value,
      month : this.refs.month.value,
      year    : this.refs.year.value,
        },
        gender:this.state.gender
    }
      if(this.state.dateErr===''&&this.state.monthErr===''&&this.state.yearErr===''){
          this.setState({
            validNext: true
          });
      }
      console.log(this.state.gender);
      if(this.state.validNext===true){
            this.props.nextStep();
      }
      this.props.saveValues(data)
   
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{marginTop:20+'em'}}>
          <div className="panel panel-success">
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
            <div className="form-group" id="date_of_birth">
                <label>DATE OF BIRTH</label>
            </div>
            <div className="form-group" >
                <input type="text" placeholder="DD" ref="date" className={this.state.dateErr} id="birth" onChange={this.handleBirthDate}/>
                <input type="text"placeholder="MM" ref="month" id="birth" className={this.state.monthErr} onChange={this.handleBirthMonth}/>
                <input type="text" placeholder="YY" ref="year" id="birth" className={this.state.yearErr} onChange={this.handleBirthYear}/>
            </div>
            <div className="form-group" id="date_of_birth">
                <label>GENDER</label>
            </div>
            <div className="form-group">
                <div className="list-group list-group-horizontal">
                    <span className="list-group-item {this.state.maleActive}" id="gender" name="male" onClick={this.setSex.bind(this)}>MALE</span>
                    <span className="list-group-item {this.state.femaleActive}" id="gender" name="female" onClick={this.setSex.bind(this)}>FEMALE</span>
                    <span className="list-group-item {this.state.noActive}" id="gender" name="unspecifized" onClick={this.setSex.bind(this)}>UNDEFINED</span>                    
                </div>
            </div>
            <div className="form-group" id="date_of_birth">
                <label>WHERE DO YOU HEAR ABOUT IS?</label>
            </div>
            <div className="form-group">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown" style={{width: 100+'%'}}>
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Lorem Ipsum dolor</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Lorem Ipsum dolor</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Lorem Ipsum dolor</a></li>
                    <li role="presentation" className="divider"></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Lorem Ipsum dolor</a></li>
                    </ul>
                </div>
            </div>
            <div className="form-group" >              
              <button className="btn btn-default" onClick={this.props.previousStep} id="back_btn" >Back</button>
              <button className="btn btn-default pull-right" onClick={this.nextStep.bind(this)} id="next_btn" >Next</button>
              <label></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accountinfo;
