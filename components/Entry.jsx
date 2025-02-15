import PropTypes from 'prop-types';
import marker from "/marker.png";

// fix our component.--> challenge.

export default function Item(props) {
  console.log(props);
  // console.log(props);
  return (
    <>
      <article className="parent">
        <div className="left">
          <img
            src={props.img.src}
              alt={props.img.alt}
          />
        </div>
        <div className="right">
          <div className="right-sub-parent">
            <div className="left-img">
              <img src={marker} alt="marker-goes here" />
            </div>
            <div className="right-content">
              <p className="location">Location : {props.country}</p>
              <a href={props.googleMapsLink}>
                View on Google Maps{" "}
              </a>
            </div>
          </div>
          <h1 className="title">{props.title}</h1>
          <p className="dates">{props.dates}</p>
          <p className="content">
            {props.text}
          </p>
        </div>
      </article>
    </>
  );
}

Item.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  country: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};