import Image from "next/image";
import arrow from "@/public/ARROW.svg";

export default function Projects() {
  return (
    <div className="border h-96 rounded-3xl">
      Projects
      <Image src={arrow} alt="Raman Khadgi" width={20} height={20} />
    </div>
  );
}
