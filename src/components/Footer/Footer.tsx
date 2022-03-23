import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-repo">
        <Link
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          target={"_blank"}
          href="https://github.com/jd-apprentice/waifuland-api"
        >
          <span style={{ marginRight: 5 }}>
            <GitHubIcon sx={{ fontSize: 50 }} />
          </span>
          <span
            style={{
              marginRight: 10,
              marginLeft: 5,
              color: "white",
            }}
          >
            Repositorio
          </span>
        </Link>
      </div>
      <span>
        Desarrollado por
        <Link
          style={{ color: "white", marginLeft: 10, textDecoration: "none" }}
          target={"_blank"}
          href="https://twitter.com/jd_apprentice"
        >
          jd_apprentice
        </Link>
      </span>
    </div>
  );
};

export default Footer;
