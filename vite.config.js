import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy :{
  '/juice' : {
    target : "http://localhost:8000/juice",
    changeOrigin : true
  }
  }, 
  plugins: [react()],
})
