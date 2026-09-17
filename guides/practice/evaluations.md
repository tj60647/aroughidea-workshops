# Testing Your AI Prototype

How will you know your prototype is working as you intend? If it has more than one agent, how will you know each agent is? Trying it a few times and liking the answers isn't enough. You need **evaluations**: tests that check what your agent knows and how it reasons.

---

## Words You'll See

- **Evaluation (eval):** a test that gives your prototype a set input and compares its response with what you expected.
- **Design qual:** the response you expect for a given prompt. See [Documenting an AI Design](/practice/design-artifacts).
- **Test script:** the prompt, or series of prompts, you send in an evaluation.
- **Boundary:** a limit your agent must stay within.
- **Handoff:** the moment one agent passes work to another.
- **Regression:** something that used to work and stopped working after a change.

---

## Where to Aim

In bodystorming ([Workshop 2](/ai-as-material/)), things became unstable where responsibility blurred: where it wasn't clear who should do what, or when a task was done. Aim your evaluations at those points. They're where your prototype is most likely to break.

---

## The Three Evaluations Every Prototype Needs

Write at least these three:

1. **A boundary test.** Ask for something the system should refuse or avoid. Does it hold the line, and does it say so clearly?
2. **A role-handoff test.** For systems with more than one agent, give an input that should pass from one agent to another. Does the right agent pick it up, with the information it needs?
3. **A constraint stress test.** Combine a constraint with goals that pull against it, such as a word limit with a request that needs a long answer. Which one wins?

If your system has only one agent, replace the handoff test with a test of a handoff to the user: a moment when the agent should stop and ask instead of guessing.

---

## How to Structure an Evaluation

Write each evaluation with five parts:

| Part | What to write |
|---|---|
| **Prompt or script** | Exactly what you send, word for word. |
| **Expected behavior** | Your design qual: what a good response does. |
| **What actually happened** | The response, pasted or as a screenshot. |
| **Pass or fail** | Whether it met your design qual. |
| **What you'll change** | Your next move, if it failed. |

A template to copy:

```
Evaluation: [name]           System card version: [number]
Prompt or script:
Expected behavior:
What actually happened:
Pass or fail:
What I'll change:
```

---

## Design Failure or Computational Limit?

When a test fails, ask which kind of failure it is:

- **A design failure** is something your instructions or knowledge could fix. The agent ignored a rule you never wrote, or lacked information you didn't give it.
- **A computational limit** is something the model can't do reliably, whatever you write. Counting exact words and doing long arithmetic are common examples.

For a design failure, change your design. For a computational limit, change the design around it: pick a different model, move that job to ordinary code, or tell users what the prototype can't do.

---

## Logging and Iterating

- **Keep a log of each run,** with the version of your system card you tested. Your [process journal](/practice/journal) is a good place for it.
- **Run the same set of evaluations after every change,** not just the one you were trying to fix. That's how you tell whether a change actually helped, and whether it broke something else.
- **Run each evaluation more than once.** Models vary from run to run, so one pass isn't proof.

**Optional:** [promptfoo](https://www.promptfoo.dev/) turns your evaluations into a configuration file you can run after each change. See [Going Further](/going-further) for a project that uses it.

---

## Reflect

- Which evaluation failed first, and was it a design failure or a computational limit?
- Did a change that fixed one test break another?
- Which of your system card's rules still has no test?
