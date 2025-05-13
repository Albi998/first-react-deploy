import React from "react";
import { Link } from "react-router-dom";
import progetti from "./progetti"; // o il path corretto
import "./index.css";
import "./style.css";
import "./grid.css";

function Home() {
  return (
    <>
      <header></header>

      <main>
        <div className="row">
          <div className="col-md-7 order-2 order-md-1" id="progetti">
            {progetti.map((progetto) => (
              <div className="test" key={progetto.id}>
                <p className="titolo-img">{progetto.titolo}</p>
                <img
                  src={progetto.copertina}
                  alt={`Copertina di ${progetto.titolo}`}
                  width="100%"
                  height="auto"
                  className="immagine"
                />
                <div className="middle">
                  <Link to={`/progetto/${progetto.id}`}>
                    <button className="bottone">
                      <p>Vedi Progetto &gt;&gt;</p>
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            <div id="contatti">
              <h3>Hai un Progetto? Scrivici!</h3>

              <form action="https://formsubmit.co/albertoscarsi9@gmail.com" method="POST" target="_blank">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      placeholder="Il tuo Nome*"
                      required
                    />
                  </div>
                  <div className="col-md 6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="La tua Email*"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="messaggio"
                      id="messaggio"
                      placeholder="Scrivi il tuo Messaggio*"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit">Invia Messaggio</button>
              </form>
            </div>
          </div>

          <div class="col-md-5 order-1 order-md-2 container" id="navbar">
            <div id="logo">
              <h2>IVI</h2>
            </div>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <a href="#contatti">Contatti</a>
              </li>
            </ul>

            <h1>
              InVision Interiors <br></br>Rendering di Interni<br></br>Design
              Concepts<br></br>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
