import globe from "/globe.png"

export default function Navbar() {
  return (
    <>
      <div className="navbar">
              <img src={globe} alt="globe-image-here" className="image" />
              <h1>my travel Journal</h1>
      </div>
    </>
  );
}
