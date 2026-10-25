'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface Discipline {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  stack: string[];
}

export default function Services() {
  const disciplines: Discipline[] = [
    {
      num: '01',
      title: 'Full-Stack Platforms & SIS',
      subtitle: 'Multi-Tenant SaaS & Educational Cloud Systems',
      description: 'We architect and build full-scale web platforms from zero to production. Specialized in multi-tenant data schemas, localized educational rubrics, and high-concurrency portals.',
      capabilities: [
        'Multi-Tenant School Management Systems (SIS & LMS)',
        'Role-Based Access Control (RBAC) & Audit Trails',
        'Sub-second page rendering using Next.js 16 App Router',
        'Relational schema design with PostgreSQL and Supabase'
      ],
      deliverables: ['Production Codebase', 'Database Migrations & Schemas', 'Automated CI/CD Workflows', 'Architecture Documentation'],
      stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS']
    },
    {
      num: '02',
      title: 'FinTech & Payment Systems',
      subtitle: 'Banking Integrations & Receipt Anti-Fraud',
      description: 'High-security transaction workflows, mobile money integration, and automated fraud prevention built specifically for Ethiopian financial rails.',
      capabilities: [
        'Deterministic payment receipt verification (Telebirr & CBE)',
        'Payment gateway orchestration (Telebirr API, CBE Birr, Stripe)',
        'Ledger consistency, idempotent webhooks & transactional locks',
        'High-throughput offline verification binaries'
      ],
      deliverables: ['Banking API Adapters', 'Fraud Verification Test Suite', 'OpenAPI / Swagger Specs', 'Secure Webhook Queue'],
      stack: ['Dart', 'Flutter', 'TypeScript', 'Node.js', 'Python FastAPI', 'PostgreSQL']
    },
    {
      num: '03',
      title: 'Autonomous AI & Event Queues',
      subtitle: 'High-Throughput Telegram Bots & Background Queues',
      description: 'Eliminate manual bottlenecks with custom conversational agents, asynchronous job workers, and automated lead pipelines.',
      capabilities: [
        'Asynchronous Telegram service bots handling 10,000+ msgs/day',
        'Redis-backed background task dispatchers and event queues',
        'Automated database sync & applicant qualification pipelines',
        'Contextual retrieval augmented generation (RAG) search'
      ],
      deliverables: ['Custom Bot Engine', 'Redis Worker Pipeline', 'Integration Webhooks', 'Dockerized Deployment'],
      stack: ['Python', 'Telegram API', 'Redis', 'FastAPI', 'AsyncIO', 'PostgreSQL']
    },
    {
      num: '04',
      title: 'Technical Audits & System Hardening',
      subtitle: 'Performance Tuning, Security, & Type-Safety',
      description: 'Rigorous engineering reviews and architectural refactors that resolve technical debt, eliminate memory leaks, and optimize web vitals.',
      capabilities: [
        'Codebase & database security vulnerability audits',
        'Core Web Vitals & bundle-size optimization',
        'Migration of legacy codebases to strict TypeScript',
        'Production infrastructure cost and latency reduction'
      ],
      deliverables: ['Technical Audit Report', 'Web Vitals Optimization Fixes', 'Architectural Roadmap', 'Refactoring PRs'],
      stack: ['TypeScript', 'Next.js Turbopack', 'PostgreSQL Query Analyzer', 'Lighthouse']
    }
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 border-b border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
              [ 03 // CAPABILITIES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Engineering Disciplines
            </h2>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            We operate as dedicated software architects and full-stack builders. No generic templates or disposable prototypes.
          </p>
        </div>

        {/* 4 Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-850 rounded-xl overflow-hidden">
          {disciplines.map((d) => (
            <div
              key={d.num}
              className="p-8 sm:p-10 bg-white dark:bg-black flex flex-col justify-between space-y-8 group hover:bg-neutral-50 dark:hover:bg-neutral-950/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500 font-semibold">
                    {d.num} //
                  </span>
                  <span className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
                    {d.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {d.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {d.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block tracking-wider">
                    Core Capabilities
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                    {d.capabilities.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400 dark:text-neutral-500 select-none mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack & Deliverables */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-850 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {d.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <Link
                    href="#contact"
                    onClick={() => soundEngine.playClick()}
                    className="inline-flex items-center gap-1 font-medium text-neutral-950 hover:underline dark:text-white"
                  >
                    <span>Inquire for {d.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
