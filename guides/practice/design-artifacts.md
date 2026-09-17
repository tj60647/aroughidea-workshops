# Documenting an AI Design

An agent's design is hard to see. Its behavior lives in text you wrote, knowledge you gave it and settings you chose, and none of that shows on the screen. To discuss and critique the design, with others or with yourself later, describe it in three artifacts.

---

## Words You'll See

- **Agent:** an AI model given a role, instructions and sometimes tools, so it acts in a particular way.
- **Artifact:** a document or picture that records part of a design.
- **Design intent:** what you want the agent to do, as written in its system instructions, knowledge base and parameters.
- **System instructions:** the text that tells the model its role and rules before any user message. Also called a system prompt.
- **Knowledge base:** reference material you give the agent to draw on.
- **Parameters:** settings that change how the model responds, such as temperature.
- **Design qual:** the response you expect for a given prompt: the standard a real response has to meet.

---

## The Three Artifacts

### 1. Design intent

What you put into the system:

- the **system instructions**;
- the **knowledge base**;
- the **parameters**, such as the model and its temperature.

Keep a copy of each version. When the agent's behavior changes, you'll want to know what you changed.

### 2. System diagram

A picture of the agent with its inputs and outputs: what the user gives it, what you give it, what it returns, and where it passes work to other agents or tools. A flowchart is enough. If you use a coding assistant, [Workshop 5](https://prototypingtoolkit.aroughidea.com/put-it-to-work) shows how to have it draw one from your code.

### 3. Design quals (evaluations)

The responses you expect for given prompts. They turn your intent into something you can check. See [Testing Your AI Prototype](/practice/evaluations) for how to write and run them.

---

## The System Card

A **system card**, or **role card**, is a one-page summary of an agent's role. It's usually the first thing someone reads about your design. Include:

| Part | What it says |
|---|---|
| **Role name** | What the agent is called. |
| **Purpose** | What it's for, in one or two sentences. |
| **Behavioral rules** | How it should act, such as its tone and what it asks before answering. |
| **Boundaries** | The limits it must stay within. |
| **Does not do** | Tasks it should refuse or hand off. |
| **Knowledge** | What it knows, and where that knowledge comes from. |
| **Required inputs** | What it needs from the user or from other agents. |
| **Outputs** | What it returns, and in what form. |

Copy this template into your journal:

```
Role name:
Purpose:
Behavioral rules:
Boundaries:
Does not do:
Knowledge:
Required inputs:
Outputs:
Version and date:
```

For a system with more than one agent, write one card for each agent, and show the handoffs between them in your system diagram.

---

## What Doesn't Go in the System

Some of what you know about the design doesn't belong in the system instructions or the knowledge base. That's your **design documentation**:

- why you made each decision;
- who made it;
- the tradeoffs;
- the alternatives you considered.

The model doesn't need this to do its job, and putting it in the instructions can confuse it. Keep it in your journal instead. [Workshop 2](/ai-as-material/) has a diagnostic checklist for deciding where each sentence belongs: the system instructions, the knowledge base or the design documentation.

---

## Reflect

- Could someone rebuild your agent from your three artifacts alone?
- Which rule on your system card is hardest to test?
- What decision would you most want to explain to a reviewer, and is it written down?

Next, turn your design quals into tests with **[Testing Your AI Prototype](/practice/evaluations)**.
