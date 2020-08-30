import React from 'react';
import { Container } from '../../components/Layout/Layout';

export default function ContactUsPage() {
  return (
    <main className="ContactUsPage">
      <Container>
        <h1>Donate</h1>
        <p className="mb-20">We will utilise the funds raised to meet the running cost of our Sparsh NGO.
          It  will serve an underprivileged with educational accessories and meals.</p>
        <h3>Account Details IDFC Bank</h3>
        <p>Account Name: Sparsh ngo</p>
        <p>IFSC CODE: IDFB0041264</p>
        <p className="mb-20">Account No: 10038965224</p>
        <p>किसी भी प्रकार का आर्थिक सहयोग आप इस अकाउंट नंबर पर कर सकते है ये वेरिफाई अकाउंट नंबर है स्पर्श का
          <span role="img" aria-label="help" aria-labelledby="help">🙏🏻😇</span>
        </p>
      </Container>
    </main>
  );
}
