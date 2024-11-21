import { web } from "projen";
const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: "main",
  name: "simple-qr-code",
  projenrcTs: true,

  srcdir: 'src',

  deps: [
      'react-qr-code'
  ],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // tailwind: true,          /* Setup Tailwind CSS as a PostCSS plugin. */
});

project.setScript('dev','next dev --port 3737')

project.synth();