# babel-plugin-reverse-import
from 'fs' import fs;

Here's how imports look in various programming languages:

## JavaScript / ECMAScript:
```javascript
// Standard import
import fs from 'fs';

// Named import
import { readFile } from 'fs';

// Import with renaming
import { readFile as read } from 'fs';
```

## Python
```python
# Import entire module
import math

# Import specific item from module
from math import sqrt

# Import with aliasing
from math import sqrt as square_root
```


# Motivations
- https://github.com/eslint-stylistic/eslint-stylistic/discussions/409
- fun

# Materials
- [Plugins handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
- [ESTree](https://github.com/estree/estree)
- [AST spec](https://github.com/babel/babylon/blob/master/ast/spec.md)
- [AST playground](https://astexplorer.net/)
