# TLDR: How It Actually Works

Do these in order. Each one reveals one piece of what happens inside the AI tools you use every day; the last one puts those pieces in your hands.

1. **Play the next-word game.** Open the [completions demo](https://llmexplorables.aroughidea.com/completions/?mode=presentation) in LLM Explorables. Before each new word appears, write down your guess. Keep score with others if you're in a group.

   **Check:** you can say the loop in four words: context → predict → stop? → append. [More detail](/how-it-works/next-token-loop)

2. **See why it isn't random.** Open the [temperature demo](https://llmexplorables.aroughidea.com/temperature/). Build a few words of text at a low temperature, then reset and build them again at a high one.

   **Check:** you can explain why "randomness" is a setting someone chose, and why you usually never see it. [More detail](/how-it-works/temperature)

3. **See that tokens aren't words.** Paste a paragraph into the [OpenAI tokenizer](https://platform.openai.com/tokenizer), then try `red Red red. red red !red RED rEd rED reD red?`. Then browse a whole vocabulary in the [tokens demo](https://llmexplorables.aroughidea.com/tokens/), and see which models share a vocabulary in the [Tokenizer Map](https://llmexplorables.aroughidea.com/tokens-by-model/).

   **Check:** you can point to one word that became several tokens, and one change in capitals or punctuation that changed the tokens. [More detail](/how-it-works/tokens)

4. **Name the design surfaces.** An AI application wraps the model in five things: system instructions, parameters, model selection, a knowledge base, and tools.

   **Check:** you can say which of the five sets the tone, which sets the facts, and which sets the ceiling. [More detail](/how-it-works/design-surfaces)

5. **Play in Agent Studio.** Open [Agent Studio](https://agentstudio.aroughidea.com/) and change one design surface at a time, asking the same question after each change:

   - **Start bare,** with no system instruction and no knowledge. Ask one of your five questions, for example:

     > What do you enjoy doing on weekends?

   - **Add a system instruction,** even a sentence or two, and ask again:

     > You are a stand-in for me, [your name], at a dinner party. Answer questions about me in the first person, warmly and briefly.

   - **Change the temperature,** and ask again.
   - **Add knowledge:** upload your résumé or your paragraphs as a PDF. Ask something the PDF answers, and something it doesn't.
   - **Standardize your questions** on Agent Studio's editable buttons.
   - **Compare models** on the same question.

   **Check:** you've seen the same question answered at least three different ways, and you know which change caused each. [More detail](/how-it-works/agent-studio)

6. **Reflect.** Write down two or three things you noticed: what surprised you, what broke, and what the context made possible that the bare model couldn't do. Share one with someone else if you can.

   **Check:** you can say where, across system instructions, model, temperature and knowledge, the experience got shaped. [More detail](/how-it-works/agent-studio#step-6-reflect)

**Before the next workshop,** do the [Practice](/how-it-works/practice).
