# Is This in the Right Place?

*This guide covers step 7 of the [TLDR](/ai-as-material/tldr), with more explanation.*

---

## What This Is

An agent's design lives in three places, and each one does a different job:

- **System instructions** *execute*: they tell the system how to behave.
- **The knowledge base** *asserts*: it states what is known.
- **Design documentation** *accounts*: it explains why you made each choice.

A sentence in the wrong place causes trouble. An explanation in the system instructions can confuse the model. An instruction hidden in the knowledge can make the agent behave in ways you can't trace. A decision nobody wrote down can't be revised later. This checklist helps you sort each sentence.

---

## Words You'll See

- **Knowledge base:** the reference material an agent draws on. In Agent Studio, it goes in the agent's knowledge.
- **Design documentation:** your record of what you decided, why, and what else you considered. The agent never reads it.
- **Tradeoff:** what you gave up to get something else.

---

## Step 7: Sort Each Sentence into the Right Place

Take one sentence at a time from your system instructions and your knowledge. Run it through the three checks below. Move it if it fails.

### System Instructions (Execute)

**Ask:**

- Does this sentence shape how the system behaves?
- Would removing it change what the agent will or won't do?
- Is it stated as a fact about how the system works, not as an explanation?

**Red flags:**

- It mentions *why* a choice was made.
- It explains reasoning or tradeoffs.
- It gives advice rather than limits.
- It uses "because", "so that" or "we decided".

**If it passes,** it belongs in the system instructions. If not, it doesn't belong there.

### Knowledge Base (Assert)

**Ask:**

- Does this stand on its own, outside the context of an assistant?
- Does it state what's known, unknown or out of scope?
- Could it appear in a reference book, an FAQ or a manual?

**Red flags:**

- It describes steps, procedures or actions.
- It tells the assistant how to behave.
- It includes intent, tone or guidance.
- It explains why something was included or left out.

**If it passes,** it belongs in the knowledge base.

### Design Documentation (Account)

**Ask:**

- Does this explain why decisions were made?
- Does it record who made them, the tradeoffs and the alternatives?
- Would it help someone revise or critique the system later?

**Red flags:**

- The agent needs it while it runs.
- It's a fact the system must rely on.
- It's a limit written as a reason rather than a condition.

**If it passes,** it belongs in the design documentation.

### Try It

Where does each sentence belong? Answers are below.

1. "Ask what the mistake was before writing anything."
2. "An apology names the mistake, its effect, and what will change."
3. "We added a warm tone because testers felt judged by the first version."
4. "Be neutral so that the letter doesn't sound emotional."
5. "HR usually keeps written apologies on file."

**Answers:**

1. System instructions. It shapes behavior.
2. Knowledge base. It stands on its own, like a line from a writing guide.
3. Design documentation. It says why, with "because".
4. It's mixed. The limit, "Keep the letter neutral in tone.", goes in the system instructions. The reason goes in your design documentation.
5. Knowledge base. It's a fact the agent may rely on.

---

## Checkpoint

- Your system instructions contain no "because", "so that" or "we decided".
- Your knowledge contains no instructions to the assistant.
- You have a design document, even a short one, with at least one decision and its reason.

---

## Reflect

- Which sentences were hardest to place?
- Did moving a sentence change how your agent behaved? Test it in [Agent Studio](https://agentstudio.aroughidea.com/) to find out.
- What would someone need from your design documentation to improve your agent without you?

---

## Next

**[Practice: Iterating on Your Agent](/ai-as-material/practice)**, where you keep improving your design before the next workshop.
