import { ImageResponse } from "next/og";

export const alt =
  "MD. Mehadi Hassan — Computer Science, AI, Data & Technology. Portfolio of academic projects and production work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social card rendered at build time from the same palette as globals.css.
 * A shared link previously rendered as bare text because openGraph had no
 * image at all.
 *
 * Satori supports only a subset of flexbox, so every container that holds more
 * than one child needs an explicit `display: flex`.
 */
const CHARCOAL = "#252525";
const SLATE = "#5C5C5C";
const COOL = "#8A8A8A";
const SILVER = "#C7C7C7";
const PAPER = "#F7F7F5";
const RED = "#D52B1E";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top rule + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 120, height: 8, background: RED }} />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: SLATE,
            }}
          >
            Portfolio
          </div>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -2,
              color: CHARCOAL,
            }}
          >
            MD. Mehadi Hassan
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, marginTop: 20, color: RED }}>
            Computer Science · AI · Data
          </div>
        </div>

        {/* Footer rule + credentials */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: `2px solid ${SILVER}`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26,
              color: COOL,
            }}
          >
            <span style={{ color: SLATE }}>East West University</span>
            <span>GPA 4.92</span>
            <span>IELTS 7.5</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}