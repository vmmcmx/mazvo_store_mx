import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1 className="hero-title">
          ¡LOS MEJORES PRODUCTOS!
        </h1>

        <p className="hero-subtitle">
          Calidad premium para todos
        </p>

      </section>

      {/* INFO */}
      <section className="info-box">

        <h2>
          INFORMACIÓN
        </h2>

        <div className="line"></div>

        <div className="info-content">

          <div className="info-text">

            <h3>
              SOBRE NOSOTROS
            </h3>

            <p>
              Aquí podrás agregar información sobre tu tienda,
              tus productos y tus servicios.
            </p>

            <p>
              También puedes agregar horarios, ubicación
              y formas de pago.
            </p>

          </div>

          {/* ESPACIO PARA IMAGEN */}
          <div className="info-image">

          </div>

        </div>

      </section>

      {/* REDES */}
      <section className="socials">

        <a href="https://www.instagram.com/mazvo_store_mx/">INSTAGRAM</a>
        <a href="https://www.facebook.com/profile.php?id=61590124602821">FACEBOOK</a>
        <a href="https://www.tiktok.com/@mazvo_store_mx?_r=1&_t=ZS-96fTHyoSe84">TIKTOK</a>

      </section>

    </div>
  );
}