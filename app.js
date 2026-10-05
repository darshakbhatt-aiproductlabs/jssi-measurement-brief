const PROMPTS = [
  ["Google Ads, read only", "Review the conversion actions in this Google Ads account. Do not modify anything. Create an inventory of every conversion action relevant to website leads. For each one document the name, status, source, category, primary or secondary setting, whether it is included in account goals, counting method, conversion window, value, attribution, enhanced conversions status, conversion ID, conversion label, diagnostics, and recent activity since 4 August. Identify anything inconsistent, duplicated, or unused. Do not create, pause, or delete a conversion action."],
  ["One Tag Manager container", "Audit this Google Tag Manager container in read-only mode. Identify the Google tag, conversion linker, Google Ads conversion tags, GA4 event tags, and the triggers and variables tied to lead or form activity. For each Ads conversion tag, record the conversion ID, label, and trigger. Build a dependency map showing which trigger fires which tag. Do not modify, save, or publish anything. Note the latest published version, and whether the workspace differs from it. Run this once per container. Do not assume the second container matches the first."],
  ["Cross-system comparison", "Compare the Google Ads conversion actions with the Tag Manager containers for jetsupport.com and conklindedecker.jetsupport.com. Check whether each conversion ID and label in a tag matches a live conversion action. Note any action with no tag, any tag with no action, any mismatch, and any case where both containers could count the same lead. Do not change either system. List the gaps as questions a person should confirm, not as edits to apply."],
  ["Browser validation", "Open the approved test path only. Do not submit real customer information. Use Tag Manager Preview and Tag Assistant. Walk the lead journey on jetsupport.com and then, separately, on conklindedecker.jetsupport.com. At each step record the events, which tags fired, which did not, the consent state, and whether a Google Ads request left the browser with the expected conversion ID and label. If a tag did not fire, say which trigger condition failed. Do not publish."],
];

const SECTIONS = [];

function add(id, group, label, title, status, body) {
  SECTIONS.push({ id, group, label, title, status, body });
}

add("tracks", "The frame", "Two tracks", "Fix the count. Then, and only then, add intelligence.", "Now", `
<p class="lede">This is a two-track product. Track A makes Google Ads and Tag Manager measurement trustworthy. Track B, later, puts an assistant on top of that data so marketing can ask what changed and what to do. The order is the product decision.</p>
<div class="outcome"><span>Outcome of track A</span>A conversion the August paid-search test can be judged on: the right action, counted once, on each site that should send it, tied back to the ad that paid for the visit.</div>
<div class="decision"><span>Outcome of track B</span>A measurement-health view, a plain explanation of performance, and approved workflows. Not a dashboard built on a broken bell.</div>
<h2>Why the order matters</h2>
<p>Do not start dashboards or agents on conversion data you do not trust. A confident sentence on top of a misfiring tag will send the test, and later the bidding, in the wrong direction. The first deliverable is the foundation.</p>
<h2>Why JSSI is a good fit for the second track</h2>
<p>JSSI is not one form and one offer. The business runs across hourly maintenance programs, software, parts and engines, and financing. Conklin & de Decker, the aircraft-cost product, lives on its own subdomain with its own tag container. That is a data-heavy commercial model. Once the count means something, the same map can answer different questions for marketing, sales, product, and leadership.</p>
<div class="ask"><span>Open question</span>Which single outcome is the August test allowed to chase, and does the Conklin subdomain send that same conversion, a different one, or none?</div>
`);

add("01", "The frame", "01 · Architecture", "Claude is not the system of record.", "Now", `
<p class="lede">The websites talk to Tag Manager. Tag Manager talks to Analytics and to Ads. An assistant, later, reads those systems. It does not sit in the middle and become the analytics.</p>
<div class="flow">
  <div class="node"><strong>JSSI websites</strong><small>jetsupport.com and conklindedecker.jetsupport.com</small></div>
  <div class="arrow">user interactions</div>
  <div class="node"><strong>Google Tag Manager</strong><small>Tags, triggers, variables, consent, the Google tag. Two containers, not one.</small></div>
  <div class="arrow">splits</div>
  <div class="split">
    <div class="node"><strong>Google Analytics 4</strong><small>What people did on the site. A cross-check, not the Ads conversion.</small></div>
    <div class="node"><strong>Google Ads</strong><small>Conversions, campaigns, search. This is what the test is judged on.</small></div>
  </div>
  <div class="arrow">data, APIs, and MCP — only after the count is real</div>
  <div class="node ink"><strong>AI intelligence layer</strong><small>Claude, plus official connectors. It comments. It does not own the number.</small></div>
  <div class="arrow">then, not first</div>
  <div class="trio">
    <div class="node"><strong>Dashboard</strong><small>Is the count healthy?</small></div>
    <div class="node"><strong>Recommendations</strong><small>What should a person look at?</small></div>
    <div class="node"><strong>Workflows</strong><small>Approved changes only.</small></div>
  </div>
</div>
<div class="decision"><span>The concept to hold</span>Do not use Claude as the system of record. Use it as the intelligence layer on top of systems that are already instrumented.</div>
`);

add("02", "Measure first", "02 · Phase 0, the business", "Decide what is worth counting before opening a tag.", "Now", `
<p class="lede">Spend 30 to 60 minutes on the business question. A tag that fires perfectly on the wrong action is not a success. A technically working conversion is not automatically a useful one.</p>
<div class="outcome"><span>Outcome</span>One written hierarchy, and a named answer to “what is Google Ads optimizing toward today?”</div>
<h2>A conversion hierarchy</h2>
<div class="wrap"><table>
<thead><tr><th>Level</th><th>Event</th><th>Importance</th></tr></thead>
<tbody>
<tr><td>Primary</td><td>Qualified lead</td><td>Very high</td></tr>
<tr><td>Primary</td><td>Contact or sales inquiry</td><td>Very high</td></tr>
<tr><td>Primary</td><td>Request a consultation</td><td>Very high</td></tr>
<tr><td>Secondary</td><td>Program inquiry</td><td>High</td></tr>
<tr><td>Secondary</td><td>Parts or engine inquiry</td><td>High</td></tr>
<tr><td>Secondary</td><td>Download</td><td>Medium</td></tr>
<tr><td>Secondary</td><td>Form start</td><td>Medium</td></tr>
<tr><td>Micro</td><td>Call-to-action click</td><td>Low</td></tr>
<tr><td>Micro</td><td>Page engagement</td><td>Low</td></tr>
</tbody></table></div>
<p>Primary can be allowed to steer bidding. Secondary is worth seeing and is dangerous if it is secretly what Ads is chasing. Micro is a clue. It is a bad teacher for the auction.</p>
<div class="ask"><span>The question to ask out loud</span>Which of these does Google Ads currently optimize toward? You do not want the system bidding for “someone clicked Contact” when the business outcome is “a qualified aviation customer submitted an inquiry.”</div>
`);

add("03", "Measure first", "03 · Phase 1, inventory", "A measurement sheet before any change.", "Now", `
<p class="lede">The inventory is the source of truth for the project. Every later argument points back to a row: the system, the object, the purpose, the status, the issue, the owner.</p>
<div class="outcome"><span>Outcome</span>One sheet covering Ads conversion actions, both containers, and the Analytics events that describe the same journeys. Nothing edited yet.</div>
<div class="wrap"><table>
<thead><tr><th>System</th><th>Object</th><th>Name</th><th>Purpose</th><th>Status</th><th>Issue</th><th>Owner</th></tr></thead>
<tbody>
<tr><td>Google Ads</td><td>Conversion</td><td>Lead</td><td>Primary lead</td><td>Check</td><td>Unverified until we look</td><td>Marketing</td></tr>
<tr><td>Google Ads</td><td>Conversion</td><td>Contact</td><td>Lead</td><td>Check</td><td>Possible duplicate</td><td>Marketing</td></tr>
<tr><td>GTM 1</td><td>Tag</td><td>Google Ads lead</td><td>Lead tracking</td><td>Check</td><td>Trigger?</td><td>Analytics</td></tr>
<tr><td>GTM 1</td><td>Trigger</td><td>Form submit</td><td>Form</td><td>Check</td><td>—</td><td>Analytics</td></tr>
<tr><td>GTM 2</td><td>Tag</td><td>Google Ads conversion</td><td>Lead</td><td>Unknown</td><td>Investigate on its own</td><td>Analytics</td></tr>
<tr><td>GA4</td><td>Event</td><td>generate_lead</td><td>Lead</td><td>Check</td><td>Not a substitute for Ads</td><td>Analytics</td></tr>
</tbody></table></div>
<p>The names above are a template, not a finding. Nobody has opened the account in this brief. Google’s flag list is what fills the Issue column.</p>
`);

add("04", "Measure first", "04 · Phase 2, Google Ads", "Read Ads before touching a tag.", "Now", `
<p class="lede">The conversion action is the counter the test is judged on. If that counter is paused, secondary, duplicated, or pointed at the wrong event, no amount of tidy Tag Manager will save the readout.</p>
<div class="outcome"><span>Outcome</span>Every relevant conversion action written down, including the ID and label the website tag must match.</div>
<h2>Capture, for each action</h2>
<ul>
<li>Name, category, status, source</li>
<li>Primary or secondary, and whether it is included in account-level goals</li>
<li>Counting method, conversion window, value, attribution</li>
<li>Enhanced conversions status</li>
<li>Conversion ID and conversion label</li>
<li>Diagnostics, and recent activity since 4 August</li>
</ul>
<h2>Seven questions</h2>
<ol>
<li>Does the conversion exist, under a name a colleague would recognize?</li>
<li>Is it active? Paused and removed actions do not count.</li>
<li>Is it receiving conversions, next to click volume since 4 August?</li>
<li>Is bidding using it? A weak click marked primary teaches the auction the wrong lesson.</li>
<li>Is it the correct conversion for the hierarchy in Phase 0?</li>
<li>Is it duplicated, by a second action or a second tag?</li>
<li>Does the ID and label match the Tag Manager implementation? This is the most concrete check in the audit. Google’s conversion tag is wired by those two values.</li>
</ol>
<p class="src">Reference: <a href="https://support.google.com/tagmanager/answer/6105160">Google Ads conversions in Tag Manager</a>, <a href="https://developers.google.com/google-ads/api/docs/start">Google Ads API</a>.</p>
`);

add("05", "Measure first", "05 · Phase 3, two containers", "Do not treat Conklin as a copy of the corporate site.", "Now", `
<p class="lede">Container A is jetsupport.com. Container B is conklindedecker.jetsupport.com, the Conklin & de Decker property. Fill the matrix twice. A question mark copied from the other column is how the second site gets missed.</p>
<div class="outcome"><span>Outcome</span>A side-by-side of both containers, plus a note of the last published version and any unpublished workspace edits.</div>
<div class="wrap"><table>
<thead><tr><th>Component</th><th>Container 1</th><th>Container 2</th></tr></thead>
<tbody>
<tr><td>Google tag</td><td>?</td><td>?</td></tr>
<tr><td>Conversion linker</td><td>?</td><td>?</td></tr>
<tr><td>Google Ads tags</td><td>?</td><td>?</td></tr>
<tr><td>GA4 tags</td><td>?</td><td>?</td></tr>
<tr><td>Enhanced conversions</td><td>?</td><td>?</td></tr>
<tr><td>Consent configuration</td><td>?</td><td>?</td></tr>
<tr><td>Lead triggers</td><td>?</td><td>?</td></tr>
<tr><td>Form variables</td><td>?</td><td>?</td></tr>
<tr><td>Custom events</td><td>?</td><td>?</td></tr>
<tr><td>Duplicate tags</td><td>?</td><td>?</td></tr>
<tr><td>Cross-domain configuration</td><td>?</td><td>?</td></tr>
</tbody></table></div>
<p>The Tag Manager API can later expose accounts, containers, workspaces, tags, triggers, variables, versions, and permissions. That is for the intelligence layer. This phase is still a read of the two live containers.</p>
<p class="src">Reference: <a href="https://developers.google.com/tag-platform/tag-manager/api/v2">Tag Manager API</a>.</p>
`);

add("06", "Measure first", "06 · Phase 4, the journey", "Trace the handoff. Do not stop at the tag.", "Now", `
<p class="lede">A conversion is a relay. The audit looks for the step that drops the baton, on each website separately.</p>
<ol class="chain">
<li>Google ad</li>
<li>Landing page</li>
<li>The interaction that should count</li>
<li>Form or call to action</li>
<li>The website event</li>
<li>The Tag Manager trigger</li>
<li>The Tag Manager tag</li>
<li>Google Ads</li>
<li>The conversion action</li>
<li>Campaign reporting</li>
</ol>
<h2>The technical version of the same relay</h2>
<ol class="chain">
<li>The visitor submits the form</li>
<li>The site announces it, typically with a data-layer event</li>
<li>Tag Manager hears the event</li>
<li>The trigger evaluates</li>
<li>The Google Ads conversion tag fires</li>
<li>It carries the conversion ID and label</li>
<li>Ads receives the conversion</li>
<li>The conversion is attributed to a campaign, if the click identifier survived</li>
</ol>
<div class="ask"><span>What we are hunting</span>The break. A missing announcement, a trigger that only matches one host, a wrong label, a second tag counting the same lead, consent blocking the request, or a click identifier dropped between the main site and the subdomain.</div>
`);

add("07", "Measure first", "07 · Phase 5, Preview", "Tag Assistant is the proof. Claude is not.", "Now", `
<p class="lede">Preview and debug mode is the primary technical check. It shows which tags fired, what triggered them, and what data was available. A tidy configuration screen is only a drawing.</p>
<div class="outcome"><span>Outcome</span>A rehearsal, with dummy data, of the path the ad is buying — on both properties.</div>
<p>Walk the real journey. Homepage, service page, call to action, form, submit. At each step write down events, tags, triggers, variables, the data layer, the network request, the consent state, and whether the Google tag ran.</p>
<div class="decision"><span>Definition of a cause</span>One sentence before anyone edits: not firing, wrong trigger, wrong ID or label, duplicate, consent, click identifier lost between hosts, or a setting on the Ads side.</div>
<p class="src">Reference: <a href="https://support.google.com/tagmanager/answer/6107056">Tag Manager preview and debug</a>.</p>
`);

add("08", "Measure first", "08 · Phase 6, Claude’s job", "An investigation assistant. That is the request, and that is the limit.", "Now", `
<p class="lede">The ask was the Chrome connector, because admin access already exists and Jon does not have the hours. Used as a reader, it shortens the inventory. It is not the repair.</p>
<div class="outcome"><span>Outcome</span>A documented pass across Ads and both containers, with inconsistencies listed and nothing published.</div>
<p>The first instruction is this, not “fix it”:</p>
<div class="prompt"><p>Do not make any changes. Audit the Google Ads conversion tracking implementation. Move through Google Ads and the two Tag Manager containers. Document every relevant conversion action, tag, trigger, variable, and setting. Identify inconsistencies between Ads and Tag Manager. Do not publish or modify anything.</p></div>
<p>Claude in Chrome can read the page you are signed into, click, type, and look at the console and network list. That is useful for an audit. It borrows the browser profile’s login. The work belongs in a profile made for this job, not the everyday profile that also holds mail.</p>
<p class="src">Reference: <a href="https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely">Use Claude in Chrome safely</a>.</p>
`);

add("09", "Measure first", "09 · Investigation prompts", "Four prompts. Do not merge them into “fix whatever you find.”", "Now", `
<p class="lede">Each prompt is one job. Paste one, read the result, then decide the next step yourself.</p>
${PROMPTS.map((p, i) => `<article class="prompt"><button type="button" class="copybtn" data-copy="${i}">Copy</button><strong>${p[0]}</strong><p>${p[1]}</p></article>`).join("")}
`);

add("10", "Measure first", "10 · Do not auto-fix", "Audit, explain, propose. A person approves. Then implement. Then test.", "Now", `
<p class="lede">This is the most important operating rule in the brief. Do not start with “fix all Google Ads and Tag Manager issues.”</p>
<div class="decision"><span>The sequence</span>Audit, then explain, then propose, then a person approves, then implement, then test.</div>
<p>A browser assistant can act with the signed-in user’s permissions: read pages, click, type, move between tabs, inspect the console, and download, depending on how it is configured. Anthropic’s own guidance says the classifiers reduce prompt injection and do not remove it. Hidden instructions in a page, an email, or another extension can be mistaken for something you typed. Ads and Tag Manager are consequential. Approval stays on.</p>
<p>Research through 2026 has also shown that a browser extension with access to the Claude page can still try to push actions through a signed-in session. That is another reason the audit profile should not be the profile that holds the rest of the company.</p>
`);

add("11", "Measure first", "11 · Safety model", "Four levels. Publishing stays with a person.", "Now", `
<p class="lede">Say which level the session is in before it starts. The default is the first.</p>
<div class="split">
  <div class="node"><strong>0 · Observe</strong><small>Inspect, read, document, compare, analyze. No changes.</small></div>
  <div class="node"><strong>1 · Diagnose</strong><small>Ads, Tag Manager, Tag Assistant, console, network. Name a likely cause. Still no changes.</small></div>
  <div class="node"><strong>2 · Prepare</strong><small>Draft a trigger, a variable, a conversion setting, or the implementation note. A person must approve it.</small></div>
  <div class="node"><strong>3 · Execute</strong><small>Only after that yes: edit the workspace, save, create a version. Publishing is a separate human action.</small></div>
</div>
<p>The Tag Manager API can later create and publish versions. That capability is not a reason to let an assistant publish during this engagement. Rollback is the previous named version, performed by the person allowed to publish while Jon is unavailable.</p>
`);

add("12", "The shift", "12 · Why not Chrome forever", "Good at “go and look.” Wrong shape for Monday morning.", "Later", `
<p class="lede">Claude in Chrome is the right tool for “what is happening on this screen.” It is a poor engine for “tell marketing every Monday what changed.”</p>
<p>Browser automation follows buttons. Buttons move. It is slower, harder to audit, harder to govern, and it depends on someone being logged in, in a particular browser, in a particular session. An API asks the system. The system answers the same way tomorrow.</p>
<div class="flow">
  <div class="node"><strong>Google’s own interfaces</strong><small>Ads API, Analytics Data API, Tag Manager API</small></div>
  <div class="split">
    <div class="node"><strong>Google Ads</strong></div>
    <div class="node"><strong>GA4</strong></div>
    <div class="node"><strong>Tag Manager</strong></div>
  </div>
  <div class="arrow">MCP, where Google ships one</div>
  <div class="node ink"><strong>Claude</strong><small>Reads structured answers. Proposes. Does not own the publish button.</small></div>
  <div class="trio">
    <div class="node"><strong>Dashboard</strong></div>
    <div class="node"><strong>Analysis</strong></div>
    <div class="node"><strong>Workflows</strong></div>
  </div>
</div>
`);

add("13", "The shift", "13 · MCP", "Connectors exist. They are not a bypass of security.", "Later", `
<p class="lede">This is the larger product, and it is real infrastructure, not a metaphor. It is also not phase one.</p>
<ul>
<li>Google ships an official Ads MCP server. The current release is <strong>read-only</strong>: which accounts you can see, resource metadata, and reporting through the Ads query language. It does not change budgets.</li>
<li>Google ships an official Analytics MCP server against the Admin and Data APIs: properties, reports, funnels, realtime, custom definitions.</li>
<li>Underneath those, the Ads API, the Analytics Data API, and the Tag Manager API remain the systems a later build would call.</li>
</ul>
<div class="ask"><span>Caveat for IT and security</span>Validate the deployment model with JSSI before any production account is connected. MCP does not remove OAuth, the Ads developer token, data-access rules, or enterprise governance. A connector is a door. Someone still decides who holds the key, and whether the door can write.</div>
<p class="src">References: <a href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server">Google Ads MCP</a>, <a href="https://github.com/googleads/google-ads-mcp">google-ads-mcp</a>, <a href="https://github.com/googleanalytics/google-analytics-mcp">google-analytics-mcp</a>.</p>
`);

add("14", "The shift", "14 · The Tag Manager API", "Ask what the architecture is, not what the webpage looks like.", "Later", `
<p class="lede">The Tag Manager API is more than a report. It can read accounts, containers, workspaces, tags, triggers, variables, versions, environments, and permissions, and it can create and update those objects.</p>
<div class="outcome"><span>Why that matters</span>A later agent can answer “what is the current tracking architecture?” instead of “what does this screen appear to say today?” That is more stable than clicking through the interface, and it is still not a license to publish.</div>
<p>Writes stay behind the same rule as the safety model: propose, a person approves, then a named version, then a check. The API is how you stop depending on a browser session. It is not how you skip change control.</p>
`);

add("15", "The shift", "15 · After the count is real", "Nine products. None of them start this week.", "Later", `
<p class="lede">Once both websites report the action you chose, the same map can feed a small product line. The order below is a roadmap, not a promise for the working session.</p>
<ol>
<li><a href="#/16">Measurement health center</a> — is the count still healthy?</li>
<li><a href="#/17">Marketing analyst</a> — what happened, in a sentence.</li>
<li><a href="#/18">Recommendations</a> — JSSI’s judgment, not a blind accept of Google’s.</li>
<li><a href="#/19">Executive copilot</a> — different questions, same data.</li>
<li><a href="#/20">Weekly brief</a> — a Monday note for people who will not log in.</li>
<li><a href="#/21">Anomaly detection</a> — the bell stops, the clicks do not.</li>
<li><a href="#/22">Tracking QA</a> — an ongoing check, not a one-off project.</li>
<li><a href="#/23">Change impact</a> — who depends on the trigger someone just edited.</li>
<li><a href="#/24">Operations agent</a> — investigate, recommend, act only after approval.</li>
</ol>
<div class="decision"><span>Product rule</span>Each of these reads the systems of record. None of them replaces those systems. If the conversion definition is still wrong, these products wait.</div>
`);

add("16", "Nine products", "16 · Health center", "One screen. A sentence underneath. Not a chart wall.", "Later", `
<p class="lede">The first product a marketer can open on Monday: are the conversion actions quiet, warning, or fine, and are the two containers still telling the same story?</p>
<div class="mock">
  <p class="kicker">Sample only · not JSSI’s account</p>
  <h3>Measurement health</h3>
  <p class="score">94</p>
  <div class="row"><span>Ads conversions</span><span>12 · 10 active · 2 warning</span></div>
  <div class="row"><span>Tag Manager containers</span><span>2 · both healthy</span></div>
  <div class="row"><span>Enhanced conversions</span><span>87%</span></div>
  <div class="row"><span>Data quality</span><span>Good</span></div>
  <p>3 things need a person: a lead conversion inactive, a duplicate, a tag that does not match across the subdomain.</p>
</div>
<div class="outcome"><span>The sentence, which is the product</span>“Ads has received fewer lead conversions than expected over the last 7 days. The likely cause is a trigger that is not firing on the Conklin subdomain.” That is more useful than another chart.</div>
`);

add("17", "Nine products", "17 · Marketing analyst", "“How did paid search do last week?” gets a paragraph, then a path.", "Later", `
<p class="lede">Connect the read-only Ads connector and the Analytics connector. Marketing asks in plain language. The answer names the campaign, the landing page, and the conversion — the same chain as the audit.</p>
<div class="prompt"><p>Spend increased 12%, clicks increased 9%, and qualified lead conversions fell 6%. The largest drop was in Maintenance Programs. Cost per click rose 17%, and the landing-page conversion rate fell 14%.</p></div>
<p>Then “why?” walks campaign, keyword, landing page, on-site behavior, conversion. Those percentages are an illustration of the shape of an answer. They are not JSSI’s numbers. The product is worthless until the conversion in that sentence is the one Phase 0 chose.</p>
`);

add("18", "Nine products", "18 · Recommendations", "JSSI’s evidence, not a blind accept of Google’s tips.", "Later", `
<p class="lede">The Ads API can surface Google’s own recommendations on campaigns, assets, and bidding. Those are not automatically right for a high-consideration aviation sale. The product should say what to investigate before anyone touches a bid.</p>
<div class="mock">
  <h3>Investigate Maintenance Programs</h3>
  <p>Sample shape, not live data. Cost per click up 17%. Conversion rate down 14%. Lead volume down 11%. Landing-page engagement down 9%.</p>
  <p>Possible causes: competition, a shift in search terms, or the landing page. Recommended next step: review search terms and the page before changing bids.</p>
</div>
`);

add("19", "Nine products", "19 · Executive copilot", "One data set. Four kinds of question.", "Later", `
<p class="lede">A single place to ask, called something like “Ask JSSI Marketing.” Read-only. Willing to say “we cannot tell yet.”</p>
<ul>
<li>Marketing director: how did paid search perform this month?</li>
<li>Sales: which campaigns produce conversations a salesperson would recognize?</li>
<li>Product: which service pages show real intent — programs, parts, Conklin, financing?</li>
<li>Leadership: where is money spent without a business outcome?</li>
</ul>
<p>Same warehouse of questions, different job. Still not a second system of record.</p>
`);

add("20", "Nine products", "20 · Weekly brief", "A Monday note for people who will not open Ads.", "Later", `
<p class="lede">This is where the assistant stops being a tool you operate and becomes a decision-support note. It should be willing to say the count itself looks unhealthy.</p>
<ol>
<li>What changed?</li>
<li>Why does it seem to have changed?</li>
<li>What performed well?</li>
<li>What deteriorated?</li>
<li>Which campaigns need a person?</li>
<li>Which tracking issues exist?</li>
<li>What should marketing do next?</li>
<li>What should leadership know — and what should they not conclude yet?</li>
</ol>
`);

add("21", "Nine products", "21 · Anomaly detection", "Clicks held. The count did not. Ask about the tag first.", "Later", `
<p class="lede">Watch conversion volume and rate, cost per click, click-through, spend, cost per lead, search volume, landing-page conversion, on-site engagement, and form completion.</p>
<ol class="chain">
<li>A normal week</li>
<li>An anomaly</li>
<li>An investigation</li>
<li>A probable cause</li>
<li>A named owner</li>
</ol>
<div class="outcome"><span>The example this engagement exists to prevent</span>Lead conversions drop 32% in a day. Clicks are normal. Site traffic is normal. Form submissions are down. The tag is not firing. That is a tracking issue, not a market collapse, and it should be said before anyone recommends a bid change. The figures are the shape of the alert, not a reading of the account.</div>
`);

add("22", "Nine products", "22 · Tracking QA", "An ongoing service, not a one-time cleanup.", "Later", `
<p class="lede">The current project is a repair. This product is how the repair does not silently undo itself.</p>
<ul>
<li>Ads: status, volume, anomalies, diagnostics.</li>
<li>Tag Manager: tag changes, trigger changes, container versions, anything unpublished.</li>
<li>The sites: does the tag still fire, are there console errors, does the network request leave, does the path still match.</li>
</ul>
<div class="decision"><span>The artifact</span>A tracking-health score, for example 92 out of 100, with the three issues underneath. Sample scoring, until the account is connected.</div>
`);

add("23", "Nine products", "23 · Change impact", "Someone edits a trigger. Say who depends on it before it ships.", "Later", `
<p class="lede">A change in Tag Manager is not a local edit. It has customers.</p>
<ol class="chain">
<li>A trigger or tag changes</li>
<li>Which tags depend on it?</li>
<li>Which conversion actions depend on those tags?</li>
<li>Which live campaigns depend on those conversions?</li>
</ol>
<div class="ask"><span>The warning</span>“This trigger is tied to two Google Ads conversion tags used by three active campaigns.” That is an enterprise workflow. It is also the difference between a publish and a surprise.</div>
`);

add("24", "Nine products", "24 · Operations agent", "Understand, query, recommend, wait, then act.", "Later", `
<p class="lede">The agentic version. A marketing request comes in. The assistant understands the objective, queries Ads, queries Analytics, inspects the container through its interface rather than by clicking, analyzes, recommends, and stops.</p>
<ol class="chain">
<li>Ask for approval</li>
<li>Execute only the approved change</li>
<li>Validate the result</li>
<li>Report what happened</li>
</ol>
<div class="decision"><span>Not this engagement</span>This tab describes a destination. The working session stops at a trustworthy count and a written map.</div>
`);

add("25", "The engagement", "25 · Guardrails", "The assistant proposes. A person approves. The result is checked and written down.", "Now", `
<p class="lede">These hold in week one and they still hold when the system is smarter.</p>
<ul>
<li>No budget change without a person saying yes.</li>
<li>No pausing a campaign on its own.</li>
<li>No switching a bidding strategy.</li>
<li>No publishing a Tag Manager container.</li>
<li>No deleting a conversion action.</li>
<li>No editing consent or privacy settings.</li>
<li>No opening lead records, and no submitting a real customer form.</li>
<li>No production tracking change without a named version to roll back to.</li>
</ul>
<ol class="chain">
<li>The agent proposes</li>
<li>A person approves</li>
<li>The approved change is made</li>
<li>The result is verified</li>
<li>What happened is logged</li>
</ol>
`);

add("26", "The engagement", "26 · The stack", "Three phases of technology. Only the first is in scope now.", "Now", `
<p class="lede">Pick the tool that matches the job. Do not introduce a warehouse to answer a trigger question.</p>
<h2>Phase 1 — this problem</h2>
<p>Claude in Chrome, as a reader. Tag Assistant. The Google Ads screens. The two Tag Manager containers. A person on publish.</p>
<h2>Phase 2 — structured reading</h2>
<p>Ads API and its read-only MCP server. Analytics Data API and its MCP server. Tag Manager API. Claude asking those, not the webpage.</p>
<h2>Phase 3 — history, if JSSI wants it</h2>
<p>BigQuery as a place to keep history, where that already fits how JSSI works. Then the intelligence layer, then Claude, then a dashboard, a chat, and alerts. BigQuery is optional. It is not required to fix the August test.</p>
<div class="flow">
  <div class="split">
    <div class="node"><strong>Google Ads</strong></div>
    <div class="node"><strong>GA4</strong></div>
    <div class="node"><strong>Tag Manager</strong></div>
  </div>
  <div class="arrow">optional history</div>
  <div class="node"><strong>BigQuery, only if it earns its place</strong></div>
  <div class="arrow">then</div>
  <div class="node ink"><strong>Intelligence layer</strong></div>
  <div class="trio">
    <div class="node"><strong>Dashboard</strong></div>
    <div class="node"><strong>Chat</strong></div>
    <div class="node"><strong>Alerts</strong></div>
  </div>
</div>
`);

add("27", "The engagement", "27 · The demo", "Three screens, and a fourth control: Ask.", "Pitch", `
<p class="lede">If the goal is to win the work, do not send only a document. Show a command center with sample data, clearly labeled as a prototype. It does not need JSSI’s account on day one.</p>
<div class="trio">
  <div class="mock"><p class="kicker">1</p><h3>Tracking health</h3><p class="score">87</p><p>Ads connected. Tracking active. Two conversion actions need attention. One inactive. Container 1: a possible duplicate. Container 2: two triggers that do not match.</p></div>
  <div class="mock"><p class="kicker">2</p><h3>What happened</h3><p>Traffic steady. Qualified volume down. The sentence says which campaign and which page, and it refuses to conclude if the tag looks unhealthy.</p></div>
  <div class="mock"><p class="kicker">3</p><h3>What to do</h3><p>Three items: a lead-tag mismatch, Conklin behaving differently, conversion quality. Each one names the next human check.</p></div>
</div>
<div class="node ink"><strong>Ask</strong><small>Why did lead conversions fall last week? Which campaigns should we investigate? Did a tracking change affect the report? What should marketing do next?</small></div>
<p>Every number on that prototype is invented until an account is connected on purpose.</p>
`);

add("28", "The engagement", "28 · One workflow", "The demo that makes the audit tangible.", "Pitch", `
<p class="lede">The question to run in the room, once access exists: “Find anything that could make Google Ads under-report leads.”</p>
<ol class="chain">
<li>Google Ads, including diagnostics</li>
<li>Tag Manager, both containers</li>
<li>Tags, triggers, variables</li>
<li>The website, in Preview</li>
<li>Analytics, as a cross-check</li>
<li>A comparison</li>
<li>A diagnosis a person can accept or reject</li>
</ol>
<div class="outcome"><span>The shape of a finding</span>High confidence, as an illustration of the write-up, not as a claim about the live account: the lead event fires on jetsupport.com, and the equivalent journey on the Conklin subdomain does not fire the expected Ads tag. Evidence would be: the conversion action exists, the tag exists, the trigger differs, Preview shows the miss, Analytics still sees an event, Ads does not receive it. Recommendation: align the trigger, validate in Preview, publish through normal change control, watch volume for several days.</div>
`);

add("29", "The engagement", "29 · How the work is packaged", "Five phases. Two are this engagement. Three are a later conversation.", "Now", `
<p class="lede">This is a package, not a quote. The first two phases are the repair. The last three are the product line that the repair makes possible.</p>
<div class="node"><strong>Phase 1 · Tracking audit</strong> <span class="chip now">This engagement</span><small>Ads audit, both containers, the architecture, the tag and trigger map, the debugging, an issues register, a root cause, a remediation plan.</small></div>
<div class="node"><strong>Phase 2 · Remediation</strong> <span class="chip now">This engagement</span><small>The approved fixes in Tag Manager and, where the flag is a conversion setting, in Ads. Enhanced conversions only if the base tag already fires and privacy review agrees — they supplement a conversion, they do not replace one. Testing, documentation, a rollback, and a watch after publish.</small></div>
<div class="node"><strong>Phase 3 · Health center</strong> <span class="chip later">Later</span><small>The measurement-health view.</small></div>
<div class="node"><strong>Phase 4 · Analyst</strong> <span class="chip later">Later</span><small>Claude reading Ads and Analytics.</small></div>
<div class="node"><strong>Phase 5 · Operations</strong> <span class="chip later">Later</span><small>Agents that monitor, investigate, recommend, and execute only with approval.</small></div>
<p class="src">Enhanced conversions, in Google’s terms, add hashed first-party data to a tag that already fires. <a href="https://support.google.com/google-ads/answer/9888656">Google’s overview</a>. Tag Manager is one supported way to implement them.</p>
<div class="ask"><span>Needed before phase 1</span>Google’s flag list. The conversion the test is judged on. Whether Conklin should send it. Both container IDs. Whether a consent banner sits in front of the tags. Who may publish while Jon is out.</div>
`);

add("30", "The engagement", "30 · The pitch", "Not “I will fix tracking with Claude.” A foundation, then an intelligence layer.", "Pitch", `
<p class="lede">If the question in the room is “can you use Claude in Chrome to debug this?”, the answer is yes, framed like this.</p>
<div class="decision"><span>The sentence</span>Claude in Chrome is an assisted investigation layer. It is not the tracking solution. The systems of record stay Google Ads, Tag Manager, and Analytics.</div>
<h2>The immediate workflow</h2>
<ol>
<li>Google identifies the issue.</li>
<li>Claude in Chrome investigates, read only.</li>
<li>Tag Manager Preview validates.</li>
<li>The Ads configuration is compared, including ID and label.</li>
<li>The root cause is written down.</li>
<li>A person reviews the proposed fix.</li>
<li>The fix is implemented in Tag Manager or Ads.</li>
<li>Preview validates again.</li>
<li>A person publishes.</li>
<li>Ads and Analytics are checked after deployment.</li>
<li>The count is watched. Until that window is clean, the August test is read with a caveat.</li>
</ol>
<h2>The larger offer</h2>
<p>First, a reliable conversion-measurement foundation across Ads, Tag Manager, and Analytics. Then, an intelligence layer that watches measurement health, explains performance, flags anomalies, recommends a next look, and eventually runs approved workflows. That is a marketing-operations product. It is not a Chrome troubleshooting gig.</p>
<p>The infrastructure for the second half exists: Ads reporting, the Analytics Data API, the Tag Manager API, and Google’s own MCP servers for Ads and Analytics. Connecting any of it is a decision for JSSI’s IT and security team. The official Ads connector, today, is read-only.</p>
<div class="outcome"><span>What to put on the table</span>A copilot with three screens — tracking health, what happened and why, what to do — and a fourth control, Ask. A prototype with sample data is enough to make the second track concrete. The first track still has to be earned in the account.</div>
`);

const GROUPS = ["The frame", "Measure first", "The shift", "Nine products", "The engagement"];

function pager(index) {
  const prev = SECTIONS[index - 1];
  const next = SECTIONS[index + 1];
  return `<div class="pager">
    ${prev ? `<a href="#/${prev.id}"><small>Previous</small>${prev.label}</a>` : "<span></span>"}
    ${next ? `<a href="#/${next.id}"><small>Next</small>${next.label}</a>` : "<span></span>"}
  </div>`;
}

function coverage() {
  return `<h2>The thirty points, in order</h2>` + SECTIONS.filter((s) => s.id !== "tracks").map((s) =>
    `<a class="map-item" href="#/${s.id}"><span class="n">${s.id}</span><span><b>${s.title}</b></span><span class="chip ${s.status === "Now" ? "now" : s.status === "Later" ? "later" : "pitch"}">${s.status}</span></a>`
  ).join("");
}

function renderNav(current) {
  const html = GROUPS.map((group) => {
    const links = SECTIONS.filter((s) => s.group === group).map((s) =>
      `<a href="#/${s.id}" class="${s.id === current ? "active" : ""}">${s.label}</a>`
    ).join("");
    return `<div class="group">${group}</div>${links}`;
  }).join("");
  document.getElementById("nav").innerHTML = html;
}

function render() {
  const id = (location.hash.replace(/^#\/?/, "").split("?")[0] || "tracks");
  const index = Math.max(0, SECTIONS.findIndex((s) => s.id === id));
  const section = SECTIONS[index];
  const chip = section.status === "Now" ? "now" : section.status === "Later" ? "later" : "pitch";
  document.getElementById("view").innerHTML = `<article class="spec">
    <p class="kicker">${section.group} · <span class="chip ${chip}">${section.status}</span></p>
    <h1>${section.title}</h1>
    ${section.body}
    ${section.id === "tracks" ? coverage() : ""}
    ${pager(index)}
  </article>`;
  renderNav(section.id);
  const active = document.querySelector("nav a.active");
  if (active) active.scrollIntoView({ block: "nearest" });
  window.scrollTo(0, 0);
}

document.body.addEventListener("click", (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;
  const text = PROMPTS[Number(button.dataset.copy)][1];
  navigator.clipboard.writeText(text).then(() => { button.textContent = "Copied"; });
});

window.addEventListener("hashchange", render);
render();
