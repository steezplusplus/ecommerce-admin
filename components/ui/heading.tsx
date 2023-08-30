type HeadingProps = {
  title: string;
  description: string;
};

export function Heading(props: HeadingProps) {
  const { title, description } = props;
  return (
    <header>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </header>
  );
}
