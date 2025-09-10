# 🎯 pick-word

**Random word selection that actually works. Clean, smart, bulletproof.**

*Intelligent randomness from the NebulaAI toolkit*

---

## ⚡ Get Started (Random perfection in seconds)

```bash
npm install @nebulaai/pick-word
```

## 🔥 Watch it handle messy data like a pro

```typescript
import { pickWord } from "@nebulaai/pick-word";

// Clean random selection from any word list
const colors = ["red", "blue", "green", "yellow"];
pickWord(colors);  // → "blue" (or any color)

// Handles messy real-world data automatically
const messyList = ["  apple  ", "", "banana", "   ", "cherry"];
pickWord(messyList);  // → "apple" (trimmed and clean)

// Raw mode for exact control
pickWord(messyList, { trim: false, dropEmpty: false });
// → Could return "  apple  " or even ""

// Custom cleaning strategies
const userInput = ["React ", "", "  Vue", "Angular  ", ""];
pickWord(userInput);  // → "React" (auto-cleaned)
```

## 🚀 Why smart devs choose this over array[random]

- **Data-aware**: Auto-cleans messy strings before picking
- **Edge case immune**: Never breaks on empty arrays or bad data
- **Flexible cleaning**: Control exactly how data gets processed
- **TypeScript ready**: IntelliSense that guides you right
- **Predictable**: Same cleaning rules every single time
- **Zero surprises**: Throws helpful errors instead of silent failures

## 🛠️ API That Thinks Ahead

```typescript
pickWord(words: string[], options?: PickWordOptions): string
```

| Parameter | Type | Default | What it does |
|-----------|------|---------|--------------|
| `words` | `string[]` | - | Your word list (messy or clean) |
| `options.trim` | `boolean` | `true` | Strip whitespace from words |
| `options.dropEmpty` | `boolean` | `true` | Remove empty/whitespace-only words |

**Smart defaults:** Cleans your data automatically so you get usable results every time.

---

## 🎯 Perfect for

- **User-generated content** → Handle messy form inputs like a boss
- **Config file parsing** → Clean up wonky whitespace automatically  
- **Random content generation** → Pick from lists without data anxiety
- **A/B testing** → Random selection from feature flags
- **Creative writing tools** → Word inspiration that just works
- **Game development** → Random events, names, descriptions

## 💡 Real-world scenarios

```typescript
// Loading messages from config (with potential whitespace issues)
const loadingTexts = [
  "Brewing coffee...",
  "  Feeding hamsters...  ",
  "",
  "   Calculating universe   "
];
const message = pickWord(loadingTexts);  // → Clean, usable text

// User tags from messy input  
const userTags = input.split(",");  // ["react ", "", "  typescript", ""]
const randomTag = pickWord(userTags);  // → "react" or "typescript"

// Feature flag selection
const experiments = ["newUI", "  oldUI  ", "", "betaUI"];
const activeExperiment = pickWord(experiments);  // → Always valid
```

## 🔥 Pro patterns

```typescript
// Preserve original data structure when needed
const keepOriginal = pickWord(wordList, { 
  trim: false, 
  dropEmpty: false 
});

// Ultra-strict cleaning for production
const cleanPick = pickWord(possiblyMessyData);  // Default behavior

// Custom validation with error handling
try {
  const word = pickWord(emptyArray);
} catch (error) {
  console.log("Need some words to pick from!");
  // Handle gracefully instead of crashes
}

// Chaining with other operations
const randomWord = pickWord(wordList);
const capitalizedWord = capitalizeFirst(randomWord);
const finalResult = `${capitalizedWord}Something`;
```

## 🛡️ Bulletproof by design

```typescript
// All of these scenarios are handled gracefully:

pickWord([]);                    // ❌ Throws helpful error
pickWord(["", "   ", ""]);       // ❌ Throws "No words available"  
pickWord(["  valid  "]);         // ✅ Returns "valid"
pickWord([" ", "test"], { dropEmpty: false }); // ✅ Might return " "

// No silent failures, no undefined returns, no surprises
```

## ⚡ Performance notes

- **Lazy processing**: Only cleans data when options require it
- **Memory efficient**: Processes in-place where possible  
- **Fast random selection**: Optimized Math.random() usage
- **No unnecessary copies**: Smart about when to duplicate arrays

---

## 📄 License

MIT © Jorge Gonzalez / Temporal AI Technologies Inc.

*Making random selection reliable, every single time*