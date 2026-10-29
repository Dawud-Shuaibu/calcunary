import { useMenu } from "../../hooks/useMenu";
import { Cancel, Link } from "../../assets/svgs";
import "../../assets/css/about.css";

const About = () => {
  const [, { isAboutOpen, setIsAboutOpen }] = useMenu();
  const closeAbout = () => setIsAboutOpen(false);

  const reportIssueLink =
    "https://github.com/Dawud-Shuaibu/calculator/issues/new";

  const contributionLink =
    "https://github.com/Dawud-Shuaibu/calculator/blob/main/README.md";

  const aboutLinks = [
    {
      id: 1,
      title: reportIssueLink,
      anchorLink: reportIssueLink,
      innerText: "Report Issue",
    },
    {
      id: 2,
      title: contributionLink,
      anchorLink: contributionLink,
      innerText: "Contribute",
    },
  ];

  return (
    <>
      <div
        className="dimmer"
        style={{ display: isAboutOpen ? "block" : "none" }}
      ></div>

      <div
        className="about-box"
        style={{ display: isAboutOpen ? "flex" : "none" }}
        onClick={closeAbout}
      >
        <div
          style={{ display: isAboutOpen ? "block" : "none" }}
          className="about"
        >
          <button
            className="close-about-btn"
            title="Close"
            onClick={closeAbout}
          >
            <Cancel />
          </button>

          <h3 className="about-header">About</h3>

          <ul className="links-list">
            {aboutLinks.map((link) => (
              <li key={link.id} title={link.title}>
                <a href={link.anchorLink} target="_blank">
                  <Link />
                  {link.innerText}
                </a>
              </li>
            ))}
          </ul>

          <div className="about-footer">
            <p>Calcunary 3.0.0</p>
            <p>
              &copy; 2026{" "}
              <a
                href="https://dawud-dev.netlify.app"
                target="_blank"
                title="https://dawud-dev.netlify.app"
              >
                Dawud Shuaibu
              </a>
              . All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
