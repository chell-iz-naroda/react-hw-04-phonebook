import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)``;

export const ContainerForm = styled.div`
    width: 300px;
    text-align: center;


    display: flex;
    justify-content: center;
`;

export const StyledField = styled(Field)`
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StyledError = styled(ErrorMessage)`
    font-size: 10px;
    text-align: left;
    line-height: 1;
    color: red;
`;

export const Label = styled.label`
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1;
    

    width: 230px;
`;

export const Button = styled.button`
    display: block;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background-color: orange;
    transition: all 250ms ease-in-out;

  &:hover {
    background-color: blue;
  }
`;