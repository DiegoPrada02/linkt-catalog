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
import { Lens } from "./ui/lens";

export default function ProductionTimeline() {
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<
    (typeof TIMELINE_DATA)[0] | null
  >(null);

  // Helper function to detect if source is a video based on file extension
  const isVideoSource = (src: string): boolean => {
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
  };

  const handleCardClick = (item: (typeof TIMELINE_DATA)[0]) => {
    setSelectedCard(item);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Timeline
        position="alternate"
        sx={{
          // Better padding system
          px: { xs: 0, sm: 3, md: 4 },
          py: { xs: 2, sm: 3 },

          // Ensure timeline doesn't overflow
          maxWidth: "100%",
          overflow: "visible",

          // Custom connector styling
          "& .MuiTimelineConnector-root": {
            backgroundColor: "rgba(13, 27, 42, 0.12)",
            width: "2px",
          },

          // Better spacing between items
          "& .MuiTimelineItem-root": {
            minHeight: { xs: "auto", sm: 220 },
            mb: { xs: 3, sm: 4, md: 5 },

            "&::before": {
              flex: { xs: 0, sm: 1 },
              padding: { xs: 0, sm: "6px 16px" },
            },
          },

          // Opposite content (dates/labels on the other side)
          "& .MuiTimelineOppositeContent-root": {
            flex: { xs: 0, sm: 1 },
            padding: { xs: 0, sm: "6px 16px" },
            display: { xs: "none", sm: "block" },
          },

          // Timeline content area
          "& .MuiTimelineContent-root": {
            padding: { xs: "6px 0 6px 16px", sm: "6px 16px" },
          },

          // Dot styling
          "& .MuiTimelineDot-root": {
            margin: { xs: "12px 0", sm: "16px 0" },
            boxShadow: "0 4px 12px rgba(13, 27, 42, 0.15)",
          },

          // On mobile, all items align to the right (no alternating)
          "@media (max-width: 600px)": {
            "& .MuiTimelineItem-root": {
              flexDirection: "row !important",
            },
            "& .MuiTimelineOppositeContent-root": {
              display: "none !important",
            },
            "& .MuiTimelineContent-root": {
              paddingLeft: "16px !important",
            },
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
            onClick={() => handleCardClick(item)}
          />
        ))}
      </Timeline>

      {/* Expanded Card Dialog */}
      <Dialog
        open={selectedCard !== null}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: "90vh",
            bgcolor: "var(--background-default)",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            bgcolor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 1300,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.95)",
              transform: "scale(1.05)",
            },
            transition: "all 0.2s",
          }}
        >
          <X size={20} strokeWidth={2.5} />
        </IconButton>

        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          {selectedCard && (
            <div className="bg-white">
              {/* Media Section */}
              <div className="relative overflow-hidden bg-linear-to-br from-slate-100 to-blue-50/30 w-full h-75 sm:h-125">
                <Lens>
                  {isVideoSource(selectedCard.img_link) ? (
                    <video
                      src={selectedCard.img_link}
                      className="w-300 h-auto object-center"
                      controls
                      autoPlay
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={selectedCard.img_link}
                      alt={t(selectedCard.title)}
                      className="w-auto h-120 mx-auto"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </Lens>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Phase Label */}
                <div className="mb-4">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 18px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(13, 27, 42, 0.06)",
                      border: "1px solid rgba(13, 27, 42, 0.10)",
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    <Clock size={18} strokeWidth={2.5} />
                    {t(selectedCard.opposite)}
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--ink) mb-4"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {t(selectedCard.title)}
                </h2>

                {/* Description */}
                <p
                  className="text-base sm:text-lg leading-relaxed text-(--ink-72) mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t(selectedCard.description)}
                </p>

                {/* Timeframe Badge */}
                <div className="flex items-center gap-3 pt-4 border-t border-(--ink-12)">
                  <div className="w-2 h-2 rounded-full bg-(--secondary-main)" />
                  <span
                    className="text-sm font-bold text-(--ink-60) uppercase tracking-wider"
                    style={{ fontFamily: "'Sora', sans-serif" }}
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
