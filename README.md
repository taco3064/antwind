# Antwind

**Antwind** 是 `Ant Design (antd)` + `Tailwind CSS (tailwindcss)` 的結合，不僅名稱融合了兩者，更象徵著它們的無縫整合。<br/>
本套件旨在簡化前端專案對這兩項技術的配置，讓開發者能夠充分發揮 Tailwind CSS 的靈活性，同時確保 antd 與 tailwind 在色彩系統上的統一性。<br/>
此外，**Antwind** 也將作為 UI 設計規範（Guideline）的基礎，提供一致的設計風格，幫助團隊維持統一的使用者體驗。<br/><br/>

## How To Start

本文件涵蓋 **`使用說明`** 及 **`開發說明`**，可依據你的角色選擇適合的章節開始閱讀：

- 我是使用者（希望將 Antwind 應用於專案）<br/>
  ➡ 請從 [Installation](#installation) 章節開始，了解如何將本套件整合至你的前端專案。
- 我是開發者（希望了解本專案的架構或貢獻開發）<br/>
  ➡ 請從 [Getting Started](#getting-started) 章節開始，瞭解如何參與 **Antwind** 的開發及維護。<br/><br/>

## Installation

Antwind 所發佈的套件名稱為 **`antwind`**，在安裝上有以下幾個必要的相依項目:

- **`antd`** - `^5.24.0`
- **`react`** - `^19.0.0`
- **`tailwindcss`** - `^4.0.0`

安裝指令建議分為以下兩段執行：

```
npm i react antd antwind -s
npm i tailwindcss -D
```

若當前 antd 的版本仍為 v5，請額外安裝以下:

```
npm i @ant-design/v5-patch-for-react-19 -s
```

若使用 `vite` 作為前端 App 的 bundle 工具，請額外安裝以下:

```
npm i @tailwindcss/vite -D
```

<br/><br/>

## Quickstart

- ### Tailwind Configs

  安裝完成後，請在 Tailwind CSS 的主要樣式檔案（通常為 .css 或 .scss）中加入以下內容：

  ```
  @import 'tailwindcss' important;
  @import 'antwind';

  @import './[my-theme].css';
  ```

  其中，`[my-theme].css` 為你的自訂主題樣式檔案，請根據專案需求自行命名。<br/>
  範例參考: **[demo/tailwind.css](https://gitlab.aws.clinico.com.tw/clinico/clinico-store/antwind/-/blob/master/apps/demo/src/themes/tailwind.css)**

- ### Theme Variables

  `[my-theme].css` 負責定義專案的**主題變數**，確保 `Ant Design` 和 `Tailwind CSS` 能夠共用相同的色彩設定。例如：

  ```
  .\:[my-theme] {
    --color-content-base: #e5edf5;

    --color-primary: #004da0;
    --color-primary-90: #1a5faa;
    --color-primary-80: #3371b3;
    --color-primary-70: #4d82bd;
    --color-primary-60: #6694c6;
    --color-primary-50: #80a6cf;
    --color-primary-40: #99b8d9;
    --color-primary-30: #b2cae3;
    --color-primary-20: #ccdbec;
    --color-primary-10: #e5edf5;

    --color-secondary: #fbc600;
    --color-secondary-90: #fbcc1a;
    --color-secondary-80: #fcd133;
    --color-secondary-70: #fcd74d;
    --color-secondary-60: #fddd66;
    --color-secondary-50: #fde380;
    --color-secondary-40: #fde899;
    --color-secondary-30: #feeeb2;
    --color-secondary-20: #fef4cc;
    --color-secondary-10: #fff9e5;
  }
  ```

  此設定確保 **primary** 及 **secondary** 色彩能夠一致地應用於 `Ant Design` 和 `Tailwind CSS`。<br/>
  範例參考: **[demo/theme.css](https://gitlab.aws.clinico.com.tw/clinico/clinico-store/antwind/-/blob/master/apps/demo/src/themes/palettes/clinico.css)**

- ### Theme Provider

  最後，在 `React` 應用中，使用 **`AntwindThemeProvider`** 來注入主題，確保 `Ant Design` 的 Component 可順利套用樣式：

  ```
  import { AntwindThemeProvider } from 'antwind';

  export default function App() {
    return (
      <AntwindThemeProvider value="my-theme">
        {/* 略 */}
      </AntwindThemeProvider>
    );
  }
  ```

  範例參考: **[demo/App.tsx](https://gitlab.aws.clinico.com.tw/clinico/clinico-store/antwind/-/blob/master/apps/demo/src/containers/App/Container.tsx#L21)**
  <br/><br/>

## API References

- ### Theme Colors

  除了 **--color-primary-\*** 和 **--color-secondary-\*** 這兩組主要色系外，`[my-theme].css` 亦支援自定義色彩變數（Color Variables），並允許覆寫 Antwind 的內建配色系統。

  以下是 Antwind 提供的 基礎配色變數，可作為參考：

  - 📌 **Content Background / Border**
    - `--color-content-base`
    - `--color-content-layout`
    - `--color-content-paper`
    - `--color-divider`
  - 📌 **Achromatic Colors**
    - `--color-contrast`
    - `--color-muted`
    - `--color-soft`
    - `--color-base`
  - 📌 **Status Colors**
    - **Disabled**
      - `--color-disabled-dark`
      - `--color-disabled-divider`
      - `--color-disabled-light`
    - **Error**
      - `--color-error-dark`
      - `--color-error-divider`
      - `--color-error-light`
    - **Info**
      - `--color-info-dark`
      - `--color-info-divider`
      - `--color-info-light`
    - **Success**
      - `--color-success-dark`
      - `--color-success-divider`
      - `--color-success-light`
    - **Warning**
      - `--color-warning-dark`
      - `--color-warning-divider`
      - `--color-warning-light`
  - 📌 **Base Colors**
    - **Cyan**
      - `--color-cyan-dark`
      - `--color-cyan-divider`
      - `--color-cyan-light`
    - **Geekblue**
      - `--color-geekblue-dark`
      - `--color-geekblue-divider`
      - `--color-geekblue-light`
    - **Lime**
      - `--color-lime-dark`
      - `--color-lime-divider`
      - `--color-lime-light`
    - **Magenta**
      - `--color-magenta-dark`
      - `--color-magenta-divider`
      - `--color-magenta-light`
    - **Orange**
      - `--color-orange-dark`
      - `--color-orange-divider`
      - `--color-orange-light`
    - **Purple**
      - `--color-purple-dark`
      - `--color-purple-divider`
      - `--color-purple-light`
    - **Volcano**
      - `--color-volcano-dark`
      - `--color-volcano-divider`
      - `--color-volcano-light`
  - 📌 **Main Colors**

    - **Primary**
      - `--color-primary`
      - `--color-primary-90`
      - `--color-primary-80`
      - `--color-primary-70`
      - `--color-primary-60`
      - `--color-primary-50`
      - `--color-primary-40`
      - `--color-primary-30`
      - `--color-primary-20`
      - `--color-primary-10`
    - **Secondary**
      - `--color-secondary`
      - `--color-secondary-90`
      - `--color-secondary-80`
      - `--color-secondary-70`
      - `--color-secondary-60`
      - `--color-secondary-50`
      - `--color-secondary-40`
      - `--color-secondary-30`
      - `--color-secondary-20`
      - `--color-secondary-10`

  - #### Color Naming Guidelines
    如果你的專案需要額外的 **自定義色彩變數**，請確保變數名稱 不與上述內建變數重複，以避免影響 Antwind 的主題機制。

- ### Component Classes

  - #### **Modal**
    - 預設寬度: **520px**
    - 大尺寸寬度請使用 `Class Name`: **modal-lg** (**1000px**)

- ### AntwindThemeProvider (Component)

  - **Props**
    | Props | Type | Description |
    | -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------- |
    | \***chidlren** | ReactNode | `AntwindThemeProvider` 組件的子元素 |
    | \***value** | T extend string | 當前主題名稱，用於設定 rootEl 的主題 class（格式為 :[value]）。 |
    | dark | boolean | 若主題配色屬暗色系，請開啟此選項。這會影響部分 Antd Components 輸出之結果。 |
    | rootEl | HTMLElement \| () => HTMLElement | 指定用於套用主題樣式的根元素，預設為 `document.body`。可直接傳入 DOM 元素，也可使用函數傳回目標元素。 |
    | onChange | (e: T) => void | 當主題變更時觸發的回呼函數，參數為新的主題值 T。 |

- ### useAntwindTheme\<T extends string>
  - **Inputs**: `None`
  - **Outputs**:
    | Key | Type | Description |
    | --- | --- | --- |
    | **palette** | T extends string | 當前使用的主題名稱 |
    | **onPaletteChange** | (e: T) => void | 用於切換主題。若 AntwindThemeProvider 為設置 `onChange` 則使用此方式會有錯誤拋出 |

<br/><br/>

## Getting Started

如果你是 **Antwind** 的開發者，在 checkout 專案後，請確保本機已安裝 `pnpm`。安裝完成後，執行以下指令來初始化專案：

```
pnpm install
```

這將安裝所有依賴，確保開發環境就緒。而 **Antwind** 採用 `pnpm` + `turbo` 架構，並以 monorepo 方式管理。專案包含以下兩個子項目:

- **apps/demo** - 僅供本機開發與測試，不支援 `build` 指令。
- **libs/antwind** - 核心套件，負責 `antd` + `tailwindcss` 的整合，可發佈至公司內部的 npm registry。<br/><br/>

- ### Development

  若需進行本機測試，可執行:

  ```
  pnpm dev
  ```

  此指令將啟動 `apps/demo` 的開發模式 (dev mode)。由於 monorepo 的特性，在 `apps/demo` 中使用的 `libs/antwind` 會自動連動，任何修改都會觸發 Hot-Reload，無需額外設定即可即時預覽變更。<br/><br/>

- ### Publishing

  當確定要發布新版套件時，請先將程式碼合併至 `master` 分支，然後執行以下指令：

  ```
  npx standard-version --release-as [version]
  git push --follow-tags origin master
  ```

  執行後，GitLab Runner 將自動觸發發布流程，完成套件發佈至公司內部的 npm registry。<br/><br/>

- ### Checkout Antd

  `apps/demo/checkout-antd.ts` 提供了一套自動化流程，可將 [Ant Design 官方 GitHub 倉庫](https://github.com/ant-design/ant-design) 中的指定元件 demo 程式碼取出，並同步到本地專案中，作為範例展示或測試整合使用。

  而 checkout-antd.ts 的內容，是在 `apps/demo/vite.config.ts` 中使用，在 Vite build 時機同步官方 demo 程式碼，確保每次打包時能更新至最新狀態。<br/><br/>
