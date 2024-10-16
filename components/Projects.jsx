import Image from "next/image";
import arrow from "@/public/ARROW.svg";

export default function Projects() {
  return (
    <div className=" rounded-3xl bg-primary h-[500px]">
      Projects
      <Image src={arrow} alt="Raman Khadgi" width={20} height={20} />
    </div>
  );
}
