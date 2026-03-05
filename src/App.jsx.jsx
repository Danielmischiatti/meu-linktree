const links = [
  {
    category: "cupons & lojas",
    items: [
      { label: "4am", handle: "cupom: MARIMAR10", url: "https://the4amculture.com", icon: "4AM" },
      { label: "Marsala", handle: "cupom: MARIMAR", url: "https://marsalabr.com/", icon: "MS" },
      { label: "Ekomat", handle: "cupom: MABOTEQUIO10", url: "https://www.ekomat.com.br/marinabotequio", icon: "EK" },
      { label: "Tuyo", handle: "cupom: MABOTEQUIO10", url: "https://tuyo.pilealabs.link/marinabotequio/xpemjK", icon: "TY" },
    ],
  },
  {
    category: "contato",
    items: [
      { label: "aulas de yoga • parcerias • eventos", handle: "mabotequio@hotmail.com", url: "mailto:mabotequio@hotmail.com", icon: "✉" },
    ],
  },
];

const iconColors = {
  "4AM": "#1A1A1A",
  MS:   "#A0522D",
  EK:   "#4A7C59",
  TY:   "#C27BA0",
  "✉":  "#7B6352",
};

export default function LinkTree() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#C9B49A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "48px 20px 64px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; overflow-x: hidden; }

        .link-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #B89E82;
          border: none;
          border-radius: 100px;
          padding: 18px 24px;
          color: #2C2C2C;
          cursor: pointer;
          transition: all 0.18s ease;
          width: 100%;
          -webkit-tap-highlight-color: transparent;
          text-align: center;
          position: relative;
        }
        .link-card:hover {
          background: #A58C6E;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.07);
        }
        .link-card:active {
          transform: scale(0.97);
        }

        .icon-box {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
          flex-shrink: 0;
          position: absolute;
          left: 18px;
        }

        .category-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #5C3D20;
          margin-bottom: 12px;
          margin-top: 32px;
          text-align: center;
        }

        .avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: linear-gradient(135deg, #BFA080, #9C7E5E);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin-bottom: 18px;
          border: 4px solid #C9B49A;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          overflow: hidden;
          flex-shrink: 0;
        }

        .links-container {
          width: 100%;
          max-width: 400px;
        }

        @media (max-width: 380px) {
          .avatar { width: 80px; height: 80px; font-size: 28px; }
          .link-card { padding: 16px 20px; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate {
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }
      `}</style>

      {/* Avatar */}
      <div className="avatar animate" style={{ animationDelay: "0ms" }}>
        <img src="/avatar.jpg" alt="Marina Botequio" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Nome */}
      <h1 className="animate" style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(22px, 5vw, 27px)",
        fontWeight: "400",
        color: "#3D2B1A",
        animationDelay: "60ms",
        letterSpacing: "-0.3px",
        textAlign: "center",
      }}>
        Marina Botequio
      </h1>

      {/* Bio */}
      <p className="animate" style={{
        fontSize: "clamp(13px, 3.5vw, 14px)",
        color: "#6B4F35",
        marginTop: "8px",
        textAlign: "center",
        maxWidth: "300px",
        lineHeight: "1.7",
        fontWeight: "300",
        animationDelay: "120ms",
      }}>
        muito yoga, surf, corridas e cafés 𖧧 ✺
        <br />prof. e praticante de yoga ryt 200h
      </p>

      {/* Divisor */}
      <div className="animate" style={{
        width: "28px",
        height: "1px",
        background: "#9C7E5E",
        margin: "24px 0 0",
        animationDelay: "160ms",
      }} />

      {/* Links */}
      <div className="links-container">
        {links.map((group, gi) => (
          <div key={gi}>
            <p className="animate category-label" style={{ animationDelay: `${200 + gi * 60}ms` }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className="link-card animate"
                  style={{ animationDelay: `${240 + gi * 60 + ii * 50}ms` }}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {/* Ícone à esquerda */}
                  <div
                    className="icon-box"
                    style={{ background: iconColors[item.icon] || "#AAA" }}
                  >
                    {item.icon}
                  </div>

                  {/* Texto centralizado */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#3D2B1A",
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: "12px",
                      color: "#6B4F35",
                      marginTop: "2px",
                    }}>
                      {item.handle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "52px",
        fontSize: "11px",
        color: "#9C7E5E",
        letterSpacing: "0.5px",
      }}>
        feito com ♡
      </p>
    </div>
  );
}
