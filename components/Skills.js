import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "./assets/logos/80.jpg";
import meter2 from "./assets/logos/90.jpg";
import meter3 from "./assets/logos/95.jpg";

function Skills() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section
      id="skills"
      style={{
        background: "linear-gradient(to right, #0f0f2d, #1a1a40)",
        padding: "100px 0",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          width: "70%",
          margin: "auto",
          background: "#151515",
          padding: "60px",
          borderRadius: "40px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 0 40px rgba(0,0,0,0.5)"
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>Skills</h2>

        <p style={{ color: "#ccc", marginBottom: "40px" }}>
          Lorem Ipsum is simply dummy text of the printing industry.
        </p>

        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >

          <div style={{ textAlign: "center" }}>
            <img src={meter1} style={{ width: "100px" }} alt="" />
            <h5 style={{ marginTop: "15px" }}>Web Development</h5>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src={meter2} style={{ width: "100px" }} alt="" />
            <h5 style={{ marginTop: "15px" }}>UI/UX Design</h5>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src={meter3} style={{ width: "100px" }} alt="" />
            <h5 style={{ marginTop: "15px" }}>Cyber Security</h5>
          </div>

        </Carousel>
      </div>
    </section>
  );
}

export default Skills;