import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
   chromeWebSecurity: false,
   video: false,
   screenshotOnRunFailure: false,
   setupNodeEvents(on, config) {
    config.defaultCommandTimeout= 10000;
    config.responseTimeout= 20000;
    config.pageLoadTimeout= 60000;
     // e2e testing node events setup code
     return config;
    },
  },
});

