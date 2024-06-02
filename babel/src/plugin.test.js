import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pluginTester } from 'babel-plugin-tester';
import yourPlugin from './plugin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

pluginTester({
    plugin: yourPlugin,
    fixtures: path.join(__dirname, 'fixtures')
});
