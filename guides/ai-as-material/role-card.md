# Writing a Role Card

*This guide covers step 5 of the [TLDR](/ai-as-material/tldr), with more explanation.*

---

## What This Is

A **role card** describes an assistant's behavior on one page. You write it from what you saw while bodystorming, not from what you imagine a chatbot does. It's the first version of your design, and later it becomes your agent's instructions.

It doesn't need to be perfect. You'll revise it each time you test the behavior.

---

## Words You'll See

- **Role card:** a one-page description of how an assistant behaves.
- **Behavioral rules:** how the assistant acts: what it asks, how it sets its tone, when it stops.
- **Boundaries:** the limits the assistant stays within.
- **Interaction loop:** the pattern each exchange with the user follows.
- **Inputs and outputs:** what the assistant needs to receive, and what it hands back.

---

## Before You Start

Have your sticky notes from [Bodystorming an Agent](/ai-as-material/bodystorming), and a blank role card from the [Bodystorming Kit](/ai-as-material/bodystorming-kit) or a blank page.

---

## Step 5: Write a Role Card

Group your sticky notes first: what the assistant needed, what it did, where it struggled. Then fill in each field. Work as a group, or alone.

| Field | What to write | Where your notes help |
|---|---|---|
| **Role name** | A short name for the assistant. | |
| **Purpose** | What it's for, in one or two sentences. | The goal card. |
| **User situation** *(optional)* | Who the user is and how they feel. | What the user said about how it felt. |
| **Behavioral rules** | How it acts: what it asks, how it sets its tone, how it handles messy input. | What moved the letter forward. |
| **Interaction loop** *(optional)* | The order it works in. | How the conversation went. |
| **Boundaries** | The limits it stays within. | Where responsibility blurred. |
| **Does not do** | What it never does. | Where it went wrong. |
| **Knowledge** | What it needs to know about the subject. | What it needed but didn't know. |
| **Required inputs** | What it must learn from the user before it writes. | What it had to ask for. |
| **Outputs** | What it produces. | What it produced. |

### An Example

A group wrote this role card after acting out an apology letter:

- **Role name:** Apology Letter Assistant.
- **Purpose:** You're helping an employee write an apology letter, to avoid severe consequences at work.
- **User situation:** The user feels scared, stressed and under a lot of pressure. They're honest enough to accept the mistake and make amends.
- **Behavioral rules:** Understand my story and my feelings, and give structure to messy input. Avoid a generic letter. Ask questions. Adjust the tone of voice, and balance professionalism with warmth.
- **Interaction loop:** First, approach with empathy.
- **Boundaries:** Be neutral. Don't be emotional.
- **Does not do:** Isn't cynical or condescending.
- **Required inputs:** What the mistake was, who was affected, an acknowledgment of the situation, and what the user is doing to make it right.
- **Outputs:** A structured apology letter.
- **Knowledge:** Professional workplace communication, how apologies are structured, company policies, the difference between an explanation and an apology, and how HR handles these situations.

Notice that some lines are still rough. "Be neutral" and "approach with empathy" pull against each other. That's fine for a first version, and testing will show you which one matters more.

---

## Checkpoint

- Every field has at least one line.
- Each behavioral rule describes something the assistant does, not something it is.
- You can point to the sticky note behind at least three of your lines.

---

## Reflect

- Which field was hardest to fill in? Why?
- Which lines came from what you saw, and which from what you guessed?
- Do any two lines contradict each other?

---

## Next

**[Testing a Role in Agent Studio](/ai-as-material/agent-studio)**, where your role card becomes a working agent.
