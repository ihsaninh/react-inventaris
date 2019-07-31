import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	user_id: null,
	  	password: null,
	  	isLoading: null
	  };
		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	  handleChange(event) {
	    this.setState({ value: event.target.value });
	  }

	  handleLogin(event) {
	  	axios.post('http://localhost:3333/login', 
	  		{
                user_id: this.state.user_id,
                password: this.state.password
            },
            )
            .then(res => {
            	console.log(res)
                // const token = res.data.token;
                // const user_id = res.data.id
                // AsyncStorage.setItem("token", token);
                
            })
            .catch(error => {
            	console.log(error)
                alert("kesalahan saat login silahkan coba lagi")
            })

            event.preventDefault()
	}
  render() {
  	const {user_id, password} = this.state
    return (
      <Fragment>
      <div class="row justify-content-center">
      <div class="col-sm-6 mt-5">
      <h3 class="text-center pb-3">SISTEM INFORMASI INVENTORI</h3>
      <h6 class="pb-3">Silahkan masuk ke aplikasi inventori</h6>
      	<form onSubmit={this.handleLogin}>
		  <div class="form-group">
		    <label for="userid">USER ID</label>
		    <input type="text" class="form-control" placeholder="Enter UserId" value={user_id} onChange={this.handleChange}/>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">PASSWORD</label>
		    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.handleChange}/>
		  </div>
		  <button type="submit" class="btn btn-primary">Login</button>
		</form>
		</div>
		</div>
      </Fragment>
    );
  }
}

export default Login;