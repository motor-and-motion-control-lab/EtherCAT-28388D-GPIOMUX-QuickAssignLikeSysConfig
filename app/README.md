# TMS320F28388D EtherCAT 引脚配置工具

这是一个用于配置 TMS320F28388D 芯片 EtherCAT 引脚的可视化工具。

## 运行步骤

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```

3. **在浏览器中打开**
   终端会显示本地服务器地址（通常是 `http://localhost:5173`）

## 功能特性

- 可视化 BGA 引脚网格（337 引脚）
- 交互式引脚配置
- 支持预设配置（东/南扇出优化）
- 导出配置为 JSON 文件
- 实时验证引脚有效性

## 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist` 目录中。

