import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Riset & Konsultasi',
    desc: 'Memahami tujuan bisnis, target audiens, dan kebutuhan fitur utama.',
  },
  {
    title: 'Perancangan UI/UX',
    desc: 'Wireframe, user flow, dan desain visual yang konsisten dengan brand.',
  },
  {
    title: 'Pengembangan',
    desc: 'Implementasi Next.js + TypeScript + Tailwind dengan praktik terbaik.',
  },
  {
    title: 'Pengujian & Peluncuran',
    desc: 'Testing, optimasi, dan go-live dengan monitoring performa.',
  },
];

export default function Process() {
  return (
    <section id="proses" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">Proses Kerja</h2>
          <p className="mt-3 text-slate-600">Transparan, terukur, dan kolaboratif.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700">
                <CheckCircle2 className="text-indigo-600" size={18} />
                Langkah {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
