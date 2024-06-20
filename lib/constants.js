import { createRequire } from "module";
const require = createRequire(import.meta.url);
const tokens = require( "../tokens.json");

export default tokens;
