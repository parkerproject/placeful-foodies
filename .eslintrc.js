module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-console": ["error", { allow: ["warn", "error", "log"] }],
      "func-names": ["error", "never"],
      "jsx-a11y/anchor-is-valid": 0
      },
       "parserOptions":{
        "ecmaFeatures":{
          "experimentalObjectRestSpread" :true
        }
      },
      "globals": {
        "document": true,
        "window": true
      }
};
