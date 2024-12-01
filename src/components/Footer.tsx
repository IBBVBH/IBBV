export const Footer = () => {
  return (
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
          <a href="https://www.facebook.com/share/1APLm3rBDS/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
