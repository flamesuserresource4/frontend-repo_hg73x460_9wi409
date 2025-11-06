import { Star, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1oQwB3l3w4XJ8o1O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700">
              <Sparkles size={16} />
              Studio Layanan Jasa Pembuatan Website
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Bangun Website Profesional yang Menghasilkan Kepercayaan dan Penjualan
            </h1>
            <p className="text-slate-600 text-lg">
              Kami merancang dan membangun website modern berbasis Next.js & TypeScript dengan performa tinggi, SEO-friendly, dan mudah dikelola.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#kontak" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
                Mulai Konsultasi
              </a>
              <a href="#portofolio" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-100">
                Lihat Portofolio
              </a>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
              <span className="ml-2 text-sm text-slate-600">Rating 5.0 dari klien kami</span>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow/20 shadow-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop"
                alt="Team work"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
