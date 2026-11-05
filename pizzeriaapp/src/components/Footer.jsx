function Footer() {
  const socials = [
    {
      name: "Facebook",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg",
      url: "https://facebook.com",
    },
    {
      name: "X",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
      url: "https://x.com",
    },
    {
      name: "LinkedIn",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
      url: "https://linkedin.com/in",
    },
  ];

  return (
    <footer className="border-top" style={{ color: "gold" }}>
      <div className="d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between p-2 text-center ">
        <span>Copyrights &copy; 2017 Pizzeria. All rights reserved</span>
        <span>
          Developed by{" "}
          <a
            href="https://dev-shivam.in"
            className="link-underline-warning link-underline-opacity-0 link-underline-opacity-75-hover"
            style={{ color: "gold" }}
          >
            Shivam
          </a>
        </span>
      </div>
      <div className="d-flex items-center justify-content-around justify-content-sm-end gap-4 bg-dark p-2 w-full">
        {socials.map((item, index) => (
          <a href={item.url} className="d-flex items-center gap-1 text-light text-decoration-none" key={index}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "1rem",
                filter: item.name === "X" ? "invert(1)" : "",
              }}
            /> {item.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
