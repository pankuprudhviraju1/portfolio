import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-neutral-300
      px-6
      py-3
      text-sm
      transition
      hover:bg-neutral-900
      hover:text-white
      "
    >
      {children}
    </Link>
  );
}