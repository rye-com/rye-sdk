import fs from 'node:fs';

import { Project, SourceFile, SyntaxKind } from 'ts-morph';

async function main() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

  const project = new Project({});
  project.addSourceFilesAtPaths('dist/constants.js');

  // Substitute `RYE_SDK_VERSION` export value with the package version
  const sourceFile = project.getSourceFileOrThrow('constants.js');
  const ryeSDKVersionExport = findExportsAssignmentOrThrow(sourceFile, 'RYE_SDK_VERSION');
  ryeSDKVersionExport.getRight().replaceWithText(`'${packageJson.version}'`);
  sourceFile.saveSync();
}
main();

function findExportsAssignmentOrThrow(sourceFile: SourceFile, property: string) {
  const binaryExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.BinaryExpression);
  for (const binaryExpression of binaryExpressions) {
    const left = binaryExpression.getLeft().asKind(SyntaxKind.PropertyAccessExpression);
    if (!left) {
      continue;
    }

    // Skip initial chain of `exports.X = exports.Y = void 0;`
    const right = binaryExpression.getRight();
    if (right.getKind() === SyntaxKind.BinaryExpression) {
      continue;
    }

    const children = left.getChildren();
    if (children.length !== 3) {
      continue;
    }

    const exports = children[0].asKind(SyntaxKind.Identifier);
    const dot = children[1].asKind(SyntaxKind.DotToken);
    const access = children[2].asKind(SyntaxKind.Identifier);

    if (!exports || !dot || !access) {
      continue;
    }
    if (exports.getText() !== 'exports' || access.getText() !== property) {
      continue;
    }

    return binaryExpression;
  }

  throw new Error(`Could not find exports assignment for ${property}`);
}
