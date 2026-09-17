# The Next-Token Loop

*This guide covers step 1 of the [TLDR](/how-it-works/tldr), with more explanation.*

---

## What This Is

A large language model writes one small piece of text at a time. It looks at everything written so far, predicts what comes next, adds it, and looks again. Everything else an AI product does is built on top of that loop.

In this guide, you play a game: guess the next word before the model does. Then you look at the loop the model ran to produce it.

---

## Words You'll See

- **Large language model (LLM):** a program trained on a huge amount of text to predict what text comes next.
- **Context:** all the text the model is given at one time. It's the only thing the model "sees".
- **Token:** the small piece of text a model reads and writes. A token is often a word or part of a word. The guide **Tokens and Vocabularies** looks at them closely.
- **Training data:** the text a model learned from.
- **Stopping condition:** the rule that ends the loop, such as a special "end" token or a length limit.

---

## Before You Start

- Have a way to write down a word: paper, sticky notes or a notes app.
- **In a group:** one person hosts the demo on a shared screen and keeps score on a whiteboard or a shared document. Everyone else writes their guess privately before it's revealed.
- **Alone:** write your guess before each new word appears, and count how often you're right.

---

## Step 1: Play the Next-Word Game

1. Open the [completions demo](https://llmexplorables.aroughidea.com/completions/?mode=presentation) in LLM Explorables. It sends a starting text to a completion model, gpt-3.5-turbo-instruct, which simply continues whatever text it's given. The demo shows the twenty likeliest next tokens, with their probabilities.
2. Read the starting text.
3. Before the next token is added, write down the word you think comes next.
4. Add the next token, and compare. You can pick a token yourself, or let the demo add the likeliest one every second. Then guess again.
5. Play several rounds.

Notice when your guesses are easy and when they're hard. Easy guesses usually come where the text is common and predictable, such as a familiar phrase. Hard ones come where many words could fit.

### What the game shows

LLMs build sequences of text that resemble their training data. Given some text, the model predicts the next token, adds it to the text, and predicts again. It keeps looping until a stopping condition is met:

```text
context → predict → stop? → append → (back to context)
```

That's the whole engine. The model has no plan for the full answer. It makes one prediction at a time, and each one becomes part of the context for the next.

### A closer look at "predict"

Each time round the loop, the model does more than pick a word:

1. **Given the current context, it predicts the next token:**
   - it gives every possible next token a score, called a **logit**;
   - it adjusts those scores using settings such as **temperature**;
   - it turns the adjusted scores into probabilities, so they add up to 100%;
   - it picks one token at random, following those probabilities.
2. **If that token, or the text so far, meets a stopping condition, it stops.**
3. **Otherwise, it appends the token to the context and goes back to step 1.**

The step "picks one token at random" is why the same question can get different answers. The next guide, **Temperature and Sampling**, shows how that randomness is controlled.

---

## Checkpoint

You're ready to move on when you can:

- say the loop in four words: context → predict → stop? → append;
- explain why the model doesn't "plan" a whole answer before it writes.

---

## Reflect

- Where were your guesses closest to the model's? Why do you think that was?
- If the model only ever continues the context, what would change its answer?
- What does "resembles its training data" mean for text that's unusual or new?

---

## Want to Go Deeper?

- [3Blue1Brown's video on large language models](https://www.youtube.com/watch?v=wjZofJX0v4M) explains the loop visually. It's part of the [Practice](/how-it-works/practice); it's best watched with others on a big screen.
- ["Compression is Intelligence"](https://www.youtube.com/watch?v=l6DKRf-fAAM) is another video, about the link between predicting text well and intelligence.

---

## Next

Continue with **Temperature and Sampling** (TLDR step 2).
