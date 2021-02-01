import React,{useState} from 'react'
import {Link} from 'react-router-dom'
/**1. exportar nuestro connect */
import {connect} from 'react-redux'
/**2. exportar nuestra action */
import {loginRequest} from '../actions'

import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = props=>{
  const [form, setValues]= useState({
    email:'',
  })

  const handleInput = event =>{
    setValues({
      ...form,
      /**agrega los valores dinamicamente colocando llaves y los tres
       * detras del form
      */
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event =>{
    event.preventDefault()
    /**recordemos que */
    props.loginRequest(form)
    props.history.push('/')
  }
  return(
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
              />Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={googleIcon} /> Inicia sesión con Google</div>
            <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">No tienes ninguna cuenta
            <Link to="/registro"> Regístrate</Link>
          </p>
        </section>
      </section>
    )
  }
  /**3.Crear nuestros Dispaches */
  const mapDispatchToProps = {
    loginRequest,
  }
  /**4. crear nuestro export enviando nuestros dispaches */
export default connect(null, mapDispatchToProps)(Login)
