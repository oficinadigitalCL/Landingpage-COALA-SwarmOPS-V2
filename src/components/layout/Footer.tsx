import { Github, Heart } from 'lucide-react';
import { EXTERNAL_LINK_PROPS } from '../../lib/utils';

function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-coala-darker py-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 COALA-SwarmOPS — Oficina Digital CL
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Hecho con{' '}
              <Heart
                size={12}
                className="inline text-red-400"
                aria-hidden="true"
              />{' '}
              para la comunidad open source
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2"
              className="text-gray-400 hover:text-coala-cyan transition-colors"
              aria-label="GitHub repository"
              {...EXTERNAL_LINK_PROPS}
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
