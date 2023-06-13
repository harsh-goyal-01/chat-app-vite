
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve, parse } from 'path';
// import * as fs from 'fs';
// import svgr from 'vite-plugin-svgr';
// import eslint from 'vite-plugin-eslint'
// import define  from 'vite-plugin-define';
// import { loadEnv } from 'vite'
// const rootPaths = fs.readdirSync('src').reduce((out, item) => {
//   const parsed = parse(item);
//   return { ...out, [parsed.name]: resolve('src', item) };
// }, {});

// export default defineConfig({
//   plugins: [svgr(), react(),eslint()],
  // resolve: {
  //   alias: rootPaths,
      
  // },
  // resolve: {
  //   alias: [
  //     {
  //       find: "common",
  //       replacement: resolve(__dirname, "src/common"),
  //     },
  //   ],
  // },
  
  // envPrefix: 'REACT_APP',
  
// });
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd())

//   const processEnvValues = {
//     'process.env': Object.entries(env).reduce(
//       (prev, [key, val]) => {
//         return {
//           ...prev,
//           [key]: val,
//         }
//       },
//       {},
//     )
//   }

//   return {
//     plugins: [react(),svgr(),eslint()],
//     define: processEnvValues
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    legacy()],
})
