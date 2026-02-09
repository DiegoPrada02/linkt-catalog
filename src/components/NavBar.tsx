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
import { Link } from "react-router-dom";

const pages = ["HOME", "CATALOG", "CONTACT"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "var(--primary-main)",
        borderBottom: "1px solid var(--primary-light)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              bgcolor: "var(--background-paper)",
              borderRadius: "16px",
              p: 0.5,
              m: 2,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}Logo.png`}
              alt="Linkt Systems LLC Logo"
              style={{ height: 64, width: "auto" }}
              className="p-2"
            />
          </Box>

          {/* Desktop brand text */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".25rem",
              color: "var(--background-paper)",
            }}
          >
            LINK&apos;T SYSTEMS
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: "var(--background-paper)" }}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  bgcolor: "var(--primary-main)",
                  color: "var(--background-paper)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={page === "HOME" ? "/" : `/${page.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile brand */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              letterSpacing: ".25rem",
              color: "var(--background-paper)",
            }}
          >
            LINK&apos;T
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={page === "HOME" ? "/" : `/${page.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "var(--background-paper)",
                    "&:hover": {
                      bgcolor: "var(--primary-light)",
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
