import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";

type Page = { label: string; path: string };

const pages: Page[] = [
  { label: "Home", path: "/" },
  { label: "Catalog", path: "/catalog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Distribution", path: "/distribution" },
  { label: "Contact", path: "/contact" },
];

function ResponsiveAppBar() {
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorElNav);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "var(--ink)",
        borderBottom: "1px solid var(--primary-light)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="relative min-h-[72px]">
          {/* Left: Logo + Company */}
          <Box className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <img
                src="/Logo-white.png"
                alt="Linkt Systems LLC Logo"
                className="h-12 w-auto md:h-14"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <Typography
                  variant="subtitle1"
                  sx={{ color: "var(--background-paper)", fontWeight: 800 }}
                  className="tracking-[0.18em] uppercase"
                >
                  LINK&apos;T SYSTEMS
                </Typography>
                <span className="text-xs text-white/70 tracking-widest">LLC</span>
              </div>
            </Link>
          </Box>

          {/* Center: Desktop tabs */}
          <Box className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
            {pages.map((p) => (
              <Link key={p.path} to={p.path} className="no-underline">
                <Button
                  className={[
                    "relative rounded-none bg-transparent px-0 py-2 text-sm font-semibold tracking-widest",
                    "text-white/90 hover:text-white",
                    // underline hover + active
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200",
                    "hover:after:scale-x-100",
                    isActive(p.path) ? "text-white after:scale-x-100" : "",
                  ].join(" ")}
                  sx={{
                    color: "inherit",
                    textTransform: "none",
                    minWidth: 0,
                  }}
                >
                  {p.label.toUpperCase()}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Right: Mobile menu button */}
          <Box className="ml-auto flex items-center md:hidden">
            <IconButton
              onClick={handleOpenNavMenu}
              className="rounded-full text-white hover:bg-white/10"
              aria-label="open navigation menu"
              aria-controls={menuOpen ? "nav-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
            >
              <MenuIcon className="stroke-white"/>
            </IconButton>

            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              open={menuOpen}
              onClose={handleCloseNavMenu}
              // IMPORTANT: without this, MUI keeps the Menu mounted and can behave oddly in some setups
              keepMounted
              // helps positioning on mobile
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  bgcolor: "var(--ink)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "14px",
                  mt: 1,
                  minWidth: 240,
                  overflow: "hidden",
                },
              }}
            >
              {pages.map((p) => (
                <MenuItem
                  key={p.path}
                  onClick={handleCloseNavMenu}
                  className="!px-2 !py-1"
                >
                  <Link
                    to={p.path}
                    className={[
                      "w-full rounded-lg px-3 py-2 text-sm font-semibold tracking-widest no-underline",
                      "text-white/90 hover:text-white hover:bg-white/10",
                      // underline hover + active
                      "relative",
                      "after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px] after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
                      "hover:after:scale-x-100",
                      isActive(p.path) ? "text-white after:scale-x-100 bg-white/10" : "",
                    ].join(" ")}
                  >
                    {p.label.toUpperCase()}
                  </Link>
                </MenuItem>
              ))}
            </Menu>

            {/* small brand text on xs */}
            <Typography
              variant="h6"
              noWrap
              sx={{ color: "var(--background-paper)", fontWeight: 800 }}
              className="ml-3 flex sm:hidden tracking-[0.22em]"
            >
              LINK&apos;T
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
