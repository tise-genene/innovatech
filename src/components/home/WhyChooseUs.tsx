'use client';

export default function WhyChooseUs() {
  const principles = [
    {
      num: '01',
      title: 'Direct Code Ownership',
      description: 'You own 100% of the repository, database migrations, CI/CD pipelines, and intellectual property. No vendor lock-in or proprietary runtime traps.',
    },
    {
      num: '02',
      title: 'Strict Type-Safety & Contracts',
      description: 'Every interface and database entity is statically typed. We build with Next.js 16, TypeScript, and relational PostgreSQL schemas designed to scale.',
    },
    {
      num: '03',
      title: 'East African Financial Rails',
      description: 'Deep regional FinTech expertise. We build production verification and checkout integrations for Telebirr, CBE Birr, and Ethiopian commercial banks.',
    },
    {
      num: '04',
      title: 'Disciplined Sprint Cadence',
      description: 'Transparent 2-week sprint releases with demonstrable pull requests. You see working software deployed to staging every single cycle.',
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
              [ 04 // METHODOLOGY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Engineering Principles
            </h2>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            How we approach software architecture. We build systems that are durable, verifiable, and easy to maintain.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => (
            <div 
              key={item.num} 
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-850 bg-neutral-50/50 dark:bg-neutral-950 space-y-3"
            >
              <span className="text-xs font-mono text-neutral-500 block">
                {item.num} //
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
