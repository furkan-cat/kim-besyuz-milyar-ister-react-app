import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loadingStart, loadingEnd } from "../../actions/index";
import { useHistory } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  

  const [form, setForm] = useState({ name: "", surname: "" });
  let history = useHistory();

  const dispatch = useDispatch();
  const initialValue = { name: "", surname: "" };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // dispatch(loadingStart());
    // setTimeout(() => {
    //   dispatch(loadingEnd());
    // }, 2000);

    e.preventDefault();
    dispatch(login(form));
    setForm(initialValue);

    history.push("/loading");
  };

  const handleClick = () => {
    
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="" className="label--name">
            Name:
          </label>
          <input name="name" onChange={handleChange} value={form.name} />
          <label htmlFor="" className="label--surname">
            Surname:
          </label>
          <input name="surname" onChange={handleChange} value={form.surname} />
          <button type="submit" className="button" onClick={handleClick}>
            Log In
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
