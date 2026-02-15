// src/components/NavBar.tsx
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";

import { pages } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function ResponsiveAppBar() {
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const textColor = "var(--background-default)";

  return (
    <AppBar 
      position="static" 
      elevation={0}   
      sx={{
        background: "linear-gradient(135deg, var(--ink) 0%, rgba(1,38,86,0.95) 50%, var(--ink) 100%)",
        color: textColor,
        borderBottom: "1px solid rgba(224,225,221,0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(13,27,42,0.15)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 76 },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* LEFT: logo area + mobile hamburger */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            {/* MOBILE: hamburger */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", mr: 1 }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ 
                  color: textColor,
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  border: "1px solid rgba(224,225,221,0.2)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "scale(1.05)",
                  }
                }}
              >
                {anchorElNav ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

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
                    borderRadius: "16px",
                    backgroundColor: "var(--background-default)",
                    border: "1px solid rgba(13,27,42,0.08)",
                    boxShadow: "0 8px 32px rgba(13,27,42,0.12)",
                    overflow: "hidden",
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
                      sx={{
                        px: 2,
                        py: 1.5,
                        borderLeft: active ? "3px solid var(--ink)" : "3px solid transparent",
                        backgroundColor: active ? "rgba(13,27,42,0.04)" : "transparent",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: "rgba(13,27,42,0.06)",
                        }
                      }}
                    >
                      <Button
                        component={Link}
                        to={p.path}
                        sx={{
                          width: "100%",
                          justifyContent: "flex-start",
                          textTransform: "none",
                          fontWeight: active ? 900 : 700,
                          fontSize: "15px",
                          color: active ? "var(--ink)" : "var(--ink-72)",
                          padding: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "var(--ink)",
                          }
                        }}
                      >
                        {t(p.label)}
                      </Button>
                    </MenuItem>
                  );
                })}

                {/* Mobile language toggle */}
                <Box sx={{ px: 2, py: 2, mt: 1, borderTop: "1px solid rgba(13,27,42,0.08)" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontWeight: 700, 
                        color: "var(--ink-72)",
                        fontSize: "14px",
                      }}
                    >
                      {lang === "en" ? "Language" : "Idioma"}
                    </Typography>

                    <Tooltip title={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}>
                      <IconButton
                        onClick={toggleLang}
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          border: "1px solid rgba(13,27,42,0.12)",
                          backgroundColor: "white",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(13,27,42,0.04)",
                            transform: "scale(1.05)",
                          }
                        }}
                        aria-label="Toggle language"
                      >
                        <span style={{ fontSize: 20, lineHeight: 1 }}>
                          {lang === "en" ? "🇺🇸" : "🇪🇸"}
                        </span>
                      </IconButton>
                    </Tooltip>
                  </Box>
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
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  overflow: "hidden",
                  mr: 1.5,
                }}
              >
                <img
                  src="/Logo.png"
                  alt="Link'T Systems logo"
                  style={{ height: 40, width: "auto", display: "block" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: ".08em",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: textColor,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "'Sora', 'system-ui', sans-serif",
                }}
              >
                LINK&apos;T SYSTEMS
              </Typography>
            </Box>
          </Box>

          {/* CENTER: desktop tabs */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 0.5,
              minWidth: 0,
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
                  sx={{
                    color: textColor,
                    textTransform: "none",
                    fontWeight: active ? 900 : 700,
                    letterSpacing: ".04em",
                    fontSize: "15px",
                    px: 2.5,
                    py: 1.5,
                    borderRadius: "12px",
                    position: "relative",
                    backgroundColor: active ? "rgba(255,255,255,0.1)" : "transparent",
                    transition: "all 0.3s ease",
                    fontFamily: "'Inter', sans-serif",

                    // Hover background
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transform: "translateY(-2px)",
                    },

                    // Active indicator dot
                    "&::before": active ? {
                      content: '""',
                      position: "absolute",
                      top: 8,
                      right: 8,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "var(--secondary-main)",
                      boxShadow: "0 0 8px var(--secondary-main)",
                    } : {},

                    // Bottom underline
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 16,
                      right: 16,
                      bottom: 6,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: textColor,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                      opacity: 0.8,
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {t(p.label)}
                </Button>
              );
            })}
          </Box>

          {/* RIGHT: desktop language toggle */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
              ml: 1,
              minWidth: 0,
            }}
          >
            <Tooltip title={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}>
              <IconButton
                onClick={toggleLang}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  border: "1px solid rgba(224,225,221,0.25)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: textColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "scale(1.05)",
                    borderColor: "rgba(224,225,221,0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  }
                }}
                aria-label="Toggle language"
              >
                <span style={{ fontSize: 22, lineHeight: 1 }}>
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