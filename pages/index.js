import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/fax">
        <a>Fax</a>
      </Link>
      <Link href="/other-documents">
        <a>Other Documents</a>
      </Link>
      <Link href="/accounts-payable">
        <a>Accounts Payable</a>
      </Link>
    </div>
  );
}
