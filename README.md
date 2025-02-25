# Net Ninja Typescript Masterclass
- following along with the Net Ninja Typescript Masterclass ((GitHub)[https://github.com/iamshaunjp/typescript-masterclass])

## Running code
- to run files without `tsconfig.json`:  `npx tsc {file_name}.ts`
- in directories with `tsconfig.json` run the following: `npx tsc --watch`
  - in a separate terminal run `node --watch  dist/index.js`
- to serve JSON data as though it were a backend API we use [json-server](https://github.com/typicode/json-server?tab=readme-ov-file)
  - to serve the data: `npm run db-server`
- for code compilation and bundling we use [Parcel](https://parceljs.org/docs/)
  - to use: `npm run dev-server`

## Repo structure
- tree generated using `tree -L 6 -I 'node_modules|dist|.parcel-cache' . >> README.md`

```
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
    ├── db.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── create.html
    │   ├── index.html
    │   ├── styles
    │   │   └── index.css
    │   └── ts
    │       ├── create.ts
    │       ├── index.ts
    │       ├── models
    │       │   └── Pizza.ts
    │       └── services
    │           └── DataResource.ts
    └── tsconfig.json

13 directories, 28 files
```
