export const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">Agenda de Eventos</h2>
      <h3 className="section-subtitle">Participe das nossas atividades!</h3>
      <div id="events">
        <div className="event">
          <div className="event-bible">
            <i className="fa-solid fa-book-bible"></i>
          </div>

          <img src="images/event.jpg" className="event-image" alt="" />

          <h3 className="event-title">Culto Dominical</h3>
          <span className="event-description">
            Junte-se a nós todos os domingos para um momento de adoração e
            ensino da Palavra de Deus. Um culto para toda a família.
          </span>
          <div className="event-rate">
            <i className="fa-solid fa-people-roof"></i>
          </div>
        </div>
        <div className="event">
          <div className="event-bible">
            <i className="fa-solid fa-book-bible"></i>
          </div>

          <img src="images/event2.jpg" className="event-image" alt="" />

          <h3 className="event-title">
            Quarta-feira
            <br />
            Culto de Oração
          </h3>
          <span className="event-description">
            Toda quarta-feira, um encontro especial para orarmos juntos,
            buscando a presença de Deus e intercedendo uns pelos outros.
          </span>
          <div className="event-rate">
            <i className="fa-solid fa-people-roof"></i>
          </div>
        </div>
        <div className="event">
          <div className="event-bible">
            <i className="fa-solid fa-book-bible"></i>
          </div>

          <img src="images/event3.jpg" className="event-image" alt="" />

          <h3 className="event-title">Evento de Comunhão</h3>
          <span className="event-description">
            Participe de eventos especiais de comunhão, onde buscamos fortalecer
            nossos laços como irmãos em Cristo através de atividades e
            confraternizações.
          </span>
          <div className="event-rate">
            <i className="fa-solid fa-people-roof"></i>
          </div>
        </div>
        <div className="event">
          <div className="event-bible">
            <i className="fa-solid fa-book-bible"></i>
          </div>

          <img src="images/event4.jpg" className="event-image" alt="" />

          <h3 className="event-title">Evento de Celebração</h3>
          <span className="event-description">
            Celebramos as bênçãos de Deus em nossa igreja com eventos especiais
            para a nossa comunidade. Venha celebrar conosco!
          </span>
          <div className="event-rate">
            <i className="fa-solid fa-people-roof"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
