declare module 'react-dom/client' {
  import { Container, ReactNode } from 'react-dom';

  interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  function createRoot(container: Container): Root;
  function hydrateRoot(container: Container, initialChildren: ReactNode): Root;

  export { createRoot, hydrateRoot, Root };
}
