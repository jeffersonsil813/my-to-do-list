import { Container, LogInRegisterContainer } from "../../assets/styles/styles";
import {
  FormContent,
  InputArea,
  LogInButton,
  Logo,
  RegisterButton,
  Separator,
} from "./styles";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

export const Login = () => {
  const navigate = useNavigate();

  // Functions
  const handleLogIn = async (values: { email: string; password: string }) => {
    // const success = await logIn(values);
    // if (success) {
    //   navigate("/home");
    // }
  };

  // Screma
  const screma = Yup.object().shape({
    email: Yup.string()
      .email("Inclua um e-mail válido")
      .required("É necessário informar o e-mail"),
    password: Yup.string()
      .max(15, "A senha deve ter no máximo 15 caracteres")
      .required("É necessário informar a senha"),
  });

  return (
    <Container>
      <LogInRegisterContainer>
        <Logo>
          <img src={logo} alt="logo.png" />
        </Logo>
        <RegisterButton
          onClick={() => navigate("/register")}
          title="Cadastre-se"
        >
          Cadastre-se
        </RegisterButton>
        <Separator>
          <div />
          Ou faça login
          <div />
        </Separator>
        <Formik
          validationSchema={screma}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleLogIn}
        >
          {({ errors }) => (
            <Form>
              <FormContent>
                <InputArea>
                  <label htmlFor="email">E-mail</label>
                  <Field
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail..."
                    className="input"
                  />
                  {errors.email && (
                    <span className="inputErrors">{errors.email}</span>
                  )}
                </InputArea>
                <InputArea>
                  <label htmlFor="password">Senha</label>
                  <Field
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Digite sua senha..."
                    className="input"
                  />
                  {errors.password && (
                    <span className="inputErrors">{errors.password}</span>
                  )}
                </InputArea>
                <LogInButton title="Entrar" type="submit">
                  Entrar
                </LogInButton>
              </FormContent>
            </Form>
          )}
        </Formik>
      </LogInRegisterContainer>
    </Container>
  );
};
