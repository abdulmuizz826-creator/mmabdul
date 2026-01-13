export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
        {children}
      </h2>
      <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full mb-4"></div>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}