// ProductionTimeline.tsx
import Timeline from "@mui/lab/Timeline";
import TimelineCard from "./ui/TimelineCard";
import { useLanguage } from "../i18n/LanguageProvider";
import { TIMELINE_DATA } from "../data/dictionary";



export default function ProductionTimeline() {
  const { t } = useLanguage();

  return (
    <Timeline position="alternate">
      {TIMELINE_DATA.map((item) => (
        <TimelineCard
          key={item.id}
          id={item.id}
          oppositeLabel={t(item.opposite)}
          title={t(item.title)}
          description={t(item.description)}
          timeframe={t(item.timeframe)}
          img_link={item.img_link}
        />
      ))}
    </Timeline>
  );
}
