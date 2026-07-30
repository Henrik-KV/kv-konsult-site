export default function ClarityVisual() {
  return (
    <figure className="clarity-visual" aria-labelledby="clarity-visual-title clarity-visual-desc">
      <svg viewBox="0 0 760 620" role="img">
        <title id="clarity-visual-title">Från spridd information till ett tydligt arbetssätt</title>
        <desc id="clarity-visual-desc">Mejl, mötesanteckningar, rapporter och frågor samlas, sorteras och blir en tydlig process med ansvar, underlag och nästa steg.</desc>
        <defs>
          <pattern id="micro-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="760" height="620" fill="url(#micro-grid)" />

        <g className="fragment fragment-a">
          <rect x="34" y="72" width="170" height="88" />
          <path d="M54 98h62M54 118h106M54 138h76" />
          <text x="54" y="63">INKORG · 08:12</text>
        </g>
        <g className="fragment fragment-b">
          <rect x="12" y="230" width="208" height="108" />
          <circle cx="42" cy="261" r="8" />
          <path d="M62 260h126M32 292h156M32 314h98" />
          <text x="32" y="220">MÖTESANTECKNINGAR</text>
        </g>
        <g className="fragment fragment-c">
          <rect x="62" y="420" width="158" height="112" />
          <path d="M83 500V458M112 500v-62M141 500v-30M170 500v-78M83 500h108" />
          <text x="82" y="410">RAPPORT · V.31</text>
        </g>

        <g className="flow-lines">
          <path d="M204 116C286 116 272 242 350 242" />
          <path d="M220 284C290 284 288 284 350 284" />
          <path d="M220 476C292 476 278 326 350 326" />
          <circle cx="350" cy="242" r="4" /><circle cx="350" cy="284" r="4" /><circle cx="350" cy="326" r="4" />
        </g>

        <g className="processor">
          <rect x="350" y="172" width="116" height="224" />
          <text x="375" y="205">SORTERA</text>
          <path d="M375 234h66M375 258h42M375 298h66M375 322h52M375 362h66" />
          <circle cx="445" cy="258" r="5" /><circle cx="445" cy="322" r="5" />
        </g>

        <g className="output">
          <rect x="510" y="104" width="218" height="400" />
          <text x="536" y="139">ARBETSSÄTT / 01</text>
          <text x="536" y="188" className="output-title">Tydligt nästa steg</text>
          <path d="M536 218h166" />
          <text x="536" y="256">01 · MÅL</text><path d="M536 274h136" />
          <text x="536" y="316">02 · ANSVAR</text><path d="M536 334h112" />
          <text x="536" y="376">03 · UNDERLAG</text><path d="M536 394h148" />
          <rect x="536" y="442" width="112" height="34" />
          <text x="552" y="464">REDO ATT TESTA</text>
        </g>

        <text x="14" y="590" className="axis-label">SPRITT</text>
        <path d="M74 586H690" className="axis" />
        <text x="696" y="590" className="axis-label">TYDLIGT</text>
      </svg>
    </figure>
  );
}
