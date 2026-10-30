import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Required because this project is hosted inside the /Healthy-bite/ repository path.
  base: "/Healthy-bite/",
  plugins: [react()],
});
