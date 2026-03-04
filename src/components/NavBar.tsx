// src/components/NavBar.tsx
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { pages } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

// ── shared token ──────────────────────────────────────────────────────────────
const TEXT = "var(--background-paper)"; // #e0e1dd — light parchment
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TEXT_DIM = "rgba(224,225,221,0.55)";
const TEXT_MID = "rgba(224,225,221,0.80)";
const HOVER_BG = "rgba(255,255,255,0.08)";
const ACTIVE_BG = "rgba(255,255,255,0.12)";
const BORDER = "rgba(224,225,221,0.18)";
const FONT = "'Funnel Sans', system-ui, sans-serif";

export default function ResponsiveAppBar() {
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "var(--ink)",
        color: TEXT,
        borderBottom: `1px solid ${BORDER}`,
        boxShadow: "0 4px 24px var(--ink-18)",
        overflow: "hidden", // clip the decorative shapes
        fontFamily: FONT,
      }}
    >
      {/* ── Decorative shapes (same language as .banner) ──────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* Large skewed slab — right side */}
        <Box
          sx={{
            position: "absolute",
            right: "-6%",
            top: "-120%",
            width: "28%",
            height: "340%",
            background:
              "linear-gradient(135deg, rgba(199,221,247,0.06), rgba(219,234,254,0.03))",
            transform: "rotate(-12deg)",
            borderRadius: "18px",
          }}
        />
        {/* Thin skewed streak */}
        <Box
          sx={{
            position: "absolute",
            right: "26%",
            top: 0,
            width: "6px",
            height: "100%",
            background: "rgba(224,225,221,0.07)",
            transform: "skewX(-18deg)",
            borderRadius: "999px",
          }}
        />
        {/* Second faint streak */}
        <Box
          sx={{
            position: "absolute",
            right: "28%",
            top: 0,
            width: "2px",
            height: "100%",
            background: "rgba(224,225,221,0.04)",
            transform: "skewX(-18deg)",
            borderRadius: "999px",
          }}
        />
        {/* Soft left glow */}
        <Box
          sx={{
            position: "absolute",
            left: "-60px",
            top: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(163,207,255,0.06), transparent 70%)",
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 72 },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* ── LEFT: Logo + mobile hamburger ──────────────────────────────── */}
          <Box
            sx={{ flex: 1, display: "flex", alignItems: "center", minWidth: 0 }}
          >
            {/* MOBILE hamburger */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                mr: 1,
              }}
            >
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: TEXT,
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  border: `1px solid ${BORDER}`,
                  backgroundColor: HOVER_BG,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: ACTIVE_BG,
                    transform: "scale(1.05)",
                  },
                }}
              >
                {anchorElNav ? (
                  <CloseIcon fontSize="small" />
                ) : (
                  <MenuIcon fontSize="small" />
                )}
              </IconButton>

              {/* Mobile dropdown */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 240,
                    borderRadius: "18px",
                    backgroundColor: "var(--background-default)",
                    border: "1px solid var(--ink-12)",
                    boxShadow: "0 12px 40px var(--ink-14)",
                    overflow: "hidden",
                    fontFamily: FONT,
                  },
                }}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((p) => {
                  const active = isActive(p.path);
                  return (
                    <MenuItem
                      key={p.path}
                      onClick={handleCloseNavMenu}
                      disableRipple
                      sx={{
                        px: 0,
                        py: 0,
                        borderLeft: active
                          ? "3px solid var(--ink)"
                          : "3px solid transparent",
                        backgroundColor: active
                          ? "rgba(13,27,42,0.05)"
                          : "transparent",
                        transition: "background-color 0.2s ease",
                        "&:hover": { backgroundColor: "rgba(13,27,42,0.07)" },
                      }}
                    >
                      <Button
                        component={Link}
                        to={p.path}
                        sx={{
                          width: "100%",
                          justifyContent: "flex-start",
                          textTransform: "none",
                          fontWeight: active ? 800 : 600,
                          fontSize: "15px",
                          fontFamily: FONT,
                          letterSpacing: "0.02em",
                          color: active ? "var(--ink)" : "var(--ink-72)",
                          px: 2.5,
                          py: 1.5,
                          borderRadius: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "var(--ink)",
                          },
                        }}
                      >
                        {t(p.label)}
                      </Button>
                    </MenuItem>
                  );
                })}

                {/* Mobile language row */}
                <Box
                  sx={{
                    px: 2.5,
                    py: 1.75,
                    borderTop: "1px solid var(--ink-12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "var(--ink-60)",
                      fontFamily: FONT,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {lang === "en" ? "Language" : "Idioma"}
                  </Typography>
                  <Tooltip
                    title={
                      lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"
                    }
                  >
                    <IconButton
                      onClick={toggleLang}
                      aria-label="Toggle language"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "10px",
                        border: "1px solid var(--ink-12)",
                        backgroundColor: "white",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "var(--ink-12)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <span style={{ fontSize: 18, lineHeight: 1 }}>
                        {lang === "en" ? "🇺🇸" : "🇪🇸"}
                      </span>
                    </IconButton>
                  </Tooltip>
                </Box>
              </Menu>
            </Box>

            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                minWidth: 0,
                gap: 1.5,
                transition: "opacity 0.2s ease",
                "&:hover": { opacity: 0.85 },
              }}
            >
              {/* Logo badge */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 46,
                  height: 46,
                  borderRadius: "13px",
                  backgroundColor: "rgba(255,255,255,0.09)",
                  border: `1px solid ${BORDER}`,
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/Logo.png"
                  alt="Link'T Systems logo"
                  style={{ height: 34, width: "auto", display: "block" }}
                />
              </Box>

              {/* Wordmark */}
              <Typography
                sx={{
                  fontFamily: FONT,
                  fontWeight: 900,
                  fontSize: { xs: "15px", sm: "17px" },
                  letterSpacing: "0.10em",
                  color: TEXT,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textTransform: "uppercase",
                }}
              >
                Link&apos;T Systems
              </Typography>
            </Box>
          </Box>

          {/* ── CENTER: Desktop nav tabs ────────────────────────────────────── */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {pages.map((p) => {
              const active = isActive(p.path);
              return (
                <Button
                  key={p.path}
                  component={Link}
                  to={p.path}
                  onClick={handleCloseNavMenu}
                  disableRipple
                  sx={{
                    color: active ? TEXT : TEXT_MID,
                    textTransform: "none",
                    fontWeight: active ? 800 : 600,
                    letterSpacing: "0.04em",
                    fontSize: "14.5px",
                    fontFamily: FONT,
                    px: 2.25,
                    py: 1.25,
                    borderRadius: "12px",
                    position: "relative",
                    backgroundColor: active ? ACTIVE_BG : "transparent",
                    border: `1px solid ${active ? BORDER : "transparent"}`,
                    transition: "all 0.25s ease",

                    "&:hover": {
                      backgroundColor: HOVER_BG,
                      color: TEXT,
                      transform: "translateY(-1px)",
                      border: `1px solid ${BORDER}`,
                    },

                    // Active: skewed bottom-bar (matches banner .b streak language)
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 6,
                      left: "50%",
                      transform: active
                        ? "translateX(-50%) scaleX(1) skewX(-8deg)"
                        : "translateX(-50%) scaleX(0) skewX(-8deg)",
                      transformOrigin: "center",
                      width: "60%",
                      height: "2px",
                      borderRadius: "2px",
                      backgroundColor: TEXT,
                      opacity: 0.75,
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1) skewX(-8deg)",
                    },
                  }}
                >
                  {t(p.label)}
                </Button>
              );
            })}
          </Box>

          {/* ── RIGHT: Language toggle ──────────────────────────────────────── */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Tooltip
              title={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
            >
              <IconButton
                onClick={toggleLang}
                aria-label="Toggle language"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  border: `1px solid ${BORDER}`,
                  backgroundColor: HOVER_BG,
                  color: TEXT,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: ACTIVE_BG,
                    transform: "scale(1.06)",
                    borderColor: "rgba(224,225,221,0.35)",
                  },
                  "&:active": { transform: "scale(0.96)" },
                }}
              >
                <span style={{ fontSize: 20, lineHeight: 1 }}>
                  {lang === "en" ? "🇺🇸" : "🇪🇸"}
                </span>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
