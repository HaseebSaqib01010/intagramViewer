import React from "react";
import { Box, IconButton, Typography, Grid, Button } from "@mui/material";

// Import Material-UI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RedditIcon from "@mui/icons-material/Reddit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
import MagicButton from "./MagicButton";
import { useRouter } from 'next/navigation'

const Footer = () => {
  const shareCount = "5.9k";
  const router = useRouter()

  return (
    <footer className="w-full pt-20 pb-10 text-white relative" id="contact">
      {/* Footer Content */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        p={2}
      >
        {/* Copyright */}
        <Typography variant="body2" color="white">
          Copyright © 2024 Instagram Viewer
        </Typography>

        {/* Links */}
        <Box display="flex" gap={2}>
          <MagicButton title="Privacy Policy" handleClick={() => router.push('/privacyPolicy')} />
          <MagicButton title="Story Viewer" handleClick={() => router.push('/')} />
        </Box>
      </Box>

      {/* Share Buttons */}
      <Box
        position="fixed"
        left={0}
        top="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Typography variant="caption" color="grey.300">
          {shareCount}
          <div>Shares</div>
        </Typography>

        <Box display="flex" flexDirection="column" gap={1}>
          <IconButton
            sx={{ bgcolor: "#3b5998", color: "white" }}
            onClick={() => window.open("https://facebook.com")}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#000000", color: "white" }}
            onClick={() => window.open("https://twitter.com/intent/tweet")}
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#0077b5", color: "white" }}
            onClick={() => window.open("https://linkedin.com")}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#E60023", color: "white" }}
            onClick={() => window.open("https://pinterest.com")}
          >
            <PinterestIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#FF4500", color: "white" }}
            onClick={() => window.open("https://reddit.com")}
          >
            <RedditIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#25D366", color: "white" }}
            onClick={() => window.open("https://wa.me")}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "gray", color: "white" }}
            onClick={() =>
              (window.location.href = "mailto:?subject=Check this out")
            }
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#0084ff", color: "white" }}
            onClick={() => window.open("https://messenger.com")}
          >
            <MessageIcon />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "gray", color: "white" }}
            onClick={() => alert("Share clicked")}
          >
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
