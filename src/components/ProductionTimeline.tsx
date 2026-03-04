// ProductionTimeline.tsx
import Timeline from "@mui/lab/Timeline";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Clock, X } from "lucide-react";
import { useState } from "react";
import { TIMELINE_DATA } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import TimelineCard from "./ui/TimelineCard";

const FONT = "'Funnel Sans', system-ui, sans-serif";

const isVideoSource = (src: string): boolean =>
  [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"].some((ext) =>
    src.toLowerCase().endsWith(ext),
  );

export default function ProductionTimeline() {
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<
    (typeof TIMELINE_DATA)[0] | null
  >(null);

  return (
    <>
      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <Timeline
        position="alternate"
        sx={{
          px: { xs: 0, sm: 3, md: 4 },
          py: { xs: 2, sm: 3 },
          maxWidth: "100%",
          overflow: "visible",

          "& .MuiTimelineConnector-root": {
            backgroundColor: "var(--ink-12)",
            width: "2px",
          },
          "& .MuiTimelineItem-root": {
            minHeight: { xs: "auto", sm: 220 },
            mb: { xs: 3, sm: 4, md: 5 },
            "&::before": {
              flex: { xs: 0, sm: 1 },
              padding: { xs: 0, sm: "6px 16px" },
            },
          },
          "& .MuiTimelineOppositeContent-root": {
            flex: { xs: 0, sm: 1 },
            padding: { xs: 0, sm: "6px 16px" },
            display: { xs: "none", sm: "block" },
          },
          "& .MuiTimelineContent-root": {
            padding: { xs: "6px 0 6px 16px", sm: "6px 16px" },
          },
          "& .MuiTimelineDot-root": {
            margin: { xs: "12px 0", sm: "16px 0" },
            boxShadow: "0 4px 12px var(--ink-18)",
          },
          "@media (max-width: 600px)": {
            "& .MuiTimelineItem-root": { flexDirection: "row !important" },
            "& .MuiTimelineOppositeContent-root": {
              display: "none !important",
            },
            "& .MuiTimelineContent-root": { paddingLeft: "16px !important" },
          },
        }}
      >
        {TIMELINE_DATA.map((item, index) => (
          <TimelineCard
            key={item.id}
            id={item.id}
            oppositeLabel={t(item.opposite)}
            title={t(item.title)}
            description={t(item.description)}
            timeframe={t(item.timeframe)}
            img_link={item.img_link}
            isLast={index === TIMELINE_DATA.length - 1}
            isVideo={isVideoSource(item.img_link)}
            onClick={() => setSelectedCard(item)}
          />
        ))}
      </Timeline>

      {/* ── Detail dialog ─────────────────────────────────────────────────── */}
      <Dialog
        open={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "22px",
            maxHeight: "90vh",
            overflow: "hidden",
            background:
              "linear-gradient(160deg, #ffffff 0%, var(--background-default) 100%)",
            border: "1px solid var(--ink-12)",
            boxShadow: "0 24px 60px var(--ink-18)",
            fontFamily: FONT,
          },
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={() => setSelectedCard(null)}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            zIndex: 1300,
            width: 40,
            height: 40,
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "1px solid var(--ink-12)",
            boxShadow: "0 4px 14px var(--ink-14)",
            color: "var(--ink)",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "white",
              transform: "scale(1.06)",
              boxShadow: "0 6px 18px var(--ink-18)",
            },
          }}
        >
          <X size={18} strokeWidth={2.5} />
        </IconButton>

        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          {selectedCard && (
            <div style={{ position: "relative", overflow: "hidden" }}>
              {/* Decorative background slab */}
              <div
                aria-hidden="true"
                style={{
                  pointerEvents: "none",
                  position: "absolute",
                  right: "-6%",
                  top: "-20%",
                  width: "38%",
                  height: "140%",
                  background:
                    "linear-gradient(135deg, var(--gradient-blue-light), var(--gradient-blue-soft))",
                  transform: "rotate(-12deg)",
                  borderRadius: "18px",
                  opacity: 0.35,
                  zIndex: 0,
                }}
              />

              {/* ── Media ─────────────────────────────────────────────────── */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxHeight: "480px",
                  background: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {isVideoSource(selectedCard.img_link) ? (
                  <video
                    src={selectedCard.img_link}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "480px",
                      width: "auto",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                    controls
                    autoPlay
                    loop
                    playsInline
                    muted
                  />
                ) : (
                  <img
                    src={selectedCard.img_link}
                    alt={t(selectedCard.title)}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "480px",
                      width: "auto",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                )}
                {/* Scrim */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(to top, rgba(13,27,42,0.35), transparent 60%)",
                  }}
                />
              </div>

              {/* ── Content ───────────────────────────────────────────────── */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "clamp(1.5rem, 4vw, 2.5rem)",
                }}
              >
                {/* Phase chip */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      padding: "7px 14px",
                      borderRadius: "12px",
                      background: "rgba(13,27,42,0.05)",
                      border: "1px solid var(--ink-12)",
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
                    {t(selectedCard.opposite)}
                  </div>
                </div>

                {/* Title */}
                <h2
                  style={{
                    margin: "0 0 0.85rem",
                    fontFamily: FONT,
                    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                    fontWeight: 900,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {t(selectedCard.title)}
                </h2>

                {/* Description */}
                <p
                  style={{
                    margin: "0 0 1.75rem",
                    fontFamily: FONT,
                    fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: "var(--ink-72)",
                    maxWidth: "70ch",
                  }}
                >
                  {t(selectedCard.description)}
                </p>

                {/* Timeframe row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--ink-12)",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "7px",
                      background: "var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px var(--ink-18)",
                      flexShrink: 0,
                    }}
                  >
                    <Clock
                      size={12}
                      strokeWidth={2.5}
                      color="var(--background-paper)"
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: FONT,
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-60)",
                    }}
                  >
                    {t(selectedCard.timeframe)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
