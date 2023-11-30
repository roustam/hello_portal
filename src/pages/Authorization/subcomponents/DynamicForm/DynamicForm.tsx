import { useEffect, useState, useMemo, useRef } from "react";
import { DynamicFormRoot } from "./DynamicForm.style";
import { StateConfig } from "../UserForm/FormComponent.style";
import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import LoginForm from "./Forms/LoginForm";
import ResetForm from "./Forms/ResetForm";
import CreateForm from "./Forms/CreateForm";

import Form from "../../../../store/form-store";

type DynamicFormProps = {
  state: StateConfig;
  slideToTheCenter: () => void;
};

const loginForm = new Form();
const createForm = new Form();
const resetForm = new Form();

const DynamicForm: FC<DynamicFormProps> = ({ state, slideToTheCenter }) => {
  const [clientHeight, setClientHeight] = useState('100vh')
  const loginRef: any = useRef()
  const createRef: any = useRef()
  const appearState =
    state === StateConfig.END || state === StateConfig.CENTER
      ? "left-disapear"
      : "right-disapear";


  useEffect(() => {
    if (state === StateConfig.START && loginRef.current) {
      setClientHeight(loginRef.current?.clientHeight)
      return
    } 
    if (state === StateConfig.END && createRef.current) {
      setClientHeight(createRef.current?.clientHeight)
      return
    }
      setClientHeight('100vh')
  }, [loginRef, state, createRef])

  return (
    <DynamicFormRoot>
      {state === StateConfig.START && (<LoginForm
              ref={loginRef}
              props={loginForm}
              slideToTheCenter={slideToTheCenter}
      />)}

      {state === StateConfig.CENTER && (<ResetForm props={resetForm}/>)}
      {state === StateConfig.END && (<CreateForm props={createForm} ref={createRef}/>)}

    </DynamicFormRoot>
  );
};

export default DynamicForm;
