# Tokens and Vocabularies

*This guide covers step 3 of the [TLDR](/how-it-works/tldr), with more explanation.*

---

## What This Is

We've been saying the model predicts the next "word". That isn't quite true. A model reads and writes **tokens**, and a token often isn't a whole word. In this guide, you see how text is split into tokens, look at an entire vocabulary of them, and compare the vocabularies of different models.

---

## Words You'll See

- **Token:** a piece of text a model treats as one unit. It can be a whole word, part of a word, a space plus a word, or a punctuation mark.
- **Tokenizer:** the tool that splits text into tokens.
- **Vocabulary:** the full set of tokens a model knows. The model can only ever write tokens from its vocabulary.
- **Encoding:** a particular tokenizer and its vocabulary. Different model families use different encodings.

---

## Step 3: See That Tokens Aren't Words

This step has three parts.

### Tokens are not words

1. Open the [OpenAI tokenizer](https://platform.openai.com/tokenizer).
2. Paste in this text:

   ```text
   Once upon a time, there was a little girl named Goldilocks. She lived in a small cottage in the woods with her parents. One day, while out exploring, Goldilocks stumbled upon a beautiful cottage that she had never seen before. Curiosity getting the best of her, Goldilocks decided to take a closer look. She walked up to the cottage and noticed that the door was slightly ajar. Without thinking, she pushed the door open and stepped inside.
   ```

3. Look at the colored blocks. Each block is one token. Compare the number of tokens with the number of characters. Find a word that became more than one token. "Goldilocks" is a good place to look.
4. Now replace the text with this:

   ```text
   red Red red. red red !red RED rEd rED reD red?
   ```

5. Look at how many different tokens one word became. Capital letters, punctuation and the space before a word all change the token.

The token counts you see depend on which model you choose in the tokenizer.

### Token sets are not words

1. Open the [tokens demo](https://llmexplorables.aroughidea.com/tokens/) in LLM Explorables.
2. It shows every token in one vocabulary as a field of colored boxes: the `cl100k_base` encoding, which has 100,277 tokens. Some OpenAI models use it.
3. Explore it, and hover over a box to see its token and its ID number. Look for tokens that are whole words, pieces of words, numbers, code, and text in other languages.

This is everything that model can say. Every answer it writes is built from these pieces.

### There are many models and vocabularies

1. Open the [Tokenizer Map](https://llmexplorables.aroughidea.com/tokens-by-model/). It's a network of every model on OpenRouter, a service that offers many providers' models in one place, linked to the vocabulary each model uses.
2. Look for vocabularies that many models share, and models that sit on their own.
3. Click any model or vocabulary to see the evidence for the link, and where it comes from.
4. Open the [OpenRouter rankings](https://openrouter.ai/rankings) to see which models people actually use.

Different vocabularies split the same text differently. That matters because cost and length limits are counted in tokens, and because a vocabulary can suit some languages better than others. In the OpenAI tokenizer, you can see this by choosing a different model and pasting the same text.

---

## Checkpoint

You're ready to move on when you can:

- point to one word that became several tokens;
- point to one change in capitals or punctuation that changed the tokens;
- explain why two models might count the same text differently.

---

## If Something Goes Wrong

**The OpenAI tokenizer won't load, or asks you to sign in.** Try another browser. The other two parts of this step don't need it.

**The tokens demo is blank for a while.** It downloads the whole vocabulary first, about 1.7 MB. Wait for it to finish loading.

---

## Reflect

- Which split surprised you most?
- If a model reads "red" and "Red" as different tokens, what might that mean for how it treats your writing?
- Your language may take more tokens than English to say the same thing. What might that mean for the people who use it?

---

## Next

Continue with **The Design Surfaces** (TLDR step 4).
