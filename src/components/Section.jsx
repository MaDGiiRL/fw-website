export function Section({ title, kicker, children }) {
  return (
    <section className="relative max-w-7xl mx-auto my-8">
      <div className="mb-6">
        {kicker && (
          <p className="text-xs tracking-[0.3em] text-[#A69981]/80 uppercase">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#D9CAB8] drop-shadow">
            {title}
          </h2>
        )}
      </div>
      <div className="card glass border border-[#262520] rounded-2xl p-4 sm:p-6">
        {children}
      </div>
    </section>
  );
}
