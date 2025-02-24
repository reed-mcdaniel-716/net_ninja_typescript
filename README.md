# Net Ninja Typescript Masterclass
- following along with the Net Ninja Typescript Masterclass ((GitHub)[https://github.com/iamshaunjp/typescript-masterclass])

## Running code
- to run files without `tsconfig.json`:  `npx tsc {file_name}.ts`
- in directories with `tsconfig.json` run the following: `npx tsc --watch`
  - in a separte terminal run `node --watch  dist/index.js`
- for code compilation and bundling we use [Parcel](https://parceljs.org/docs/)

## Repo structure
- tree generated using `tree -L 3 -I 'node_modules|dist|.parcel-cache' . >> README.md`


.
├── README.md
├── basics
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── csv_writer
│   ├── package-lock.json
│   ├── package.json
│   ├── payments.csv
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── csv_writer_generics
│   ├── package-lock.json
│   ├── package.json
│   ├── payment.csv
│   ├── src
│   │   ├── EmployeeWriter.ts
│   │   ├── PaymentWriter.ts
│   │   └── index.ts
│   └── tsconfig.json
└── pizza_shop_menu
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── create.html
    │   ├── index.html
    │   ├── styles
    │   └── ts
    └── tsconfig.json

11 directories, 22 files
