# Glossary

The words used across the workshops, in plain language. Where a workshop teaches a word, the entry links to it.

---

**Agent.** An AI model given a role, instructions and sometimes tools, so it acts in a particular way. [Workshop 2](/ai-as-material/)

**`AGENTS.md`.** A file of standing instructions that coding assistants read at the start of every session. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**API.** Short for application programming interface: a way for one program to ask another for something. Your prototype uses an AI provider's API to send context to a model and get text back. [Workshop 4](/sharing-prototypes/)

**API key.** A secret code that lets your app use a paid service, such as an AI model. Anyone who has it can spend your money, so keep it out of the browser and out of GitHub. [Workshop 4](/sharing-prototypes/)

**Attention.** The part of a transformer that lets each token take the other tokens in the context into account when the model predicts what comes next. [Workshop 1](/how-it-works/)

**Bodystorming.** Prototyping an interaction by acting it out with people, some playing the user and some playing the system. [Workshop 2](/ai-as-material/)

**Branch.** A separate line of work in Git, so changes don't affect your main version until you merge them. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**Case study.** The story of one project, told for someone who hasn't seen it: what you made, how you made it, and what it taught you. [Workshop 6](/presenting/)

**Chatbot.** A program you talk to in a conversation. Many AI chatbots are a language model with a chat window around it. [Workshop 3](/ai-as-tool/)

**Claude Code.** A coding assistant made by Anthropic. It can read your project, change files and run tools for you. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**Codex.** A coding assistant made by OpenAI. It does the same job as Claude Code. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**Coding assistant.** An AI tool that works inside your project: it proposes plans, writes and changes code, and runs commands while you review and steer. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**Commit.** A saved snapshot of your project's files in Git, with a short message about what changed. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**Completion.** The text a language model produces to continue the text it was given. [Workshop 1](/how-it-works/)

**Context.** Everything the model is given to predict from: the system instructions, the knowledge, the conversation so far and the user's latest message. [Workshop 1](/how-it-works/)

**Context window.** The most context a model can take in at once, measured in tokens. Anything beyond it is left out. [Workshop 1](/how-it-works/)

**Deployment.** One version of your project put online, so others can use it. Vercel makes a new deployment each time you push to GitHub. [Workshop 4](/sharing-prototypes/)

**Design surfaces.** The places where an AI product's design lives: system instructions, parameters, the model, knowledge and tools. [Workshop 1](/how-it-works/)

**Embedding.** A list of numbers that represents the meaning of a piece of text, so a computer can find texts with similar meanings.

**Environment variable.** A setting kept outside your code, such as an API key. On Vercel, you add them in your project's settings. [Workshop 4](/sharing-prototypes/)

**Evaluation (eval).** A test that gives your prototype a set input and compares its response with what you expected. [Testing Your AI Prototype](/practice/evaluations)

**Fine-tuning.** Further training of a model that has already been trained, on a smaller set of examples, to change how it behaves. [Workshop 2](/ai-as-material/)

**Foundation model.** A large model trained on a broad range of data, which other products and models are built on. [Workshop 2](/ai-as-material/)

**Function calling.** A way for a model to ask your program to run a specific function, such as a search or a calculation, and use the result. See also *tool use*.

**Git.** A program that tracks changes to a project's files, so you can save snapshots and go back to them. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**GitHub.** A website that stores Git projects online, so you can share them and connect them to services like Vercel. [Workshop 4](/sharing-prototypes/)

**Hallucination.** A model's response that sounds confident but is false or made up. It happens because the model predicts likely text, not true text.

**Knowledge base.** Reference material you give an agent to draw on, such as documents or notes. [Workshop 1](/how-it-works/)

**LLM.** Short for large language model: a model trained on large amounts of text to predict the next token. [Workshop 1](/how-it-works/)

**Model.** The trained system that makes the predictions. Different models give different results for the same context, so choosing one is a design decision. [Workshop 1](/how-it-works/)

**Neon.** A service that hosts databases online. The toolkit uses it when a prototype needs to remember things. [Workshop 5](https://prototypingtoolkit.aroughidea.com/database)

**Open-weights model.** A model whose trained numbers, its weights, are published, so anyone can download and run it on their own computer. See [Going Further](/going-further).

**Parameters.** Two meanings. In a model's settings, parameters such as temperature change how it responds. Inside a model, parameters are the billions of numbers learned during training. [Workshop 1](/how-it-works/)

**Playwright.** A free tool from Microsoft that lets a coding assistant open your prototype in a browser, click through it and take screenshots. [Workshop 5](https://prototypingtoolkit.aroughidea.com/playwright)

**Pretraining.** The first and largest stage of training, where a model learns to predict the next token from a huge amount of text. [Workshop 2](/ai-as-material/)

**Prompt.** A message you send to an AI model or tool. [Workshop 1](/how-it-works/)

**Push.** Sending your commits to GitHub. For projects connected to Vercel, pushing is how you publish. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)

**RAG.** Short for retrieval-augmented generation: finding relevant pieces of a knowledge base and adding them to the context before the model responds.

**Rate limit.** The most requests a service lets you make in a period of time. Past it, requests fail until the limit resets. [Workshop 4](/sharing-prototypes/)

**Reasoning model.** A model trained to work through a problem in steps before it gives its answer. [Workshop 2](/ai-as-material/)

**Repository.** A project tracked by Git. Your project on GitHub is a repository. [Workshop 4](/sharing-prototypes/)

**RLHF.** Short for reinforcement learning from human feedback: a training stage where people rate a model's responses, and the model is adjusted toward the ones they preferred. [Workshop 2](/ai-as-material/)

**Role card.** A one-page description of an agent's role: its purpose, rules, boundaries, what it doesn't do, its knowledge, and its inputs and outputs. [Workshop 2](/ai-as-material/)

**Sampling.** How a model picks the next token from the probabilities it predicted. It doesn't always pick the most likely one. [Workshop 1](/how-it-works/)

**System card.** A role card kept as a versioned record of your agent's design. [Documenting an AI Design](/practice/design-artifacts)

**System instructions.** Text that tells the model its role and rules before any user message. [Workshop 1](/how-it-works/)

**System prompt.** Another name for system instructions.

**Temperature.** A setting that controls how much randomness goes into sampling. Low temperature picks likely tokens; high temperature allows less likely ones. [Workshop 1](/how-it-works/)

**Token.** A piece of text a model reads and writes: often part of a word, sometimes a whole word or a punctuation mark. [Workshop 1](/how-it-works/)

**Tokenizer.** The program that splits text into tokens. Different models use different tokenizers. [Workshop 1](/how-it-works/)

**Tool use.** An agent's ability to use tools outside the model, such as search, code or other programs. [Workshop 1](/how-it-works/)

**Transformer.** The kind of neural network most language models are built on. Attention is its key part.

**Vector store.** A database of embeddings, used to find the pieces of text most similar in meaning to a question.

**Vercel.** A service that publishes websites and web apps from a GitHub repository. [Workshop 4](/sharing-prototypes/)

**Vercel Blob.** Vercel's service for storing files, such as images people upload. [Workshop 5](https://prototypingtoolkit.aroughidea.com/file-storage)

**Vibe coding.** Building software by describing what you want to an AI tool and steering it by the results, rather than writing the code yourself. [Workshop 3](/ai-as-tool/)

**Vocabulary.** The full set of tokens a model knows. The model can only read and write text made of those tokens. [Workshop 1](/how-it-works/)

**VS Code.** Visual Studio Code, a free code editor from Microsoft. The toolkit's coding assistants run inside it. [Workshop 5](https://prototypingtoolkit.aroughidea.com/)
