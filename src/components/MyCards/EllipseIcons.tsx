import { EllipseIcon, EllipseGrayIcon } from "../../assets/icons";

const EllipseIcons = ({ selected }: { selected: boolean }) => (
  <>
    <div className="w-card-ellipse-mobile md:w-full">
      {selected ? (
        <EllipseIcon
          aria-label="Ellipse Icon"
          className="w-card-ellipse-mobile md:w-full"
        />
      ) : (
        <EllipseGrayIcon
          aria-label="Ellipse Gray Icon"
          className="w-card-ellipse-mobile md:w-full"
        />
      )}
    </div>
    <div className="-ml-7 md:-ml-4 w-card-ellipse-mobile md:w-full">
      {selected ? (
        <EllipseIcon
          aria-label="Ellipse Icon"
          className="w-card-ellipse-mobile md:w-full"
        />
      ) : (
        <EllipseGrayIcon
          aria-label="Ellipse Gray Icon"
          className="w-card-ellipse-mobile md:w-full"
        />
      )}
    </div>
  </>
);

export default EllipseIcons;
