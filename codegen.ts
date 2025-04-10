import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://graphql.api.rye.com/v1/query',
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: { fragmentMasking: false },
      config: {
        dedupeFragments: false,
        defaultScalarType: 'unknown',
        enumsAsConst: true,
        scalars: {
          Percentage: 'number',
          Time: 'string',
          URL: 'string',
        },
        strictScalars: true,
        useTypeImports: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;
