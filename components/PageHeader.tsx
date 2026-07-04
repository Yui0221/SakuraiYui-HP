export function PageHeader({
  titleEn,
  title,
  lead,
}: {
  titleEn: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="bg-gradient-to-b from-primary-soft/60 to-background">
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-16 text-center">
        <p className="font-display text-xs font-bold tracking-[0.3em] text-primary">
          {titleEn.toUpperCase()}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-foreground md:text-4xl">
          {title}
        </h1>
        {lead && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
