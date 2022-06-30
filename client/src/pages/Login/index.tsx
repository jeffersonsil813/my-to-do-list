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
import { useUser } from "../../provider/user";

export const Login = () => {
  const navigate = useNavigate();
  const { logIn } = useUser();

  // Functions
  const handleLogIn = async (values: {
    username: string;
    password: string;
  }) => {
    await logIn(values);
    navigate("/home");
  };

  // Screma
  const screma = Yup.object().shape({
    username: Yup.string().required("É necessário informar o nome de usuário"),
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
            username: "",
            password: "",
          }}
          onSubmit={handleLogIn}
        >
          {({ errors }) => (
            <Form>
              <FormContent>
                <InputArea>
                  <label htmlFor="username">Nome de Usuário</label>
                  <Field
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Digite seu nome de usuário..."
                    className="input"
                  />
                  {errors.username && (
                    <span className="inputErrors">{errors.username}</span>
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
