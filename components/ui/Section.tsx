type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-28 md:py-36 lg:py-44 ${className}`}
    >
      {children}
    </section>
  );
}