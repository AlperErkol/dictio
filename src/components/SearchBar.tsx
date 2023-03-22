import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSearchInput } from "../../util/validation";
import { IQuery } from "../../type";
import styles from "@/styles/SearchBar.module.css";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

interface IProps {
  initialValue: string;
}

const SearchBar: React.FC<IProps> = ({ initialValue }) => {
  const router = useRouter();
  const initialValues: IQuery = { query: "" };
  console.log(initialValue);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        router.push({
          pathname: "/",
          query: { search: values.query },
        });
      }}
    >
      <Form>
        <div className={styles.SearchBar}>
          <Field
            name="query"
            type="text"
            placeholder="Search any word.."
            autofocus={true}
            autocomplete="off"
          />
          <button type="submit">
            <AiOutlineSearch size={26} color="#00e9a3" />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
