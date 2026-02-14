import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Vidimg from "./vidimg";
import { Box } from "@mui/material";

type TimelineCardProps = {
  id: number;
  oppositeLabel: string;
  title: string;
  description: string;
  timeframe: string;
  img_link: string;
  isLast?: boolean;
};

export default function TimelineCard({
  id,
  oppositeLabel,
  title,
  description,
  timeframe,
  img_link,
  isLast = false,
}: TimelineCardProps) {
  const isVideo = img_link.includes(".mp4") || img_link.includes("video");

  return (
    <TimelineItem
      sx={{
        // Prevent layout issues
        width: "100%",
        minWidth: 0,
        alignItems: "stretch",

        // Remove default gutter pseudo element
        "&::before": { 
          flex: 0, 
          padding: 0,
          content: { xs: '""', sm: "none" },
        },

        // Stack vertically on mobile, horizontal on desktop
        flexDirection: { xs: "column", sm: "row" },
        
        // Better spacing
        mb: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {/* Timeline Label (Phase name & timeframe) */}
      <TimelineOppositeContent
        sx={{
          width: "100%",
          minWidth: 0,
          flex: { xs: "0 0 auto", sm: 0.3, md: 0.26 },
          px: { xs: 0, sm: 1.5, md: 2 },
          mb: { xs: 1.5, sm: 0 },
          mt: { xs: 0, sm: 0.5 },
          textAlign: { xs: "left", sm: "right" },
          color: "rgba(13,27,42,0.72)",
          
          // Ensure text doesn't overflow
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            fontWeight: 900,
            color: "var(--ink)",
            fontSize: { xs: 16, sm: 14, md: 15 },
            lineHeight: 1.3,
            mb: 0.5,
            // Prevent text overflow
            wordBreak: "break-word",
          }}
        >
          {oppositeLabel}
        </Box>
        <Box
          sx={{
            fontSize: { xs: 12, sm: 11, md: 13 },
            lineHeight: 1.4,
            wordBreak: "break-word",
          }}
        >
          {timeframe}
        </Box>
      </TimelineOppositeContent>

      {/* Timeline Dot & Connector */}
      <TimelineSeparator
        sx={{
          // Horizontal on mobile, vertical on desktop
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          justifyContent: { xs: "flex-start", sm: "center" },
          px: 0,
          mb: { xs: 1.5, sm: 0 },
          minHeight: { xs: "auto", sm: 100 },
        }}
      >
        <TimelineDot
          sx={{
            bgcolor: "var(--ink)",
            boxShadow: "0 10px 25px rgba(13,27,42,0.22)",
            width: { xs: 12, sm: 14, md: 16 },
            height: { xs: 12, sm: 14, md: 16 },
            m: 0,
          }}
        />
        {!isLast && (
          <TimelineConnector
            sx={{
              bgcolor: "rgba(13,27,42,0.22)",
              // Horizontal line on mobile, vertical on desktop
              width: { xs: 40, sm: 2 },
              height: { xs: 2, sm: "100%" },
              minHeight: { xs: 2, sm: 60 },
              my: { xs: 0, sm: 1 },
              mx: { xs: 1.5, sm: 0 },
              flexGrow: { xs: 0, sm: 1 },
            }}
          />
        )}
      </TimelineSeparator>

      {/* Timeline Card Content */}
      <TimelineContent
        sx={{
          width: "100%",
          minWidth: 0,
          px: { xs: 0, sm: 1.5, md: 2 },
          py: { xs: 0, sm: 1, md: 2 },
          flex: { xs: "1 1 auto", sm: 1 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            minWidth: 0,
            overflow: "hidden",
            borderRadius: "16px", // rounded-2xl = 16px
            border: "1px solid rgba(13,27,42,0.14)",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(10px)",
            boxShadow: {
              xs: "0 8px 24px rgba(13,27,42,0.1)",
              sm: "0 12px 32px rgba(13,27,42,0.12)",
              md: "0 18px 45px rgba(13,27,42,0.14)",
            },
            transition: "all 0.3s ease",
            
            // Subtle hover effect
            "&:hover": {
              transform: { sm: "translateY(-4px)" },
              boxShadow: {
                xs: "0 8px 24px rgba(13,27,42,0.1)",
                sm: "0 16px 40px rgba(13,27,42,0.18)",
                md: "0 24px 56px rgba(13,27,42,0.2)",
              },
            },
          }}
        >
          {/* Header strip */}
          <Box
            sx={{
              padding: { xs: "12px 14px", sm: "14px 16px", md: "16px 18px" },
              background: "linear-gradient(90deg, var(--ink), rgba(13,27,42,0.85))",
              color: "var(--background-paper)",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: 10, sm: 11, md: 12 },
                fontWeight: 900,
                opacity: 0.9,
                mb: 0.25,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {`Phase ${id}`}
            </Box>
            <Box
              sx={{
                fontSize: { xs: 17, sm: 18, md: 20 },
                fontWeight: 900,
                lineHeight: 1.15,
                wordBreak: "break-word",
              }}
            >
              {title}
            </Box>
          </Box>

          {/* Body */}
          <Box
            sx={{
              padding: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            <Box
              component="p"
              sx={{
                margin: 0,
                fontSize: { xs: 13, sm: 13.5, md: 14 },
                lineHeight: { xs: 1.6, sm: 1.65, md: 1.7 },
                color: "rgba(13,27,42,0.78)",
                mb: { xs: 2, sm: 2.5, md: 3 },
                wordBreak: "break-word",
              }}
            >
              {description}
            </Box>

            {/* Media container */}
            <Box
              sx={{
                borderRadius: "16px", // rounded-2xl = 16px
                overflow: "hidden",
                border: "1px solid rgba(13,27,42,0.14)",
                background: "rgba(255,255,255,0.5)",
                
                // Ensure media is responsive
                position: "relative",
                width: "100%",
                
                // Prevent layout shift
                "& img, & video": {
                  display: "block",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                },
              }}
            >
              <Vidimg source={img_link} isVideo={isVideo} title={title} />
            </Box>
          </Box>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}