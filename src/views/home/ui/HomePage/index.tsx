import { Auth } from "@/widgets/auth";

export function HomePage() {
  return (
    <main className="flex flex-col gap-6 min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <Auth />
      </section>
      <section className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">POC Logto</h1>
        <p className="mt-3 text-slate-600">
          Esta e uma pagina inicial simples para validar o fluxo da aplicacao.
        </p>
      </section>
    </main>
  );
}
