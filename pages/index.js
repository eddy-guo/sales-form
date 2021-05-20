import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/fax">
        <a>Fax</a>
      </Link>
      <br></br>
      <Link href="/otherdocuments">
        <a>Other Documents</a>
      </Link>
      <br></br>
      <Link href="/accountspayable">
        <a>Accounts Payable</a>
      </Link>
      <br></br>
      <Link href="/digitalmail">
        <a>Digital Mail</a>
      </Link>
      <br></br>
      <Link href="/pdi">
        <a>PDI</a>
      </Link>
    </div>
  );
}
