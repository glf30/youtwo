import { VioletHorn, VioletPeople, VioletPlay } from "./Icons/Icons";
import ReactLoading from "react-loading";

export function ErrorMessage({
  children,
  message,
  description,
  icon,
}: {
  children?: React.ReactNode;
  icon?: string;
  message: string;
  description?: string;
}) {
  const IconSelection = ({
    icon,
    className,
  }: {
    icon?: string;
    className: string;
  }) => {
    if (icon === "VioletHorn") {
      return <VioletHorn className={className} />;
    } else if (icon === "VioletPeople") {
      return <VioletPeople className={className} />;
    } else {
      return <VioletPlay className={className} />;
    }
  };

  return (
    <div className="relative mt-16 flex w-full flex-col items-center justify-center gap-2 text-center">
      <IconSelection className="center items-center" icon={icon} />
      <h1 className="text-2xl font-semibold text-gray-900">{message}</h1>
      <p className="max-w-xs text-gray-600">{description}</p>
      {children}
    </div>
  );
}

export function LoadingMessage() {
  return (
    <div className="relative mt-16 flex w-full flex-col items-center justify-center gap-2 text-center">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#c4b5fd"}
        height={667}
        width={375}
      />
      <h1 className="text-2xl font-semibold text-gray-900">Loading</h1>
    </div>
  );
}
