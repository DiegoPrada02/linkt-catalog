import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useLanguage, type Translatable } from "../../i18n/LanguageProvider";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

type FaqCardProps = {
  Question: Translatable;
  Answer: Translatable;
};

export default function FaqCard({ Question, Answer }: FaqCardProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      disableGutters
      elevation={0}
      sx={{
        borderRadius: "16px !important",
        border: "1px solid rgba(13, 27, 42, 0.12)",
        backgroundColor: "white",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "rgba(13, 27, 42, 0.18)",
          boxShadow: "0 4px 20px rgba(13, 27, 42, 0.08)",
          transform: "translateY(-2px)",
        },
        "&:before": {
          display: "none", // Remove default MUI divider
        },
        "&.Mui-expanded": {
          margin: "0 !important",
          borderColor: "rgba(13, 27, 42, 0.20)",
          boxShadow: "0 8px 30px rgba(13, 27, 42, 0.12)",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              backgroundColor: expanded ? "var(--ink)" : "rgba(13, 27, 42, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              color: expanded ? "var(--background-paper)" : "var(--ink)",
            }}
          >
            {expanded ? (
              <Minus size={18} strokeWidth={2.5} />
            ) : (
              <Plus size={18} strokeWidth={2.5} />
            )}
          </div>
        }
        sx={{
          padding: "20px 24px",
          minHeight: "72px !important",
          "& .MuiAccordionSummary-content": {
            margin: "0 !important",
            paddingRight: "16px",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            transition: "transform 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "rgba(13, 27, 42, 0.02)",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "16px",
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
            fontFamily: "'Sora', 'system-ui', sans-serif",
          }}
        >
          {t(Question)}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          padding: "0 24px 24px 24px",
          borderTop: "1px solid rgba(13, 27, 42, 0.08)",
          backgroundColor: "rgba(13, 27, 42, 0.01)",
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "var(--secondary-main)",
            borderRadius: "2px",
            marginBottom: "16px",
            marginTop: "20px",
          }}
        />

        <Typography
          sx={{
            color: "rgba(13, 27, 42, 0.80)",
            lineHeight: 1.7,
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {t(Answer)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}