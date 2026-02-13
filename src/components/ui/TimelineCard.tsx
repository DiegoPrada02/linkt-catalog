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
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          color: "rgba(13,27,42,0.72)",
          mt: 0.5,
        }}
      >
        <div style={{ fontWeight: 900, color: "var(--ink)" }}>{oppositeLabel}</div>
        <div style={{ fontSize: 13 }}>{timeframe}</div>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor: "var(--ink)",
            boxShadow: "0 10px 25px rgba(13,27,42,0.25)",
          }}
        />
        <TimelineConnector sx={{ bgcolor: "rgba(13,27,42,0.25)" }} />
      </TimelineSeparator>

      <TimelineContent sx={{ py: 2 }}>
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            bg-white/75 backdrop-blur-md
            shadow-[0_18px_45px_rgba(13,27,42,0.14)]
          "
          style={{ borderColor: "rgba(13,27,42,0.14)" }}
        >
          {/* Header strip */}
          <div
            className="px-5 py-4           bg-linear-to-r
          from-(--ink)
          to-[rgba(1,38,86,0.85)]
          text-(--background-default)"
          >
            <div className="text-sm font-black opacity-90">{`#${id}`}</div>
            <div className="text-xl font-black leading-tight">{title}</div>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,42,0.78)" }}>
              {description}
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl border"
                 style={{ borderColor: "rgba(13,27,42,0.14)" }}>
              <Vidimg
                source={img_link}
                isVideo={isVideo}
                title={title}
              />
            </div>
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
