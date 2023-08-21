
import { useState } from 'react';
import styles from './Form.module.css';
import logoLanding from './rick-and-morty.png'
import arrow from './wired-gradient-arrow-10.gif'
//import validate from "./validation";
import validation from "./validation"; //const errors= {...}


const Form = (props) => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  //? este estado se usa para encontrar los errores en el formulario
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  //? función que nos permite reflejar el texto ingresado de los inputs en el estado local
  const handleChange = (event) => {
    // la propiedad la saco del input que dispara el evento
    const property = event.target.name;
    // el value viene del input que introduce el usuario
    const value = event.target.value;
    // seteo el estado con los valore obtenidos
    setUserData({...userData, [property]: value});

    // setamos los errores validados en la función externa 
    setErrors(
      validation({...userData, [property]: value})
    )
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <>
      {/* //? el método onSubmit es de los Form y se ejecuta con el click del boton */}
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <img src={logoLanding} alt="logo" />
      <div>
        <label htmlFor="email">Email: </label>
        {/* //? con la propiedad value conecto el input con el estado local */}
        <input type="email" 
          name="email" //? con el name apuntamos a la propiedad del estado
          value={userData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" 
          name="password" 
          value={userData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p className={styles.pForm} >Here's a clue: </p>

    <section className={styles.sectionContainer} >
      <div>
        <p>Email </p>
        <p>Password </p>
      </div>
      <div>
        <img src={arrow} alt="right arrow" />
      </div>
      <div>
        <p>johndoe@email.com</p>
        <p>123456</p>
      </div>
    </section>
    </>
  )
};

export default Form;