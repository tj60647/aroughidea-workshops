# Testing a Role in Agent Studio

*This guide covers step 6 of the [TLDR](/ai-as-material/tldr), with more explanation.*

---

## What This Is

Acting out a role shows you how people behave in it. Testing shows you how a model behaves with your description. [Agent Studio](https://agentstudio.aroughidea.com/) lets you set up an agent from your role card, talk to it, and change its design between tries. You don't write any code.

You are the designer here. The agent proposes replies; you judge them and decide what to change.

---

## Words You'll See

- **System instructions:** text the model reads before every conversation. It shapes how the agent behaves. The user never sees it.
- **Knowledge:** reference material the agent can draw on, such as facts about a subject.
- **Parameters:** settings that change how the model answers, such as which model it uses.
- **Session:** one conversation with the agent, from start to finish.

---

## Before You Start

- Your role card from [Writing a Role Card](/ai-as-material/role-card).
- A goal card from the [Bodystorming Kit](/ai-as-material/bodystorming-kit), so you can play the user.
- A computer with a web browser. Sign in to Agent Studio if it asks you to.

---

## Step 6: Test the Role in Agent Studio

### Set Up the Agent

1. Open [Agent Studio](https://agentstudio.aroughidea.com/) and set up a new agent for your letter-writing assistant.
2. **System instructions:** paste this, with each bracket replaced by the matching line from your role card:

   > Role name: [the role's name]
   >
   > Purpose: [what the assistant is for, in one or two sentences]
   >
   > Behavioral rules: [how it behaves: what it asks, how it sets its tone, when it stops]
   >
   > Boundaries: [what it stays within]
   >
   > Does not do: [what it never does]
   >
   > Required inputs: [what it must learn from the user before it writes]
   >
   > Outputs: [what it produces]

3. **Knowledge:** paste what your role card lists under Knowledge. Write it out as facts, not as a list of topics, and keep it to **one page** for now.

### Talk to It

Play the user from your goal card, the same way you did while bodystorming: answer honestly, but don't volunteer information. Start with a first message, for example:

> I need to write to my landlord. The heater is broken.

Partway through, give it the reveal note. Near the end, add the new constraint.

### Judge and Revise

Read the conversation back, and ask:

- Did it ask before it wrote?
- Did it follow each behavioral rule? Did it break a boundary?
- Did the letter use what you told it, or did it invent details?
- How did it handle the new constraint?

Pick **one** thing to change. Find the line in your role card that caused it, rewrite that line, update the system instructions, and start a new session. Changing one thing at a time shows you what each change did.

---

## Three Design Artifacts

When you present an agent, show three things:

1. **Design intent:** the system instructions, knowledge and parameters.
2. **System diagram:** the agent, with its inputs and outputs.
3. **Design quals:** the responses you expect for given prompts, so you can check each new version against them.

More on each: [design artifacts](/practice/design-artifacts) and [evaluations](/practice/evaluations).

---

## Checkpoint

- Your agent asks at least one question before it writes a letter.
- You can point to one reply you'd change, and the line of your role card that caused it.

---

## If Something Goes Wrong

**It writes a letter straight away, without asking anything.** Add a behavioral rule such as "Ask for the required inputs before writing." Then start a new session.

**It invents names, dates or facts.** Add a rule such as "Use only details the user gives. Ask for anything missing."

**Your knowledge is longer than a page.** Keep only what the agent needs to write this kind of letter well.

---

## Reflect

- How was the agent different from the person who played the assistant?
- Which line of your role card had the biggest effect?
- What did the agent do that you never wrote down?

---

## Next

**[Is This in the Right Place?](/ai-as-material/right-place)**, a checklist for sorting what goes in your system instructions, your knowledge and your design notes.
