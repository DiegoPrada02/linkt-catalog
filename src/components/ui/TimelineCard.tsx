// TimelineCard.tsx
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Clock } from "lucide-react";

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
      {/* Opposite Content - Date/Phase Label */}
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
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "12px",
            backgroundColor: "rgba(13, 27, 42, 0.06)",
            border: "1px solid rgba(13, 27, 42, 0.10)",
            fontFamily: "'Sora', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--ink)",
          }}
        >
          <Clock size={16} strokeWidth={2.5} />
          {oppositeLabel}
        </div>
      </TimelineOppositeContent>

      {/* Separator - Dot and Line */}
      <TimelineSeparator>
        <TimelineDot
          sx={{
            width: 16,
            height: 16,
            backgroundColor: "var(--ink)",
            border: "3px solid var(--background-default)",
            boxShadow: "0 0 0 3px rgba(13, 27, 42, 0.12)",
            m: 0,
            p: 0,
          }}
        />
        {!isLast && (
          <TimelineConnector
            sx={{
              backgroundColor: "rgba(13, 27, 42, 0.12)",
              width: "2px",
              minHeight: "60px",
            }}
          />
        )}
      </TimelineSeparator>

      {/* Main Content - Card */}
      <TimelineContent>
        <div
          onClick={onClick}
          className="
            group
            overflow-hidden rounded-2xl
            border border-(--ink-12)
            bg-white
            shadow-md
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1 hover:border-(--ink-18)
          "
          style={{
            cursor: onClick ? "pointer" : "default",
          }}
        >
          {/* Media */}
          {img_link && (
            <div className="relative overflow-hidden bg-linear-to-br from-slate-100 to-blue-50/30 aspect-video">
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
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Content */}
          <div className="p-5 sm:p-6">
            {/* Mobile-only opposite label */}
            <div className="sm:hidden mb-3">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(13, 27, 42, 0.06)",
                  border: "1px solid rgba(13, 27, 42, 0.10)",
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--ink-72)",
                }}
              >
                <Clock size={14} strokeWidth={2.5} />
                {oppositeLabel}
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-lg sm:text-xl font-black text-(--ink) mb-2"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed text-(--ink-72) mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {description}
            </p>

            {/* Timeframe Badge */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-(--secondary-main)" />
              <span
                className="text-xs font-bold text-(--ink-60) uppercase tracking-wider"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {timeframe}
              </span>
            </div>
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
