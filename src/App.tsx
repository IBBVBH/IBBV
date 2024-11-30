function App() {
  return (
    <>
      <header>
        <nav id="navbar">
          <i className="fa-solid fa-church logo" id="nav_logo">
            IBBV
          </i>
          <ul id="nav_list">
            <li className="nav-item active">
              <a href="#home">Início</a>
            </li>
            <li className="nav-item">
              <a href="#about">Agenda da Igreja</a>
            </li>
            <li className="nav-item">
              <a href="#location">Onde Estamos</a>
            </li>
          </ul>
          <button className="btn-default">
            <a href="src/pages/formulario.html">Entre em contato</a>
          </button>
          <button id="mobile_btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        <div id="mobile_menu">
          <ul id="mobile_nav_list">
            <li className="nav-item">
              <a href="#home">Início</a>
            </li>
            <li className="nav-item">
              <a href="#about">Agenda da Igreja</a>
            </li>
            <li className="nav-item">
              <a href="#location">Onde Estamos</a>
            </li>
          </ul>
          <button className="btn-default">
            <a href="src/pages/formulario.html">Entre em contato</a>
          </button>
        </div>
      </header>

      <main id="content">
        <section id="home">
          <div className="shape"></div>
          <div id="cta">
            <h1 className="title">
              Igreja Batista <span>Bela Vista</span>
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              consequatur! Nobis, reprehenderit unde!
            </p>
            <div id="cta_buttons">
              <a href="#" className="btn-default" id="tel">
                Telefone
              </a>
              <a href="tel:+3134642545" id="phone_button">
                <button className="btn-default">
                  <i className="fa-solid fa-phone"></i>
                </button>
                (031) 3464-2545
              </a>
            </div>
            <div className="social-media-buttons">
              <a
                href="https://wa.me//5531983540264?text=Olá, tudo bem? Vim pelo site da igreja!"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/ibbvbh?igsh=c2k1Z2htajRhdTZs"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1APLm3rBDS/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
          <div id="banner">
            <img src="src/images/ibbv.webp" alt="banner" />
          </div>
        </section>

        <section id="about">
          <h2 className="section-title">Agenda</h2>
          <h3 className="section-subtitle">Por dentro da IBBV</h3>
          <div id="events">
            <div className="event">
              <div className="event-bible">
                <i className="fa-solid fa-book-bible"></i>
              </div>
              <img src="src/images/event.jpg" className="event-image" alt="" />
              <h3 className="event-title">Culto Dominical</h3>
              <span className="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <div className="event-rate">
                <i className="fa-solid fa-people-roof"></i>
              </div>
            </div>
            <div className="event">
              <div className="event-bible">
                <i className="fa-solid fa-book-bible"></i>
              </div>
              <img src="src/images/event2.jpg" className="event-image" alt="" />
              <h3 className="event-title">Quarta-feira Culto de Oração</h3>
              <span className="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <div className="event-rate">
                <i className="fa-solid fa-people-roof"></i>
              </div>
            </div>
            <div className="event">
              <div className="event-bible">
                <i className="fa-solid fa-book-bible"></i>
              </div>
              <img src="src/images/event3.jpg" className="event-image" alt="" />
              <h3 className="event-title">Evento IBBV</h3>
              <span className="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <div className="event-rate">
                <i className="fa-solid fa-people-roof"></i>
              </div>
            </div>
            <div className="event">
              <div className="event-bible">
                <i className="fa-solid fa-book-bible"></i>
              </div>
              <img src="src/images/event4.jpg" className="event-image" alt="" />
              <h3 className="event-title">Evento IBBV</h3>
              <span className="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <div className="event-rate">
                <i className="fa-solid fa-people-roof"></i>
              </div>
            </div>
          </div>
        </section>
        <section id="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4813582949!2d-43.96956492586096!3d-19.90411043750069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697183cdac811%3A0x4c84a6f70877396a!2sIgreja%20Batista%20Bela%20Vista%20-%20Belo%20Horizonte!5e0!3m2!1spt-BR!2sbr!4v1732124004768!5m2!1spt-BR!2sbr"
            loading="lazy"
            className=""
          ></iframe>

          <div id="testimonials_content">
            <h2 className="section-title">Onde Estamos</h2>
            <h3 className="section-subtitle">Venha nos fazer uma visita!!</h3>
            <div id="feedbacks">
              <div className="feedback">
                <img
                  src="/src/images/avatar.png"
                  className="feedback-avatar"
                  alt=""
                />
                <div className="feedback-content">
                  <p>
                    Gertrudes
                    <span>
                      <i className="fa solid fa-comment"></i>
                    </span>
                  </p>
                  <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis optio assumenda doloribus.
                  </p>
                </div>
              </div>
              <div className="feedback">
                <img
                  src="/src/images/avatar.png"
                  className="feedback-avatar"
                  alt=""
                />
                <div className="feedback-content">
                  <p>
                    Gertrudes
                    <span>
                      <i className="fa solid fa-comment"></i>
                    </span>
                  </p>
                  <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis optio assumenda doloribus."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <img src="./src/images/wave.svg" alt="Imagem de fundo de uma onda" />
        <div id="footer_items">
          <span id="copyright"> &copy 2024 Igreja Batista Bela Vista </span>
          <div className="social-media-buttons">
            <a
              href="https://wa.me//5531983540264?text=Olá, tudo bem? Vim pelo site da igreja!"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/ibbvbh?igsh=c2k1Z2htajRhdTZs"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/share/1APLm3rBDS/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
