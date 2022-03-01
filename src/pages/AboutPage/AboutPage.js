import React from 'react';
import { Container } from '../../components/Layout/Layout';
import './AboutPage.scss'

export default function AboutPage() {
  return (
    <main className="AboutPage">
      <Container>
        <h1>About Us</h1>
        <div className="clearfix">
          <div className="float-right ujjwal-image text-center">
            <div className="mb-10 shadow" title="Ujjwal Laad">
              <img src="/images/sparsh/10.webp" alt="Ujjwal" className="img-responsive" />
            </div>
          </div>
          <ul>
            <li>Established in 2016 with a mission to ‘encourage and empower dreams’, Sparsh is a registered NGO with The Societies Registration Act, 1860 that has emerged as a unique platform for helping the underprivileged.</li>
            <li>We are promoting & educating early childhood and young children by giving them the base for future growth & development to achieve their dreams by linking beneficiaries with donors with diverse causes including education, health, skill development and relief.</li>
            <li>We believe that your time is the greatest and most precious gift we could ever receive. We welcome volunteers who have the passion and willingness to bring about social change within our community.</li>
            <li>We give our volunteers the freedom of choosing work, that matches their interests and expertise, on a daily, weekly, monthly or annual basis.</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
