import { AI, SAMPLE } from "../config/app.config";
import { analyzeCode } from "../lib/gemini";
analyzeCode({ ...SAMPLE, roastLevel: "sharp", errorMessage: "TypeError: unsupported operand type(s) for +=: 'int' and 'list'" }).then(result => console.log(result.roast, `\nIssues: ${result.issues.length} // ${AI.model}`)).catch(error => { console.error(error); process.exit(1); });
