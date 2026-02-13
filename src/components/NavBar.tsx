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
  const bgColor = "var(--ink)";

  return (
    <AppBar position="static" elevation={0}   sx={{
    background: "linear-gradient(to right, var(--ink), rgba(1,38,86,0.85))",
    color: "var(--background-default)",
    borderBottom: "1px solid var(--primary-light)",
    backdropFilter: "blur(8px)",
  }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
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
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", mr: 0.5 }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: textColor }}
              >
                <MenuIcon />
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
                    mt: 1,
                    minWidth: 220,
                    borderRadius: 3,
                    backgroundColor: "var(--background-default)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  },
                }}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((p) => (
                  <MenuItem key={p.path} onClick={handleCloseNavMenu}>
                    <Button
                      component={Link}
                      to={p.path}
                      sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontWeight: 800,
                        color: "var(--ink)",
                      }}
                    >
                      {t(p.label)}
                    </Button>
                  </MenuItem>
                ))}

                {/* Mobile language toggle */}
                <MenuItem disableRipple sx={{ cursor: "default" }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "var(--ink)" }}>
                      {lang === "en" ? "English" : "Español"}
                    </Typography>

                    <Tooltip title={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}>
                      <IconButton
                        onClick={toggleLang}
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 999,
                          border: "1px solid rgba(13,27,42,0.12)",
                          backgroundColor: "rgba(255,255,255,0.8)",
                        }}
                        aria-label="Toggle language"
                      >
                        <span style={{ fontSize: 20, lineHeight: 1 }}>
                          {lang === "en" ? "🇺🇸" : "🇪🇸"}
                        </span>
                      </IconButton>
                    </Tooltip>
                  </Box>
                </MenuItem>
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
              }}
            >
              <img
                src="/Logo.png"
                alt="Link'T Systems logo"
                style={{ height: 48, width: "auto", display: "block" }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  color: textColor,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                LINK&apos;T SYSTEMS
              </Typography>
            </Box>
          </Box>

          {/* CENTER: desktop tabs (true centered because left/right are flex:1) */}
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
                    fontWeight: 800,
                    letterSpacing: ".06em",
                    px: 1.8,
                    py: 1.2,
                    borderRadius: 2,
                    position: "relative",

                    // underline
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 14,
                      right: 14,
                      bottom: 6,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: textColor,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 180ms ease",
                      opacity: 0.92,
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

          {/* RIGHT: desktop language toggle (stays right) */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              ml: 1,
              minWidth: 0,
            }}
          >
            <Tooltip title={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}>
              <IconButton
                onClick={toggleLang}
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  border: "1px solid rgba(224,225,221,0.35)",
                  color: textColor,
                }}
                aria-label="Toggle language"
              >
                <span style={{ fontSize: 20, lineHeight: 1 }}>{lang === "en" ? "🇺🇸" : "🇪🇸"}</span>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
