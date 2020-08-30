import React from 'react';
import './Footer.scss'
import { Container } from '../Layout/Layout';
import { Facebook, Insta, Linkedin, Gmail } from '../Icons/Icons';

const SOCIAL_ICONS = [
  { icon: <Insta />, title: 'Insta', href: 'https://instagram.com/sparsh_ngo?igshid=120egt7edxrv' },
  { icon: <Facebook />, title: 'Facebook', href: 'https://www.facebook.com/Sparshngoindore' },
  { icon: <Linkedin />, title: 'Linkedin', href: 'https://www.linkedin.com/in/sparsh-ngo-indore-5b5831193' },
  // { icon: <Youtube />, title: 'Youtube', href: 'https://www.youtube.com/user/ujjvallaad' },
  // { icon: <Gmail />, title: 'Gmail', href: 'mailto:sparshngoindore@gmail.com' },
]

export default function Footer(props) {
  return (
    <footer>
      <Container className="d-flex">
        <p>© 2016 Sparsh NGO</p>
        <ul className="d-flex">
          {SOCIAL_ICONS.map(social => <li key={social.title}>
            <a target="_blank" rel="noopener noreferrer" title={social.title} href={social.href}>{social.icon}</a>
          </li>)}
        </ul>
      </Container>
    </footer>
  );
}
