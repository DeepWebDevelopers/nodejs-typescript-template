# nodejs-typescript-template

If you want to install everything as is with all packages then run `yarn install` after cloning `git clone https://github.com/DeepWebDevelopers/nodejs-typescript-template` the repo. Then just run `yarn dev` and get to work!

**TIP**
before running `yarn install` (to get all the packages) edit the package file for the packages you want. This way it will only install your selected packages and not everything. To remove a packages just do `yarn remove <package>`

# Steps to install everything manually

I prefer yarn, but you can use node too.

1. `yarn init -y` creating package.json file
2. `yarn add -D typescript` adding type script support.
3. `npx tsc --init` creating typescript config files
4. `yarn add -D ts-node` allows ts to run node files with compiling support.
5. `yarn add -D ts-node-dev` (optional - does the same thing as #6) allows ts-node to watch active files.
6. `yarn add -D nodemon` (optional - does the same thing as #5)

# Next Steps?

Run `yarn build` to compile all the code and run it! - Javascript can be found in the dist folder.

This is just a demo package with a node and typescript setup pre-build. Feel free to delete or install anything you need.
