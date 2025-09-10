/**
 * Picks a random word from a list. Optionally filters out empties
 * and trims whitespace before picking.
 */
declare function pickWord(words: string[], { trim, dropEmpty }?: {
    trim?: boolean | undefined;
    dropEmpty?: boolean | undefined;
}): string;

export { pickWord };
