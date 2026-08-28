import { portfolio } from "@/data/portfolio";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section section-dark">

      <div className="container-main">

        <div className="section-heading">

          <div>
            <p className="section-label">OUR WORK</p>

            <h2>
              Projects built for
              <span> real businesses.</span>
            </h2>
          </div>

          <p>
            A selection of digital products and business solutions we
            can build for different industries.
          </p>

        </div>

        <div className="portfolio-grid">

          {portfolio.map((project, index) => (
            <div className="portfolio-card" key={project.title}>

              <div className="portfolio-image">

                <div className="portfolio-pattern">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="portfolio-window">

                  <div className="portfolio-window-top">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="portfolio-bars">
                    <span />
                    <span />
                    <span />
                  </div>

                </div>

              </div>

              <div className="p-6">

                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-xs text-gray-600">
                    {project.technology}
                  </span>

                  <div className="portfolio-arrow">
                    <FaArrowUpRightFromSquare />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}