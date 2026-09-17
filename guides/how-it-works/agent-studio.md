# Playing in Agent Studio

*This guide covers steps 5 and 6 of the [TLDR](/how-it-works/tldr), with more explanation.*

---

## What This Is

[Agent Studio](https://agentstudio.aroughidea.com/) is a sandbox for designing how an AI agent behaves. It puts the design surfaces from **The Design Surfaces** in front of you: system instructions, parameters, model selection and a knowledge base. It's deliberately easy to start with, and it works with several models. You'll meet the same way of working again later, in tools built for developers. For more on why it exists, read [Why Agent Studio? (PDF)](https://agentstudio.aroughidea.com/Computational%20Design%20-%20Agent%20Design%20Studio.pdf).

This is open-ended play. You aren't building toward a finished agent. You're feeling the difference each design surface makes, by changing one thing at a time and asking the same questions again. Your material becomes the knowledge, and your questions become the test.

The series this workshop opens is called "Mini-Me", and this guide shows why: the agent you build is a small stand-in for you.

---

## Words You'll See

- **Agent:** here, a model plus your instructions, settings and knowledge.
- **Bare model:** a model with no system instructions and no knowledge. It's the LLM alone.
- **System instructions:** text the model receives before every message, describing its role and how to behave.
- **Knowledge:** documents you upload for the agent to draw on.
- **Temperature:** the setting that controls how varied the output is. See **Temperature and Sampling**.
- **Making things up** (often called hallucinating): when a model writes something that sounds right but isn't supported by anything it was given.

---

## Before You Start

- Have your material ready, as described on the [start page](/how-it-works/): your résumé as a PDF, your paragraphs as a PDF, and your five getting-to-know-you questions.
- Open a notes document or a page in your [process journal](/practice/journal). You'll jot down what you notice as you go.
- **In a group,** each person builds their own agent, and you talk about what you're seeing as you work. **Alone,** write down what you notice after each change, so you can compare later.

Only upload material you'd be happy for a classmate to see.

---

## Step 5: Play in Agent Studio

Open [Agent Studio](https://agentstudio.aroughidea.com/). Move through these at your own pace. After each change, ask the same question again, so you can see what that change did.

### Start bare

Leave the system instructions empty and don't add any knowledge. Ask one of your five questions, for example:

> What do you enjoy doing on weekends?

This is the LLM alone. Notice who it answers as, and what it assumes.

### Add a system instruction

Even a sentence or two changes a lot. Add this to the system instructions, replacing `[your name]`:

> You are a stand-in for me, [your name], at a dinner party. Answer questions about me in the first person, warmly and briefly.

Ask the same question again. What changed? You just became an application designer.

### Change the temperature

Change the temperature, then ask the same question two or three times. Try a low value, then a high one. Connect what you see to the [temperature demo](https://llmexplorables.aroughidea.com/temperature/): the answers should be steadier at a low temperature and more varied at a high one.

### Add knowledge

Upload your résumé or your paragraphs as a PDF. Then ask something the PDF should answer, for example:

> Where did you work most recently?

And something it shouldn't:

> What's your favorite film?

Watch what the agent does. Does it use the knowledge, ignore it, or make things up around it? Did you need to change your system instructions for the knowledge to be "seen"? If the agent guesses, try adding this to its system instructions:

> If the answer isn't in your knowledge, say you don't know instead of guessing.

### Standardize your questions

Asking the same questions by hand gets slow. Agent Studio has editable buttons for prompts you send often. Put your five questions on them, so every version of your agent gets exactly the same test.

### Compare models

Choose a different model and click through your question buttons again. Try several models. Notice how much changes when only the model does.

---

## Step 6: Reflect

As you go, jot down two or three things you notice:

- What surprised you?
- What broke?
- What did the context make possible that the bare model couldn't do?

Then share one observation with someone: something that surprised you, broke, or worked in a way you didn't expect. **In a group,** go round and each share one. **Alone,** write it in your [process journal](/practice/journal), or post it wherever you discuss the workshop with others.

Finish with the big question: across system instructions, model selection, temperature and knowledge, where did the experience get shaped?

---

## Checkpoint

You're done when:

- you've asked the same question of a bare model, an agent with system instructions, and an agent with knowledge;
- you've seen at least one change caused by temperature and one caused by model selection;
- you've written down two or three observations.

---

## If Something Goes Wrong

**Agent Studio shows a warning that it can't connect.** The service that talks to the models may be down for a moment. Wait a minute and reload the page.

**The agent ignores your PDF.** Ask a question whose answer is clearly in it, using the same words as the PDF. If that doesn't work, tell the agent in its system instructions that it has knowledge about you and should use it.

**The PDF won't upload.** Try a shorter PDF, or one saved from a document rather than scanned from paper.

---

## Reflect

- Which single change made the biggest difference? Why do you think that was?
- Where did the agent make things up? What would have stopped it?
- Would you trust this agent to speak for you? What would need to change first?
- Which design surface would you like to explore further?

---

## Next

Do the [Practice](/how-it-works/practice) before the next workshop.
