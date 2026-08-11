import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e2e8f0] flex flex-col items-center justify-center p-6 font-sans select-none">
      <div className="space-y-6 text-center max-w-md">
        <h1 className="font-mono text-6xl font-extrabold text-[#64ffda] tracking-widest">
          404
        </h1>
        <h2 className="text-xl font-bold tracking-tight">
          PAGE_NOT_FOUND
        </h2>
        <p className="text-sm font-light text-[#94a3b8] leading-relaxed">
          The terminal path you requested does not exist on this host system. Return to base directory to run query.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded border border-[#64ffda] text-[#64ffda] bg-transparent hover:bg-teal-400/10 font-mono text-xs font-bold transition-all focus:ring-2 focus:ring-[#64ffda] outline-none"
          >
            cd ~/portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
