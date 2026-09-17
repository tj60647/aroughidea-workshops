# Changing and Sharing Your Prototype

*This guide covers steps 5 and 6 of the [TLDR](/sharing-prototypes/tldr), with more explanation.*

---

## What This Is

This is what the pipeline is for. Once it's set up, every change follows the same loop:

1. Describe a change to AI Studio.
2. Save it to GitHub.
3. Vercel redeploys.
4. Refresh your address.

**The goal isn't to make it good.** It's to try things and notice what happens. Quick changes, tested by real people, teach you more than one careful change nobody sees.

---

## Words You'll See

- **Redeploy:** Vercel builds and publishes your app again, with the latest changes.
- **Iterate:** make a change, test it, and use what you learned to decide the next change.
- **Design intention:** what you want the app to do for the person using it.

---

## Before You Start

- Your app is live on Vercel. See [Deploying to Vercel](/sharing-prototypes/deploy-to-vercel).

---

## Step 5: Change It and Watch It Update

### Describe a change

Try one of these three kinds of change. Send AI Studio one of the prompts below, or write your own.

**Change the tone.** For example, deadpan or brutalist:

> Change the tone of this app to deadpan. Keep the content and the way it works the same.

**Change a mechanic.** For example, add a level or a final boss:

> Add a final boss at the end of this app. Keep everything else the same.

**Swap the source.** Use the same prompt you built the app with, but a different PDF. Attach the new PDF, then send:

> Rebuild this app around the PDF I've attached, instead of the original one. Keep the same structure and style.

Try the result in AI Studio before you save it. If it isn't what you meant, say what's wrong and ask again.

### Save to GitHub

1. Press **Publish** at the top right, then **GitHub**. The panel shows that you have changes ready to push.
2. Press **Push changes to GitHub**, and wait until it says "GitHub & Google AI Studio are currently in sync".

### Watch Vercel redeploy

1. Open your project in Vercel. The newest deployment appears at the top, marked **Building**.
2. When it says **Ready**, refresh your address. You should see the change.

### When it works in AI Studio but not on Vercel

Tell AI Studio three things, in simple, direct language: what you expected, what happened instead, and where the app is deployed. For example:

> I am deploying this app on Vercel. I expected the button to open the next page, but nothing happens after deployment. Please identify and fix the problem.

Push the fix to GitHub, wait for Vercel, and try again.

---

## Step 6: Swap and Share

Swap addresses with someone and try each other's apps. If you're in a group, pair up. If you're working alone, send your address to a friend, and ask for theirs if they have one.

Be ready to talk about:

- **your design intention:** what you want the app to do for the person using it;
- **one thing the AI did surprisingly well;**
- **one thing you'd change next.**

While they try your app, watch without explaining. Notice where they hesitate or get stuck.

---

## Checkpoint

- You've made at least one change in AI Studio, and it appears at your Vercel address after a refresh.
- Someone else has tried your app, and you have one piece of feedback to act on.

---

## If Something Goes Wrong

**My change doesn't appear.** Check that AI Studio says it's in sync with GitHub. Then check that Vercel's newest deployment says **Ready**, not **Error**. Refresh the page again; your browser may be showing an older copy.

**Vercel's newest deployment failed.** Copy the error from Vercel, paste it into AI Studio, and ask it to explain and fix the problem. Then push again. Your address keeps showing the last working version until a new one succeeds.

---

## Reflect

- Which change surprised you most, and why?
- How did the other person's use of your app differ from how you use it?
- How long does one loop take, from describing a change to seeing it live? How would that change how you work?

---

## Next

[Getting an API Key](/sharing-prototypes/api-key) prepares an app that uses AI to work on Vercel.
