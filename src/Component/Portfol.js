import React from 'react'

const Portfol = () => {
  return (
    <div>
      <div className="title">
        <div className="title-behind">PORTFOLIO</div>
        <div className="title-front">MY WORK</div>
      </div>

      <ul class="portfolio-menu">
        <li class="nav-item">
          <button class="nav-link active">All</button>
        </li>
        <li class="nav-item">
          <button class="nav-link ">Desing</button>
        </li>
        <li class="nav-item">
          <button class="nav-link ">Brand</button>
        </li>
        <li class="nav-item">
          <button class="nav-link ">Photos</button>
        </li>
      </ul>
      <div className="bigcontainer">
        <div className="insideof">
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg" alt="" />
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-4.jpg" alt="" />
        </div>
        <div className="insideof">
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-2.jpg" alt="" />
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-7.jpg" alt="" />
        </div>
        <div className="insideof">
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-3.jpg" alt="" />
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-5.jpg" alt="" />
          <img src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfol