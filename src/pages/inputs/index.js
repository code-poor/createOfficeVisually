import './index.less';
const toExport = {};
const requireComponent = require.context('./', false, /.js[x]|.tsx$/);
requireComponent.keys().forEach((fileName) => {
  const module = requireComponent(fileName);
  const moduleKey = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
  if (moduleKey === 'index') return;
  toExport[moduleKey] = module.default;
});
export default toExport;
