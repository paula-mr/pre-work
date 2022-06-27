# End-to-end Testing

## Headless testing
In the frontend folder, you can run
### `npx cypress run --spec cypress/e2e/Custom/`
Runs all the tests in Electron headless mode. 

You will get a textual report on the console and also the complete execution video, step by step, on the /videos folder. 

If any test fails, you will also be able to see a screenshot of the error on the /screenshots folder.

## Normal testing
You can also run manually tests manually, seeing them in real-time using
### `./node_modules/.bin/cypress open`
After following the steps there, an Electron running window will open with the _specs_, or test suites for the application.

You can click in any spec to run a test manually. You may also interact with the running application to debug something.