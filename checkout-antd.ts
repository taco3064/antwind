import path from 'path';
import { execSync } from 'child_process';
import * as Antd from 'antd';
import type { ComponentType } from 'react';
import type { ConditionalPick } from 'type-fest';

const BRANCH = 'master';
const REPO_URL = 'https://github.com/ant-design/ant-design.git';
const TARGET_PATH = path.resolve(process.cwd(), './src/checkouts');

export default function checkout(
  components: Partial<
    Record<keyof ConditionalPick<typeof Antd, ComponentType> | 'Message', string[]>
  >,
) {
  try {
    //* 如果目標目錄已存在，先刪除
    execSync('rm -rf ./src/checkouts', { stdio: 'inherit' });

    //* 初始化目標目錄為 Git repository
    execSync(
      `git clone --filter=blob:none --no-checkout --branch=${BRANCH} ${REPO_URL} ${TARGET_PATH}`,
      { stdio: 'inherit' },
    );

    //* 將指定的目錄複製到目標目錄
    Object.entries(components).forEach(([name, files]) =>
      files.forEach((file) =>
        execSync(
          `git archive ${BRANCH} components/${pascal2Kebab(name)}/demo/${file}.tsx | tar -x -C ${TARGET_PATH}`,
          {
            stdio: 'inherit',
            cwd: TARGET_PATH,
          },
        ),
      ),
    );

    //* 重整目錄結構
    execSync('mv ./components/* ./', { stdio: 'inherit', cwd: TARGET_PATH });
    execSync('rm -rf ./components', { stdio: 'inherit', cwd: TARGET_PATH });

    Object.keys(components).forEach((name) => {
      const kebab = pascal2Kebab(name);

      execSync(`mv ./${kebab}/demo/* ./${kebab}`, {
        stdio: 'inherit',
        cwd: TARGET_PATH,
      });

      execSync(`rm -rf ./${kebab}/demo`, { stdio: 'inherit', cwd: TARGET_PATH });
    });

    //* 驗證
    execSync('eslint "src/checkouts/**/*.{ts,tsx}" --fix', { stdio: 'inherit' });
    execSync('npm run tsc', { stdio: 'inherit' });
    execSync('rm -rf ./src/checkouts/.git', { stdio: 'inherit' });
  } catch (e) {
    // execSync('rm -rf ./src/checkouts', { stdio: 'inherit' });
    console.error('checkout antd failed:', e);
    process.exit(1);
  }

  return Object.keys(components).map(pascal2Kebab);
}

function pascal2Kebab(str: string) {
  return (
    str
      .match(/[A-Z][a-z0-9]*/g)
      ?.join('-')
      .toLowerCase() || str
  );
}
