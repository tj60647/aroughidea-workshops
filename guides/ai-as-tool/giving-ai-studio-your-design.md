# Giving AI Studio Your Design

*This guide covers steps 5–7 of the [TLDR](/ai-as-tool/tldr), with more explanation.*

---

## What This Is

In this guide, you build a letter-writing assistant twice. First, you ask AI Studio for one with no guidance, and see what it decides on its own. Then you give it your design: what the app is for, how someone will use it, and how its agent should behave. Finally, you ask for a system diagram inside the app, so anyone using it can see how it works.

Comparing the two versions shows what your design adds.

---

## Words You'll See

- **Agent:** the part of the app that uses an AI model to respond to the user.
- **Design intent:** a short statement of what the app is for, who it's for, and what a good result looks like.
- **User journey:** a story of one person using the app, from arriving to leaving with what they came for.
- **Role card:** the card from Workshop 2 that describes an agent's purpose, rules, boundaries, knowledge, inputs and outputs.
- **System instructions:** standing text the agent's model reads before every exchange. Your role card becomes these.
- **Test script:** a fixed list of prompts you use to test the agent, the same way every time, with a note of what a good reply looks like.
- **System diagram:** a picture of how the app works, not what it looks like.

---

## Before You Start

- You've built an app in AI Studio. See **Building a Basic App in AI Studio**.
- Have your role card from Workshop 2 ready to paste. See **AI as a Material: Modeling Behavior** if you don't have one yet.
- Open your [process journal](/practice/journal), to note what each version does.

---

## Step 5: Ask for a Letter-Writing Assistant with No Guidance

Start a new app in AI Studio, and send AI Studio this:

> Build a letter-writing assistant.

Don't add anything else. The point is to see what AI Studio does without your guidance on behavior.

**What happens:** AI Studio makes its own choices about the screen, the features and how the agent behaves. Try the app. Write a short letter with it.

In your journal, note:

- which fields and buttons it made;
- how the agent responds: its tone, how much it asks, and what it refuses;
- anything it assumed about who the user is.

---

## Step 6: Give AI Studio Your Design

Now build the same kind of app again, with your design. Do the writing first. It takes longer than the building.

### Write your design intent

A few sentences: what the app is for, who it's for, and what a good result looks like. For example: "Helps someone who writes rarely turn rough notes into a polite, clear letter they'd be happy to send."

### Describe a user journey

Tell the story of one person using the app. Who are they? What do they arrive with? What do they do, step by step? What do they leave with? There are many frameworks for this. A short paragraph is enough. You can write more than one journey.

### Write a test script

List five to ten prompts you'll use to test the agent, and what a good reply to each looks like. Include:

- an ordinary request;
- a request that's outside the agent's role;
- a request that pushes against one of its rules.

**Testing Your AI Prototype** has more ideas for tests.

### Send the design

Start a new app. Fill in the brackets, paste your role card where it says to, and send AI Studio this:

> Build a letter-writing assistant app with an AI agent inside it.
>
> Design intent: [what the app is for, who it's for, and what a good result looks like]
>
> User journey: [the story of one person using the app, from arriving to leaving with what they came for]
>
> System instructions: use the role card below as the agent's system instructions. Don't add behavior it doesn't describe.
>
> [paste your role card]
>
> Test script: I'll test the agent with these prompts, so make sure the app lets me try each one: [your test prompts]
>
> Before you build, tell me in a few sentences how you understood the design, and ask me about anything that's unclear.

**What happens:** AI Studio replies with its understanding of your design, and maybe some questions. Read it carefully. This is your best chance to catch a misunderstanding. Answer its questions, correct anything it got wrong, then tell it to build.

### An example of where a design can lead

One version of this app, called "Letterly", has:

- From and To fields;
- a tone selector;
- a length choice: Brief, Standard or Detailed;
- a box for rough notes;
- a choice of output language;
- an optional style match;
- a "Writers' Room";
- a Generate Draft button;
- a chat for refining the draft.

It's an example, not a target. Your app should follow your role card, and may look quite different.

---

## Step 7: Ask for a System Diagram

A system diagram helps you check that the app works the way you think it does. It also helps anyone who uses the app understand what the agent is given. Send AI Studio this:

> Add an info button to the app. When someone clicks it, show a simple system diagram of how the app works, including the agent: what the user puts in, what the agent is given, and what comes back. Use everyday words.

Open the info button and read the diagram. Does it show your role card as the agent's instructions? Does it match what you designed? If not, tell AI Studio what's wrong.

---

## Checkpoint

- You have two letter-writing apps: one with no guidance, and one with your design.
- AI Studio's summary of your design matched what you meant, after any corrections.
- Your designed app has an info button with a system diagram that names the agent.

---

## If Something Goes Wrong

**AI Studio built the app without summarizing first.** Ask: "Before we go on, tell me how you understood my design." Then correct anything that's wrong.

**The agent ignores my role card.** Ask AI Studio: "Show me where the app gives the agent its system instructions, and what they say." If the text isn't your role card, ask it to use your role card exactly.

**The agent doesn't respond at all.** Send AI Studio this:

> The agent in the app doesn't respond. Explain the problem in plain language, then fix it.

**The diagram doesn't match the app.** The diagram is generated too, and can be wrong. Tell AI Studio which part is wrong, and ask it to check the diagram against the app.

---

## Reflect

- What did AI Studio decide in the no-guidance version that your design changed?
- What did it decide in both versions that you never specified?
- Was anything in your role card unclear to AI Studio? Would a colleague have found it unclear too?
- Did the system diagram teach you anything about your own app?

Write your answers in your [process journal](/practice/journal).

---

## Next

Continue with **Testing and Revising Your Agent**, where you run your test script and change the app through conversation.
