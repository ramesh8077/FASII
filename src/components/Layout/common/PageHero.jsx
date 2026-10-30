import PropTypes from "prop-types";
import defaultHero from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";

export default function PageHero({ title, image = defaultHero }) {
  return (
    <section className="relative flex min-h-[250px] items-center overflow-hidden bg-slate-900 lg:min-h-[300px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1 w-12 bg-orange-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              FASII Official
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
