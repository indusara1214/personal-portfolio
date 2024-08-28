import meter1 from "../assets/img/ucsc.png";
import meter2 from "../assets/img/ssc.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="skill-bx wow zoomIn">
                        <h2>Education</h2>
                        <p>Currently I'm an Undergraduate in University of Colombo School of Computing.<br></br>I did my O/L & A/L s in Sri Sumangala College Panadura.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Undergraduate In UCSC</h5>
                                <span className="tagline">Current</span>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Sri Sumangala College</h5>
                                <span className="tagline">2006-2019</span>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
