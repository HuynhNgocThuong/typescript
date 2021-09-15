# Install typescript and ts-node
yarn global add typescript ts-node ts-lib @types/node
npm i -g typescript ts-node ts-lib @types/node

# Install jest yarn
yarn add --dev jest typescript ts-jest @types/jest
yarn ts-jest config:init

# Install jest npm
npm install --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init

# Init project package.json
npm init

#  Initial ts config file
tsc --init