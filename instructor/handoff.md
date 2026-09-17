# Handoff: where the series stands

*Instructor document, 2026-09-17. It's for the next working session in this repository, whether you or a coding agent runs it.*

## How we got here

- **Origin:** the series started as a branch of `tj60647/prototyping-toolkit`. It was split out on 2026-09-17 so the series can develop without touching the live toolkit.
- **The plan:** `instructor/workshop-series-plan.md`.
- **Workshop 5 is the Prototyping Toolkit,** which stays its own site (https://prototypingtoolkit.aroughidea.com, repository `tj60647/prototyping-toolkit`). This site only links to it.

## Set up

- **GitHub:** `tj60647/aroughidea-workshops`, public.
- **Vercel:** project `aroughidea-workshops` (team `aroughidea`), deployed from `main`, with previews for branches.
- **Domain:** https://workshops.aroughidea.com. The CNAME at Turbify points to `bf70015e9ce88b1b.vercel-dns-016.com`, and HTTPS works.
- **Private until launch:** Vercel sign-in protects every address, including the custom domain (`ssoProtection: all`).

## Decisions made

- **Structure:** one site holds the collection. Each workshop has a folder in `guides/` and a definition in `.vitepress/workshops/`.
- **Not tied to a school:** no school names, rooms, rosters or dates.
- **Left out:** the deck's weekly news slides.
- **Theme:** monochrome, following the A Rough Idea design system.
- **Evaluations:** "Testing Your AI Prototype" (`/practice/evaluations`) was written from the deck's slides; the separate reading was not used.

## Open items

**Before launch:**
1. **Agent Studio looks course-specific in three places:**
   - Its home page redirects to the workspace `computational-design-ai-workshop-series-2026`.
   - It once showed "Status unavailable. The proxy may be offline."
   - The "Why Agent Studio?" PDF is titled "Computational Design…".
2. **Content that isn't from the deck:** the bodystorming goal cards, the sorting exercise, most sample prompts, and the evaluation method on `/practice/evaluations`.
3. **Claims to verify:**
   - student Gemini subscriptions don't include an API key;
   - the CHI 2026 paper link;
   - the Llama 3 source;
   - Vercel and AI Studio button names that aren't shown in the deck;
   - the ChatGPT Canvas share link.
4. **Workshop 4 screenshots:** retake them on a neutral account, then add them.
5. **Facilitator notes** for each workshop, in `instructor/`.
6. **Launch:**
   - turn off Vercel sign-in protection;
   - check that the site loads signed out;
   - in the toolkit repository, add a link to the series on the toolkit's start page.

**Sign-in for the site (under discussion, 2026-09-17).** Neither the purpose nor the approach is decided:
- **What sign-in would be for is undecided.** The options are a private cohort area, saved progress or journals, or keeping the whole site private after launch. Because the repository is public, sign-in can't hide the workshop pages themselves.
- **Recommendation:** Neon Auth, with A Rough Idea's own Google OAuth client and GitHub OAuth app. (Neon's shared credentials cover Google only, and are meant for development.) Access is enforced in Vercel Routing Middleware by checking the Neon token against Neon's published keys and an email allow-list. The site is static, so a check in the browser alone protects nothing.
