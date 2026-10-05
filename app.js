const NAV = [
  ["", "The brief"],
  ["plain", "In plain words"],
  ["chain", "The chain"],
  ["guide", "Field guide"],
  ["diagnose", "If this, check that"],
  ["claude", "Claude in Chrome"],
  ["roadmap", "What comes later"],
  ["work", "How the work is split"],
  ["glossary", "Glossary"],
];

const CHAIN = [
  ["The ad click", "Someone searches, sees a JSSI ad, and clicks. Google Ads stamps that click so a later action can be tied back to the campaign that paid for it.", "The campaign is live, the landing URL is the page you intended, and the click reaches jetsupport.com or the Conklin subdomain — not a dead or redirected address.", ["The ad sends people to a page the tag is not watching.", "A redirect strips the click identifier before the page loads."]],
  ["The landing page", "The website loads. Tag Manager should load with it, on both jetsupport.com and conklindedecker.jetsupport.com. If it is missing on one site, nothing downstream can be trusted.", "Confirm the correct container is present on each property, with Tag Assistant or by viewing the page.", ["The container is on the corporate site and missing on Conklin, or the reverse.", "A consent banner blocks Tag Manager before the visitor can continue."]],
  ["The action that should count", "A click is not a customer. The action that should count is the business outcome you chose: a real inquiry, a consultation request, a qualified lead. Button taps and page views are clues, not the result.", "Write one sentence for what a person must do for the August test to call it a success. If two people disagree, settle that before editing tags.", ["Ads is optimizing toward “someone clicked Contact” while the business wanted a completed inquiry.", "Conklin signups and maintenance-program inquiries are being treated as the same event."]],
  ["The website tells Tag Manager", "When the form succeeds, the site should announce a named event. Tag Manager is listening for that name. If the site says one thing and the tag listens for another, they miss each other.", "In Preview, submit a test with dummy details and see whether an event appears at the moment of success — not when the form is merely opened.", ["The form never announces success.", "The two sites announce success under different names."]],
  ["The trigger decides to fire", "A trigger is the rule: when you hear this event, on this page, fire the tag. It is the most common break in a two-website setup. The rule can be right for jetsupport.com and wrong for Conklin.", "Read the trigger conditions on each container out loud. They should match the real journey.", ["The rule requires a URL that only exists on one site.", "The rule fires on form start, so an abandoned form counts as a lead."]],
  ["The tag sends the signal", "The Google Ads conversion tag carries an ID and a label that must match the conversion action. A conversion linker should also be present so the click identifier survives the visit.", "Compare the ID and label in each container with the conversion action the test is judged on. One owner. No second tag sending the same lead.", ["The label belongs to an old or paused conversion action.", "Both containers send the same lead, so one inquiry counts twice."]],
  ["Google Ads receives it", "Ads should show the conversion arriving, then attach it to the campaign that earned the click. A conversion with no campaign attached still happened — you just cannot tell whether the ad caused it.", "After a controlled test, look at recent activity and at campaign reporting. Diagnostics do not clear in an hour. Agree a watch of several days.", ["The tag fired in the browser but Ads never received it, often because of consent.", "The click identifier was lost between the main site and the subdomain, so the conversion is unattributed."]],
  ["Someone reads the test", "Only now is the August test a measurement. Until the steps above hold on both properties, spend and “conversions” are a draft. Leadership should see the caveat, not a false winner.", "Every flag Google raised is closed with evidence or written down as out of scope. A one-page map says which tag serves which action.", ["The report is treated as final while a known tag is still dark.", "A later website change breaks the chain and nobody is watching."]],
];

const CHECKS = [
  ["Before anyone opens a tag", ["b1", "Google’s flag list is in hand, not paraphrased from memory."], ["b2", "One sentence says what the August test counts as a success."], ["b3", "It is agreed whether Conklin sends that same conversion, a different one, or none."], ["b4", "A person is named who may approve a publish while Jon is unavailable."]],
  ["Google Ads, read only", ["a1", "Each relevant conversion action has a status, source, and primary or secondary mark."], ["a2", "Counting, window, value, and attribution are written down."], ["a3", "Enhanced conversions and diagnostics are noted, separately from the base tag."], ["a4", "ID and label are copied for the action the test actually uses."], ["a5", "Volume since 4 August is compared with clicks, not judged alone."]],
  ["Both containers, separately", ["g1", "jetsupport.com: Google tag, linker, Ads tags, Analytics events, consent."], ["g2", "Conklin subdomain: the same list, filled from that container, not copied."], ["g3", "Each Ads tag’s trigger is named, including the event it listens for."], ["g4", "Duplicates — two tags, one lead — are marked, not deleted yet."], ["g5", "Published version and any unpublished workspace edits are noted."]],
  ["Proof, then change", ["p1", "Preview was run on the real landing path, with dummy data only."], ["p2", "The same rehearsal was done on the other property."], ["p3", "Each issue has one written cause, the proposed edit, and the rollback."], ["p4", "A person approved the note before anything was saved."], ["p5", "After publish, the tag still fires and Ads receives an attributed test conversion."]],
];

const DIAG = [
  ["clicks", "Ads shows clicks since 4 August, and almost no conversions.", "People are arriving. The action you care about is not getting back to Ads, or it was never defined as a conversion.", "The tag is not firing, consent is blocking it, or the conversion action is paused, secondary, or pointed at the wrong event.", ["Confirm the conversion action exists, is active, and is included in the test’s goals.", "Open Preview on the landing page the ad actually uses and walk the form with dummy data.", "Compare clicks with form activity in Analytics. If forms happen and Ads is empty, the break is between the site and Ads, not in demand."], "Do not raise bids or pause the test to fix a counting problem. You would be changing the experiment because the thermometer is wrong."],
  ["wrong", "Conversions are coming in, but they do not look like real inquiries.", "Something is being counted. It may be a button tap, a thank-you page that loads for other reasons, or every step of a form.", "The trigger is too loose, or a soft click was marked primary and is now what Ads optimizes toward.", ["Read the trigger. It should require the success event, not the click that opens the form.", "Check whether the action is primary (used for bidding) or secondary (observed only).", "Ask a salesperson whether a handful of recent conversions would count as a real conversation."], "Do not add another conversion “to be safe.” A second loose conversion makes the report louder, not truer."],
  ["double", "One inquiry seems to count twice.", "Two signals are describing the same person. Common when a company has a corporate site and a product site, or an old tag left beside a new one.", "A Google tag and a legacy Ads tag both fire, or both containers send the same ID and label for one journey.", ["List every Ads tag in both containers and the ID plus label on each.", "In Preview, count how many Ads requests leave the browser on one successful submit.", "Decide which single tag owns that action. Remove the duplicate only after that decision is written down."], "Do not delete tags because there are “too many.” The linker, the base Google tag, and Analytics are supposed to be there. Remove the duplicate conversion, not the whole stack."],
  ["sub", "jetsupport.com seems to convert. The Conklin subdomain does not, or it behaves differently.", "These are two containers on purpose. Conklin & de Decker is its own product. Copying assumptions from the corporate site is how this setup goes wrong.", "The second container is missing the tag, listening for a different event, or dropping the click identifier between the two hosts.", ["Inventory container two on its own. Do not tick a box because container one was fine.", "Run Preview on a Conklin journey, not only on the jetsupport.com homepage.", "Check the conversion linker and whether the click identifier survives into the subdomain."], "Do not merge the two containers in a hurry to simplify. That is a redesign, not a repair, and it can take the working site down with the broken one."],
  ["ga4", "Analytics shows the lead event. Google Ads does not.", "The website is talking. Ads is a separate listener. Analytics proving the form works does not prove the Ads tag fired, or that the click was attributed.", "A GA4 event exists and the Ads conversion tag does not, or it fires with the wrong ID or label.", ["In Preview, look specifically for the Ads conversion tag, not only the Analytics event.", "Match ID and label to the conversion action.", "Confirm the conversion linker ran on the landing page, before the form was submitted."], "Do not import the Analytics event into Ads and call the audit finished until you know you are not now double-counting."],
  ["looks", "The tag looks correct on the configuration screen, but Preview says it did not fire.", "Configuration is a drawing. Preview is the test. The drawing can be tidy and the wire still loose.", "The trigger’s event name, page rule, or consent requirement does not match what the browser actually did.", ["Read the event name in the data layer at the moment of submit, character for character.", "Check consent state in that same Preview session.", "Look for an Ads request in the browser’s network list. No request means the tag did not leave."], "Do not publish a small cleanup while Preview still says the tag is dark. Publish is not what makes a non-firing tag start firing."],
  ["enh", "Google’s note is about enhanced conversions.", "Enhanced conversions add hashed first-party details, such as an email, to a conversion that already fired, so Ads can match it when cookies are thin. They are a supplement.", "Either the base tag is fine and the enhancement is off, or the base tag is broken and the enhancement is being discussed as if it were the whole repair.", ["Prove the base conversion tag fires first.", "Only then see whether the form can pass a hashed identifier in a way privacy review will accept.", "Treat consent and customer data as a human decision, not an assistant’s."], "Do not turn on enhanced conversions to compensate for a tag that never fires. There is nothing to enhance."],
  ["drop", "Reporting looked normal, then conversions fell after a site or tag change.", "Demand may have changed. A publish may also have cut the wire. The first question is which.", "A trigger, form, or consent change shipped without a check against the conversion actions that depend on it.", ["Compare the last published container version with the one before the drop.", "See whether clicks and form starts also fell. If traffic is steady and only the Ads conversion fell, suspect the tag.", "Roll back only with the person allowed to publish, and only to a named previous version."], "Do not let an assistant republish the container on its own to put it back. Rollback is a human action with a name on it."],
];

const LEVELS = [
  ["Observe", "Read the screens. Copy settings into the inventory. Compare names, IDs, and labels.", "No clicks that save, pause, delete, or publish."],
  ["Diagnose", "Open Preview, the console, and the network list. Say which link in the chain looks broken, and why.", "Still no edits. A confident sentence is not permission to change the live site."],
  ["Prepare", "Draft the workspace change in words: which trigger, which label, what to leave alone, how to test, how to roll back.", "A person reads that draft. The assistant does not apply it because the draft sounded reasonable."],
  ["Execute", "Only after a named person says yes: make the agreed edit in the workspace and save it.", "Publishing stays with a person. So do budgets, bids, consent, and deleting a conversion action."],
];

const PROMPTS = [
  ["Read the Ads account", "First pass. Nothing is edited.", "Do not modify anything. Review the conversion actions in this Google Ads account that relate to website leads. For each one, document the name, status, source, category, primary or secondary setting, whether it is included in account goals, counting method, conversion window, value, attribution, enhanced conversions status, conversion ID, conversion label, diagnostics, and recent activity since 4 August. Flag anything inconsistent or unused. Do not create, pause, or delete a conversion action."],
  ["Read one Tag Manager container", "Run once per container. Do not assume they match.", "Audit this Google Tag Manager container in read-only mode. Identify the Google tag, conversion linker, Google Ads conversion tags, GA4 event tags, and the triggers and variables tied to lead or form activity. For each Ads conversion tag, record the conversion ID, label, and trigger. Build a short dependency map: which trigger fires which tag. Do not modify, save, or publish anything. Note the latest published version name and whether the workspace differs from it."],
  ["Compare the two sides", "After both inventories exist.", "Compare the Google Ads conversion actions with the two Tag Manager containers for jetsupport.com and conklindedecker.jetsupport.com. Check whether each conversion ID and label in a tag matches a live conversion action. Note any action with no tag, any tag with no action, any mismatch, and any case where both containers could count the same lead. Do not change either system. List the gaps as questions a person should confirm, not as edits to apply."],
  ["Rehearse the journey", "Only on an approved test path. Dummy data only.", "Use Tag Manager Preview and Tag Assistant on the approved test path only. Do not submit real customer information. Walk the journey on jetsupport.com and then, separately, on conklindedecker.jetsupport.com. At each step record the data-layer events, which tags fired, which did not, the consent state, and whether a Google Ads request left the browser with the expected conversion ID and label. If a tag did not fire, say which trigger condition failed. Do not publish."],
];

const RISKS = [
  ["It borrows the login", "The assistant has no Ads password of its own. It sees whatever the browser profile can see. On an admin profile that is the conversion setup, and anything else open in that profile. The work belongs in a browser profile made for this job, not the everyday profile that also holds mail and finance."],
  ["It reads the screen, not the system", "A renamed button, a slow panel, or a setting in a collapsed section, and the inventory can be wrong while sounding complete. Preview mode and the Ads diagnostics overrule it. If they disagree, the assistant is wrong."],
  ["A page can try to give it orders", "Hidden instructions in a page, an email, or another extension can be mistaken for something you typed. Anthropic’s own guidance says the classifiers reduce that risk and do not remove it, and that the extension should not be used casually on sensitive sites. Ads and Tag Manager are sensitive. Research through 2026 has shown paths that push actions through an already-open session."],
];

const LATER = [
  ["A health check, not a chart wall", "One screen a marketer can open on Monday: are the conversion actions quiet, warning, or fine? Are the two containers still telling the same story? A sentence underneath says why it matters. The number is an illustration until the real account is connected."],
  ["An analyst that answers in sentences", "“How did paid search do last week?” Spend, clicks, and qualified leads, named by campaign, with the landing page in the same chain. Then “why?” That is useful only after the conversion means what the sentence claims."],
  ["Recommendations that belong to JSSI", "Google will suggest bid and asset changes. Those are not automatically right for a high-consideration aviation sale. A better note says: cost rose, the conversion rate fell, look at search terms and the landing page before you touch the bid."],
  ["A weekly note for people who will not log in", "What changed. What it seems to mean. What not to conclude yet. Which campaigns need a person. Whether the count itself looks unhealthy. The note should be willing to say “we cannot tell yet.”"],
  ["A tripwire when the count breaks again", "Conversions drop, clicks do not. The first question is whether the tag stopped, not whether the market disappeared. That check is what this incident did not have."],
  ["A look at the last publish", "Someone changes a trigger. The useful warning is: that trigger feeds two Ads tags used by three live campaigns. Say it before the version goes out."],
  ["Questions from sales, product, and finance", "Which campaigns produce conversations a salesperson would recognize. Which service pages show real intent. Where money is spent without a business outcome. Same data, different question. Still read-only."],
  ["Approved changes, much later", "A request comes in. The assistant queries Ads and Analytics, inspects the container through its interface rather than by clicking, recommends, waits, performs only the approved change, checks the result, and writes down what happened. Not phase one."],
];

const NEVER = [
  "Change a budget without a person saying yes.",
  "Pause a campaign on its own.",
  "Switch a bidding strategy.",
  "Publish a Tag Manager container.",
  "Delete a conversion action.",
  "Edit consent or privacy settings.",
  "Open lead records or submit a real customer form.",
  "Change production tracking with no named version to roll back to.",
];

const TERMS = [
  ["Conversion", "The action you decided is worth counting. For this test it should be a real business outcome, such as a completed inquiry, not a page view."],
  ["Conversion action", "The named counter inside Google Ads. It has settings: on or off, primary or secondary, whether to count one or every, how far back to look, and whether it may steer bidding."],
  ["Primary vs secondary", "Primary conversions can influence how Ads bids. Secondary ones are recorded so you can see them, but they should not steer the auction. Marking a weak action as primary teaches the system the wrong lesson."],
  ["Google Tag Manager", "A container on the website that holds the tags, the rules for when they fire, and the data they need. JSSI has two: one for jetsupport.com and one for the Conklin subdomain."],
  ["Container", "One Tag Manager setup published onto a site. Two containers means two setups. They can drift apart even when the brand is the same."],
  ["Tag", "The snippet that sends a signal to Ads, Analytics, or something else. A tag sitting in the container does nothing until a trigger fires it."],
  ["Trigger", "The rule that decides the moment. Wrong rules are the usual reason a tag looks installed and never speaks."],
  ["Variable", "A named piece of information the tag or trigger can read, such as the page address or a value the form just announced."],
  ["Data layer", "A simple list the website uses to announce what just happened. If the announcement never comes, the trigger has nothing to hear."],
  ["Conversion ID and label", "The two values that tell an Ads tag which counter to increment. They must match the conversion action."],
  ["Conversion linker", "A tag whose job is to keep the click identifier alive during the visit, including across the main site and a subdomain."],
  ["Preview / Tag Assistant", "Google’s rehearsal mode. You browse as a test visitor and watch which tags fired. This is the proof. A configuration screen is only a drawing."],
  ["Enhanced conversions", "An optional extra: hashed first-party details sent with a conversion that already fired. It cannot replace a tag that never fired."],
  ["Consent mode", "How the site tells Google tags what the visitor agreed to. If consent is required and not granted, tags stay quiet on purpose. An assistant should not rewrite that."],
  ["GA4", "Google Analytics 4, the on-site record of what people did. A cross-check. Not the same pipe as Google Ads conversions."],
  ["Attribution", "Which click gets credit for a later conversion. If the click identifier was lost, the conversion can be real and still show no campaign."],
  ["Workspace and version", "Edits happen in a workspace, then publish as a numbered version. The previous version is the rollback. Publishing is the moment the live site changes."],
  ["Claude in Chrome", "An assistant that can look at pages you are already signed into. Useful for inventory. It should not be the thing that publishes."],
  ["MCP", "A plug that lets an assistant ask a system questions through that system’s own interface, instead of by clicking the website. Google has read-only plugs for Ads and Analytics. That is the later layer, not the repair."],
  ["System of record", "The place whose number counts. Here that is Google Ads plus the published Tag Manager containers. Claude comments on them. It is not them."],
];

const ADS_Q = [
  ["Does it exist?", "Is there a conversion action for the outcome the test is judged on, under a name a colleague would recognize?"],
  ["Is it on?", "Paused and removed actions do not count, no matter how correct the website tag looks."],
  ["Is it arriving?", "Look at activity since 4 August beside click volume. A flat line against steady clicks is the symptom, not the diagnosis."],
  ["Is bidding using it?", "Primary actions can steer bids. If a soft click is primary, the test is optimizing toward the wrong behavior."],
  ["Is it the right one?", "Category, counting, window, and value should match the business meaning, not a default."],
  ["Is it doubled?", "Two actions, or one action fed by two tags, will flatter the report."],
  ["Do the numbers match the tag?", "The conversion ID and label in Ads must be the ones inside the container. This is the most concrete check in the audit."],
];

const MATRIX = ["Base Google tag", "Conversion linker", "Ads conversion tags, with ID and label", "Analytics events for the same journey", "Enhanced conversions, if any", "Consent settings", "The trigger on the real success event", "Form or data-layer variables", "A second tag that could describe the same lead", "Anything that should carry a click across the two host names"];

const state = { chain: 0, diag: "clicks", level: 0, road: 0, q: "" };
const KEY = "jssi-measurement-brief-checks";

function loadChecks() {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
}
function saveChecks(map) { localStorage.setItem(KEY, JSON.stringify(map)); }

function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&", "<": "<", ">": ">" }[c]));
}

function pageHead(kicker, title, lede) {
  return `<article class="page"><p class="kicker">${kicker}</p><h1>${title}</h1><p class="lede">${lede}</p>`;
}

function home() {
  const cards = [
    ["plain", "Start in plain words", "What is actually broken, why two websites matter, and what “fixed” will feel like."],
    ["chain", "Walk the chain", "Eight steps from the ad click to a number someone can defend."],
    ["guide", "Use the field guide", "The order of work, and a checklist that stays in this browser."],
    ["claude", "See where Claude fits", "Yes to the connector. No to letting it publish. Prompts you can copy."],
  ].map(([id, t, b]) => `<a class="card" href="#/${id}"><h3>${t}</h3><p>${b}</p><span class="go">Open</span></a>`).join("");
  const stack = [
    ["The two websites", "jetsupport.com and conklindedecker.jetsupport.com. Different containers. Do not treat the second as a copy of the first."],
    ["Tag Manager", "Tags, triggers, consent, and the linker that keeps a click attached to the visit."],
    ["Google Ads and Analytics", "Ads holds the conversion the test is judged on. Analytics is the cross-check, not a substitute."],
    ["An intelligence layer, afterwards", "Questions in plain language, answered from those systems, with a person on the publish button."],
  ].map(([t, b], i) => `<li><span class="num">0${i + 1}</span><span><strong>${t}</strong><br><span class="note">${b}</span></span></li>`).join("");
  return `<header class="hero"><p class="kicker">Paid search · since 4 August</p><h1>Fix the count before you read the test.</h1><p class="lede">Google’s technical team has flagged how conversions are recorded across the Ads account and two Tag Manager containers — jetsupport.com and the Conklin subdomain. Until that chain is trustworthy, the paid-search test is a story about clicks, not a result.</p><p class="note">This guide is the method for that repair. The Chrome connector is a reading aid inside the method. It is not the repair. Dashboards come after, and only on numbers you can stand behind.</p></header>
  <section class="tracks"><div class="track"><p class="kicker">Now</p><h2>Make the measurement trustworthy.</h2><p>Take Google’s list. Map both containers to the conversion actions. Rehearse the real journeys. Change only what the evidence supports. Watch it land. No new bids, no autonomous edits.</p></div><div class="track"><p class="kicker">Later</p><h2>Then let an assistant read the numbers.</h2><p>A health check, a plain explanation of last week, a note when conversions fall and clicks do not. Built on Google’s own reporting interfaces. The assistant proposes. A person still publishes.</p></div></section>
  <section class="stack"><h2>Read it in this order</h2><div class="grid-2" style="padding:0.8rem 0 0">${cards}</div></section>
  <section class="stack"><h2>Where the number actually comes from</h2><p class="note">Claude does not sit in the middle and “be the analytics.” The sites talk to Tag Manager. Tag Manager talks to Ads and Analytics. An assistant, later, reads those systems.</p><ol>${stack}</ol></section>
  <section class="quote"><p class="kicker">The sentence for the room</p><p>We will use the browser assistant to inspect, not to publish. The proof is Preview mode and a conversion that arrives in Ads, on both properties, for the action this test is actually about.</p></section>`;
}

function plain() {
  return pageHead("In plain words", "A bell on the wrong door.", "The ads are running. People are arriving. What is in doubt is whether the action you care about is being counted, once, on the right website, and tied back to the ad that paid for the visit.") + `
  <section class="section"><h2>What you asked for</h2><p>You own the paid-search test that started on 4 August. Google’s technical account team has found problems in the conversion setup. That setup lives in Google Ads and in two Tag Manager containers, one for jetsupport.com and one for conklindedecker.jetsupport.com. Jon does not have the hours. You already have admin access. You asked for the Chrome connector so you could check the screens yourself, instead of being walked click by click on a live call.</p><p>That request is reasonable. The connector lets a signed-in person move through Ads and Tag Manager with an assistant reading along. It does not, by itself, repair the count.</p></section>
  <section class="section"><h2>What a conversion is, here</h2><p>A conversion is whatever you decided is worth counting. For a company that sells hourly maintenance programs, cost data, parts, software, and financing, “someone loaded a page” is not that thing. A completed inquiry, a consultation request, a serious product question — those are. A click on Contact is a hint. It is a poor thing to teach the ad system to chase.</p><p>JSSI is not one product on one form. Maintenance programs, Conklin aircraft-cost tools, parts and engines, Traxxall, and financing attract different people. If all of those ring the same bell, the test cannot tell you which offer the ads are actually selling.</p></section>
  <section class="section"><h2>Why the second website is not a footnote</h2><p>conklindedecker.jetsupport.com is the Conklin & de Decker property, a product JSSI acquired and still runs under its own name. It has its own container. Rules drift. The corporate site can be telling Ads about a form, while the product site is silent, or is telling Ads about a different action under the same name.</p><p>There is a second, quieter failure. The click carries an identifier. If that identifier is dropped between the main site and the subdomain, the inquiry can be real and still show up in Ads with no campaign attached. The test then looks like it failed, or like the leads came from nowhere.</p></section>
  <section class="section"><h2>What “fixed” will feel like</h2><ul class="clean"><li>Every note Google sent is either closed with evidence, or written down as someone else’s problem, with a reason.</li><li>The test has one conversion that matters, and you can point to the single tag that sends it, on each site that should send it.</li><li>A rehearsal on both sites shows that tag firing on a real success, and not firing when someone merely opens the form.</li><li>Ads then shows that test conversion arriving, attached to the ad click when there was one.</li><li>The previous published version is still there, so a bad change can be undone by a named person.</li></ul><p>Until that list is true, the spend since 4 August should be described with a caveat. Not as a verdict on the channel.</p></section>
  <section class="section"><h2>What this is not</h2><p>It is not a request to rebuild the campaigns, rewrite the landing pages, or replace Jon. It is not a request to let an assistant change budgets. If a flag turns out to be about bidding rather than counting, that part comes back to the people who own the media plan.</p><p><a href="#/chain">Walk the chain</a></p></section></article>`;
}

function chain() {
  const step = CHAIN[state.chain];
  const pills = CHAIN.map((item, i) => `<button type="button" class="pill${i === state.chain ? " on" : ""}" data-chain="${i}">${i + 1}. ${esc(item[0])}</button>`).join("");
  const breaks = step[3].map((b) => `<p class="rule">${esc(b)}</p>`).join("");
  return pageHead("The chain", "Eight steps. One of them is loose.", "A conversion is not a setting on one screen. It is a relay. We look for the handoff that drops the baton, on each website separately.") + `
  <div class="pills">${pills}</div>
  <article class="panel"><p class="kicker">Step ${state.chain + 1} of ${CHAIN.length}</p><h2>${esc(step[0])}</h2><p>${esc(step[1])}</p><p class="label pine">What we check</p><p>${esc(step[2])}</p><p class="label brass">How this step fails</p>${breaks}
  <p><button type="button" class="pill" data-chain="${Math.max(0, state.chain - 1)}" ${state.chain === 0 ? "disabled" : ""}>Previous</button> <button type="button" class="pill on" data-chain="${Math.min(CHAIN.length - 1, state.chain + 1)}" ${state.chain === CHAIN.length - 1 ? "disabled" : ""}>Next step</button></p></article>
  <p class="note">Analytics can confirm that a form was used. It cannot, alone, confirm that Ads received the conversion and gave the campaign credit. The rehearsal tool for the website half is Tag Manager Preview, not the assistant.</p></article>`;
}

function guide() {
  const map = loadChecks();
  const ids = CHECKS.flatMap((g) => g.slice(1).map((item) => item[0]));
  const done = ids.filter((id) => map[id]).length;
  const groups = CHECKS.map((group) => {
    const items = group.slice(1).map(([id, label]) => `<label><input type="checkbox" data-check="${id}" ${map[id] ? "checked" : ""}/> <span>${esc(label)}</span></label>`).join("");
    return `<fieldset><legend><strong>${esc(group[0])}</strong></legend>${items}</fieldset>`;
  }).join("");
  const qs = ADS_Q.map(([q, a]) => `<div class="panel"><strong>${esc(q)}</strong><p>${esc(a)}</p></div>`).join("");
  const matrix = MATRIX.map((m) => `<div>${esc(m)}</div>`).join("");
  const rows = [["Primary", "A qualified inquiry or consultation request", "This is what the test should be allowed to chase."], ["Secondary", "A specific offer question — programs, parts, Conklin, financing", "Worth seeing. Dangerous if it is secretly what Ads is bidding on."], ["Weak", "A download, a form started, a button clicked", "A clue about interest. A bad teacher for the auction."], ["Noise", "A page view, a scroll, a menu open", "Fine for Analytics. It should not be a conversion in this test."]]
    .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");
  return pageHead("Field guide", "The order of work.", "Six moves. Nothing is published before the fifth, and the fifth does not happen without a named approver. The checklist stays in this browser.") + `
  <section class="panel"><div class="row-between"><div><h2>Working checklist</h2><p class="note">${done} of ${ids.length} marked. A private scratchpad, not a record in JSSI’s accounts.</p></div><button type="button" class="linkish" id="clear-checks">Clear</button></div><div class="bar"><span style="width:${ids.length ? (done / ids.length) * 100 : 0}%"></span></div><div class="checks">${groups}</div></section>
  <section class="section"><p class="kicker">Step 0</p><h2>Agree what is worth counting</h2><p>Spend half an hour on the business question before opening Tag Manager. A tag that fires perfectly on the wrong action is not a success.</p><table><thead><tr><th>Weight</th><th>Example</th><th>How to treat it</th></tr></thead><tbody>${rows}</tbody></table><p>Ask out loud: which of these is included in the test’s goals? If the answer is “the contact button,” the repair is partly a definition, not only a broken tag.</p></section>
  <section class="section"><p class="kicker">Step 1</p><h2>Start from Google’s list</h2><p>Turn that list into a register: the issue, where it lives, what evidence would confirm it, and whether it can distort the test. If the list is vague, the session is spent making it specific. A fix is not quoted against an unnamed issue.</p></section>
  <section class="section"><p class="kicker">Step 2</p><h2>Read Google Ads before touching a tag</h2><p>For every conversion action tied to the test, capture name, category, status, source, primary or secondary, goals, counting, window, value, attribution, enhanced conversions, ID, label, diagnostics, and recent activity.</p>${qs}</section>
  <section class="section"><p class="kicker">Step 3</p><h2>Read both containers as if they were strangers</h2><p>Fill this list twice. A question mark copied from the other column is how the second site gets missed.</p><div class="matrix">${matrix}</div><p>Then the cross-map: which Ads action is implemented in which container, and which has no implementation. Note the last published version, and any unpublished workspace edits.</p></section>
  <section class="section"><p class="kicker">Step 4</p><h2>Rehearse. Do not trust the drawing.</h2><p>Preview mode is the proof. Walk the path the ad is buying, with dummy details, on both properties. Write down the event, which tags fired, which stayed dark, the consent state, and whether an Ads request left with the ID and label from step 2.</p><p>Name the cause in one line before anyone edits: not firing, wrong trigger, wrong ID or label, duplicate, consent, click identifier lost between hosts, or an Ads-side setting.</p></section>
  <section class="section"><p class="kicker">Step 5</p><h2>Change under normal control, then watch</h2><p>Edits happen in a workspace. Preview again. A person publishes a named version. The rollback is the previous container version. Out of scope: budgets, bid strategies, keywords, pausing a campaign, consent, and deleting a conversion action.</p><p>After publish, confirm three things. The tag still fires. Ads receives the conversion. It attaches to the test campaign when the visit came from an ad. Agree several days of watching. Until that window is clean, the August test is read with a caveat.</p></section></article>`;
}

function diagnose() {
  const choices = DIAG.map((row) => `<button type="button" class="choice${row[0] === state.diag ? " on" : ""}" data-diag="${row[0]}">${esc(row[1])}</button>`).join("");
  const item = DIAG.find((row) => row[0] === state.diag);
  const next = item[4].map((s) => `<li>${esc(s)}</li>`).join("");
  return pageHead("If this, check that", "A symptom is not a diagnosis.", "Pick the sentence that sounds most like the last few weeks. This is a thinking aid. It is not a reading of JSSI’s account — nobody has opened it yet.") + `
  <div>${choices}</div>
  <article class="panel"><h2>What that usually means</h2><p>${esc(item[2])}</p><p class="label brass">Likely break</p><p>${esc(item[3])}</p><p class="label pine">Check next</p><ol class="clean">${next}</ol><div class="rule"><strong>Do not</strong><p>${esc(item[5])}</p></div></article></article>`;
}

function claude() {
  const risks = RISKS.map(([t, b]) => `<div class="panel"><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join("");
  const levels = LEVELS.map((item, i) => `<button type="button" class="level${i === state.level ? " on" : ""}" data-level="${i}">${i}. ${esc(item[0])}</button>`).join("");
  const current = LEVELS[state.level];
  const prompts = PROMPTS.map((p, i) => `<article class="panel"><div class="prompt-top"><div><h3>${esc(p[0])}</h3><p class="note">${esc(p[1])}</p></div><button type="button" class="copy" data-copy="${i}">Copy</button></div><p>${esc(p[2])}</p></article>`).join("");
  return pageHead("Claude in Chrome", "A reader. Not the publisher.", "Yes — use the connector so you are not walked through every screen on a live call. No — do not ask it to fix the account. The first prompt is an inventory. The publish button stays with a person.") + `
  <section class="section"><p>What they asked for was the browser extension, because admin access already exists and Jon is out. Used as an investigation assistant, it shortens the audit. It is a poor engine for a Monday report, and a dangerous one for “repair everything you find.”</p></section>
  <section class="section"><h2>Three limits that matter more than the convenience</h2>${risks}</section>
  <section class="section"><h2>Four levels. Start at the first.</h2><div class="pills">${levels}</div><article class="panel"><h2>${esc(current[0])}</h2><p class="label pine">Allowed</p><p>${esc(current[1])}</p><p class="label brass">Not allowed</p><p>${esc(current[2])}</p></article></section>
  <section class="section"><h2>Prompts that stay inside those rules</h2><p class="note">Paste one. Do not combine them into “fix whatever you find.”</p>${prompts}</section>
  <section class="inkbox"><h2>The rule, said once</h2><p>Observe, then diagnose, then a written proposal, then a person approves, then the edit, then Preview again, then a person publishes, then Ads is watched for several days. Approval mode stays on. No real customer data in the test path.</p></section></article>`;
}

function roadmap() {
  const bars = [[80, 72], [84, 70], [79, 74], [86, 40], [83, 38]];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const chart = bars.map((pair, i) => `<div><div class="col"><i class="c" style="height:${pair[0]}%"></i><i class="l" style="height:${pair[1]}%"></i></div><small>${days[i]}</small></div>`).join("");
  const items = LATER.map((item, i) => `<button type="button" class="acc" data-road="${i}"><span class="num">0${i + 1}</span> ${esc(item[0])}</button>${state.road === i ? `<p class="note">${esc(item[1])}</p>` : ""}`).join("");
  const never = NEVER.map((n) => `<p class="rule">${esc(n)}</p>`).join("");
  return pageHead("What comes later", "Intelligence, after the count is real.", "Do not build a dashboard on a broken bell. The pieces below are what the same map can feed once both websites are reporting the action you actually chose. A roadmap, not a promise for this working session.") + `
  <section class="section"><p>Claude in Chrome is the right shape for “go and look at this configuration with me.” It is the wrong shape for “tell marketing every Monday what changed.” Browser automation follows buttons. Buttons move. It depends on someone being logged in.</p><p>Google ships a read-only Ads connector for reporting, and an official Analytics connector for properties, reports, funnels, and realtime. Tag Manager has an interface that can read containers, tags, triggers, and versions. Writes — a publish, a budget — stay behind a person. Connecting any of it is a decision for JSSI’s IT and security team.</p></section>
  <section class="panel"><p class="kicker">Illustration only</p><h2>Clicks held. The count did not.</h2><p class="note">Invented numbers, indexed to Monday. Not JSSI’s account. Brass is clicks. Pine is recorded leads.</p><div class="chart">${chart}</div><p>Thursday is the shape of a tracking break: demand still arrives, the bell stops. The first job is to ask whether the tag died, not to recommend a bid.</p></section>
  <section class="section"><h2>Eight things worth building, in roughly this order</h2>${items}</section>
  <section class="section"><h2>Still not automated, even later</h2>${never}<p>The pattern does not change as the system gets smarter. It proposes. A person approves. The change is logged. The result is checked.</p></section></article>`;
}

function work() {
  const phases = [
    ["Tracking audit", true, "The register, both containers, the Ads actions, the cross-map, Preview on both properties, a cause for each flag, and a remediation note. You leave with a map, not a guess."],
    ["The repair", true, "Approved edits only. Enhanced conversions only if the base tag already fires and privacy review agrees. A named version, a rollback, a re-test, and several days of watching."],
    ["Measurement health", false, "A small internal view of whether the count is still healthy, with a sentence a non-specialist can read. After the foundation, on Google’s interfaces, not on the browser extension."],
    ["An analyst for the test", false, "Plain-language questions over Ads and Analytics. What changed, what it might mean, what not to conclude. Read-only."],
    ["Approved operations", false, "Agents that notice, investigate, and recommend, and that act only inside a written approval. Not part of the first engagement."],
  ].map((p, i) => `<li class="panel"><div class="head-row"><span class="num">0${i + 1}</span><strong>${p[0]}</strong><span class="badge ${p[1] ? "now" : "later"}">${p[1] ? "This engagement" : "A later conversation"}</span></div><p>${p[2]}</p></li>`).join("");
  const mine = ["Turn Google’s flags into a register.", "Read both containers and the related conversion actions without changing them.", "Rehearse both journeys in Preview and write what fired.", "Name the cause and the exact proposed edit before anything is saved.", "Make the approved workspace edit, re-test, and watch the first days after publish."].map((x) => `<li>${x}</li>`).join("");
  const theirs = ["Decide what the test is supposed to count.", "Keep admin ownership. Access is granted for the work. It is not transferred.", "Approve a publish, and keep the relationship with Google’s technical team.", "Own bids, budgets, keywords, and whether the test keeps spending during the fix.", "Anything outside measurement: creative, page redesign, how a lead is routed after it arrives."].map((x) => `<li>${x}</li>`).join("");
  const need = ["Google’s flag list, as they sent it, and the thread with the technical account team.", "The conversion action the test is judged on, and what a visitor must do to count.", "Whether the Conklin subdomain should send that conversion, a different one, or none.", "Both container IDs, and whether a consent banner sits in front of the tags.", "Who may approve a publish while Jon is out, and whether a workspace already exists.", "A dedicated browser profile for the read-only pass. Not a handover of the admin seat."].map((x) => `<p class="rule">${x}</p>`).join("");
  return pageHead("How the work is split", "A method, then a person who will run it.", "The gap is not access. You have admin. The gap is hours, and a way to debug that does not depend on Jon being on the call. This page is the split. It is not a quote.") + `
  <section class="section"><p>Darshak runs the debugging and the implementation side of the repair: Tag Manager, the rehearsal, the written cause, the approved edit. He will not reposition himself as the media buyer. If a flag is about campaign structure rather than tracking, that part comes back to you.</p><p>Three working blocks. First, the map. Second, the cause, proven in Preview. Third, the approved edit and the watch. If Google’s list is a short mismatch, that is the whole job. If the Conklin container was never built to the same standard, that is obvious at the end of the first block.</p></section>
  <section class="section"><h2>What is in front of us, and what is not</h2><ol class="clean" style="list-style:none;padding:0">${phases}</ol></section>
  <section class="split"><div class="panel"><h2>Darshak takes</h2><ul class="clean">${mine}</ul></div><div class="panel"><h2>You and Google keep</h2><ul class="clean">${theirs}</ul></div></section>
  <section class="section"><h2>What is needed before the first working block</h2>${need}<p>With those, the first session is an inventory and a cause list. Without the flag list, the first session is only a tour of the interface.</p></section>
  <section class="panel wash"><h2>The finish line</h2><ul class="clean"><li>Every Google flag is closed with evidence, or marked out of scope with a reason.</li><li>Each test conversion has one owner, one path per site that should send it, and no second tag counting the same lead.</li><li>Preview shows the tag firing on the intended action, and staying quiet on the actions you excluded, on both hosts.</li><li>Ads shows the conversion received, and attached to the paid click when there was one.</li><li>A one-page map remains, so the next person is not starting from zero when Jon is free.</li></ul></section></article>`;
}

function glossary() {
  const q = state.q.trim().toLowerCase();
  const terms = TERMS.filter((t) => !q || (t[0] + " " + t[1]).toLowerCase().includes(q));
  const list = terms.map((t) => `<article class="panel"><h2>${esc(t[0])}</h2><p>${esc(t[1])}</p></article>`).join("");
  return pageHead("Glossary", "The words, without the ceremony.", "If a term shows up in a Google email or on a call, it should be on this page in one paragraph.") + `
  <label>Search<input class="search" id="q" value="${esc(state.q)}" placeholder="Try trigger, linker, primary…" /></label>
  <p class="note" id="gcount">${terms.length} ${terms.length === 1 ? "term" : "terms"}</p>
  <div id="gloss">${list || `<p>Nothing under that word. Try “tag”, “consent”, or “conversion”.</p>`}</div></article>`;
}

const PAGES = { "": home, plain, chain, guide, diagnose, claude, roadmap, work, glossary };

function route() {
  const id = (location.hash.replace(/^#\/?/, "").split("?")[0] || "");
  return PAGES[id] ? id : "";
}

function renderNav() {
  const id = route();
  document.getElementById("nav").innerHTML = NAV.map(([key, label]) => `<a href="#/${key}" class="${key === id ? "active" : ""}">${label}</a>`).join("");
}

function render() {
  const id = route();
  document.getElementById("view").innerHTML = PAGES[id]();
  renderNav();
  document.getElementById("nav").classList.remove("open");
  document.getElementById("menu").setAttribute("aria-expanded", "false");
  const q = document.getElementById("q");
  if (q) {
    q.focus();
    const end = q.value.length;
    q.setSelectionRange(end, end);
  }
  window.scrollTo(0, 0);
}

document.getElementById("menu").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu").setAttribute("aria-expanded", String(open));
});

document.body.addEventListener("click", (event) => {
  const chainBtn = event.target.closest("[data-chain]");
  if (chainBtn && !chainBtn.disabled) { state.chain = Number(chainBtn.dataset.chain); render(); return; }
  const diag = event.target.closest("[data-diag]");
  if (diag) { state.diag = diag.dataset.diag; render(); return; }
  const level = event.target.closest("[data-level]");
  if (level) { state.level = Number(level.dataset.level); render(); return; }
  const road = event.target.closest("[data-road]");
  if (road) { state.road = Number(road.dataset.road); render(); return; }
  const copy = event.target.closest("[data-copy]");
  if (copy) {
    const text = PROMPTS[Number(copy.dataset.copy)][2];
    navigator.clipboard.writeText(text).then(() => { copy.textContent = "Copied"; });
    return;
  }
  if (event.target.id === "clear-checks") { saveChecks({}); render(); }
});

document.body.addEventListener("change", (event) => {
  const box = event.target.closest("[data-check]");
  if (!box) return;
  const map = loadChecks();
  map[box.dataset.check] = box.checked;
  saveChecks(map);
  const ids = CHECKS.flatMap((g) => g.slice(1).map((item) => item[0]));
  const done = ids.filter((id) => map[id]).length;
  const note = document.querySelector(".panel .note");
  if (note) note.textContent = `${done} of ${ids.length} marked. A private scratchpad, not a record in JSSI’s accounts.`;
  const bar = document.querySelector(".bar span");
  if (bar) bar.style.width = `${(done / ids.length) * 100}%`;
});

document.body.addEventListener("input", (event) => {
  if (event.target.id !== "q") return;
  state.q = event.target.value;
  const q = state.q.trim().toLowerCase();
  const terms = TERMS.filter((t) => !q || (t[0] + " " + t[1]).toLowerCase().includes(q));
  const count = document.getElementById("gcount");
  const gloss = document.getElementById("gloss");
  if (count) count.textContent = `${terms.length} ${terms.length === 1 ? "term" : "terms"}`;
  if (gloss) {
    gloss.innerHTML = terms.map((t) => `<article class="panel"><h2>${esc(t[0])}</h2><p>${esc(t[1])}</p></article>`).join("")
      || `<p>Nothing under that word. Try “tag”, “consent”, or “conversion”.</p>`;
  }
});

window.addEventListener("hashchange", render);
render();
