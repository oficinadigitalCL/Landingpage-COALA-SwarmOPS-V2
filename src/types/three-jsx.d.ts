// Augment React.JSX namespace with @react-three/fiber elements
// With "jsx": "react-jsx", TypeScript uses JSX types from react/jsx-runtime,
// which re-exports React.JSX namespace.
import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      ambientLight: any;
      pointLight: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      lineSegments: any;
      lineBasicMaterial: any;
      primitive: any;
    }
  }
}
