import React from 'react';
import { Container, Row } from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import STORIES from '../../json/STORIES.json'

export default function DetailsPage() {
  const { index } = useParams();
  const { heading, place } = STORIES[index]

  return (
    <main>
      <Container>
        <h1>{heading}</h1>
        <Row>
          <div className="col-sm-6">
            <div className="shadow">
              <img width="100%" src={`/images/sparsh/${parseInt(index) + 1}.jpg`} alt={heading} />
            </div>
          </div>
          <div className="col-sm-6">
            <h3>{place}</h3>
          </div>
        </Row>
      </Container>
    </main>
  );
}
