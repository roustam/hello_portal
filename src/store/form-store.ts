import { makeAutoObservable } from "mobx";

class Form {
  counter = 0;

  form = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  onChangeFormHandler = (field: keyof typeof this.form, payload: string) => {
    this.form[field] = payload;
  };

  // onCreateNewUserWithEmailAndPassword(email: string, password: string) {
  //   createUserWithEmailHandler(email, password);
  // }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default Form;
