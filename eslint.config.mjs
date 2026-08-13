import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

// ESLint 10 dropped .eslintrc support, and Next 16 removed `next lint`,
// so the config lives here and `npm run lint` calls eslint directly.
const config = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
  ...nextCoreWebVitals,
]

export default config
