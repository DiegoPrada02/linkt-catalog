import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActionArea, CardContent, CardMedia, Box, Typography } from "@mui/material";

type CatalogCardProps = {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  image: string;
};

export default function CatalogCard({
  title,
  description,
  href,
  badge,
  image,
}: CatalogCardProps) {
  const Inner = (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: "18px",
        bgcolor: "var(--prussian-blue)",
        border: "1px solid var(--dusk-blue)",
        color: "var(--alabaster-grey)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 30px rgba(13, 27, 42, 0.35)",
          borderColor: "var(--lavender-grey)",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        {/* Image */}
        <CardMedia>
          {image && (
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                height: 180,
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "18px",
                borderTopRightRadius: "18px",
              }}
            />
          )}
        </CardMedia>

        <CardContent sx={{ px: 2.5, py: 2 }}>
          {/* Title */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "var(--alabaster-grey)",
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              mt: 0.5,
              color: "var(--lavender-grey)",
            }}
          >
            {description}
          </Typography>

          {/* Footer */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 14,
              fontWeight: 500,
              color: "var(--alabaster-grey)",
            }}
          >
            <span>View →</span>

            {badge && (
              <Box
                sx={{
                  ml: "auto",
                  px: 1.5,
                  py: 0.5,
                  fontSize: 12,
                  borderRadius: "999px",
                  bgcolor: "var(--ink-black)",
                  border: "1px solid var(--dusk-blue)",
                  color: "var(--lavender-grey)",
                }}
              >
                {badge}
              </Box>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return href ? (
    <Link to={href} style={{ textDecoration: "none", height: "100%" }}>
      {Inner}
    </Link>
  ) : (
    <Box height="100%">{Inner}</Box>
  );
}
