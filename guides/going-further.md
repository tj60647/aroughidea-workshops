# Going Further

Optional projects for after the introductory sequence. Each one starts from a question, and none of them is required. Pick the one whose question you most want answered, and keep notes in your [process journal](/practice/journal) as you go.

---

## Words You'll See

- **Model card:** a document published with a model that describes how it was made, what it was tested on and what it's for.
- **Local model:** a model that runs on your own computer, rather than on a company's servers.
- **Operator:** the person who runs a service and decides what its users can do.
- **Assertion:** a rule a test checks automatically, such as "the response is under 100 words."
- **Regression testing:** running the same tests after every change, to catch anything that used to work and stopped.
- **Docker:** a tool that runs software in a sealed package, so it works the same way on any computer.

---

## Future Quests

### 1. Where do the differences between models come from?

Read a dozen model cards on [Hugging Face](https://huggingface.co/models), across different sizes and different labs. Look for what is and isn't documented: the training data, the evaluations and the stated limitations.

Expect to find a large and uneven gap between how easy a model is to run and how much you can learn about it. Come back able to say what you don't know about the model you chose.

**Takes:** about an hour. **Needs:** no setup.

### 2. What does a model do without a provider in the way?

Install [Ollama](https://ollama.com/) and run a model on your own computer, with no API key and no company between you and the output. Try the prompts your hosted model refused.

The outcome isn't a working system but a recalibration. You stop treating refusal as a property of the material, and start seeing it as something a lab decided to build. [LM Studio](https://lmstudio.ai/) is an alternative to Ollama.

**Takes:** an evening. **Needs:** a reasonably capable laptop.

### 3. What does it feel like to be the one who chooses?

Deploy [LibreChat](https://www.librechat.ai/), connect it to a hosted provider and to your local Ollama, and give someone else access. Now you're the operator: you decide which models appear, who can use them, and what the floor is.

The interesting moment is handing the address to someone else, and realizing you set their options.

**Takes:** patience. **Needs:** Docker. Works best after [Workshop 5](https://prototypingtoolkit.aroughidea.com/).

### 4. Can my evaluations be more than clicking buttons?

Rebuild the prompts from your [evaluations](/practice/evaluations) in [promptfoo](https://www.promptfoo.dev/) ([source on GitHub](https://github.com/promptfoo/promptfoo)) as a configuration file with assertions. Then run it after every change to your system card.

The goal is to watch a pass rate move, rather than reading outputs one at a time. It's regression testing for behavior.

**Needs:** the terminal. Works best after [Workshop 5](https://prototypingtoolkit.aroughidea.com/), where a coding assistant can set it up with you.

### 5. What's underneath all of this?

Train a small language model from scratch with an "autoresearch"-style starter kit. In these kits, a coding agent runs experiments and edits the training code, guided by a research program you write in a plain text file. Run the loop by hand once before you let the agent do it.

The payoff is seeing tokenization and model architecture as decisions someone made, not facts about the world. Ask your coding assistant to help you find a current starter kit and check what it needs before you start.

---

## More to Explore

- **[npxskillui](https://github.com/amaancoderx/npxskillui).** Reverse-engineers a website's design system into a skill a coding assistant can use.
- **[Playwright](https://playwright.dev/).** Lets a coding assistant review your prototype with screenshots. See [Testing Your Prototype in a Browser with Playwright](https://prototypingtoolkit.aroughidea.com/playwright).

### Readings and Viewing

- Eryk Salvaggio, [A Critical Vocabulary for Artificial Intelligence](https://www.cyberneticforests.com/glossary-of-terms), a glossary from Cybernetic Forests.
- [Models Don't Go Rogue](https://mail.cyberneticforests.com/models-dont-go-rogue/), from Cybernetic Forests.
- 3Blue1Brown, [a video on transformers](https://www.youtube.com/watch?v=wjZofJX0v4M).

---

More workshops follow the introductory sequence. See [Later Workshops](/later).
