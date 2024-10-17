import Link from "next/link";

function Socials() {
  return (
    <ul className="flex gap-12 uppercase w-full items-center bg-primary rounded-3xl h-32 justify-center font-medium">
      <li>
        <Link href="/Raman_Khadgi_Resume_12-08-2024.pdf" target="_blank">
          Resume
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/raman-khadgi/" target="_blank">
          LinkedIn
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/_adroitx/" target="_blank">
          Instagram
        </Link>
      </li>
    </ul>
  );
}

export default Socials;
