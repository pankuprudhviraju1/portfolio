import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export default function Button({
  href,
  children,
  external = false,
}: ButtonProps) {
  const className =
    "inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
    </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}