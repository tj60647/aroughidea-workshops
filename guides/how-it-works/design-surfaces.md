# The Design Surfaces

*This guide covers step 4 of the [TLDR](/how-it-works/tldr), with more explanation.*

---

## What This Is

A raw model only continues text. The products you use, such as ChatGPT or Claude, wrap the model in a set of decisions that turn it into a useful experience. Those decisions sit in a few places, which this workshop calls **design surfaces**. This guide names them and shows how they fit together. In the next guide, you change them yourself.

---

## Words You'll See

- **Design surface:** a place where a designer can shape how an AI application behaves.
- **System instructions** (also called a system prompt): text added to the context before the user's message, describing who the assistant is and how it should behave.
- **Knowledge base:** documents the application can draw on, such as PDFs, kept separate from the instructions.
- **Chunk:** a short passage cut from a document in the knowledge base.
- **Embedding:** a list of numbers that represents what a piece of text means, so the application can find passages with similar meaning.
- **Tool:** something outside the model that it can ask to use, such as a web search or a calculator.
- **Request:** the package of information an application sends to the model each time.
- **Agent:** in this workshop, an application built around a model, with its own instructions, settings and knowledge.

---

## Step 4: Name the Design Surfaces

An AI application has five design surfaces:

1. **System instructions:** the purpose, assumptions and boundaries of the assistant. This is where its role and tone are set.
2. **Parameters:** temperature, token limits, and the other runtime settings that shape the character of the output. You met temperature in **Temperature and Sampling**.
3. **Model selection:** which model you build on. It sets the ceiling for everything else.
4. **Knowledge base:** what's known, unknown or out of scope. It's authoritative content, kept separate from behavior.
5. **Tools:** things outside the model that it can use to reach its goal. This workshop doesn't explore them.

### How they fit together

Each time you send a message, the application builds a request and sends it to the model:

1. **Your message goes into the request.**
2. **Your message is also used to search the knowledge base.** The application turns it into an embedding, compares it with the embeddings of the knowledge chunks, and retrieves the chunks that are closest in meaning.
3. **The request holds the context and the settings.** The context is the system instructions, your message and the relevant chunks. The settings are the model's name and its parameters.
4. **The model completes the context,** using the loop from **The Next-Token Loop**.
5. **Tools sit beside the model.** If it needs one, it asks, and the result is added to the context.
6. **The response comes back to you.**

```text
your message ──► request ◄── relevant chunks ◄── knowledge base
                   │           (found by comparing embeddings)
                   │  context: system instructions + your message + chunks
                   │  settings: model name + parameters
                   ▼
                 model  ◄──►  tools
                   │
                   ▼
               response
```

**This is the application layer.** It's what ChatGPT, Claude and every other AI product are actually made of. You can see real examples: Anthropic publishes the [system prompts](https://platform.claude.com/docs/en/release-notes/system-prompts) its Claude apps use.

### Context is where the design lives

The model only ever sees the context. So if the context is what turns a raw model into a useful experience, what happens when you change it? That's what the next guide lets you find out.

---

## Checkpoint

You're ready to move on when you can:

- name the five design surfaces;
- say which one sets the tone (system instructions), which one sets the facts (knowledge base), and which one sets the ceiling (model selection);
- explain, in a sentence, what's in the request an application sends to the model.

---

## Reflect

- Read part of one of Anthropic's published system prompts. What does it decide on the user's behalf?
- Think of an AI tool you use. Which design surface do you think shapes your experience most?
- Why keep knowledge separate from behavior, rather than writing everything into the system instructions?

---

## Next

Continue with **Playing in Agent Studio** (TLDR steps 5 and 6).
