# Temperature and Sampling

*This guide covers step 2 of the [TLDR](/how-it-works/tldr), with more explanation.*

---

## What This Is

People often say AI tools are "random": ask the same thing twice and you get two different answers. That randomness isn't an accident. It's controlled by a setting, and someone chose its value. In this guide, you change that setting yourself and watch what happens.

---

## Words You'll See

- **Sampling:** picking the next token at random, following the model's probabilities.
- **Temperature:** a setting that controls how adventurous that pick is. Low temperature almost always picks the most likely token. High temperature gives less likely tokens more of a chance.
- **Parameter:** a setting that shapes how a model produces its output, such as temperature or a length limit.
- **Application layer:** everything a product builds around the model: its instructions, settings, knowledge and tools. You'll meet it properly in **The Design Surfaces**.
- **Provider:** the company that runs a model and offers it to others, such as OpenAI, Anthropic or Google.

---

## Step 2: See Why It Isn't Random

1. Open the [temperature demo](https://llmexplorables.aroughidea.com/temperature/). It shows the model's twenty likeliest next tokens for a starting text, as a stack of bars. The taller the bar, the more likely the token.
2. Click the strip under the graph to choose a temperature, from 0 to 2. Watch the bars change: at a low temperature, the top token takes almost all the space; at a high one, the bars even out.
3. Click **Get Random Sample** to pick a token at the current temperature, then **Accept Selected Token** to add it to the text. Do this a few times at a low temperature.
4. Click **Reset Completion**, then build the text again at a high temperature. Notice how different the result is, and whether it still makes sense.
5. Click **Display All Temperatures** to see the same twenty tokens side by side at every temperature.

**In a group,** split the work: some people build the text at a low temperature and some at a high one, then compare what you got.

### What the demo shows

Remember the loop from **The Next-Token Loop**: the model scores every possible next token, then picks one at random. Temperature changes those scores before the pick. At a low temperature, the top choice wins almost every time, so the output is steady and predictable. At a high temperature, the choices are closer together, so the output is more varied, and eventually it stops making sense.

**The randomness you experience is a design choice.** In most applications, including the ones you use every day, you never see this setting; it's hidden. It can even change with your request, because an application may use different temperatures for different kinds of tasks. That's the application layer at work: decisions made on your behalf that shape the experience, invisible unless you know to look for them.

### A note on newer models

Some providers now manage these sampling settings themselves for their newer reasoning models. Instead of setting temperature directly, developers get higher-level controls, such as how much the model reasons, how long its answers are, and how it's prompted. The setting hasn't gone away; the provider manages it now. To see how each provider handles it today, check their documentation:

- [Google's Gemini API documentation](https://ai.google.dev/gemini-api/docs/gemini-3)
- [OpenAI's guide to its latest model](https://developers.openai.com/api/docs/guides/latest-model)
- [Anthropic's Messages API reference](https://platform.claude.com/docs/en/api/http/messages/create)

---

## Checkpoint

You're ready to move on when you can:

- describe what happened to the text at a low and at a high temperature;
- explain why "randomness" in an AI product is a choice someone made.

---

## Reflect

- For what kinds of tasks would you want a low temperature? For which would you want a high one?
- Think of an AI tool you use. What temperature do you think it uses? How could you tell?
- Who should decide this setting: the designer, the user, or the provider?

---

## Next

Continue with **Tokens and Vocabularies** (TLDR step 3).
