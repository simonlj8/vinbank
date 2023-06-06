import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Vinbanken</h1>
        <nav>
          <ul>
            <li><a href="#">Viner</a></li>
            <li><a href="#">Recensioner</a></li>
            <li><a href="#">Om oss</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Välkommen till Vinbanken</h2>
        <p>Upptäck och dela dina favoritviner med andra!</p>
      </section>

      <section className="featured-drinks">
        <h3>Utvalda drycker</h3>
        <div className="drink-card">
          <img src="drink1.jpg" alt="Dryck 1" />
          <h4>Vin 1</h4>
          <p>Ett fantastisk vin med en unik smak.</p>
        </div>
        <div className="drink-card">
          <img src="drink2.jpg" alt="Dryck 2" />
          <h4>Vin 2</h4>
          <p>Ett uppfriskande vin perfekt för sommaren.</p>
        </div>
      </section>

      <footer>
        <p>Kontakta oss på info@vinbanken.se</p>
      </footer>
    </div>
  );
}

export default App;