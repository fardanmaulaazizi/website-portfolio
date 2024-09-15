import { useState, useEffect } from "react";

const ProjectItem = (props) => {
  const {
    title,
    children,
    img,
    stack,
    previewLink = null,
    downloadLink = null,
    githubLink = null,
  } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to next or previous slide
  const moveSlide = (direction) => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide + direction + img.length) % img.length;
    });
  };

  // Automatically change img every 5 seconds

  return (
    <div className="mb-5 overflow-hidden rounded-lg bg-slate-100 md:basis-[calc(50%-0.5rem)] dark:bg-slate-600">
      {/* Slider */}
      <div
        id={title}
        className="carousel slide dark:text-white"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {img.map((image, index) => (
            <div
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
              data-bs-interval="10000"
              key={image}
            >
              <img
                src={image}
                className="d-block w-full"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${title}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${title}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="mb-3 text-xl font-bold dark:text-white">{title}</h3>
        <div className="mb-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <img
              key={item}
              src={`https://img.shields.io/badge/${item}-7E7E7E?style=for-the-badge&logo=${item}&logoColor=white&color=7E7E7E`}
              alt={item}
            />
          ))}
        </div>
        <p className="mb-3 dark:text-white">{children}</p>
        <div className="mb-3 flex gap-2">
          {[
            ["Preview", previewLink],
            ["Download", downloadLink],
            ["Github", githubLink],
          ].map(
            ([item, link]) =>
              link && (
                <a
                  key={item}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-emerald-600 bg-white px-3 py-2 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  {item}
                </a>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
