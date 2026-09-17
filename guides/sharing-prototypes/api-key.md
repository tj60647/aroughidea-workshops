# Getting an API Key

*This guide covers step 7 of the [TLDR](/sharing-prototypes/tldr), with more explanation.*

*Accurate as of September 2026. If a page looks different, look for one with a similar name.*

---

## What This Is

Inside AI Studio, your agent can use Gemini without any setup. On Vercel, it can't: your app needs its own **API key** to reach Gemini. Without one, the agent works only in AI Studio, and you can't share it on Vercel. With one, the agent works on Vercel the same way it does in AI Studio.

You get the key from AI Studio. In the next guide, you give it to Vercel.

---

## Words You'll See

- **API:** a way for one program to use another. Your app uses the Gemini API to send messages to the model.
- **API key:** a secret code that lets your app use the Gemini API. Usage is counted, and sometimes charged, against the key's project.
- **Project:** a Google Cloud project that holds your key, its limits and its billing. AI Studio can create one for you.
- **Free tier:** use of the API at no charge, with lower limits.
- **Paid tier:** use of the API that's charged against a balance, with higher limits.
- **Rate limit:** how many requests your key can make in a given time. Past it, the API refuses requests until the limit resets.

---

## Step 7: Get an API Key

### Choose a path

Both paths let you deploy and test your agent. Check Google's [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) before you choose.

**Path A: free tier.**

1. Open the **API Keys** page in Google AI Studio.
2. Create or select a free-tier project.
3. Create an API key for that project.
4. Copy the key. You'll add it to Vercel in the next guide.

**Path B: prepaid balance.**

1. Open the **Billing** page in Google AI Studio.
2. Select the project for your agent.
3. Upgrade the project to the paid tier.
4. Add the minimum prepaid balance ($5 when this was written). It becomes credit for API use.
5. Leave **automatic reload** turned off. Then your spending stops when the balance runs out.
6. Create or copy the API key for that project.

**A student or consumer Gemini subscription doesn't include an API key.** Those plans raise your limits inside Google's own apps. They don't give you a key for your own app.

### Keep the key private

Anyone with your key can use it, and any charges go to your project.

- Don't put it in your journal, your slides, a chat, or anything you share.
- Don't paste it into your app's code. Your repository is public.
- Keep it somewhere private, such as a password manager, until you add it to Vercel. You can always copy it again from the **API Keys** page.

### Check the rate limits

Both paths have rate limits, and the free tier's are lower. If your agent stops responding after a burst of testing, a limit is the likely reason. You can see your limits in AI Studio:

- [Your rate limits in AI Studio](https://aistudio.google.com/rate-limit)
- [How Gemini API rate limits work](https://ai.google.dev/gemini-api/docs/rate-limits)

---

## Checkpoint

- You know which path you chose.
- Your key is listed on AI Studio's **API Keys** page, under the project you chose.
- You've copied the key and kept it somewhere private.
- On Path B, automatic reload is off.

---

## If Something Goes Wrong

**I can't open AI Studio's billing or key pages with my school account.** Use a personal Google account instead.

**I think my key has leaked.** Delete it on the **API Keys** page and create a new one. Then replace it anywhere you've used it, including Vercel.

---

## Reflect

- Which path did you choose, and why?
- Who could use your key if they found it, and what would it cost you?

---

## Next

[Adding Your Key to Vercel](/sharing-prototypes/key-on-vercel) puts your agent online with its key.
