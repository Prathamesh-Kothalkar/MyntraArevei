import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const server = import.meta.env.VITE_BACKEND_SERVER;
// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     "/api/vi": "http://localhost:3000"
  //     "/vi": `${server}`
  //   }
  // },
  plugins: [react()],
})