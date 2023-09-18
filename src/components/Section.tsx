type SectionProps = {
  children: React.ReactNode;
  id?: string;
};

export default function Section({ children, id }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-4xl flex flex-col my-10">
      {children}
    </section>
  );
}
