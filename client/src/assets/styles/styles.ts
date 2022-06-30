import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogInRegisterContainerCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  padding: 2rem 3rem;
  border-radius: 6px;
  width: 500px;
  max-width: 80%;
`;

export const LogInRegisterContainer = styled.div`
  ${LogInRegisterContainerCSS}
`;
