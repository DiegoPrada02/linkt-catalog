import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useLanguage, type Translatable } from "../../i18n/LanguageProvider";
import { CornerDownRight } from "lucide-react";

type FaqCardProps = {
  Question: Translatable;
  Answer: Translatable;
};

export default function FaqCard({ Question, Answer }: FaqCardProps) {
  const { t } = useLanguage();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<CornerDownRight />}
        sx={{
          // header styling to match your theme
          borderBottom: "1px solid rgba(13, 27, 42, 0.10)",
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: "rgba(13, 27, 42, 0.75)",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            color: "var(--ink)",
            letterSpacing: "0.01em",
          }}
        >
          {t(Question)}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography
          sx={{
            color: "rgba(13, 27, 42, 0.78)",
            lineHeight: 1.7,
            fontWeight: 600,
          }}
        >
          {t(Answer)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
