export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb-cyan -top-32 -left-32 h-96 w-96" />
      <div className="orb-purple -top-24 -right-32 h-80 w-80" />
      <div className="orb-cyan top-1/3 left-1/4 h-72 w-72" />
      <div className="orb-purple top-2/3 right-1/4 h-64 w-64" />
      <div className="orb-cyan -bottom-20 left-1/3 h-56 w-56" />
      <div className="orb-purple right-1/4 -bottom-32 h-72 w-72" />
    </div>
  );
}
