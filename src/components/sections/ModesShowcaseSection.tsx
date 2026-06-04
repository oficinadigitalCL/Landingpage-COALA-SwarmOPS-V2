import { SectionReveal } from '../ui/SectionReveal';
import { FlipCard } from '../ui/FlipCard';
import { modes } from '../../data/modes';
import content from '../../data/es.json';

const modesContent = content.modesShowcase;

const tierColors: Record<string, string> = {
  T0: 'bg-green-500/20 text-green-400 border-green-500/30',
  'T0.5': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  T1: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  T2: 'bg-red-500/20 text-red-400 border-red-500/30',
  T3: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const FEATURED_COUNT = 6;

function ModesShowcaseSection() {
  const displayedModes = modes.slice(0, FEATURED_COUNT);

  return (
    <section
      id="modes"
      className="relative py-24 sm:py-32 bg-coala-dark"
      aria-label="Modos del ecosistema"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {modesContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            {modesContent.description}
          </p>
        </SectionReveal>

        {/* FlipCard grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedModes.map((mode, index) => (
            <SectionReveal key={mode.id} delay={index * 0.1}>
              <FlipCard
                front={
                  <div className="text-center">
                    <span className="text-5xl mb-3 block">{mode.emoji}</span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {mode.name}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${tierColors[mode.tier] || tierColors['T0']}`}
                    >
                      {mode.tier}
                    </span>
                  </div>
                }
                back={
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-coala-cyan mb-2">
                      {mode.name}
                    </h4>
                    <ul className="text-xs text-gray-300 space-y-1 mb-3">
                      {mode.capabilities.slice(0, 2).map((cap) => (
                        <li key={cap.name} className="flex items-start gap-1">
                          <span className="text-coala-cyan mt-0.5">•</span>
                          <span>{cap.name}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500">
                      {mode.model} · ${mode.costPerMTok}/MTok
                    </p>
                  </div>
                }
              />
            </SectionReveal>
          ))}
        </div>

        {/* Ver todos CTA */}
        <SectionReveal delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/README_ES.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-coala-cyan text-coala-cyan font-semibold hover:bg-coala-cyan/10 transition-all duration-300"
            >
              Explorar Todos los Modos ({modes.length})
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export { ModesShowcaseSection };
