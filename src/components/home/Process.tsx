'use client';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Architect & Scope',
      timeframe: 'Week 1',
      description: 'System specifications, database entity models, API contracts, and milestone sprint roadmaps.',
    },
    {
      num: '02',
      title: 'Design System & Flows',
      timeframe: 'Weeks 2 - 3',
      description: 'Figma UI design tokens, core user flows, responsive layouts, and engineering handoff.',
    },
    {
      num: '03',
      title: 'Full-Stack Execution',
      timeframe: 'Weeks 4 - 6',
      description: 'Type-safe Next.js frontend, PostgreSQL schemas, FinTech verification logic, and automated tests.',
    },
    {
      num: '04',
      title: 'Production Deployment',
      timeframe: 'Week 7+',
      description: 'Vercel / Cloudflare edge rollout, custom domain routing, health telemetry, and long-term SLAs.',
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 border-b border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
              [ 05 // SPRINT PROCESS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Delivery Workflow
            </h2>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Predictable sprint delivery with direct repository access and staging environments at every phase.
          </p>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="space-y-3 p-6 rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-850 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-950 dark:text-white font-bold">{step.num} //</span>
                <span className="text-neutral-500">{step.timeframe}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
