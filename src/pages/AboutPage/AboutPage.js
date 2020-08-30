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
              <img src="/images/10.jpg" alt="Ujjwal" className="img-responsive" />
            </div>
          </div>
          <ul>
            <li>Established in 2016 with a mission to ‘encourage and empower dreams’, Sparsh is a registered NGO with The Societies Registration Act, 1860 that has emerged as a unique platform for helping the underprivileged.</li>
            <li>We are promoting & educating early childhood and young children by giving them the base for future growth & development to achieve their dreams by linking beneficiaries with donors with diverse causes including education, health, skill development and relief.</li>
          </ul>


        </div>
      </Container>
    </main>
  );
}
