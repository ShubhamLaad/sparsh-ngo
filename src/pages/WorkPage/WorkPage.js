import React from 'react';
import { Container } from '../../components/Layout/Layout';
import './WorkPage.scss'

export default function WorkPage() {
  return (
    <main className="WorkPage">
      <Container>
        <h1> Helping The Underprivileged </h1>
        <div className="our-wor-imgs">
          <img alt="work" width="60%" src={`/images/work/1.jpeg`} />
          <img alt="work" width="40%" src={`/images/work/11.jpeg`} />

          <img alt="work" width="40%" src={`/images/work/2.jpeg`} />
          <img alt="work" width="60%" src={`/images/work/22.jpeg`} />

          <img alt="work" width="60%" src={`/images/work/3.jpeg`} />
          <img alt="work" width="40%" src={`/images/work/33.jpeg`} />

          <img alt="work" width="40%" src={`/images/work/4.jpeg`} />
          <img alt="work" width="60%" src={`/images/work/44.jpeg`} />

          <img alt="work" width="100%" src={`/images/work/5.jpeg`} />
        </div>
      </Container>
    </main>
  );
}
