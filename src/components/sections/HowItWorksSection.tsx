import { Download, FileText, Rocket } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';
import { StepConnector } from '../ui/StepConnector';
import { AnimatedCard } from '../ui/AnimatedCard';
import content from '../../data/es.json';

const howItWorksContent = content.howItWorks;

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Download,
  FileText,
  Rocket,
};

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-coala-darker"
      aria-label="Cómo funciona"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {howItWorksContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
            {howItWorksContent.description}
          </p>
        </SectionReveal>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-4 max-w-5xl mx-auto">
          {howItWorksContent.steps?.map((step, index) => {
            const Icon = iconMap[step.icon] || Download;
            return (
              <div key={step.number} className="flex-1 w-full">
                <SectionReveal delay={index * 0.2}>
                  <AnimatedCard glowColor="cyan" className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coala-cyan/10 border-2 border-coala-cyan/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-coala-cyan">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-coala-cyan/10 flex items-center justify-center">
                      <Icon size={24} className="text-coala-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </AnimatedCard>
                </SectionReveal>
                {/* Connector between steps (hidden on last) */}
                {index < (howItWorksContent.steps?.length ?? 0) - 1 && (
                  <StepConnector isActive={true} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { HowItWorksSection };
