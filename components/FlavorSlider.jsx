import { flavorlists } from "../constants";

const FlavorSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => {
          return (
            <>
              <div
                key={flavor.name}
                className={`relative z-30 lg:w-[50vw] mt-20 w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
              >
                <img
                  className="absolute bottom-0"
                  src={`/images/${flavor.color}-bg.svg`}
                  alt="Flavor"
                />

                <img
                  src={`/images/${flavor.color}-drink.webp`}
                  className="drinks"
                  alt="Drink"
                />

                <img
                  src={`/images/${flavor.color}-elements.webp`}
                  className="elements"
                  alt="elements"
                />
                <h1>{flavor.name}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FlavorSlider;
