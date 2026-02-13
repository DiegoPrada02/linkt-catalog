// ui/TimelineCard.tsx
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Vidimg from "./vidimg";

type TimelineCardProps = {
  id: number;
  oppositeLabel: string;
  title: string;
  description: string;
  timeframe: string;
  img_link: string;
};

export default function TimelineCard({
  id,
  oppositeLabel,
  title,
  description,
  timeframe,
  img_link,
}: TimelineCardProps) {
  const isVideo = img_link.includes(".mp4") || img_link.includes("video");

  return (
    <TimelineItem
      sx={{
        // On mobile, stack content instead of 3-column timeline layout
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "flex-start" },
        // TimelineItem has a pseudo-element that can add spacing; remove on mobile
        "&::before": {
          flex: { xs: 0, sm: 1 },
          padding: { xs: 0, sm: "12px 0" },
        },
      }}
    >
      <TimelineOppositeContent
        sx={{
          color: "rgba(13,27,42,0.72)",
          mt: { xs: 0, sm: 0.5 },
          mb: { xs: 1.25, sm: 0 },
          textAlign: { xs: "left", sm: "right" },
          flex: { xs: "0 0 auto", sm: 0.28 },
          // Make it full-width on mobile so it doesn't squeeze / overflow
          width: { xs: "100%", sm: "auto" },
          maxWidth: { xs: "100%", sm: "none" },
          px: { xs: 0, sm: 2 },
        }}
      >
        <div style={{ fontWeight: 900, color: "var(--ink)" }}>{oppositeLabel}</div>
        <div style={{ fontSize: 13 }}>{timeframe}</div>
      </TimelineOppositeContent>

      <TimelineSeparator
        sx={{
          // Keep the dot/line centered on desktop, but make it horizontal-friendly on mobile
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          justifyContent: { xs: "flex-start", sm: "center" },
          // Give some breathing room between label and card on mobile
          mb: { xs: 1.25, sm: 0 },
          // On mobile we don’t want the separator to create a huge gutter
          px: { xs: 0, sm: 0 },
        }}
      >
        <TimelineDot
          sx={{
            bgcolor: "var(--ink)",
            boxShadow: "0 10px 25px rgba(13,27,42,0.25)",
          }}
        />

        <TimelineConnector
          sx={{
            bgcolor: "rgba(13,27,42,0.25)",
            // Vertical line on desktop, short horizontal line on mobile
            width: { xs: 28, sm: 2 },
            height: { xs: 2, sm: "auto" },
            my: { xs: 0, sm: 1 },
            mx: { xs: 1.25, sm: 0 },
          }}
        />
      </TimelineSeparator>

      <TimelineContent
        sx={{
          py: { xs: 0, sm: 2 },
          px: { xs: 0, sm: 2 },
          // Prevent narrow overflow on mobile
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            bg-white/75 backdrop-blur-md
            shadow-[0_18px_45px_rgba(13,27,42,0.14)]
          "
          style={{
            borderColor: "rgba(13,27,42,0.14)",
            width: "100%",
          }}
        >
          {/* Header strip */}
          <div
            className="
              px-5 py-4
              bg-linear-to-r
              from-(--ink)
              to-[rgba(1,38,86,0.85)]
              text-(--background-default)
            "
          >
            <div className="text-sm font-black opacity-90">{`#${id}`}</div>
            <div className="text-xl font-black leading-tight">{title}</div>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,42,0.78)" }}>
              {description}
            </p>

            <div
              className="mt-4 overflow-hidden rounded-2xl border"
              style={{ borderColor: "rgba(13,27,42,0.14)" }}
            >
              <Vidimg source={img_link} isVideo={isVideo} title={title} />
            </div>
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
