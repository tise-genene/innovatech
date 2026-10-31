'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Cpu, Shield, Zap, Sparkles, Terminal } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface Discipline {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  stack: string[];
  icon: typeof Cpu;
}

export default function Services() {
  const disciplines: Discipline[] = [
    {
      num: '01',
      title: 'Full-Stack Platforms & SIS',
      subtitle: 'Multi-Tenant SaaS & Educational Cloud Systems',
      description: 'We architect and build full-scale web platforms from zero to production. Specialized in multi-tenant data schemas, localized educational rubrics, and high-concurrency portals.',
      icon: Cpu,
      capabilities: [
        'Multi-Tenant School Management Systems (SIS & LMS)',
        'Role-Based Access Control (RBAC) & Audit Trails',
        'Sub-second page rendering using Next.js 16 App Router',
        'Relational schema design with PostgreSQL and Supabase',
      ],
      deliverables: ['Production Codebase', 'Database Migrations & Schemas', 'Automated CI/CD Workflows', 'Architecture Documentation'],
      stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    },
    {
      num: '02',
      title: 'FinTech & Payment Systems',
      subtitle: 'Banking Integrations & Receipt Anti-Fraud',
      description: 'High-security transaction workflows, mobile money integration, and automated fraud prevention built specifically for Ethiopian financial rails.',
      icon: Shield,
      capabilities: [
        'Deterministic payment receipt verification (Telebirr & CBE)',
        'Payment gateway orchestration (Telebirr API, CBE Birr, Stripe)',
        'Ledger consistency, idempotent webhooks & transactional locks',
        'High-throughput offline verification binaries',
      ],
      deliverables: ['Banking API Adapters', 'Fraud Verification Test Suite', 'OpenAPI / Swagger Specs', 'Secure Webhook Queue'],
      stack: ['Dart', 'Flutter', 'TypeScript', 'Node.js', 'Python FastAPI', 'PostgreSQL'],
    },
    {
      num: '03',
      title: 'Autonomous AI & Event Queues',
      subtitle: 'High-Throughput Telegram Bots & Background Queues',
      description: 'Eliminate manual bottlenecks with custom conversational agents, asynchronous job workers, and automated lead pipelines.',
      icon: Zap,
      capabilities: [
        'Asynchronous Telegram service bots handling 10,000+ msgs/day',
        'Redis-backed background task dispatchers and event queues',
        'Automated database sync & applicant qualification pipelines',
        'Contextual retrieval augmented generation (RAG) search',
      ],
      deliverables: ['Custom Bot Engine', 'Redis Worker Pipeline', 'Integration Webhooks', 'Dockerized Deployment'],
      stack: ['Python', 'Telegram API', 'Redis', 'FastAPI', 'AsyncIO', 'PostgreSQL'],
    },
    {
      num: '04',
      title: 'Technical Audits & System Hardening',
      subtitle: 'Performance Tuning, Security, & Type-Safety',
      description: 'Rigorous engineering reviews and architectural refactors that resolve technical debt, eliminate memory leaks, and optimize web vitals.',
      icon: Terminal,
      capabilities: [
        'Codebase & database security vulnerability audits',
        'Core Web Vitals & bundle-size optimization',
        'Migration of legacy codebases to strict TypeScript',
        'Production infrastructure cost and latency reduction',
      ],
      deliverables: ['Technical Audit Report', 'Web Vitals Optimization Fixes', 'Architectural Roadmap', 'Refactoring PRs'],
      stack: ['TypeScript', 'Next.js Turbopack', 'PostgreSQL Query Analyzer', 'Lighthouse'],
    },
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#02050e] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>[ 03 // CORE DISCIPLINES ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Capabilities</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            We operate as dedicated software architects and full-stack builders. No generic templates, throwaway low-code hacks, or fragile prototypes.
          </p>
        </div>

        {/* 4 Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disciplines.map((d) => {
            const IconComponent = d.icon;
            return (
              <div
                key={d.num}
                onMouseEnter={() => soundEngine.playKeystroke()}
                className="p-8 rounded-2xl border border-slate-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950/60 hover:border-sky-500/40 dark:hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300 shadow-sm group relative overflow-hidden"
              >
                {/* Subtle Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 dark:bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-sky-500/10 dark:group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-500/50 dark:group-hover:border-cyan-500/50 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-neutral-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                    [{d.num}]
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                  {d.title}
                </h3>
                <div className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold mt-1 mb-3">
                  {d.subtitle}
                </div>

                <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-light mb-6">
                  {d.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 mb-6">
                  {d.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-neutral-300 font-mono">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables & Stack */}
                <div className="pt-4 border-t border-slate-200 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                  {d.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
