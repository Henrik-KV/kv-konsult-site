import { ImageResponse } from "next/og";

export const alt = "KV Konsult – från komplexitet till klarhet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f2efe7", color: "#182128", padding: 64, position: "relative", fontFamily: "serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(24,33,40,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(24,33,40,.07) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", borderTop: "2px solid #182128", borderBottom: "2px solid #182128", padding: "32px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 18, letterSpacing: 3, textTransform: "uppercase" }}><span>KV Konsult</span><span>Utbilda · Införa · Bygga</span></div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}><div style={{ maxWidth: 850, display: "flex", flexDirection: "column", fontSize: 96, lineHeight: .9, letterSpacing: -5 }}><span>Från komplexitet</span><span style={{ display: "flex" }}>till&nbsp;<span style={{ color: "#123f58" }}>klarhet.</span></span></div><div style={{ width: 120, height: 120, display: "flex", alignItems: "center", justifyContent: "center", background: "#123f58", color: "#f2efe7", fontSize: 52 }}>K/V</div></div>
      </div>
    </div>, size,
  );
}
