export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project" />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
  );
};