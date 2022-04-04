import React from 'react'
import "./style.css"
export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" id='my-carousel'>
    <div className="carousel-item active">
      <img src="./img/carousel.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="./img/carousel.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="./img/carousel.png" className="d-block w-100 " alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>

    </div>
  )
}
