// TimelineCard.tsx
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Clock } from "lucide-react";

const FONT = "'Funnel Sans', system-ui, sans-serif";

type TimelineCardProps = {
  id: number;
  oppositeLabel: string;
  title: string;
  description: string;
  timeframe: string;
  img_link: string;
  isVideo?: boolean;
  isLast: boolean;
  onClick?: () => void;
};

export default function TimelineCard({
  oppositeLabel,
  title,
  description,
  timeframe,
  img_link,
  isVideo = false,
  isLast,
  onClick,
}: TimelineCardProps) {
  return (
    <TimelineItem>
      {/* ── Opposite label — desktop ───────────────────────────────────────── */}
      <TimelineOppositeContent
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "flex-end",
          pr: 3,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "7px 14px",
            borderRadius: "12px",
            background:
              "linear-gradient(160deg, #ffffff, var(--background-default))",
            border: "1px solid var(--ink-12)",
            boxShadow: "0 2px 10px var(--ink-12)",
            fontFamily: FONT,
            fontSize: "13px",
            fontWeight: 700,
            color: "var(--ink-80)",
            letterSpacing: "0.01em",
          }}
        >
          <Clock
            size={14}
            strokeWidth={2.5}
            style={{ color: "var(--ink-60)" }}
          />
          {oppositeLabel}
        </div>
      </TimelineOppositeContent>

      {/* ── Separator ─────────────────────────────────────────────────────── */}
      <TimelineSeparator>
        <TimelineDot
          sx={{
            width: 14,
            height: 14,
            backgroundColor: "var(--ink)",
            border: "3px solid var(--background-default)",
            boxShadow: "0 0 0 3px var(--ink-12)",
            m: 0,
            p: 0,
          }}
        />
        {!isLast && (
          <TimelineConnector
            sx={{
              backgroundColor: "var(--ink-12)",
              width: "2px",
              minHeight: "60px",
            }}
          />
        )}
      </TimelineSeparator>

      {/* ── Card ──────────────────────────────────────────────────────────── */}
      <TimelineContent sx={{ pb: 4 }}>
        <div
          onClick={onClick}
          className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{
            cursor: onClick ? "pointer" : "default",
            borderRadius: "20px",
            border: "1px solid var(--ink-12)",
            background:
              "linear-gradient(160deg, #ffffff 0%, var(--background-default) 100%)",
            boxShadow: "0 4px 18px var(--ink-12)",
            transition:
              "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 14px 36px var(--ink-14)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "var(--ink-18)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 18px var(--ink-12)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "var(--ink-12)";
          }}
        >
          {/* Decorative background slab */}
          <div
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              position: "absolute",
              right: "-8%",
              top: "-35%",
              width: "44%",
              height: "170%",
              background:
                "linear-gradient(135deg, var(--gradient-blue-light), var(--gradient-blue-soft))",
              transform: "rotate(-12deg)",
              borderRadius: "14px",
              opacity: 0.3,
              transition: "opacity 0.3s ease",
            }}
            className="group-hover:opacity-50"
          />

          {/* ── Media ───────────────────────────────────────────────────── */}
          {img_link && (
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "16/9",
                background: "var(--background-default)",
              }}
            >
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                {isVideo ? (
                  <video
                    src={img_link}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={img_link}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Gradient scrim */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.22), transparent 55%)",
                }}
              />
            </div>
          )}

          {/* ── Body ────────────────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "1.5rem 1.5rem 1.35rem",
            }}
          >
            {/* Mobile-only phase label */}
            <div className="sm:hidden" style={{ marginBottom: "0.85rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 11px",
                  borderRadius: "10px",
                  background: "rgba(13,27,42,0.05)",
                  border: "1px solid var(--ink-12)",
                  fontFamily: FONT,
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--ink-72)",
                }}
              >
                <Clock size={12} strokeWidth={2.5} />
                {oppositeLabel}
              </div>
            </div>

            {/* Title */}
            <h3
              style={{
                margin: "0 0 0.5rem",
                fontFamily: FONT,
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontWeight: 900,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              style={{
                margin: "0 0 1.1rem",
                fontFamily: FONT,
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "var(--ink-72)",
              }}
            >
              {description}
            </p>

            {/* Timeframe badge */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "6px",
                  background: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px var(--ink-18)",
                  flexShrink: 0,
                }}
              >
                <Clock
                  size={11}
                  strokeWidth={2.5}
                  color="var(--background-paper)"
                />
              </div>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-60)",
                }}
              >
                {timeframe}
              </span>
            </div>
          </div>

          {/* Bottom streak on hover */}
          <div
            aria-hidden="true"
            className="group-hover:opacity-100"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              borderRadius: "0 0 20px 20px",
              background:
                "linear-gradient(90deg, transparent, var(--ink) 35%, var(--ink) 65%, transparent)",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
