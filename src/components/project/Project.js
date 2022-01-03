import "./project.scss";

export const Project = () => { 
  const slider = [
    {
      id: 1,
      title: "Green Stream",
      icon: "./asset/GreenIcon.png",
      desc: "Green Stream. add movies to your movie queue. Never forget what you're going to watch next. Find your new favorite movie",
      img: "asset/GreenStream.png"
  },
  {
      id:2,
      title: "Star Wars Fans",
      icon: "./asset/StarwarsIcon.png",
      desc: "Star Wars Fan app that helps you track stats of your favorite Stars Characters",
      img: "asset/StarWars.png"
  },
  {
      id:3,
      title: "Fitness Tracker",
      icon: "asset/fitnessIcon.png",
      desc: "Track Fitness! this app helps you reach your potenical, by logging into the and tracking your daily cardio runs and weight workouts" ,
      img: "asset/FitnessTracker.png"
  },
  ];
  return (
    <div className="project" id="project">
      <div className="slider">
        {slider.map(d=>( 
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2> {d.title} </h2>
                <p>
                  {d.desc}
                </p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
          
        </div>))} 
      </div>
      <img src="asset/downArrow.png" className="arrow left" alt=""/>
      <img src="asset/downArrow.png" className="arrow right" alt="" />
    </div>
  );
};
