import { Code2, GraduationCap, Building2 } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import content from '../../data/es.json';

const whoContent = content.whoIsItFor;

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2,
  GraduationCap,
  Building2,
};

function WhoIsItForSection() {
  return (
    <section
      id="who-is-it-for"
      className="relative py-24 sm:py-32 bg-coala-darker"
      aria-label="Para quién es"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {whoContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            {whoContent.description}
          </p>
        </SectionReveal>

        {/* 3 columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {whoContent.columns?.map((column, index) => {
            const Icon = iconMap[column.icon] || Code2;
            return (
              <SectionReveal key={column.title} delay={index * 0.15}>
                <AnimatedCard glowColor="cyan" className="h-full">
                  <div className="w-14 h-14 mb-4 rounded-lg bg-coala-cyan/10 flex items-center justify-center">
                    <Icon size={28} className="text-coala-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {column.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {column.description}
                  </p>
                  <ul className="space-y-3">
                    {column.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-coala-cyan mt-2 shrink-0" />
                        <span className="text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { WhoIsItForSection };
