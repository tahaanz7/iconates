export default {
  plugins: [
    // Removes width and height to make it responsive (use viewBox)
    'removeDimensions',

    // Converts shapes (rects, circles, etc.) into <path> elements
    'convertShapeToPath',

    // Removes hardcoded fill/stroke
    { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },

    // Adds standardized attributes like Heroicons/Lucide
    { name: 'addAttributesToSVGElement', params: {
      attributes: [
        { fill: 'none' },
        { stroke: 'currentColor' },
        { 'stroke-width': '2' },
        { 'stroke-linecap': 'round' },
        { 'stroke-linejoin': 'round' },
        { viewBox: '0 0 24 24' }
      ]
    }}
  ]
}
