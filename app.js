const TABS = [
  ["start", "This test", "Start here"],
  ["path", "This test", "The path of a lead"],
  ["count", "This test", "What should count"],
  ["audit", "This test", "The audit"],
  ["claude", "Claude", "Three ways to use Claude"],
  ["change", "Claude", "How a change happens"],
  ["later", "After", "After the count is real"],
  ["work", "After", "How we work"],
];

const CHAIN = [
  ["The ad click", "Someone searches, sees your ad, and arrives. The click carries an identifier so a later inquiry can be tied to the campaign that paid for it.", "The landing address is the page we are actually watching, on jetsupport.com or on the Conklin subdomain."],
  ["The page loads", "Tag Manager has to load with the page. You have two containers on purpose. If one site is silent, the test is only half measured.", "The right container is present on that host, and consent has not blocked it before the visitor can continue."],
  ["The action you chose", "A click is not a customer. The action is the inquiry, consultation, or qualified lead you decide is worth teaching Google to find.", "We have one sentence for what counts. If two of us disagree, we settle it before anyone edits a tag."],
  ["Your site announces it", "On a successful submit, the page tells Tag Manager what just happened, by name. If the site says one thing and the tag listens for another, they miss.", "A test submit, with dummy details, produces that announcement at the moment of success. Not when the form merely opens."],
  ["A rule decides to fire", "The trigger is that rule. It is the usual break when two websites are involved. A rule can be right for jetsupport.com and wrong for Conklin.", "The rule matches the real journey on that host, and it does not treat an abandoned form as a lead."],
  ["One tag sends the signal", "The Ads tag carries an ID and a label. Those two values must be the conversion this test is judged on. A linker keeps the click identifier alive, including across your two host names.", "One tag owns the lead. A second tag sending the same inquiry is a double count, not a safety net."],
  ["Ads receives it", "The conversion arrives, then attaches to the campaign that earned the click. A real inquiry with no campaign attached still happened. You just cannot tell whether the ad caused it.", "After a controlled test, we watch for several days. Diagnostics do not clear in an hour."],
  ["You can read the test", "Only then is spend since 4 August a result. Until the steps above hold on both properties, it is a story about clicks.", "Google’s flags are closed with evidence, or written down as out of scope. A one-page map remains for the next person."],
];

const AUDIT = [
  ["Google’s list, made specific", "We start from the flags the technical team already sent you, not from a generic audit.", ["Each flag becomes a row: where it lives, what would confirm it, and whether it can distort this test.", "If a flag is vague, the first hour is spent making it specific. We do not quote a fix against an unnamed issue."]],
  ["Read Google Ads first", "The counter the test is judged on lives here. A tidy container cannot rescue a paused, duplicated, or secondary action.", ["Does it exist, under a name you would recognize?", "Is it on?", "Is it arriving, next to clicks since 4 August?", "Is bidding using it?", "Is it the action from the hierarchy, not a button tap?", "Is a second action describing the same person?", "Do the conversion ID and label match the tag?"]],
  ["Then both containers, separately", "jetsupport.com is one container. conklindedecker.jetsupport.com is another. We do not copy a tick from the first column into the second.", ["Google tag, conversion linker, Ads tags, Analytics events.", "Enhanced conversions, consent, the success trigger, form variables.", "Anything that could count the same lead twice, and anything that should carry the click across the two host names.", "The last published version, and whether the workspace already differs from it."]],
  ["Rehearse the journey", "Preview mode is the proof. The configuration screen is only a drawing.", ["Dummy details only. The path the ad is actually buying.", "Once on jetsupport.com. Again on the Conklin subdomain.", "What was announced, which tags fired, which stayed dark, the consent state, and whether an Ads request left with the right ID and label."]],
  ["Name the cause in one line", "We do not edit from a hunch.", ["Not firing. Wrong trigger. Wrong ID or label. Duplicate. Consent. Click identifier lost between the two hosts. Or a setting on the Ads side.", "Analytics can show that a form was used. It cannot, alone, show that Ads received the conversion and gave your campaign the credit."]],
  ["You decide what changes", "I draft the edit. You approve it. See the next section for how that handoff works.", ["Budgets, bids, keywords, pausing a campaign, consent, and deleting a conversion action stay with you.", "Enhanced conversions come only after the base tag already fires, and only if you are comfortable sending a hashed email. They cannot repair a tag that never fired."]],
];

const MODES = [
  ["chat", "Claude", "The conversation on claude.ai. No access to your Ads login unless you paste a screen or connect a tool.", "Use it to pressure-test the hierarchy, draft the finding, and turn a messy flag list into plain language. Do not ask it what your account is doing. It cannot see the account.", "People use this to think. The work product is a sentence you agree with, not a change in Ads."],
  ["desktop", "Claude Desktop", "The app on a computer. This is where connectors live, and where a later Monday brief would run. It also has its own browser, which starts clean. That browser is not your Chrome.", "Use it later, once we connect Google’s read-only Ads connector and the Analytics connector. Claude then asks the system, instead of clicking through it. The desktop’s built-in browser is for a web task that should not touch your logins.", "People use Desktop when the job must repeat without someone sitting in the chair, or when the data should come from an API. Anthropic’s own split: a connector for a cloud system, the desktop browser when you do not want your session involved."],
  ["chrome", "Claude in Chrome", "An extension inside the Chrome profile that is already signed into Ads and Tag Manager. It sees what that profile sees. It can click.", "This is the right tool for the audit you asked for. You already have admin access, and you do not want a call that walks every click. It is the wrong tool for a report that has to run every Monday.", "People reach for it when the answer exists only inside an account they are already signed into. They stop using it the moment the job has to run unattended. A scheduled check is a connector, not an extension."],
];

const LEVELS = [
  ["Observe", "It may read Ads, both containers, and the diagnostics, and write them into the inventory.", "It may not save, pause, delete, or publish."],
  ["Diagnose", "It may open Preview, the console, and the network list, and say which step looks broken.", "A confident sentence is still not permission to edit."],
  ["Prepare", "It may draft the change in words: which trigger, which label, what to leave alone, how we test, how we undo it.", "You read that draft. It does not apply the draft because the draft sounded reasonable."],
  ["Execute", "Only after you say yes: the agreed edit is made in the workspace and saved.", "You publish. You also keep budgets, bids, consent, and any deletion."],
];

const PROMPTS = [
  ["Read Ads", "Do not modify anything. Review the conversion actions in this Google Ads account that relate to website leads. For each one, document name, status, source, category, primary or secondary, whether it is in the account goals, counting, window, value, attribution, enhanced conversions, conversion ID, conversion label, diagnostics, and activity since 4 August. Flag anything inconsistent or unused. Do not create, pause, or delete anything."],
  ["Read one container", "Audit this Tag Manager container in read-only mode. Identify the Google tag, conversion linker, Ads conversion tags, Analytics events, and the triggers and variables tied to a lead. For each Ads tag, record the ID, label, and trigger. Map which trigger fires which tag. Do not save or publish. Note the latest published version and whether the workspace differs. Run this separately on the other container. Do not assume they match."],
  ["Compare", "Compare the Ads conversion actions with both containers, jetsupport.com and conklindedecker.jetsupport.com. Check that every ID and label matches a live action. Note any action with no tag, any tag with no action, and any case where both containers could count the same lead. Do not change either system. Write questions, not edits."],
  ["Rehearse", "Use Preview on the approved test path only. Do not submit real customer information. Walk jetsupport.com, then the Conklin subdomain. Record the events, which tags fired, which did not, the consent state, and whether an Ads request left with the expected ID and label. If a tag did not fire, say which condition failed. Do not publish."],
];

const PRODUCTS = [
  ["Health", "Is the count still healthy?", ["Read both containers and the conversion actions", "Score what is quiet, warning, or fine", "One sentence on why it matters", "Name who should look"]],
  ["Analyst", "What happened last week, in a paragraph.", ["You ask in plain language", "It reads Ads and Analytics", "It walks campaign, search term, page, conversion", "It stops if the count itself looks wrong"]],
  ["Recommendations", "What to investigate before anyone touches a bid.", ["See where cost and conversion moved", "Check search terms and the landing page", "Recommend a look, not an automatic change", "You decide"]],
  ["Ask", "One place for marketing, sales, product, and leadership.", ["The question names the job", "The same data answers it", "A salesperson’s “quality” is not a click", "It may say we cannot tell yet"]],
  ["Monday note", "For the people who will not open Ads.", ["What changed", "What it seems to mean", "What not to conclude", "Which campaigns need a person"]],
  ["Anomaly", "Clicks held. The count did not.", ["Watch volume, rate, and spend", "If leads fall and clicks do not, check the tag first", "Say whether it looks like tracking or demand", "Notify you before anyone recommends a bid"]],
  ["Tracking QA", "So this repair does not silently undo itself.", ["Status and volume in Ads", "The latest container version", "A rehearsed path on both hosts", "A score, and a ping only if it moved"]],
  ["Change impact", "Who depends on the trigger someone just edited.", ["A version changes", "Which tags use it", "Which conversions use those tags", "Which live campaigns use those conversions"]],
  ["Operations", "Investigate, then wait.", ["Understand the request", "Query Ads, Analytics, and the container", "Recommend", "Act only after you approve, then check and write down what happened"]],
];

const state = { chain: 0, audit: 0, mode: "chrome", level: 0, product: 0, prompt: -1 };

function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&", "<": "<", ">": ">" }[c]));
}

function spine(items, key, active) {
  return `<div class="spine">${items.map((item, i) =>
    `<button type="button" class="pick${i === active ? " on" : ""}" data-${key}="${i}"><span class="dot"></span><span><strong>${esc(item[0])}</strong></span></button>`
  ).join("")}</div>`;
}

function start() {
  return `
    <p class="kicker">For your August test</p>
    <h1>We fix the count before we explain it.</h1>
    <p class="lede">Your ads have been running since 4 August. People are arriving. What we cannot yet defend is whether the action you care about is counted once, on the right site, and tied to the ad that paid for the visit. Google has already flagged that setup, across Ads and your two Tag Manager containers.</p>
    <div class="two">
      <article class="card">
        <span class="tag now">Now</span>
        <h2>Make the measurement trustworthy.</h2>
        <p>We agree what a lead is. We read Ads, then both containers, then we rehearse the real journeys. You approve any change. You publish. We watch.</p>
        <ol class="mini">
          <li>What counts</li><li>Ads</li><li>Both sites</li><li>Preview</li><li>You publish</li><li>Watch</li>
        </ol>
      </article>
      <article class="card later">
        <span class="tag later">Later</span>
        <h2>Then let an assistant read the numbers.</h2>
        <p>A health check, a plain account of last week, a note when conversions fall and clicks do not. Built on Google’s own reporting, not on a browser session. Not until the left side holds.</p>
        <ol class="mini">
          <li>Health</li><li>Explain</li><li>Recommend</li><li>Alert</li><li>You approve</li>
        </ol>
      </article>
    </div>
    <p class="ask">You operate across maintenance programs, software, parts and engines, and financing. Conklin & de Decker has its own site. That is why a single “contact” conversion will not tell you what the ads are selling. It is also why, once the count is real, the same map can answer more than one team.</p>
    <p>Claude does not become your analytics. Ads, Tag Manager, and Analytics stay the systems of record. An assistant comments on them.</p>`;
}

function path() {
  const step = CHAIN[state.chain];
  return `
    <p class="kicker">Both websites, same relay</p>
    <h1>A lead is a handoff. We find the one that drops.</h1>
    <p class="lede">Do not look for “the setting.” Follow the lead. The same eight steps have to hold on jetsupport.com and on conklindedecker.jetsupport.com. They are not copies of each other.</p>
    <div class="stage">
      ${spine(CHAIN, "chain", state.chain)}
      <article class="panel">
        <p class="kicker">Step ${state.chain + 1} of ${CHAIN.length}</p>
        <h2>${esc(step[0])}</h2>
        <p>${esc(step[1])}</p>
        <p><strong>We check.</strong> ${esc(step[2])}</p>
      </article>
    </div>
    <h2>What a finished finding looks like</h2>
    <p>This is the shape of the write-up, not a claim about your account. We have not opened it.</p>
    <div class="panel">
      <p>The lead fires on jetsupport.com. The equivalent journey on the Conklin subdomain does not fire the Ads tag you are judging the test on. The action exists. The tag exists. The trigger differs. Preview shows the miss. Analytics still sees the event. Ads does not receive it.</p>
      <p class="note">Next step, if that is what we find: align the trigger, rehearse again, you publish, we watch for several days.</p>
    </div>`;
}

function count() {
  return `
    <p class="kicker">Before anyone opens a tag</p>
    <h1>A working tag on the wrong action is not a win.</h1>
    <p class="lede">Give this half an hour. A conversion is whatever you decide is worth counting. For the way you sell, a page view is not that thing.</p>
    <div class="bands">
      <div class="band p"><strong>Primary. Allowed to steer the auction.</strong><span>A qualified lead. A sales inquiry. A request for a consultation.</span></div>
      <div class="band s"><strong>Secondary. Worth seeing. Dangerous if Ads is secretly chasing it.</strong><span>A program question. A parts or engine question. A download. A form that was only started.</span></div>
      <div class="band m"><strong>A clue. Do not teach the auction this.</strong><span>A button clicked. Time on a page. A menu opened.</span></div>
    </div>
    <p class="ask">Which of these is your test optimizing toward today? If the answer is “someone clicked Contact,” the repair is partly a definition, not only a broken tag. The outcome you want is a qualified inquiry, not a tap.</p>
    <p>We also decide, in the same sitting, whether the Conklin subdomain sends that same conversion, a different one, or none. Maintenance, parts, software, and financing should not all ring one bell if you want to know which offer the spend is selling.</p>`;
}

function audit() {
  const step = AUDIT[state.audit];
  const points = step[2].map((p) => `<li>${esc(p)}</li>`).join("");
  return `
    <p class="kicker">One workflow, six moves</p>
    <h1>We inventory. We do not renovate.</h1>
    <p class="lede">Nothing is published in this pass. The sheet we build is the source of truth afterward: system, object, purpose, status, issue, owner. Every later argument points at a row.</p>
    <div class="stage">
      ${spine(AUDIT, "audit", state.audit)}
      <article class="panel">
        <p class="kicker">Move ${state.audit + 1}</p>
        <h2>${esc(step[0])}</h2>
        <p>${esc(step[1])}</p>
        <ul class="clean">${points}</ul>
      </article>
    </div>
    <p class="note">For each Ads action we also write down category, source, counting, window, value, attribution, enhanced-conversion status, and recent activity. Those fields are how we tell a real counter from a default.</p>`;
}

function claude() {
  const mode = MODES.find((m) => m[0] === state.mode);
  const buttons = MODES.map((m) => `<button type="button" class="${m[0] === state.mode ? "on" : ""}" data-mode="${m[0]}">${m[1]}</button>`).join("");
  return `
    <p class="kicker">Same name, three different tools</p>
    <h1>Chrome is how we look. It is not how we run marketing.</h1>
    <p class="lede">You asked for the Chrome extension because the access is already in the browser and Jon is not available for a click-by-click call. Yes. Here is the distinction, so we do not ask the wrong Claude to do it.</p>
    <div class="modes">${buttons}</div>
    <article class="panel">
      <h2>${esc(mode[1])}</h2>
      <p>${esc(mode[2])}</p>
      <p><strong>For you.</strong> ${esc(mode[3])}</p>
      <p class="note">${esc(mode[4])}</p>
    </article>
    <h2>How to choose, in one pass</h2>
    <div class="flow">
      <span>Need the account you are already signed into</span><i>→</i>
      <span>Chrome, this week</span>
    </div>
    <div class="flow">
      <span>Need to think, draft, or agree a definition</span><i>→</i>
      <span>Claude chat</span>
    </div>
    <div class="flow">
      <span>Need a browser that is not your login</span><i>→</i>
      <span>Desktop’s own browser</span>
    </div>
    <div class="flow">
      <span>Need Ads or Analytics every Monday, without you in the chair</span><i>→</i>
      <span>A connector on Desktop</span>
    </div>
    <p>The axis is identity. Chrome acts as you, in your session. The desktop’s built-in browser starts signed out, and it does not see your tabs or passwords unless you deliberately bring a site across. A connector does not click at all. Google’s official Ads connector is read-only: it can report, it cannot change a budget.</p>
    <p>Chrome borrows whatever that browser profile can see. We use a profile made for this audit, not the one that also holds mail and finance. It reads the screen, so a renamed button can make a tidy inventory wrong. Preview overrules it. And a page can hide instructions. Anthropic’s classifiers reduce that risk and do not remove it. Approval stays on.</p>
    <p class="src">Anthropic on the two browsers: <a href="https://claude.com/blog/cowork-built-in-browser">Claude in Chrome versus the desktop browser</a>. Connectors: <a href="https://support.claude.com/en/articles/11725091-when-to-use-desktop-and-web-connectors">desktop and web</a>. Safety: <a href="https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely">using Chrome safely</a>. Ads connector: <a href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server">read-only</a>.</p>`;
}

function change() {
  const level = LEVELS[state.level];
  const buttons = LEVELS.map((item, i) => `<button type="button" class="${i === state.level ? "on" : ""}" data-level="${i}">${i}. ${item[0]}</button>`).join("");
  const prompts = PROMPTS.map((p, i) => `<button type="button" class="${state.prompt === i ? "on" : ""}" data-prompt="${i}">${p[0]}</button>`).join("");
  const open = state.prompt >= 0 ? `<div class="panel"><p>${esc(PROMPTS[state.prompt][1])}</p><button type="button" class="copy" id="copy">Copy this</button></div>` : "";
  return `
    <p class="kicker">You keep the publish button</p>
    <h1>Audit, explain, propose. Then you approve.</h1>
    <p class="lede">We do not start from “fix everything you find.” A browser assistant can click with the permissions of the person who is signed in. That is useful, and it is why the sequence is fixed.</p>
    <div class="flow">
      <span>Observe</span><i>→</i><span>Diagnose</span><i>→</i><span>Write the change</span><i>→</i><span>You approve</span><i>→</i><span>Edit the workspace</span><i>→</i><span>Preview again</span><i>→</i><span>You publish</span><i>→</i><span>We watch</span>
    </div>
    <h2>Four levels. We start at the first.</h2>
    <div class="modes">${buttons}</div>
    <article class="panel">
      <h2>${esc(level[0])}</h2>
      <p>${esc(level[1])}</p>
      <p><strong>Not this level.</strong> ${esc(level[2])}</p>
    </article>
    <h2>Wording you can paste</h2>
    <p class="note">One at a time. Do not combine them into a single “repair the account.”</p>
    <div class="modes">${prompts}</div>
    ${open}
    <h2>It does not get to</h2>
    <ul class="stops">
      <li>Change a budget, a bid strategy, or pause a campaign.</li>
      <li>Publish a container, or delete a conversion.</li>
      <li>Touch consent, open a lead, or submit a real form.</li>
      <li>Change production tracking with no named version to roll back to.</li>
    </ul>
    <p>The pattern does not relax later, when the system is smarter. It proposes. You approve. The result is checked and written down. The Tag Manager API can publish a version. That is a reason to keep the button with you, not a reason to hand it over.</p>`;
}

function later() {
  const item = PRODUCTS[state.product];
  const beats = item[2].map((b, i) => `<span>${i + 1}. ${esc(b)}</span>${i < item[2].length - 1 ? "<i>→</i>" : ""}`).join("");
  const list = PRODUCTS.map((p, i) => `<button type="button" class="prod${i === state.product ? " on" : ""}" data-product="${i}"><b>${esc(p[0])}</b> ${esc(p[1])}</button>`).join("");
  return `
    <p class="kicker">Only after both sites agree</p>
    <h1>Nine things worth building. None of them this week.</h1>
    <p class="lede">Your business is data-heavy enough that a trusted conversion can feed more than a media test. These are that product line. Each one reads Ads, Analytics, or Tag Manager. None of them replaces those systems.</p>
    ${list}
    <article class="panel">
      <p class="kicker">${esc(item[0])}</p>
      <h2>${esc(item[1])}</h2>
      <div class="flow">${beats}</div>
    </article>
    <h2>What the assistant is connected to, by then</h2>
    <div class="two">
      <article class="card">
        <h2>This week</h2>
        <p>Chrome, as a reader, plus Preview. Your screens. A person on publish.</p>
      </article>
      <article class="card">
        <h2>The next build</h2>
        <p>Claude Desktop with Google’s read-only Ads connector and the Analytics connector, plus the Tag Manager API when we want the architecture rather than a screenshot. Your IT and security team decides whether a production account is connected. A connector does not waive OAuth, the Ads developer token, or your governance.</p>
      </article>
    </div>
    <p class="note">A warehouse such as BigQuery is optional, and only if you already want history in one place. It is not required to repair the August test. The Tag Manager API is what lets a later check ask “what is the tracking architecture?” instead of “what does this screen look like today?”</p>`;
}

function work() {
  return `
    <p class="kicker">Not a quote</p>
    <h1>You keep the account. I run the debugging with you.</h1>
    <p class="lede">The gap is not access. You have admin. The gap is hours, and a way to see the setup without Jon on the call. I will not take the media plan. If a flag is about bids rather than the count, that comes back to you.</p>
    <div class="split">
      <article class="who">
        <h2>I take</h2>
        <ul class="clean">
          <li>Turn Google’s flags into a register.</li>
          <li>Read both containers and the related conversion actions, without changing them.</li>
          <li>Rehearse both journeys and write what fired.</li>
          <li>Name the cause and the exact edit before anything is saved.</li>
          <li>Make the approved workspace edit, re-test, and watch the first days after you publish.</li>
        </ul>
      </article>
      <article class="who">
        <h2>You keep</h2>
        <ul class="clean">
          <li>What the test is supposed to count.</li>
          <li>Admin ownership. Access is for the work. It is not transferred.</li>
          <li>The publish button, and the relationship with Google’s technical team.</li>
          <li>Bids, budgets, and whether the test keeps spending during the repair.</li>
          <li>Creative, the page, and what happens to a lead after it arrives.</li>
        </ul>
      </article>
    </div>
    <h2>Two phases now. Three only if you want them.</h2>
    <div class="flow">
      <span>1. Audit and the map</span><i>→</i>
      <span>2. The approved repair and the watch</span><i>→</i>
      <span>Later: health, an analyst, approved operations</span>
    </div>
    <h2>What I need before the first working block</h2>
    <ul class="clean">
      <li>Google’s flag list, as they sent it.</li>
      <li>The conversion this test is judged on, and what a visitor must do to count.</li>
      <li>Whether Conklin should send that conversion, a different one, or none.</li>
      <li>Both container IDs, and whether a consent banner sits in front of the tags.</li>
      <li>Who may publish while Jon is out.</li>
    </ul>
    <p>With those, the first session is an inventory and a cause. Without the flag list, it is only a tour.</p>
    <h2>What we can put on the table</h2>
    <p class="note">A prototype, so the second track is concrete. Every figure below is invented. It is not your account.</p>
    <div class="screens three">
      <article class="screen">
        <p class="kicker">Tracking health</p>
        <p class="score">87</p>
        <p>Two conversion actions need a look. One is inactive. One container has a trigger the other does not.</p>
      </article>
      <article class="screen">
        <p class="kicker">What happened</p>
        <p>Clicks held. Qualified leads did not. The note names the campaign and the page, and it refuses to conclude if the tag looks unhealthy.</p>
      </article>
      <article class="screen">
        <p class="kicker">What to do</p>
        <p>Check the lead tag against the action. Rehearse Conklin on its own. Do not change a bid until the count is believed.</p>
      </article>
    </div>
    <div class="panel">
      <h2>The line for the room</h2>
      <p>We will use Claude in Chrome to inspect, not to publish. The proof is Preview, and a conversion that arrives in Ads, on both of your sites, for the action this test is actually about. Once that count is trustworthy, we can put an assistant on top of it: health, a plain explanation, an anomaly when the bell stops, and changes only you have approved.</p>
    </div>
    <p class="note">That is a measurement foundation, then a marketing-operations layer. It is not a Chrome troubleshooting task.</p>`;
}

const PAGES = { start, path, count, audit, claude, change, later, work };

function pager(id) {
  const i = TABS.findIndex((t) => t[0] === id);
  const prev = TABS[i - 1];
  const next = TABS[i + 1];
  return `<div class="pager">
    ${prev ? `<a href="#/${prev[0]}"><small>Previous</small>${prev[2]}</a>` : "<span></span>"}
    ${next ? `<a href="#/${next[0]}"><small>Next</small>${next[2]}</a>` : "<span></span>"}
  </div>`;
}

function renderNav(id) {
  let html = "";
  let group = "";
  for (const tab of TABS) {
    if (tab[1] !== group) {
      group = tab[1];
      html += `<div class="group">${group}</div>`;
    }
    html += `<a href="#/${tab[0]}" class="${tab[0] === id ? "active" : ""}">${tab[2]}</a>`;
  }
  document.getElementById("nav").innerHTML = html;
}

function render(keep) {
  const id = (location.hash.replace(/^#\/?/, "").split("?")[0] || "start");
  const page = PAGES[id] || start;
  const current = PAGES[id] ? id : "start";
  const y = keep ? window.scrollY : 0;
  document.getElementById("view").innerHTML = page() + pager(current);
  renderNav(current);
  const active = document.querySelector("nav a.active");
  if (active) active.scrollIntoView({ block: "nearest" });
  if (!keep) window.scrollTo(0, 0);
  else window.scrollTo(0, y);
}

document.body.addEventListener("click", (event) => {
  const chain = event.target.closest("[data-chain]");
  const auditBtn = event.target.closest("[data-audit]");
  const mode = event.target.closest("[data-mode]");
  const level = event.target.closest("[data-level]");
  const product = event.target.closest("[data-product]");
  const prompt = event.target.closest("[data-prompt]");
  if (chain) state.chain = Number(chain.dataset.chain);
  else if (auditBtn) state.audit = Number(auditBtn.dataset.audit);
  else if (mode) state.mode = mode.dataset.mode;
  else if (level) state.level = Number(level.dataset.level);
  else if (product) state.product = Number(product.dataset.product);
  else if (prompt) state.prompt = Number(prompt.dataset.prompt);
  else if (event.target.id === "copy" && state.prompt >= 0) {
    navigator.clipboard.writeText(PROMPTS[state.prompt][1]).then(() => { event.target.textContent = "Copied"; });
    return;
  } else return;
  render(true);
});

window.addEventListener("hashchange", render);
render();
