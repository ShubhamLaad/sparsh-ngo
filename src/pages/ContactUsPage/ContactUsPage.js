import React from 'react';
import { Container } from '../../components/Layout/Layout';
import './ContactUsPage.scss'

const VOLUNTEERS = [
  {
    imgUrl: '/images/syadav.jpeg',
    name: 'Sourabh Yadav',
    emailId: 'ysourabh180@gamil.com',
    position: 'President',
    contact: 7747986626,
  }, {
    imgUrl: '/images/sjain.jpeg',
    name: 'Sourabh Jain',
    emailId: 'Jain.sourabh9999@gmail.com',
    position: 'Vice President',
    contact: 7987790369,
  }, {
    imgUrl: '/images/ujjwal.jpeg',
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
          {VOLUNTEERS.map(({ name, imgUrl, emailId, contact, position }) => <li key={name} className="col-md-4">
            {/* <img className="img-responsive" src={imgUrl} alt={name} /> */}
            <div className="img mb-10" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <i>{position}</i>
            <h3 className="">{name}</h3>
            <p>{emailId}</p>
            <p>{contact}</p>
          </li>)}
        </ul>
      </Container>
    </main>
  );
}
