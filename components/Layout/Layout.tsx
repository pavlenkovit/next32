import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../style.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
// @ts-ignore
import css from './Layout.module.scss';

const Layout: React.FC = ({ children }) => (
  <div className={css.wrapper}>
    <Header />
    <main className={css.content}>
      <Container>
        <Row>
          <Col md={9}>
            {children}
          </Col>
          <Col md={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </main>
    <footer>
      footer content
    </footer>
  </div>
);

export default Layout;
