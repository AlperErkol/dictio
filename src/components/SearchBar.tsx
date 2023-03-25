import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IQuery } from "../../type";
import styles from "@/styles/SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Router from "next/router";

const SignupSchema = Yup.object().shape({
  query: Yup.string()
    .required("Input can not be empty.")
    .min(2, "Must be at least two letters.")
    .matches(
      /^[aA-zZ\s]+$/,
      "Only english letters are allowed for this field "
    ),
});

const SearchBar = () => {
  const initialValues: IQuery = {
    query: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        Router.push({ pathname: "/", query: { search: values.query } });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={styles.SearchBar}>
            <div className="relative h-full flex-1">
              <Field
                name="query"
                type="text"
                placeholder="Search for any word.."
                autoFocus={true}
                autoComplete="off"
                spellCheck={false}
              />
              {errors.query && touched.query && (
                <p className="absolute -left-3 -bottom-6 text-sm text-red-600">
                  {errors.query}
                </p>
              )}
            </div>
            <button type="submit">
              <AiOutlineSearch size={26} color="#00e9a3" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
