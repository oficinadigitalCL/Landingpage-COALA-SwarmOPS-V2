import { Github, Star, GitFork } from 'lucide-react';
import { SectionReveal } from '../ui/SectionReveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import content from '../../data/es.json';

const communityContent = content.community;

const URL_V1 = 'https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS/#';
const URL_V2 = 'https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/';

function CommunitySection() {
  return (
    <section
      id="community"
      className="relative py-24 sm:py-32 bg-coala-darker"
      aria-label="Comunidad"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {communityContent.title}
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            {communityContent.description}
          </p>
        </SectionReveal>

        {/* Repo cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* v2 repo */}
          <SectionReveal delay={0.1}>
            <AnimatedCard glowColor="cyan" className="text-center h-full flex flex-col items-center justify-center">
              <Github size={48} className="text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">COALA-SwarmOPS v2</h3>
              <p className="text-gray-400 text-sm mb-6">
                Versión actual con swarm 6.7, circuit breakers y CoALA
              </p>
              {/* Badges */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
                  <Star size={16} />
                  <span>24</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coala-cyan/10 border border-coala-cyan/30 text-coala-cyan text-sm">
                  <GitFork size={16} />
                  <span>8</span>
                </div>
              </div>
              <a
                href={URL_V2}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-coala-cyan text-black font-semibold hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                GitHub (v2)
              </a>
            </AnimatedCard>
          </SectionReveal>

          {/* v1 repo */}
          <SectionReveal delay={0.2}>
            <AnimatedCard glowColor="purple" className="text-center h-full flex flex-col items-center justify-center">
              <Github size={48} className="text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">COALA-SwarmOPS v1</h3>
              <p className="text-gray-400 text-sm mb-6">
                Versión original — el concepto que empezó todo
              </p>
              {/* Badges */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
                  <Star size={16} />
                  <span>12</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coala-purple/10 border border-coala-purple/30 text-coala-purple text-sm">
                  <GitFork size={16} />
                  <span>3</span>
                </div>
              </div>
              <a
                href={URL_V1}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-coala-purple text-coala-purple font-semibold hover:bg-coala-purple/10 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                GitHub (v1)
              </a>
            </AnimatedCard>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

export { CommunitySection };
