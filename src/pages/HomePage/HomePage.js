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
            <h1>Encorage and empower dreams of early childhood & young children</h1>
          </div>
        </section>

        <section className="img-section">
          <Container>
            <div className="sub-heading mb-20">
              <h2>Our Work</h2>
              <Link to="/work" title="Our Work">View More -{">"}</Link>
            </div>
            <ul className="row card-list work-list mb-30">
              {[1, 5, 44].map(e => <li key={e} className="col-md-4 col-sm-6">
                <Card imgPath={`/images/work/${e}.webp`} />
              </li>)}
            </ul>

            <div className="sub-heading mb-20">
              <h2>Sparsh NGO</h2>
              {/* <Link to="/work" title="Our Work">View More -{">"}</Link> */}
            </div>
            <ul className="row card-list">
              {STORIES.map((story, index) =>
                <li className="col-md-4 col-sm-6" key={index}>
                  <Link to={`/details/${index}`} title={story.heading}>
                    <Card {...story} imgPath={`/images/sparsh/${index + 1}.webp`} />
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
