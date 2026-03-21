// ============================================================
//  utils/print.js
//  Shared console-output helper for coding questions.
// ============================================================

/**
 * Prints a formatted coding-question block to the console.
 * @param {number} questionNumber
 * @param {string} description
 * @param {*}      input   – pass null when there is no input
 * @param {*}      output
 */
export function printCodingQuestion(questionNumber, description, input, output) {
    console.log(`Question ${questionNumber}`);
    console.log("Description:", description);

    if (input === null || input === undefined)
        console.log("{ Input: No input }");
    else
        console.log({ Input: input });

    console.log({ Output: output });
    console.log("---------------------------------------------\n");
}