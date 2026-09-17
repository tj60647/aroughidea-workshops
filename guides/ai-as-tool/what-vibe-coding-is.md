# What Vibe Coding Is

*This guide covers step 1 of the [TLDR](/ai-as-tool/tldr), with more explanation.*

---

## What This Is

This guide has two parts. First, a short recap of Workshops 1 and 2: the parts of an AI system you design, and how each one puts text into the context. Then, what "vibe coding" means, and why it's a way of prototyping. The rest of this workshop builds on both.

---

## Words You'll See

- **LLM (large language model):** a model that predicts the next piece of text from the text it's given.
- **Context:** all the text the model reads before it answers.
- **Completion:** the text the model produces. The user sees only this.
- **System instructions:** standing text the model reads before every exchange. Also called the system prompt. Some companies call it the developer message or metaprompt.
- **Knowledge:** material the system can draw on when it answers, such as your documents.
- **RAG (retrieval-augmented generation):** selecting passages from your material and putting them into the context before the model answers.
- **Vector store:** a search that compares meaning rather than exact words.
- **Tool:** a capability the model can call, such as a web search. Also called function calling.
- **Vibe coding:** making software by steering an AI that writes the code.

---

## The Design Surfaces, Again

An LLM is a context completion engine. It reads the context and continues it. So the design of the context matters.

Several parts of the system put text into the context. The model and its settings decide how that text is read:

- **Model selection:** which model runs the system.
- **Parameters:** settings such as temperature.
- **System instructions:** the agent's role, scope, boundaries, tone and policy. This includes when to look something up, when to use a tool, what the output should be, and what to refuse.
- **Knowledge:** what material is available to the system.
- **Tools:** which tools the model can call, and how each one is described.

The user puts text into the context too. You don't control what they type. You shape how the system responds to it. What comes back is the completion.

### System Instructions

You've already written system instructions. Your role card from Workshop 2, written out, becomes standing text that the model reads with every exchange.

The role card is one template. Others include the persona pattern, role prompting and "anatomy of a prompt" checklists. They ask for different fields. But in every case, you're writing standing text, and the model reads all of it, every time.

**The golden rule,** from Anthropic's documentation: show your prompt to a colleague who knows little about the task, and ask them to follow it. If they'd be confused, the model will be too.

For more:

- [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) (Anthropic)
- [Giving Claude a role with a system prompt](https://docs.anthropic.com/en/docs/give-claude-a-role) (Anthropic)
- [Who Controls the Conversation? User Perspectives on Generative AI (LLM) System Prompts](https://doi.org/10.1145/3772318.3791726) (a research paper from CHI 2026)

### Knowledge and RAG

You've already used this too. You gave Agent Studio documents, asked a question, and the answer came from your material. In between, something searched your documents, picked the passages it judged relevant, and put them into the context before the model saw your question.

The search can work in different ways. Agent Studio uses a vector store, which compares meaning rather than words. It could also be a keyword search, a query to a table, or a whole document pasted in. What makes it RAG is the selection step, not how the selection is done.

**Try it:** open [Finding chunks similar to a prompt](https://llmexplorables.aroughidea.com/embeddings/) in LLM Explorables. Compare "A circle is not a square." with "A square is not a circle." The two sentences mean opposite things, but they score as very similar, because they use the same words about the same subject. For a larger picture of how meanings are arranged, explore the [TensorFlow Embedding Projector](https://projector.tensorflow.org/).

### Tools

A tool is what an agent can do besides generate text. It could be a search, a calculation, a database query, an email, or even another agent.

Here is how a tool call happens:

1. The model reads the context and generates text, as usual.
2. Sometimes the text it generates takes the form of a request: a tool's name and the details it needs.
3. The code around the model watches for that form. When it appears, generation stops.
4. The code checks the request, runs the tool, and adds the result to the context.
5. The model continues, now with the result in front of it.

What makes it a tool is that some of what the model produces gets acted on instead of read.

**Registering a tool** is separate from writing the instructions. You give the model a list of what it can call. Each tool has a name, a plain-language description of what it does and when to use it, and a description of the details it needs. The model reads that description when it decides whether a tool fits. A thin description is the most common reason a tool goes unused. A tool the instructions mention, but nobody registered, does nothing. Not every model can use tools, and models differ in how reliably they do.

**Try it:** the [Agent Studio tool demo](https://agentstudio.aroughidea.com/w/tool-demo) gives an agent web search as a tool. For more depth, read the [tool use section of Anthropic's API primer](https://platform.claude.com/docs/en/claude_api_primer#tool-use).

### What This Adds Up To

- Designing an agent means designing its behavior.
- That behavior responds to what people do. So far, that has meant text.
- A designer describes an agent with three documents: the design intent, the system card and the evaluations. See **Documenting an AI Design**.

---

## Step 1: Read What "Vibe Coding" Means

Andrej Karpathy, an AI researcher and educator who worked at OpenAI and Tesla, coined the term "vibe coding" in 2025. Instead of writing every line of code yourself, you steer an AI as it writes software. You prompt it, test what it makes, give feedback, and ask it to fix errors.

**It's a way of prototyping.** It's more like sketching than doodling. You start with an intent, but the intent can change as you look at what you've made and think about it.

**It opens prototyping to more people.** People who don't code can now build working prototypes that used to need programming knowledge.

**You're still the designer.** The tool proposes and writes the code. You decide what the app is for, what to keep, and what to try next.

---

## Checkpoint

You're ready to move on when you can answer these in a sentence or two:

- Which parts of an AI system put text into the context?
- What makes something RAG?
- What makes something a tool?
- How is vibe coding like sketching?

---

## Reflect

- Which design surface have you changed most so far? Which have you not touched?
- Think of a prototype you've made by hand. What would change if you made it by describing it instead?
- Where does your intent usually change when you sketch? Would that happen the same way with an AI tool?

Write your answers in your [process journal](/practice/journal).

---

## Next

Continue with **Chatbots and Vibe-Coding Tools**, which shows that a vibe-coding tool is a chatbot whose answer happens to be code.
