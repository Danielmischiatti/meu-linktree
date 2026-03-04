import { useState } from "react";

const links = [
  {
    category: "cupons & lojas",
    items: [
      { label: "Amazon", handle: "CUPOM: SEU10", url: "https://amazon.com.br", icon: "AM", badge: "10% OFF" },
      { label: "Shopee", handle: "CUPOM: SEULINK", url: "https://shopee.com.br", icon: "SH", badge: "Frete grátis" },
      { label: "Magalu", handle: "CUPOM: SEUNOME", url: "https://magazineluiza.com.br", icon: "MG", badge: "15% OFF" },
    ],
  },
];

const iconColors = {
  IG: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  TK: "#010101",
  YT: "#FF0000",
  AM: "#FF9900",
  SH: "#EE4D2D",
  MG: "#0086FF",
  WB: "#111111",
};

export default function LinkTree() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAFAF8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 16px 64px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          width: 100%;
          overflow-x: hidden;
        }

        .link-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #fff;
          border: 1px solid #EBEBEB;
          border-radius: 16px;
          padding: 14px 18px;
          color: #111;
          cursor: pointer;
          transition: all 0.18s ease;
          position: relative;
          overflow: hidden;
          width: 100%;
          -webkit-tap-highlight-color: transparent;
        }
        .link-card:hover {
          border-color: #111;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
        }
        .link-card:active {
          transform: scale(0.98);
          background: #F7F7F5;
        }

        .icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }

        .badge {
          font-size: 10px;
          font-weight: 600;
          background: #F0FDF4;
          color: #16A34A;
          border: 1px solid #BBF7D0;
          border-radius: 20px;
          padding: 2px 8px;
          white-space: nowrap;
        }

        .copy-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: #F5F5F3;
          border: none;
          border-radius: 8px;
          padding: 6px 10px;
          font-size: 11px;
          font-weight: 500;
          color: #555;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
          opacity: 0;
          white-space: nowrap;
        }
        .link-card:hover .copy-btn { opacity: 1; }
        .copy-btn:hover { background: #111; color: #fff; }
        .copy-btn.copied { background: #111; color: #fff; opacity: 1; }

        /* Mobile: botão cupom sempre visível (dispositivos sem hover) */
        @media (hover: none) {
          .copy-btn { opacity: 1; }
        }

        .category-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #AAAAAA;
          margin-bottom: 10px;
          margin-top: 28px;
        }

        .avatar {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8e8e8, #d0d0d0);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 16px;
          border: 3px solid #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          overflow: hidden;
          flex-shrink: 0;
        }

        .links-container {
          width: 100%;
          max-width: 420px;
        }

        /* Telas pequenas (< 380px) ex: iPhone SE */
        @media (max-width: 380px) {
          .avatar { width: 72px; height: 72px; font-size: 26px; }
          .icon-box { width: 36px; height: 36px; }
          .link-card { padding: 12px 14px; gap: 10px; }
          .copy-btn { font-size: 10px; padding: 5px 8px; right: 10px; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate {
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }
      `}</style>

      {/* Avatar */}
      <div className="avatar animate" style={{ animationDelay: "0ms" }}>
        👤
      </div>

      {/* Nome */}
      <h1 className="animate" style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(22px, 5vw, 28px)",
        fontWeight: "400",
        color: "#111",
        animationDelay: "60ms",
        letterSpacing: "-0.3px",
        textAlign: "center",
      }}>
        Marina Botequio
      </h1>

      {/* Bio */}
      <p className="animate" style={{
        fontSize: "clamp(13px, 3.5vw, 14px)",
        color: "#888",
        marginTop: "6px",
        textAlign: "center",
        maxWidth: "300px",
        lineHeight: "1.6",
        fontWeight: "300",
        animationDelay: "120ms",
      }}>
        muito yoga, surf, corridas e cafés 𖧧 ✺
        <br/>prof. e praticante de yoga ryt 200h
      </p>

      {/* Divisor */}
      <div className="animate" style={{
        width: "32px",
        height: "1px",
        background: "#E0E0E0",
        margin: "24px 0 0",
        animationDelay: "180ms",
      }} />

      {/* Links por categoria */}
      <div className="links-container">
        {links.map((group, gi) => (
          <div key={gi}>
            <p className="animate category-label" style={{ animationDelay: `${220 + gi * 60}ms` }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className="link-card animate"
                  style={{ animationDelay: `${260 + gi * 60 + ii * 40}ms` }}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {/* Ícone */}
                  <div
                    className="icon-box"
                    style={{ background: iconColors[item.icon] || "#111" }}
                  >
                    {item.icon}
                  </div>

                  {/* Texto */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#111",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}>
                      {item.label}
                      {item.badge && <span className="badge">{item.badge}</span>}
                    </div>
                    <div style={{
                      fontSize: "12px",
                      color: "#AAA",
                      marginTop: "2px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      paddingRight: item.badge ? "96px" : "0",
                    }}>
                      {item.handle}
                    </div>
                  </div>

                  {/* Seta (só quando não tem cupom) */}
                  {!item.badge && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, color: "#CCC" }}>
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                  {/* Botão copiar cupom */}
                  {item.badge && (
                    <button
                      className={`copy-btn${copied === `${gi}-${ii}` ? " copied" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        const code = item.handle.replace("CUPOM: ", "");
                        handleCopy(code, `${gi}-${ii}`);
                      }}
                    >
                      {copied === `${gi}-${ii}` ? "✓ copiado" : "copiar cupom"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "48px",
        fontSize: "11px",
        color: "#CCC",
        letterSpacing: "0.5px",
      }}>
        feito com ♡
      </p>
    </div>
  );
}
