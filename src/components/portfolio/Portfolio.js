import { useEffect, useState } from "react";
import { PortfolioButton } from "../portfolioButton/PortfolioButton";
import "./portfolio.scss";
import { schools, jobs, tech, skills } from "../Data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("skills");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "schools",
      title: "Schools",
    },
    {
      id: "jobs",
      title: "Jobs",
    },
    {
      id: "technology",
      title: "Technology",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "skills":
        setData(skills);
        break;
        case "schools":
        setData(schools);
        break;
        case "jobs":
        setData(jobs);
        break;
        case "technology":
        setData(tech);
        break;
        default:
          setData(skills);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioButton
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  );
};
