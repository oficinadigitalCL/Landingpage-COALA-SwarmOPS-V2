import { GitBranch, Shield, Network } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import content from '../../data/es.json';

const solutionContent = content.solution;

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GitBranch,
  Shield,
  Network,
};

function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative py-24 sm:py-32 bg-coala-dark"
      aria-label="Solución"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {solutionContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            {solutionContent.description}
          </p>
        </SectionReveal>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutionContent.features?.map((feature, index) => {
            const Icon = iconMap[feature.icon] || GitBranch;
            return (
              <SectionReveal key={feature.title} delay={index * 0.15}>
                <AnimatedCard glowColor="purple" className="text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-coala-purple/10 flex items-center justify-center">
                    <Icon size={28} className="text-coala-purple" />
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
      </div>
    </section>
  );
}

export { SolutionSection };
