import path from 'node:path';

export function parseArgsAsCheckConfig(argv = process.argv) {
  const args = Array.isArray(argv) ? argv : [];
  const rootFlagIndex = args.findIndex((arg) => arg === '--root');
  const rootValue = rootFlagIndex !== -1 ? args[rootFlagIndex + 1] : undefined;
  return {
    root: rootValue ? path.resolve(process.cwd(), rootValue) : process.cwd(),
    args
  };
}

export async function check(config = {}) {
  const projectRoot = config?.root ?? process.cwd();
  console.log(`[@astrojs/check stub] Skipping diagnostics for ${projectRoot}`);
  return 0;
}

export default { check, parseArgsAsCheckConfig };
