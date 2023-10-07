import styled from 'styled-components';

export const AuthWrapper = styled.div`
  width: fit-content;
  box-shadow: 0px 0px 12px -1px rgba(30, 136, 229, 0.2);
  background-color: #fff;
  border-radius: 1rem;
  margin: 1rem auto;
  position: absolute;
  padding: 2.5rem;
  left: 0;
  right: 0;
  p {
    color: #a1a1a1;
  }
  h2 {
    padding-bottom: 0.5rem;
  }
  .move-btn {
    background-color: transparent;
    text-decoration: none;
    border: none;
    cursor: pointer;
    color: #555;
    &:hover {
      text-decoration: underline;
    }
  }
  label {
    width: 100%;
  }
`;

export const LoginDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 20px;
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.7rem;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: left;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 1rem 0;
  background-color: #1e88e5;
  border: solid #1e88e5 1px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SignupDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 20px;
`;
