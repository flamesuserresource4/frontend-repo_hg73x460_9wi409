import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">Diskusikan Proyek Anda</h2>
            <p className="mt-3 text-slate-600">Ceritakan kebutuhan Anda, kami akan merespon dalam 1x24 jam dengan penawaran terbaik.</p>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@flamestudio.dev" className="flex items-center gap-3 text-slate-700 hover:text-slate-900">
                <Mail /> hello@flamestudio.dev
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-slate-700 hover:text-slate-900">
                <Phone /> +62 812-3456-7890
              </a>
            </div>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="email@domain.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="Jelaskan kebutuhan website Anda" />
              </div>
            </div>
            <button type="button" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-500">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
