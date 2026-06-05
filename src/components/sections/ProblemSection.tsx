import {
  Zap,
  DollarSign,
  Clock,
  XCircle,
  CheckCircle,
} from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import { useLanguage, contentMap } from '../../hooks/useLanguage';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Zap,
  DollarSign,
  Clock,
};

function ProblemSection() {
  const { language } = useLanguage();
  const content = contentMap[language];
  const problemContent = content.problem;

  return (
    <section
      id="problem"
      className="relative py-24 sm:py-32 bg-coala-darker"
      aria-label="Problema"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {problemContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
            {problemContent.description}
          </p>
        </SectionReveal>

        {/* Problem feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problemContent.features?.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <SectionReveal key={feature.title} delay={index * 0.15}>
                <AnimatedCard glowColor="cyan" className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Icon size={28} className="text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </AnimatedCard>
              </SectionReveal>
            );
          })}
        </div>

        {/* Visual comparison: Static vs Swarm */}
        <SectionReveal delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Static/Traditional */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={28} className="text-red-400" />
                <h3 className="text-xl font-semibold text-red-300">
                  {problemContent.comparison.staticTitle}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                {problemContent.comparison.staticItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Swarm/COALA-SwarmOPS */}
            <div className="rounded-xl border border-coala-cyan/20 bg-coala-cyan/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={28} className="text-coala-cyan" />
                <h3 className="text-xl font-semibold text-coala-cyan">
                  {problemContent.comparison.swarmTitle}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                {problemContent.comparison.swarmItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-coala-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export { ProblemSection };
