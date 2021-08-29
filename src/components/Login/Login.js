import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/index";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import ezel from "../../assets/Ezel.mp3";
import "./Login.scss";

const Login = () => {
  const [form, setForm] = useState({ name: "", surname: "" });
  const [ play , { stop }] = useSound(ezel);
  let history = useHistory();
  const dispatch = useDispatch();
  const initialValue = { name: "", surname: "" };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  play();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    setForm(initialValue);
    stop();
    history.push("/loading");
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
          <button type="submit" className="button">
            Log In
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
