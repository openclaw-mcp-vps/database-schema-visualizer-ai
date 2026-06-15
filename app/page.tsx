export default function Home() {
  const faqs = [
    {
      q: 'Which schema formats are supported?',
      a: 'We support SQL DDL files (PostgreSQL, MySQL, SQLite), Prisma schema files, and direct database connection strings.'
    },
    {
      q: 'How does the AI analysis work?',
      a: 'Your schema is parsed and sent to OpenAI GPT-4 which generates human-readable explanations of each table, column purpose, and relationship logic.'
    },
    {
      q: 'Is my database data ever accessed?',
      a: 'No. We only read schema metadata — table names, columns, and constraints. Your actual data is never touched or transmitted.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI-Powered Database<br />
          <span className="text-[#58a6ff]">Schema Visualizer</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your schema file or paste a connection string. Get instant visual diagrams with AI-written explanations of every table, relationship, and constraint.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card lock-in.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['SQL / Prisma', 'Schema Formats'],['GPT-4', 'AI Engine'],['Instant', 'Diagram Export']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-[#8b949e] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited schema uploads',
              'AI relationship explanations',
              'Interactive visual diagrams',
              'Export PNG / SVG / PDF',
              'PostgreSQL, MySQL, SQLite, Prisma',
              'Priority email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} DB Schema Visualizer AI. All rights reserved.
      </footer>
    </main>
  )
}
