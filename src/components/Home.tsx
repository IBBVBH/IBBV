export const Home = () => {
  return (
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
          <a href="https://www.facebook.com/share/1APLm3rBDS/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
      <div id="banner">
        <img src="images/ibbv.webp" alt="banner" />
      </div>
    </section>
  );
};
