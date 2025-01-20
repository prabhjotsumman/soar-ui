import { EllipseIcon, EllipseGrayIcon } from "../../assets/icons";

const EllipseIcons = ({ selected }: { selected: boolean }) => (
  <>
    <div className="w-card-ellipse-mobile tablet:w-full">
      {selected ? (
        <EllipseIcon
          aria-label="Ellipse Icon"
          className="w-card-ellipse-mobile tablet:w-full"
        />
      ) : (
        <EllipseGrayIcon
          aria-label="Ellipse Gray Icon"
          className="w-card-ellipse-mobile tablet:w-full"
        />
      )}
    </div>
    <div className="-ml-7 tablet:-ml-4 w-card-ellipse-mobile tablet:w-full">
      {selected ? (
        <EllipseIcon
          aria-label="Ellipse Icon"
          className="w-card-ellipse-mobile tablet:w-full"
        />
      ) : (
        <EllipseGrayIcon
          aria-label="Ellipse Gray Icon"
          className="w-card-ellipse-mobile tablet:w-full"
        />
      )}
    </div>
  </>
);

export default EllipseIcons;
