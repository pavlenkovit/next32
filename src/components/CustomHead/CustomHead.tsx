import React, { FC } from 'react';
import Head from 'next/head';

interface IProps {
  title?: any;
  description?: string;
  img?: string;
  url?: string;
  keywords?: string;
  type?: string;
}

const CustomHead: FC<IProps> = (props) => {
  const {
    title = 'Гиревой спорт',
    description = 'Сайт о гиревом спорте',
    img = '/img/main.png',
    url = '',
    keywords = 'гиревой спорт, гиревой спорт тренировки',
    type,
  } = props;

  return (
    <Head>
      <title key="title">{title} | 32PLUS32</title>
      <meta key="meta-image" property="og:image" content={img} />
      <meta key="meta-url" property="og:url" content={`https://32plus32.ru${url}`} />
      <meta key="meta-title" property="og:title" content={title} />
      <meta key="meta-description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={keywords} />
      {type && <meta key="meta-type" property="og:type" content={type} />}
    </Head>
  );
};

export default CustomHead;
