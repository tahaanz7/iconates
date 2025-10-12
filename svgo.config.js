export default {
  multipass: true,
  plugins: [
    { name: 'removeDimensions', active: true },
    { name: 'collapseGroups', active: true },
    { name: 'mergePaths', active: true },
    { name: 'removeUselessStrokeAndFill', active: true },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name', 'id', 'class', 'style', 'stroke', 'fill']
      }
    },
    { name: 'removeViewBox', active: false },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { xmlns: 'http://www.w3.org/2000/svg' },
          { fill: 'none' },
          { stroke: 'currentColor' },
          { 'stroke-width': '2' },
          { 'stroke-linecap': 'round' },
          { 'stroke-linejoin': 'round' },
          { 'stroke-miterlimit': '10' },
          { viewBox: '0 0 24 24' }
        ]
      }
    }
  ]
};
