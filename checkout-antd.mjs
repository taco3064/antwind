import path from 'path';
import { execSync } from 'child_process';

const BRANCH = 'master';
const REPO_URL = 'https://github.com/ant-design/ant-design.git';
const TARGET_PATH = path.resolve(process.cwd(), './src/checkouts');

const COMPONENT_PATHS = [
  'components/button/demo/block.tsx',
  'components/button/demo/color-variant.tsx',
  'components/button/demo/danger.tsx',
  'components/button/demo/ghost.tsx',
  'components/button/demo/loading.tsx',
  'components/button/demo/size.tsx',

  'components/cascader/demo/basic.tsx',
  'components/cascader/demo/disabled-option.tsx',
  'components/cascader/demo/multiple.tsx',
  'components/cascader/demo/status.tsx',
  'components/cascader/demo/variant.tsx',

  'components/checkbox/demo/check-all.tsx',
  'components/checkbox/demo/group.tsx',

  'components/divider/demo/plain.tsx',
  'components/divider/demo/with-text.tsx',

  'components/form/demo/size.tsx',
  'components/form/demo/variant.tsx',

  'components/menu/demo/switch-mode.tsx',

  'components/pagination/demo/jump.tsx',
  'components/pagination/demo/mini.tsx',

  'components/steps/demo/clickable.tsx',
  'components/steps/demo/progress-dot.tsx',

  'components/auto-complete/demo/basic.tsx',
  'components/auto-complete/demo/status.tsx',
  'components/auto-complete/demo/variant.tsx',
];

const COMPONENTS = Array.from(
  COMPONENT_PATHS.reduce((acc, path) => {
    const [, name] = path.split('/');

    return acc.add(name);
  }, new Set()),
);

try {
  //* 如果目標目錄已存在，先刪除
  execSync('rm -rf ./src/checkouts', { stdio: 'inherit' });

  //* 初始化目標目錄為 Git repository
  execSync(
    `git clone --filter=blob:none --no-checkout --branch=${BRANCH} ${REPO_URL} ${TARGET_PATH}`,
    { stdio: 'inherit' },
  );

  //* 將指定的目錄複製到目標目錄
  COMPONENT_PATHS.forEach((path) =>
    execSync(`git archive ${BRANCH} ${path} | tar -x -C ${TARGET_PATH}`, {
      stdio: 'inherit',
      cwd: TARGET_PATH,
    }),
  );

  //* 重整目錄結構
  execSync('mv ./components/* ./', { stdio: 'inherit', cwd: TARGET_PATH });
  execSync('rm -rf ./components', { stdio: 'inherit', cwd: TARGET_PATH });

  COMPONENTS.forEach((name) => {
    execSync(`mv ./${name}/demo/* ./${name}`, { stdio: 'inherit', cwd: TARGET_PATH });
    execSync(`rm -rf ./${name}/demo`, { stdio: 'inherit', cwd: TARGET_PATH });
  });

  //* 驗證
  execSync('eslint "src/checkouts/**/*.{ts,tsx}" --fix', { stdio: 'inherit' });
  execSync('npm run tsc', { stdio: 'inherit' });
  execSync('rm -rf ./src/checkouts/.git', { stdio: 'inherit' });
} catch (e) {
  execSync('rm -rf ./src/checkouts', { stdio: 'inherit' });
  console.error('checkout antd failed:', e);
  process.exit(1);
}
