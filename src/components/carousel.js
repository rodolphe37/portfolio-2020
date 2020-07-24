import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="/assets/images/P1090749-1.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="/assets/images/arbre et rzyon de soleil.png" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="/assets/images/P1090775-1.jpeg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>{`
      .my-4 {
        box-shadow: 1px 1px 19px black;
        border: 2px solid purple;
        border-radius: 5px;
      }
      `}</style>
    </div>
  )
}

export default Carousel;
