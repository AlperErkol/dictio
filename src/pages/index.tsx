import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getDictionaryResult, WORD_OF_THE_DAY } from "./api/hello";
import Header from "@/components/Header";
import { GetServerSideProps } from "next/types";
import { IQuery } from "../../type";
import Dictio from "@/components/Dictio";
import Error from "@/components/Error";

export default function Home({ data, error }: any) {
  return (
    <>
      <Head>
        <title>Dictio | English Dictionary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <Header />
          {error ? <Error /> : <Dictio data={data[0]} />}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isContextHasQuery = context.query.search;
  const initQuery: IQuery = { query: "" };

  if (isContextHasQuery == undefined || null) {
    initQuery.query = WORD_OF_THE_DAY;
  } else {
    initQuery.query = isContextHasQuery.toString();
  }

  try {
    const response = await getDictionaryResult(initQuery);
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "An error occured..",
      },
    };
  }
};
