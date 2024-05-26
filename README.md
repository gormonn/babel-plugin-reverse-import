# babel-plugin-reverse-import
Here's how imports look in various programming languages:

JavaScript / ECMAScript:
```javascript
// Standard import
import fs from 'fs';

// Named import
import { readFile } from 'fs';

// Import with renaming
import { readFile as read } from 'fs';
```

Python:
```python
# Import entire module
import math

# Import specific item from module
from math import sqrt

# Import with aliasing
from math import sqrt as square_root
```

Babel-pugin target:
```javascript
// Standard import
from 'fs' import fs;

// Named import
from 'fs' import { readFile };

// Import with renaming
from 'fs' import { readFile as read };
```

＃ Plans:
- In the short term, you need to implement a babel (and other) plugin.
- Long term, we need to add a new import method to the EcmaScript specification.


# Motivations
- https://github.com/eslint-stylistic/eslint-stylistic/discussions/409
- The order matters: it provides a more pleasant DX, simplifies manual code analysis, and reduces the cognitive load on the developer. Because for a code reviewer, where the import comes from is much more important than what is imported.

# Materials
- [Plugins handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
- [ESTree](https://github.com/estree/estree)
- [AST spec](https://github.com/babel/babylon/blob/master/ast/spec.md)
- [AST playground](https://astexplorer.net/)
