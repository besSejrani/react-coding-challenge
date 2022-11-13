# Configuration

## Environment Variables

!!! warning

    Environment Variables are sensible information injected just before a server is starting.

    Don't forget to add the environment variable file to .gitignore, otherwise bots will scrape GitHub for sensible information and use your aws credentials, for example, for mining Bitcoin.

=== ".env"

```sh
# You can chose another port than 4000, but changes must also be made in the client .env file
PORT=4000

# MongoDB Atlas credentials, change the values in UPPERCASE
MONGO_ATLAS=mongodb+srv://USER:PASSWORD@HOST/DATABASE?retryWrites=true&w=majority

# Can stay as it is, used only with docker-compose in development
MONGO_PRODUCTION=mongodb://api_user:api1234@mongodb/api_prod_db?authSource=api_prod_db&readPreference=primary&appname=MongoDB%20Compass&ssl=false
MONGO_DEVELOPMENT=mongodb://api_user:api1234@mongodb/api_dev_db?authSource=api_dev_db&readPreference=primary&appname=MongoDB%20Compass&ssl=false

# Cross-Origin Resource Sharing configuration value, http://localhost:3000
CORS_DOMAIN=

```

<hr/>

## Eslint & Prettier

Having structured and organized code isn't a nice have, but it's a must. With the help of Eslint, a javascript linter and Prettier, a file formater, it is possible to achieve structured code organization, from solo developer to large teams.

=== "Install development dependencies"

```bash
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

=== "Install Airbnb Style Guide"

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

The Airbnb style guide is a popular set of rules defined by Airbnb for Javascript

=== "Create Eslint Configuration Fike"

```bash
eslint --init
```

=== "Eslint Configuration"

```yaml
env:
  browser: true
  es2021: true
extends:
  - "eslint:recommended"
  - "plugin:@typescript-eslint/recommended"
  - "airbnb"

parser: "@typescript-eslint/parser"
parserOptions:
  ecmaVersion: 12
  sourceType: module
plugins:
  - "@typescript-eslint"
  - "prettier"
rules:
  {
    "quotes": ["error", "double"],
    "no-unused-vars": "warn",
    "no-console": "off",
  }
```

<hr/>
