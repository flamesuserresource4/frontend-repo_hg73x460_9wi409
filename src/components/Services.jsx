import { Code, Palette, Search, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Pengembangan Web Kustom',
    desc: 'Aplikasi web modern menggunakan Next.js 14/16, TypeScript, dan arsitektur scalable.',
  },
  {
    icon: Palette,
    title: 'Desain UI/UX',
    desc: 'Desain antarmuka yang estetis, responsif, dan fokus pada konversi.',
  },
  {
    icon: Search,
    title: 'Optimasi SEO & Performa',
    desc: 'Skor Lighthouse tinggi, struktur SEO, dan best practice untuk kecepatan situs.',
  },
  {
    icon: Shield,
    title: 'Keamanan & Maintenance',
    desc: 'Pengerasan keamanan, backup rutin, dan dukungan berkelanjutan.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">Layanan Kami</h2>
          <p className="mt-3 text-slate-600">Solusi end-to-end untuk membangun website bisnis Anda.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
