import React from 'react';
import './HomePage.scss'
import Card from '../../components/Card/Card';
import STORIES from '../../json/STORIES.json'
import { Container } from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <main>
        <section className="banner-section img-bg">
          <div className="banner-wrap ">
            <h1>Promoting & educating early childhood and young children by giving them the base for future growth & development to achieve their dreams</h1>
          </div>
        </section>
        <section className="img-section">
          <Container>
            <ul className="row card-list">
              {STORIES.map((story, index) =>
                <li className="col-md-4 col-sm-6" key={index}>
                  <Link to={`/images/${index}`} title={story.heading}>
                    <Card {...story} imgName={index + 1} />
                  </Link>
                </li>
              )}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
