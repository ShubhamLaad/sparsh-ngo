import React from 'react';
import { Container } from '../../components/Layout/Layout';
import './WorkPage.scss'

export default function WorkPage() {
  return (
    <main className="WorkPage">
      <Container>
        <h1> Helping The Underprivileged </h1>
        <div className="our-wor-imgs">
          <img alt="work" width="60%" src={`/images/work/1.webp`} />
          <img alt="work" width="40%" src={`/images/work/11.webp`} />

          <img alt="work" width="40%" src={`/images/work/2.webp`} />
          <img alt="work" width="60%" src={`/images/work/22.webp`} />

          <img alt="work" width="60%" src={`/images/work/3.webp`} />
          <img alt="work" width="40%" src={`/images/work/33.webp`} />

          <img alt="work" width="40%" src={`/images/work/4.webp`} />
          <img alt="work" width="60%" src={`/images/work/44.webp`} />

          <img alt="work" width="100%" src={`/images/work/5.webp`} />
        </div>
      </Container>
    </main>
  );
}
