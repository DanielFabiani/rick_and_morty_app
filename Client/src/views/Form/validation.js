/* eslint-disable no-useless-escape */

//* esta función valida que todo lo que el usuario escriba ser correcto

//* solución de la clase de Ariel, CR de react forms 38b
//? input tiene {email:----, password:----}
export default function validation(inputs) { //? recibe un objeto como parámetro
  const errors = {}; //?creo un objeto para retornarlo a form, donde si encuentra un error lo retorna
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
  const regexPass = /\d/;
  
  if (!inputs.email) {
    errors.email  = 'Email obligatorio';
  } else if (!regexEmail.test(inputs.email)){
    errors.email  = 'Email invalido';
  } else if (inputs.email.length > 35) {
    errors.email = 'El email no puede exceder los 35 caracteres';
  }

  if (!regexPass.test(inputs.password)) {
    errors.password = 'La contraseña debe tener al menos un número';
  }
  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  }

  return errors;
}

