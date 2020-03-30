import React, { Component } from 'react';

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      mqtt_topic: null,
      password: null,
      password2: null,
      errors: {
        username: '',
        email: '',
        mqtt_topic: '',
        password: '',
        password2: ''
      }
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name) {
      case 'password':
        errors.password = 
          value.length < 4
            ? 'Password must be 4 characters long!' : '';
        break;
      case 'password2':
        errors.password2 = 
          value === this.state.password
            ? '': 'Password2 must be equal password';
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>注册</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div>
              <label>用户名</label>
              <input type='text' name='username' onChange={this.handleChange} noValidate />
            </div>
            <div>
              <label>邮箱</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div>
              <label>MQTT主题</label>
              <input type='text' name='mqtt_topic' onChange={this.handleChange} noValidate />
            </div>    
            <div>
              <label>密码</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
            </div>
            <div>
              <label>重复输入密码</label>
              <input type='password' name='password2' onChange={this.handleChange} noValidate />
              {errors.password2.length > 0 && <span className='error'>{errors.password2}</span>}
            </div>
            <div>
              <button>注册</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;