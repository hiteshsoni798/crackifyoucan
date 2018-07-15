import React, { Component } from 'react';
import './App.css';
import Left from '/home/soni/Music/React/my-app/src/Dashboard/Left';
import Right from '/home/soni/Music/React/my-app/src/Right/Right';
import Success from '/home/soni/Music/React/my-app/src/Success';
import Fail from '/home/soni/Music/React/my-app/src/fail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:"",
      password:this.createPassword().toString(),
      tried:[],
      pos_match:[],
      char_match:[],
      total_tried:0,
      state : 'continue'
    };
    console.log(this.state.password);
  }
  fail = () => {
    this.setState({state:'fail'});
  }

  createPassword =()=> {
  let min = Math.ceil(1000);
  let max = Math.floor(9999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handle_password = (val) => {
    if(val == this.state.password) {
      this.setState({state : 'success'});
    }
    this.setState({total_tried:this.state.total_tried+1});
    this.setState({value:val});
    const a = this.state.tried;
    const b = this.state.pos_match;
    const c = this.state.char_match;
    a.push(val);
    b.push(this.position_match(val));
    c.push(this.charrecter_match(val));

      this.setState({
        tried:a,
        pos_match:b,
        char_match:c
      })

  }

  position_match = (val) => {
    var count=0;
    for(var i=0;i<val.length;i++) {
      if(val[i] == this.state.password[i])
        count++;
    }
    return count;
  }
replaceAt = (index , password) => {
  return  password.substr(0,index) + "a" + password.substr(index+1);
}
  charrecter_match = (val) => {
    let count=0;
    let password = this.state.password;
    for(let i=0;i<password.length;i++) {
      for(let j=0;j<val.length;j++) {
        if(val[j] == password[i]) {
          count++;
          val=this.replaceAt(j,val);;
          continue;

        }
      }
    }
    return count;
  }

  render() {
    if(this.state.state=='continue') {
        return (
          <div className = "main" >
            <Left
              value={this.state.tried}
              pos_match={this.state.pos_match}
              char_match={this.state.char_match}
            />
            <Right
              s={this.state.value}
              actual_password={this.state.password}
              handle_password = {this.handle_password}
              fail = {this.fail}
            />
          </div>
        );
      }
    else if(this.state.state=='success')
    {
      return (
        <div>
        <Success Tried={this.state.total_tried}/>
        </div>
      );
    }
    else {
      return (
        <Fail/>
      );
    }
  }
}

export default App;
