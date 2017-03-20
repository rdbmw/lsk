import { config } from 'storybox';
config({
  options: {
    name: 'YourComponent',
  },
  modules: require('glob!./glob.txt'),
});

// import { wrapModules, config } from 'storybox';
// config({});
// wrapModules(require('glob!./glob.txt'));
