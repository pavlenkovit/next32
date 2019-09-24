import React from 'react';
import css from './Category.module.scss';
import { Col, Row } from 'react-grid-system';
import PostPreview from '../../components/PostPreview';
import Categories from './components/Categories';

const Category = ({ posts, category }) => {
  return (
    <div>
      <h1>{category.name}</h1>
      <Categories activeSlug={category.slug} />
      <Row>
        {posts.map((post, idx) => {
          return (
            <Col key={idx} md={6}>
              <PostPreview post={post} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Category;