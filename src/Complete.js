import React, { Component } from 'react';
import './App.css';

class Complete extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{marginTop:20+'em'}}>
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">
                Thank you!
              </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style={{width: 100+'%' }}>                  
                </div>
            </div>
            <div className="all_done">
                <i className="fa fa-check-circle fa-6" aria-hidden="true" id="all_done_check"></i>
            </div>
            <div className="goto">
                <button className="btn btn-default" onClick={this.props.submitRegistration}>Go to Dashboard-></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;
