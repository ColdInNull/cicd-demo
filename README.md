# cicd-demo

一个最小可用的 Vue3 + Vite 前端示例项目，包含：

- 单元测试：Vitest
- 端到端测试：Playwright
- CI：GitHub Actions 在 PR 触发后自动执行测试

## 本地运行

```bash
pnpm install
pnpm run dev
```

## 本地测试

```bash
pnpm run test:unit:run
pnpm exec playwright install chromium
pnpm run test:e2e
```

## CI 说明

CI 配置文件：`.github/workflows/ci.yml`

触发条件：`pull_request`

流水线步骤：

1. 安装依赖
2. 运行 Vitest 单元测试
3. 安装 Playwright Chromium
4. 运行 Playwright e2e 测试
