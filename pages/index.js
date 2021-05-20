import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/fax">
        <a>Fax</a>
      </Link>
      <Link href="/otherdocuments">
        <a>Other Documents</a>
      </Link>
      <Link href="/accountspayable">
        <a>Accounts Payable</a>
      </Link>
    </div>
  );
}
