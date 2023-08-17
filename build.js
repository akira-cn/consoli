import esbuild from 'esbuild';

const options = {
  entryPoints: ['src/consoli.js'],
  outfile: 'dist/consoli.js',
  format: 'iife',
  globalName: 'consoli',
  bundle: true,
  inject: ['./src/inject-css.js'],
  loader: {
    '.css': 'text',
  },
};

if(process.env.mode === 'production') {
  esbuild.buildSync(options);
  esbuild.buildSync({
    ...options,
    format: 'esm',
    outfile: 'dist/consoli.esm.js',
    minify: true,
  });
} else {
  const ctx = await esbuild.context({
    ...options,
    format: 'esm',
    outfile: 'example/dist/consoli.esm.js',
  });
  const server = await ctx.serve({
    servedir: './example',
  });
  console.log(`Server is running at ${server.host}:${server.port}`);
}
