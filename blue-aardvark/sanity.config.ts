// import {defineConfig, isDev} from 'sanity'
// import {visionTool} from '@sanity/vision'
// import {deskTool} from 'sanity/desk'

// import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
// import { schemaTypes } from './schemas/'

// const devOnlyPlugins = [getStartedPlugin()]

// export default defineConfig({
//   name: 'default',
//   title: 'blue-aardvark',

//   projectId: '6inmic3m',
//   dataset: 'production',

//   plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

//   schema: {
//     types: schemaTypes,
//   },
// })



import {deskTool} from 'sanity/desk'
import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

import {schemaTypes} from './schemas/index'

const devOnlyPlugins = [getStartedPlugin()]

 export default defineConfig({
  name: 'default',
  title: 'blue-aardvark',
  projectId: '6inmic3m',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],
  schema: {
    types: schemaTypes,
  },
})