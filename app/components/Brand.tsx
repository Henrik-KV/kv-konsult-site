import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="site-brand">
      <span className="brand-mark">
        <Image src="/images/kv-logo-blue.jpg" alt="" width={500} height={500} sizes="44px" priority />
      </span>
      <span className="brand-name">KV Konsult</span>
    </Link>
  );
}
