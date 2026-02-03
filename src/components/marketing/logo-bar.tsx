interface LogoBarProps {
  title?: string;
  logos?: { name: string; className?: string }[];
}

const defaultLogos = [
  { name: "Acme Corp" },
  { name: "Globex" },
  { name: "Initech" },
  { name: "Umbrella" },
  { name: "Stark" },
  { name: "Wayne" },
];

export function LogoBar({ 
  title = "Trusted by innovative brands worldwide", 
  logos = defaultLogos 
}: LogoBarProps) {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors ${logo.className || ""}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
