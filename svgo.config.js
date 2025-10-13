export default {
  multipass: true,
  plugins: [
   
    { name: 'cleanupAttrs', active: true },
    { name: 'removeDimensions', active: false },
    { name: 'collapseGroups', active: true },
    { name: 'mergePaths', active: true },
    { name: 'convertShapeToPath', active: true },
    { name: 'convertPathData', active: true },
    { name: 'removeUselessDefs', active: true },
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
          { width: '24' },
          { height: '24' },
          { viewBox: '0 0 24 24' },
          { fill: 'none' },
          { stroke: 'currentColor' },
          { 'stroke-width': '2' },
          { 'stroke-linecap': 'round' },
          { 'stroke-linejoin': 'round' }
        ]
      }
    }
  ]
};
