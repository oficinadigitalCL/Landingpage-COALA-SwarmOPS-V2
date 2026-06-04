import { lazy, Suspense } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Lazy-load all section components
const HeroSection = lazy(() =>
  import('./components/sections/HeroSection').then((m) => ({ default: m.HeroSection })),
);
const ProblemSection = lazy(() =>
  import('./components/sections/ProblemSection').then((m) => ({ default: m.ProblemSection })),
);
const SolutionSection = lazy(() =>
  import('./components/sections/SolutionSection').then((m) => ({ default: m.SolutionSection })),
);
const HowItWorksSection = lazy(() =>
  import('./components/sections/HowItWorksSection').then((m) => ({ default: m.HowItWorksSection })),
);
const ModesShowcaseSection = lazy(() =>
  import('./components/sections/ModesShowcaseSection').then((m) => ({
    default: m.ModesShowcaseSection,
  })),
);
const WhoIsItForSection = lazy(() =>
  import('./components/sections/WhoIsItForSection').then((m) => ({ default: m.WhoIsItForSection })),
);
const PricingSection = lazy(() =>
  import('./components/sections/PricingSection').then((m) => ({ default: m.PricingSection })),
);
const CommunitySection = lazy(() =>
  import('./components/sections/CommunitySection').then((m) => ({ default: m.CommunitySection })),
);

// Suspense fallback
function SectionFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-coala-darker">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-coala-cyan/30 border-t-coala-cyan rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Cargando...</p>
      </div>
    </div>
  );
}

// Wire all sections in correct order
function App() {
  return (
    <LanguageProvider>
      <div className="bg-coala-light dark:bg-coala-darker text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Suspense fallback={<SectionFallback />}>
            <HeroSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ProblemSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <SolutionSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <HowItWorksSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ModesShowcaseSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <WhoIsItForSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <PricingSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CommunitySection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
