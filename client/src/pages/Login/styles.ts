import styled, { css } from "styled-components";

export const Logo = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const BtnCSS = css`
  width: 300px;
  max-width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  letter-spacing: 1px;
  font: 500 16px "Roboto", sans-serif;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RegisterButton = styled.button`
  ${BtnCSS}
  background-color: var(--white);
  color: var(--purple);
  border: 1px solid var(--purple);
  margin: 35px auto 10px;
`;

export const Separator = styled.div`
  font-size: 14px;
  color: var(--light-grey);
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  > div {
    width: 50px;
    background-color: var(--light-grey);
    height: 0.5px;
    margin: 0 10px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputArea = styled.div`
  margin: 10px auto;
  width: 300px;
  max-width: 100%;

  label {
    font-size: 14px;
    color: var(--light-grey);
    margin-bottom: 5px;
  }

  .input {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background-color: var(--white);
    border: 1px solid var(--light-grey);
    font: 400 16px "Roboto", sans-serif;
  }

  .inputErrors {
    color: var(--pink);
    font-size: 13px;
    margin: 5px 0;
  }
`;

export const LogInButton = styled.button`
  ${BtnCSS}
  background-color: var(--purple);
  color: var(--white);
  border: 1px solid var(--purple);
  margin: 10px auto;
`;
