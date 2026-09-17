# How It Actually Works: The Context Completion Engine

*Workshop 1 of the introductory sequence.*

**A large language model does one thing: it predicts the next token from the text it's given, then does it again, and again.** That text is its **context**. Almost everything an AI product does, from its tone to what it knows, is decided by what goes into that context, and by a few settings around it. In this workshop, you play with interactive demos that each reveal one piece of what happens behind the scenes. Then you build a small agent of your own and change its context one piece at a time, to feel where the design lives.

This workshop opens the series "Mini-Me: Building System Behavior".

---

## Before the Demos: Where Are You Now?

Take a few minutes to answer these for yourself. Write your answers down; you'll look back at them later in your [process journal](/practice/journal).

- What is AI?
- What's been exciting or troubling you about AI?
- What have you been doing about it?
- How would you describe your hands-on use of AI right now?
- What gaps in your understanding of AI do you want to fill?

---

## What You'll Do

- Guess the next word a language model will write, and see the loop it runs.
- Change the "randomness" setting, and learn that it's a design choice.
- See how a model breaks text into tokens, and how vocabularies differ between models.
- Name the five design surfaces of an AI application.
- Build and test a small agent in [Agent Studio](https://agentstudio.aroughidea.com/), one design surface at a time.

---

## Before You Start

**You'll need:**

- A computer with a web browser and an internet connection.
- Time to explore. You can stop after any guide and pick up later.
- **Your own material to test with.** You'll give it to your agent in the last guide, so prepare it before you start:
  - your résumé as a PDF;
  - three paragraphs about your goals that you'd be happy to share with a classmate;
  - a paragraph about your superpower, something you're good at;
  - a paragraph about a hobby you enjoy, such as cooking, music or sports, with details like specific meals or instruments;
  - five questions you'd ask someone you were getting to know at a party, on a hike or over dinner.

Save the paragraphs as a PDF too, so you can upload them. Don't include anything you wouldn't show a classmate.

**Earlier workshops:** none. This is the first workshop in the series, and you don't need to know how to program.

**Alone or with others:** the demos work either way. In a group, the first demo becomes a game, and comparing notes in the last guide is half the fun.

---

## Two Ways Through

- **For a quick run-through, follow the [TLDR](/how-it-works/tldr).** It's one page of short activities, with a link or a prompt for each.
- **For a deeper understanding, follow the guides below, in order.** They explain what each demo shows and why it matters for design.

| TLDR steps | Guide | What it covers |
|---|---|---|
| 1 | [The Next-Token Loop](/how-it-works/next-token-loop) | The next-word game, and the loop every language model runs. |
| 2 | [Temperature and Sampling](/how-it-works/temperature) | Why the output varies, and who decides how much. |
| 3 | [Tokens and Vocabularies](/how-it-works/tokens) | What a model actually reads, and why it differs between models. |
| 4 | [The Design Surfaces](/how-it-works/design-surfaces) | The five places where an AI product's behavior is designed. |
| 5–6 | [Playing in Agent Studio](/how-it-works/agent-studio) | Building a small agent, changing one surface at a time, and reflecting on what changed. |

Then do the [Practice](/how-it-works/practice) before the next workshop.

---

## Next

**Workshop 2: [AI as a Material: Modeling Behavior](/ai-as-material/).** You'll learn how a model is made, then design an agent's behavior by acting it out.
