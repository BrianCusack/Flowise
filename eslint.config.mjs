import pluginJs from "@eslint/js";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginMarkdown from "eslint-plugin-markdown";
import tsParser from "@typescript-eslint/parser";

export default [
    pluginJs.configs.recommended,
    {
        ignores: ["**/node_modules", "**/dist", "**/build", "**/package-lock.json"],
    },
    {
        plugins: {
            "unused-imports": pluginUnusedImports,
            "prettier": pluginPrettier,
            "react": pluginReact,
            "react-hooks": pluginReactHooks,
            "jsx-a11y": pluginJsxA11y,
            "markdown": pluginMarkdown,
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                browser: true,
                node: true,
                es6: true,
                "cypress/globals": true,
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "warn",
            "unused-imports/no-unused-vars": ["warn", {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            }],
            "no-undef": "off",
            "no-console": ["warn", {
                allow: ["warn", "error", "info"],
            }],
            "prettier/prettier": "error",
        },
    },
];