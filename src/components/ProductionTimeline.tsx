// ProductionTimeline.tsx
import Timeline from "@mui/lab/Timeline";
import TimelineCard from "./ui/TimelineCard";
import { useLanguage } from "../i18n/LanguageProvider";
import { TIMELINE_DATA } from "../data/dictionary";

export default function ProductionTimeline() {
  const { t } = useLanguage();

  return (
    <Timeline 
      position="alternate"
      sx={{
        // Remove default padding for better mobile experience
        px: { xs: 0, sm: 2, md: 3 },
        py: { xs: 1, sm: 2 },
        
        // Ensure timeline doesn't overflow on small screens
        maxWidth: "100%",
        overflow: "hidden",
        
        // Better spacing between items
        "& .MuiTimelineItem-root": {
          minHeight: { xs: "auto", sm: 200 },
          mb: { xs: 2, sm: 3, md: 4 },
        },
        
        // On mobile, all items align to the right (no alternating)
        "@media (max-width: 600px)": {
          "& .MuiTimelineItem-root": {
            flexDirection: "row !important",
          },
          "& .MuiTimelineOppositeContent-root": {
            flex: "0 !important",
            paddingLeft: "0 !important",
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
        />
      ))}
    </Timeline>
  );
}