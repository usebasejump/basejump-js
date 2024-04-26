import type {Options} from 'tsup';

export const tsup: Options = {
    dts: true,
    entryPoints: ['src/index.tsx'],
    external: ['react', /^@usebasejump\//],
    format: ['esm', 'cjs'],
    legacyOutput: false,
    sourcemap: true,
    splitting: false,
    bundle: true,
    clean: true
};