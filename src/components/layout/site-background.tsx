export function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="orb-cyan -left-32 -top-32 h-96 w-96" />
      <div className="orb-purple -right-32 -top-24 h-80 w-80" />
      <div className="orb-cyan left-1/4 top-1/3 h-72 w-72" />
      <div className="orb-purple right-1/4 top-2/3 h-64 w-64" />
      <div className="orb-cyan -bottom-20 left-1/3 h-56 w-56" />
      <div className="orb-purple -bottom-32 right-1/4 h-72 w-72" />
    </div>
  );
}
