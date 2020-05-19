import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import AuthService from '../../services/auth.service';
import {handleChange, validateForm} from '../../utils/formValidation';

import Loader from '../../components/PreLoader';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      setLoading(true);
      AuthService.login(email, password).then((response) => {
        console.log(response);
        setLoading(false);
      });
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h5 className="center">Login</h5>
        <div className="container">
          <Loader active={loading} />
          <div className="row">
            <form method="post" onSubmit={formSubmit}>
              <div className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="validate"
                      onChange={(e) => handleChange(e, setEmail, errors, setErrors)}
                    />
                    <label>Email</label>
                    {errors.email.length > 0 && (
                      <span className="helper-text red-text">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="validate"
                      onChange={(e) => handleChange(e, setPassword, errors, setErrors)}
                    />
                    <label>Password</label>
                    {errors.password.length > 0 && (
                      <span className="helper-text red-text">{errors.password}</span>
                    )}
                  </div>
                </div>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
                &nbsp;&nbsp;
                <Link to="register" className="btn waves-effect waves-light">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
