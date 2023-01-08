import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';
import Error from '../Error';
import Post from '../Post';
import Loading from "../Loading";

function Index() {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}`);

  return (
    <section className="Posts">
      { isLoading && <Loading /> }
      { error && <Error /> }
      { !isLoading && data && data.map((el) => (
        <Post post={el} key={el.id} />
      )) }
    </section>
  );
}

export default Index;