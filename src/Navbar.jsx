export default function Navbar() {
  return (

    <nav className="navbar">

      {/* IZQUIERDA */}
      <div className="navbar-left">

        {/* ESPACIO LOGO */}
        <div className="logo">

        </div>

        <h1>
          MazvoStoreMx
        </h1>

      </div>

      {/* DERECHA */}
      <div className="navbar-links">

        <a href="https://www.instagram.com/mazvo_store_mx/">
          Instagram
        </a>

        <a href="https://www.facebook.com/profile.php?id=61590124602821">
          Facebook
        </a>

        <a href="https://www.tiktok.com/@mazvo_store_mx?_r=1&_t=ZS-96fTHyoSe84">
          Tiktok
        </a>

      </div>

    </nav>
  );
}