export default {
  plugins: [
    // Remove width & height so icons scale with CSS
    'removeDimensions',

    // Convert shapes to paths (optional, good for consistency)
    'convertShapeToPath',

    // Remove metadata, layer names, styles, etc.
    { name: 'removeAttrs', params: { attrs: ['data-name', 'id', 'class', 'style'] } },

    // Keep the viewBox (don’t remove it)
    { name: 'removeViewBox', active: false },

    // Add standardized attributes
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
}
