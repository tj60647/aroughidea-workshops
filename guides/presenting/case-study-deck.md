# Building Your Case-Study Deck

*This guide covers step 1 of the [TLDR](/presenting/tldr), with more explanation.*

---

## What This Is

Your deck is a short **case study**: the story of one project, told so that someone who has never seen it can quickly understand what you made, how you made it and why it matters. You present it with your demo, and you can adapt it for your portfolio later.

Imagine you're in an interview, walking someone through the project step by step. Keep it concise: use just enough words to explain the key ideas, and let the visuals carry most of the weight. Aim for pages polished enough to go straight into a design portfolio.

**The limit is 7 slides.** A limit forces you to choose, and choosing is part of the work.

---

## Words You'll See

- **Case study:** the story of one project: the problem, the process, the result and what you learned.
- **Deck:** a set of slides.
- **System diagram:** a picture of how your system works: what goes in, what the AI model does, and what comes out.
- **System card:** a short description of your agent's role, rules and boundaries. See [Documenting an AI Design](/practice/design-artifacts).
- **Evaluation:** a test that checks whether your prototype behaves as you intended. See [Testing Your AI Prototype](/practice/evaluations).
- **Iteration:** one round of changing something, trying it and looking at the result.
- **Demo link:** a web address where someone can open and try your prototype.

---

## Before You Start

Gather these in one place:

- your process journal;
- your system card, your system diagram and your evaluation results;
- screenshots of your prototype, including one output from before a revision and one from after it;
- the live link to your prototype. Open it in a private browser window to check that it works signed out.

Use any slide tool you like: Google Slides, Keynote, PowerPoint, Figma or another.

---

## Step 1: Build Your Deck

### What your deck should convey

Your deck covers two things:

- **Your process and iteration:** your design intent, your experiments, your system instructions, your evaluations and the changes you made. Use your judgment about how much space this needs.
- **Your final prototype, its outcome and your reflections:**
  - **Final prototype:** a demo link to what you made.
  - **Outcome:** what was the result, and did it work?
  - **Reflections:** what did you learn, and what would you do differently?

Somewhere in the deck, include:

- your system diagram;
- an excerpt of your system card;
- before-and-after outputs that show one revision you made;
- what broke, and what you did about it;
- screenshots of your prototype;
- a link to the live system.

### A 7-slide outline

This is one way to fit everything in. Change it if your project needs a different shape.

| Slide | What it shows |
|---|---|
| 1. Concept and context | What you made, who it's for, why you made it, your goals and your inspiration. |
| 2. Design intent | An excerpt of your system card: the role, its rules and its boundaries. |
| 3. How it works | Your system diagram. |
| 4. Process | Your experiments and evaluations, and what they told you. |
| 5. Before and after | One revision: the output before, the output after, and what you changed. Include what broke and what you did about it. |
| 6. Final prototype and outcome | A screenshot, the demo link (a QR code helps people in the room), and whether it worked. |
| 7. Reflections | What you learned, and what you'd do differently. Add links to your code or demo video here. |

**Optional, and recommended:** link to more, such as your code on GitHub and a [demo video](/presenting/demo-video) of your prototype.

### Plan the outline with an AI tool

An AI chat tool, such as ChatGPT, can help you turn your journal into an outline. You decide what stays. Paste your journal, or a link it can open, and send:

> Here is my process journal. Propose an outline for a case-study deck of at most 7 slides about my prototype: what I made and why, how I made it, and what I learned. For each slide, suggest a headline, the screenshot or diagram that should carry it, and no more than 30 words of text. Use only what's in my journal. If something is missing, ask me instead of inventing it.

Read the outline critically. The tool doesn't know which moments mattered most to you, so move, cut and rewrite until it tells your story.

### Take screenshots with your coding assistant

If you set up the [Prototyping Toolkit](https://prototypingtoolkit.aroughidea.com/), your coding assistant can take clean screenshots for you. Ask Claude Code or Codex:

> Use Playwright to take screenshots of my live app on computer and phone screens, and save them in a docs/screenshots folder. Name each file after the screen it shows.

You can also take screenshots yourself: press `Cmd + Shift + 4` on a Mac, or `Windows + Shift + S` on Windows.

### Make it clear

- **One idea per slide.** Put that idea in the headline, as a short sentence.
- **Visuals first.** Use a screenshot, a diagram or a before-and-after pair on each slide, with a few words beside it.
- **Make text readable from a distance.** If you have to shrink the text to fit, cut words instead.
- **Show real outputs.** Don't retype or tidy up what your prototype said. Screenshots are more convincing.
- **Put the demo link where people can use it.** Add a QR code for people in the room, and the full address for people reading later.

### Test it on a reader

Before you present, check that the deck makes sense to someone who hasn't seen your project. Ask a friend to read it and explain it back to you. If nobody is available, paste your slide text into an AI chat tool and send:

> Here is my slide outline. Read it as someone who has never seen my project. Then tell me in three sentences what I made, how I made it and why it matters. Name the one thing you didn't understand.

Where the explanation doesn't match what you meant, fix that slide.

---

## Checkpoint

Your deck is ready when:

- it has no more than 7 slides;
- it includes your system diagram, a system card excerpt, a before-and-after pair, what broke and a live link;
- the live link opens your prototype in a private browser window;
- someone, or an AI tool, can explain back what you made, how and why.

---

## If Something Goes Wrong

**My story doesn't fit in 7 slides.** Cut the process first. Keep one experiment that changed your direction, and move the rest to your journal or portfolio.

**Nothing broke.** Something did; you may not have tested hard enough. Run the three evaluations in [Testing Your AI Prototype](/practice/evaluations) and show the one that failed.

**My live link needs a sign-in.** Some Vercel settings ask visitors to sign in. Open the link in a private window to check. If it asks for a Vercel sign-in, see [Workshop 4](/sharing-prototypes/), or ask your coding assistant to explain why.

**I don't have a before screenshot.** Look through your journal and your chat history in the tool you used. If you can't find one, show your system card before and after the revision instead.

---

## Reflect

- Which slide was hardest to make, and why?
- What did you leave out? Would the story be clearer or weaker with it?
- If a reader could see only one slide, which should it be?

---

## Next

If you'd like to record a demo video, continue with **[Making a Demo Video](/presenting/demo-video)**. It's optional. Otherwise, go to **[Presenting and Giving Feedback](/presenting/presenting-and-feedback)**.
