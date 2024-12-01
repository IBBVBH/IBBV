export const Location = () => {
  return (
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
            <img src="images/avatar.png" className="feedback-avatar" alt="" />
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
            <img src="images/avatar.png" className="feedback-avatar" alt="" />
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
  );
};
