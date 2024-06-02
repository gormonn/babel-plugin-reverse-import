[Docs](https://github.com/babel-utils/babel-plugin-tester?tab=readme-ov-file#fixtures)

```
fixtures
├── first-test         # test title will be: "1. first test"
│   ├── code.js        # required
│   └── output.js      # required (unless using the `throws` option)
├── second-test        # test title will be: "2. second test"
│   ├── .babelrc.js    # optional
│   ├── options.json   # optional
│   ├── code.ts        # required (other file extensions are allowed too)
│   └── output.js      # required (unless using the `throws` option)
└── nested
    ├── options.json   # optional
    ├── third-test     # test title will be: "3. nested > third test"
    │   ├── code.mjs   # required (other file extensions are allowed too)
    │   ├── output.js  # required (unless using the `throws` option)
    │   └── options.js # optional (overrides props in nested/options.json)
    └── x-fourth-test  # test title will be: "4. nested > x fourth test"
        └── exec.js    # required (alternative to code/output structure)
```
