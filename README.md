# Net Ninja Typescript Masterclass
- following along with the Net Ninja Typescript Masterclass ((GitHub)[https://github.com/iamshaunjp/typescript-masterclass])

## Running code
- to run files without `tsconfig.json`:  `npx tsc {file_name}.ts`
- in directories with `tsconfig.json` run the following: `npx tsc --watch`
  - in a separte terminal run `node --watch  dist/index.js`
- for code compilation and bundling we use [Parcel](https://parceljs.org/docs/)

## Repo structure
- tree generated using `tree -L 3 -I node_modules . >> README.md`
.
├── README.md
├── basics
│   ├── dist
│   │   └── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── csv_writer
│   ├── dist
│   │   └── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── payments.csv
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
└── csv_writer_generics
    ├── dist
    │   ├── EmployeeWriter.js
    │   ├── PaymentWriter.js
    │   └── index.js
    ├── package-lock.json
    ├── package.json
    ├── payment.csv
    ├── src
    │   ├── EmployeeWriter.ts
    │   ├── PaymentWriter.ts
    │   └── index.ts
    └── tsconfig.json

10 directories, 22 files
