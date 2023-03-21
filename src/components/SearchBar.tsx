import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSearchInput } from "../../util/validation";
import { IQuery } from "../../type";
import styles from "@/styles/SearchBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const initialValues: IQuery = { query: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        router.push(`/${values.query}`);
      }}
    >
      <Form>
        <Field name="query" type="text" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
