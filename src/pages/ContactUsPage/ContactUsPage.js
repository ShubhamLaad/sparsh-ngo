import React from 'react';
import Candidates from '../../components/Candidates/Candidates';
import { Container } from '../../components/Layout/Layout';
import './ContactUsPage.scss'

const VOLUNTEERS = [
  {
    imgUrl: '/images/contact/syadav.webp',
    name: 'Sourabh Yadav',
    emailId: 'ysourabh180@gamil.com',
    position: 'President',
    contact: 7747986626,
  }, {
    imgUrl: '/images/contact/sjain.webp',
    name: 'Sourabh Jain',
    emailId: 'Jain.sourabh9999@gmail.com',
    position: 'Vice President',
    contact: 7987790369,
  }, {
    imgUrl: '/images/contact/ujjwal.webp',
    name: 'Ujjwal Laad',
    emailId: 'ujjvallaad@gmail.com',
    position: 'Social Media Manager',
    contact: 8989619599,
  }
]

export default function ContactUsPage() {
  return (
    <main className="ContactUsPage">
      <Container>
        <h1>Contact Us</h1>
        <p className="mb-30">We believe that your time is the greatest and most precious gift we could ever receive. We welcome volunteers who have the passion and willingness to bring about social change within our community.</p>
        <ul className="row volunteer-list">
          {VOLUNTEERS.map(({ name, imgUrl, emailId, contact, position }) => <li key={name} className="col-md-4 mb-30">
            {/* <img className="img-responsive" src={imgUrl} alt={name} /> */}
            <div className="img mb-10" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <i>{position}</i>
            <h3 className="">{name}</h3>
            <a href={`mailto:${emailId}`} title="Email Me">{emailId}</a>
            <a href={`tel:${contact}`} title="Call Me">{contact}</a>
          </li>)}
        </ul>

        <section className="volunteer-section">
          <h2 className="text-center mb-20">Volunteers</h2>
          <Candidates />
        </section>
      </Container>
    </main>
  );
}
