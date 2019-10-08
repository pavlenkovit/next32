import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import ReactHtmlParser from 'react-html-parser';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import getMeta from '../../utils/getMeta';

const SimplePage = (props) => {
  const { page } = props;
  console.log(page);

  const title = ReactHtmlParser(page.title.rendered);

  return (
    <>
      <CustomHead
        title={title}
        { ...getMeta(page) }
      />
      <Breadcrumbs items={[{ title }]} />
      <Post {...page} />
    </>
  );
};

SimplePage.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/pages?slug=${slug}&_embed`);
  const data = await res.json();
  const page = data && data.length > 0 ? data[0] : null;
  return { page };
};

export default SimplePage;
