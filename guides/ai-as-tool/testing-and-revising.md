# Testing and Revising Your Agent

*This guide covers step 8 of the [TLDR](/ai-as-tool/tldr), with more explanation.*

---

## What This Is

Your first version is a sketch. In this guide, you test your agent the same way each time, change one thing through conversation with AI Studio, and test again. You do this at least three times. Each round teaches you something about your design, and about how the tool reads it.

---

## Words You'll See

- **Test script:** a fixed list of prompts you use to test the agent, the same way every time.
- **Iteration:** one round of testing, changing and testing again.
- **Version:** the app as it is after one iteration. Record each one.
- **System card:** a record of an agent's design: its role card and what you know about how it behaves.

---

## Before You Start

- You've built the letter-writing assistant with your design. See **Giving AI Studio Your Design**.
- Have your test script from that guide ready.

---

## Step 8: Test and Revise at Least Three Times

Each round has three parts.

### Test

In the app's preview, type each prompt from your test script into the agent, one at a time. Use the prompts exactly as written, so you can compare rounds fairly. For each reply, note in your journal:

- whether it did what a good reply should;
- whether it followed your role card;
- anything that surprised you.

### Change one thing

Pick the most important problem. Then describe one change to AI Studio, filling in the brackets:

> Change the app: [what you saw, and what you want instead]. Keep everything else the same, and tell me what you changed.

For example: "Change the app: when I asked for a poem, the agent wrote one. I want it to say it only helps with letters. Keep everything else the same, and tell me what you changed."

Change one thing per round. If you change several at once, you won't know which change did what.

**Decide where the change belongs.** Some problems are about behavior, so the fix goes in the role card, the agent's system instructions. Others are about the screen or the features, so the fix goes in the app. Say which you mean.

### Record the version

After each round, write down:

- what you changed, and why;
- what AI Studio says it changed;
- the role card as it is now.

This record is your system card for that version. **Documenting an AI Design** explains how to keep it.

Then start the next round with the same test script.

---

## Checkpoint

- You've done at least three rounds of testing and changing.
- For each round, you can say what you changed and what it did to the agent's behavior.
- You have a record of each version.

---

## If Something Goes Wrong

**A change broke something that used to work.** Tell AI Studio what broke: "The Generate Draft button stopped working after the last change. Fix it, and keep the new behavior." If AI Studio offers a way to go back to an earlier version, you can use that instead.

**The agent behaves differently each time I run the same prompt.** That's normal: a model's replies vary. Run each important test more than once, and look for patterns, not single replies.

**AI Studio keeps changing things I didn't ask about.** Start your message with "Change only this:" and name what must stay the same.

---

## Reflect

- Which change made the biggest difference? Was it to the role card or to the app?
- Which problems kept coming back? What does that tell you about your design?
- Did your test script still test the right things by the third round? What would you add?
- How did it feel to design by conversation? When were you steering, and when were you following?

Write your answers in your [process journal](/practice/journal).

---

## Next

Continue with **Practice: AI as a Tool**, and try the same process with a different design goal.
