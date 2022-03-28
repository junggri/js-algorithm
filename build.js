require("esbuild")
   .build({
      entryPoints: ["src/index.js"],
      outdir: "dist",
      bundle: true,
      platform: "node",
      watch: true,
   }).catch((e) => {
   console.log(e);
   process.exit(1);
});
