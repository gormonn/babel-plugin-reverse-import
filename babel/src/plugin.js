export default function ({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path) {
                const source = path.node.source;
                const specifiers = path.node.specifiers;

                const newSpecifiers = specifiers.map((specifier) => {
                    if (t.isImportDefaultSpecifier(specifier)) {
                        return t.importSpecifier(
                            t.identifier(specifier.local.name),
                            t.identifier('default')
                        );
                    } else if (t.isImportSpecifier(specifier)) {
                        return t.importSpecifier(
                            t.identifier(specifier.local.name),
                            t.identifier(specifier.imported.name)
                        );
                    } else if (t.isImportNamespaceSpecifier(specifier)) {
                        return t.importSpecifier(
                            t.identifier(specifier.local.name),
                            t.identifier('*')
                        );
                    }
                });

                const newImportDeclaration = t.importDeclaration(
                    newSpecifiers,
                    source
                );

                path.replaceWith(newImportDeclaration);
            },
        },
    };
};
