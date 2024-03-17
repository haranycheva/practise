import { Field, Form } from "formik";
import styled from "styled-components";

export const SearchForm = styled(Form)`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  background-color: #78586f;
`;
export const SearchField = styled(Field)`
  padding-left: 10px;
  width: 60%;
  border: none;
  font-size: 16px;
`;
export const SearchButton = styled.button`
  background-color: #e1cdb5;
  padding: 10px 40px;
  border: transparent;
  color: #32161f;
  font-weight: 500;
  font-size: 20px;
`;
