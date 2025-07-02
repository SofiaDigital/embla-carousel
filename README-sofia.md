# Our own version

1. Merge latest tag to sofia branch.
  * Resolve conflicts if necessary
  * At least the version will be in conflict in `package.json`
1. Go to `./packages/embla-carousel` -folder and update version in `package.json` to the latest tag with added dash of sofia
  * Remember to stay in this folder when running commands from below
1. run `yarn`
1. commit the changes and tag it similarly as previous `-sofia` tags
  * annonated tag is better so `--follow-tags` works
1. test that the build still works with `yarn build`
1. push changes to github.
  * might require `--no-verify` to avoid tests being ran
  * also the tag with `--follow-tags`
1. `npm publish`
