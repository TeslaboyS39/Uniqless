import Carousel from "../components/Carousel";

export default function LandingPage() {
  return (
    <>
      <Carousel />
      <h1 className="p-5" style={{ fontSize: "2em" }}>
        WELCOME IN UNIQLESS!
      </h1>

      <h2 className="p-5" style={{ fontSize: "1em" }}>
        PROMO MINGGU INI
      </h2>
      <hr></hr>
      <div className="p-5">
        <div>
          <img
            className="mb-3 rounded-xl"
            src="https://www.matahari.com/media/wysiwyg/B2_D_230908_230910.png"
          ></img>
        </div>
        <div>
          <img
            className="mb-2 rounded-xl"
            src="https://www.matahari.com/media/wysiwyg/B3_D_230908_230910.png"
          ></img>
        </div>
      </div>
    </>
  );
}
