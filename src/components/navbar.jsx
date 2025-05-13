function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem" }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Chi siamo
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
