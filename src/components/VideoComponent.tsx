import Image from "next/image";
import ProfileDefault from "../../public/assets/profile.jpg"

export function UserImage({
    image,
    className = "",
  }: {
    image: string;
    className?: string;
  }) {
    return (
      <div className={`relative h-10 w-10 ${className}`}>
        <Image
          src={image || ProfileDefault}
          alt=""
          className="absolute rounded-full"
          fill
        />
      </div>
    );
  }