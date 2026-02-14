// ProductionTimeline.tsx
import Timeline from "@mui/lab/Timeline";
import TimelineCard from "./ui/TimelineCard";
import { useLanguage } from "../i18n/LanguageProvider";
import { TIMELINE_DATA } from "../data/dictionary";

export default function ProductionTimeline() {
  const { t } = useLanguage();
  
  // Helper function to detect if source is a video based on file extension
  const isVideoSource = (src: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
  };
  
  return (
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
        />
      ))}
    </Timeline>
  );
}