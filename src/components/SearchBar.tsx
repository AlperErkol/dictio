import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSearchInput } from "../../util/validation";
import { IQuery } from "../../type";

import styles from "@/styles/SearchBar.module.css";

import { getDictionaryResult } from "@/pages/api/hello";

const SearchBar = () => {
  const initialValues: IQuery = { query: "" };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validateSearchInput(values)}
      onSubmit={async (values) => {
        const italy = await getDictionaryResult(values);
        console.log(italy);
      }}
    >
      <Form>
        <Field
          className={styles.SearchBar}
          id="query"
          name="query"
          placeholder="Search for any word.."
          autocomplete={false}
        />
        <ErrorMessage name="query" component="div" />
      </Form>
    </Formik>
  );
};

export default SearchBar;
