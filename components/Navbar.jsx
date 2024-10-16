import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-primary my-5 h-20 rounded-3xl flex justify-between items-center ">
        <Link href="/" className="mx-10 text-3xl text-border">
          <b>Raman</b>&nbsp;Khadgi
        </Link>
        <ul className="flex gap-12 mx-10 uppercase text-base">
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
