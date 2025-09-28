function App() {
  const apps = [
    {
      name: "Coin",
      logo: "/media/images/coin.webp",
    },
    {
      name: "Kite",
      logo: "/media/images/kite.png",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        marginTop: "20px",
      }}
    >
      <h2>Zerodha Apps</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {apps.map((app, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <img
              src={app.logo}
              alt={app.name}
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              {app.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
