import { Heart, Check } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import content from '../../data/es.json';

const pricingContent = content.pricing;

function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 bg-coala-dark"
      aria-label="Precios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {pricingContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
            {pricingContent.description}
          </p>
        </SectionReveal>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {pricingContent.tiers?.map((tier, index) => (
            <SectionReveal key={tier.name} delay={index * 0.15}>
              <AnimatedCard
                glowColor={tier.highlighted ? 'purple' : 'cyan'}
                className={`h-full flex flex-col ${tier.highlighted ? 'ring-2 ring-coala-purple/50 relative' : ''}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-coala-purple text-white text-xs font-semibold">
                    Más popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-coala-cyan mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-400">
                      <Check size={18} className="mt-0.5 shrink-0 text-coala-cyan" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta.href}
                  className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                    tier.highlighted
                      ? 'bg-coala-purple text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                      : 'bg-coala-cyan text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                  }`}
                >
                  {tier.cta.icon === 'Heart' && <Heart size={18} />}
                  {tier.cta.text}
                </a>
              </AnimatedCard>
            </SectionReveal>
          ))}
        </div>

        {/* Free to install message */}
        <SectionReveal delay={0.3}>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              COALA-SwarmOPS es 100% open source. <strong className="text-coala-cyan">Free to install.</strong> Paga solo los tokens que consumas.
            </p>
            <a
              href="https://github.com/sponsors/oficinadigitalCL"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-coala-cyan text-black font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
            >
              <Heart size={20} />
              Hazte Sponsor
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export { PricingSection };
