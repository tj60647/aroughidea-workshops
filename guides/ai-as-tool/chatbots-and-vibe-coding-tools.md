# Chatbots and Vibe-Coding Tools

*This guide covers steps 2–3 of the [TLDR](/ai-as-tool/tldr), with more explanation.*

---

## What This Is

A chatbot gives you text as text. A vibe-coding tool gives you text as an application. In this guide, you see that both come from the same loop: a model completing a context. Then you look at the code behind an app that a model generated.

---

## Words You'll See

- **Code:** text written in a programming language, which a computer can run.
- **React and JavaScript:** a popular programming language for web pages (JavaScript), and a popular way of building web apps with it (React).
- **CSS:** the language that sets how a web page looks: colors, fonts and layout.
- **Renderer:** the part of a tool that runs code and shows the result as a working app.
- **Artifact:** a piece of content a chat tool makes and shows beside the chat, such as a document or a small app. ChatGPT calls its version Canvas.
- **Application layer:** the product people use, built around a model: the screen, the instructions, and the code that assembles the context.

---

## Before You Start

You'll need a chatbot you can use in your browser, such as ChatGPT. A free account is enough.

---

## Step 2: Give a Model a Code Prompt

In Workshop 1, you gave a model "Once upon a time," and it continued the story. The model is a machine that generates text, one piece at a time, based on what came before. It doesn't matter what the text is about.

So try giving it a different beginning. Send this to a chatbot, such as ChatGPT:

> I need code for a basic app that draws a blue circle using React and JavaScript, no CSS.

**What happens:** the reply is text. It's the code for a small app, not a blue circle. The code describes a circle 50 units in radius, filled blue. Nothing draws it yet, because nothing runs the code.

That's the whole trick of a vibe-coding tool. **It's a chatbot whose output happens to be code, sent to a renderer that runs it.**

### The same loop, twice

A chatbot and a vibe-coding tool are both application-layer products, built the same way:

1. The context is assembled: system instructions, knowledge, the user's input and parameters.
2. The LLM completes the context.
3. A response comes out.

The model doesn't know or care whether its output lands in a chat bubble or runs as an app. It produces text either way. The difference is what the product around it does with that text.

---

## Step 3: Look Under the Hood

Open these two examples. In each, switch between the running app and its code:

- [A ChatGPT Canvas example](https://chatgpt.com/canvas/shared/69f802d37b308191be2b850a065790e7)
- [The Agent Studio vibe-coding demo](https://agentstudio.aroughidea.com/w/vibe-coding-demo)

As you look, notice:

- **The code is the answer.** What you see running is what the model wrote, passed to a renderer.
- **A small change in the code changes the app.** Find a color, a word or a number in the code, and find where it shows up in the app.
- **The instructions shape the code.** If the Agent Studio demo shows its system instructions, read them. Look for what tells the model to answer with code, and in what form.

**Optional viewing on generative interfaces**, where a model makes a custom interface for each request:

- [Generative UI](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/) (Google Research)
- [Generative UI examples](https://generativeui.github.io/)

---

## Checkpoint

- Your chatbot replied to the blue-circle prompt with code, not a picture.
- In at least one of the examples, you found the code behind the running app.
- You can explain, in a sentence, how a vibe-coding tool differs from a chatbot.

---

## If Something Goes Wrong

**The chatbot drew the circle instead of showing code.** Some chatbots run code automatically and show the result. Look for a "code" or "show code" option, or ask the chatbot: "Show me the code you used."

**A shared link won't open.** Shared links can expire. Use the Agent Studio demo instead, or ask your chatbot to make a small app in its canvas or artifact view.

---

## Reflect

- Before this guide, where did you think the app came from? Where do you think it comes from now?
- What in the context decided that the answer should be code?
- If the model doesn't know where its output goes, who is responsible for what happens to it?

Write your answers in your [process journal](/practice/journal).

---

## Next

Continue with **Building a Basic App in AI Studio**, where you make your first app by describing it.
