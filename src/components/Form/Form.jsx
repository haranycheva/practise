import { Formik } from "formik";
import { Component } from "react";
import { SearchButton, SearchField, SearchForm } from "./Form.styled";

export class Form extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { resetForm }) => {
          this.props.onSubmit(values.name.trim().toLowerCase());
          resetForm();
        }}
      >
        <SearchForm>
          <SearchField placeholder="What are you looking for?" name="name" type="text" />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </Formik>
    );
  }
}
