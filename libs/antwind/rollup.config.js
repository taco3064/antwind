import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const { version } = createRequire(import.meta.url)('../../package.json');
const root = path.resolve(process.cwd(), '../..');
const dist = path.resolve(root, 'dist/libs/antwind');

export default [
  {
    input: 'src/index.ts',
    plugins: [
      json(),
      peerDepsExternal(),
      resolve({ extensions: ['.ts', 'tsx'] }),
      typescript({ tsconfig: './tsconfig.json' }),

      copy({
        targets: [
          { src: '.npmrc', dest: dist },
          { src: 'package.json', dest: dist },
          { src: 'index.css', dest: dist },
          { src: 'tailwind.plugin.js', dest: dist },
          { src: 'styles/*', dest: path.resolve(dist, 'styles') },
        ],
      }),

      {
        name: 'prepare publish',
        writeBundle() {
          const options = { stdio: 'inherit', cwd: dist };

          execSync('npm pkg delete main', options);
          execSync('npm pkg set type=module', options);
          execSync('npm pkg set module=index.js', options);
          execSync('npm pkg set types=index.d.ts', options);
          execSync(`npm pkg set version=${version}`, options);
        },
      },
    ],
    output: [
      {
        file: path.resolve(dist, 'index.js'),
        format: 'esm',
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
  },
];
