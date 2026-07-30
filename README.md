# Playwright-Demo
 -----------------------------------------
npm init playwright@latest

npx playwright init-agents --loop=vscode


Execution Command
-----------------------------
npx playwright test 

npx playwright test --headed

npx playwright test ./tests/verifyErrorMessage.spec.js --headed

npx playwright test ./tests/verifyErrorMessage.spec.js --headed --project="chrome"

npx playwright test -g "Valid Login" --headed


npx playwright codegen

npx playwright codegen --help



Execute Windows batch command (define in jenkins)
---------------------------------
cd D:/xampp/htdocs/playwright-demo

npm install

npm playwright install


Execute Windows batch command (define in jenkins)
---------------------------------
cd D:/xampp/htdocs/playwright-demo

npx playwright test tests/exaple.spec.js  --project=chromiun --headed


Parametries Command (define in jenkins)
------------------------
npx playwright test tests/%SpecFile%  --project=%Browser% --headed

SpecFile Parameters
-------------------
example.spec.js

handleWindows.spec.js

Please provide which specific file you want to run

Browser Parameters
-------------------
chromium

firefox

webkit

all

Please select which browser you want to use for execution
