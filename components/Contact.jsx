import Link from "next/link";
import ArrowIcon from "@/public/icons/ArrowIcon";

function Contact() {
  return (
    <div className="bg-secondary h-full rounded-3xl flex flex-col justify-between p-8 dark:text-white">
      <div className="flex justify-between items-center">
        <p>Have some questions?</p>
        <Link href="/" className="text-black dark:text-white">
          <ArrowIcon />
        </Link>
      </div>
      <p className="text-5xl font-medium">Contact me</p>
    </div>
  );
}

export default Contact;
