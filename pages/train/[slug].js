import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import ReactHtmlParser from 'react-html-parser';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import getMeta from '../../utils/getMeta';

const TrainPage = (props) => {
  const { train } = props;
  console.log(train);

  const title = ReactHtmlParser(train.title.rendered);

  return (
    <>
      <CustomHead
        title={title}
        { ...getMeta(train) }
      />
      <Breadcrumbs
        items={[
          {
            title: 'Тренировки по классическому двоеборью',
            href: '/trainings',
            as: '/trainings',
          },
          { title }
        ]}
      />
      <Post {...train} />
    </>
  );
};

TrainPage.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}&_embed`);
  const data = await res.json();
  const train = data && data.length > 0 ? data[0] : null;
  return { train };
};

export default TrainPage;
