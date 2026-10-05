const SLIDES = [
  ["title", "Open"],
  ["situation", "The situation"],
  ["problem", "The problem"],
  ["why", "Why it is JSSI"],
  ["recommend", "The recommendation"],
  ["architecture", "The architecture"],
  ["count", "What should count"],
  ["actions", "The action list"],
  ["proof", "How we prove it"],
  ["chrome", "Why not Chrome"],
  ["safe", "How we use it"],
  ["roadmap", "Roadmap, now"],
  ["later", "Roadmap, after"],
  ["copilot", "The copilot"],
  ["stay", "Why it continues"],
  ["guard", "Guardrails"],
  ["close", "The close"],
];

function vid(id, title, meta) {
  return `<button type="button" class="vid" data-yt="${id}" data-title="${title}"><em>${meta}</em><strong>${title}</strong></button>`;
}

function title() {
  return `<article class="dark title-slide">
    <p class="kicker">Jet Support Services · paid search since 4 August</p>
    <h1>Fix the count. Then teach a system to read it.</h1>
    <p class="say">A working session, not a quote. Claude in Chrome can help us look. It is not the system we are proposing.</p>
    <div class="facts">
      <div class="fact"><b>Two websites</b><span>jetsupport.com and the Conklin subdomain. Two containers.</span></div>
      <div class="fact"><b>One test</b><span>Spend is running. The result is not yet something you can defend.</span></div>
      <div class="fact"><b>One rule</b><span>No dashboard, and no agent, on a conversion you do not trust.</span></div>
    </div>
  </article>`;
}

function situation() {
  return `<article class="slide">
    <p class="kicker">02 · What you asked</p>
    <h1>You do not need a tour of the screens. You need the count repaired.</h1>
    <p class="say">Google’s technical team has flagged how conversions are recorded. That setup lives in Google Ads and in two Tag Manager containers. You have admin access. Jon does not have the hours. You asked for Claude in Chrome so this does not become a live call that walks every click.</p>
    <div class="grid-2">
      <div class="card">
        <p class="kicker">The answer to open with</p>
        <h2>Yes, we use it to investigate. No, we do not let it fix the account.</h2>
        <p>Chrome is a reading aid inside a method. The method is: agree what a lead is, inventory both systems, rehearse the real journeys, write the cause, you approve, you publish, we watch.</p>
      </div>
      <div class="card">
        <p class="kicker">What this meeting is</p>
        <h2>A way of working. The scope of work comes after.</h2>
        <p>If Google’s list is a short mismatch, that is the whole job. If the Conklin container was never built to the same standard as the corporate site, that is obvious at the end of the first pass. We do not price a rebuild before we have seen the list.</p>
      </div>
    </div>
  </article>`;
}

function problem() {
  return `<article class="slide">
    <p class="kicker">03 · The problem</p>
    <h1>The ads are buying visits. The test is being read as if those visits were leads.</h1>
    <p class="say">A conversion is the action you decided is worth counting. Until that action is counted once, on the right site, and tied back to the ad that paid for the visit, the spend since 4 August is a story about traffic.</p>
    <div class="flow">
      <span>Someone searches</span><i>→</i>
      <span>Your ad</span><i>→</i>
      <span>A landing page</span><i>→</i>
      <span class="break">The count, which is in doubt</span><i>→</i>
      <span>A verdict on the channel</span>
    </div>
    <div class="grid-2" style="margin-top:1rem">
      <div class="card">
        <h2>What can be wrong without the ads being wrong</h2>
        <ul class="clean">
          <li>The tag never fires, so real inquiries look like a failed test.</li>
          <li>The tag fires on a button tap, so the test looks better than the pipeline.</li>
          <li>Both containers send the same lead, so one inquiry counts twice.</li>
          <li>The click identifier dies between your two host names, so the lead is real and the campaign gets no credit.</li>
        </ul>
      </div>
      <div class="card">
        <h2>What we will not do with a broken count</h2>
        <ul class="clean">
          <li>Raise or cut bids to “fix” a measurement problem.</li>
          <li>Pause the test because the thermometer is wrong.</li>
          <li>Build a dashboard that explains a number we do not believe.</li>
          <li>Let an assistant publish a repair it has only inferred from a screen.</li>
        </ul>
      </div>
    </div>
  </article>`;
}

function why() {
  return `<article class="slide">
    <p class="kicker">04 · Why this is not a generic tracking job</p>
    <h1>You do not sell one thing, and you do not measure it on one site.</h1>
    <p class="say">Hourly maintenance programs, software, parts and engines, financing, and Conklin & de Decker. Conklin lives on conklindedecker.jetsupport.com with its own container. If all of those ring one bell, the test cannot tell you which offer the ads are selling.</p>
    <div class="grid-3">
      <div class="card"><h2>Two containers</h2><p>Rules drift. The corporate site can be reporting a form while the product site is silent, or reporting a different action under a familiar name.</p></div>
      <div class="card"><h2>A long sale</h2><p>A click on Contact is a hint. A qualified inquiry is the thing worth teaching Google to find. They are not interchangeable.</p></div>
      <div class="card"><h2>A second product, later</h2><p>Once the count means what it says, the same map can answer marketing, sales, product, and leadership. That is the larger offer. It waits.</p></div>
    </div>
  </article>`;
}

function recommend() {
  return `<article class="slide">
    <p class="kicker">05 · The recommendation</p>
    <h1>Two tracks. The second one does not start until the first one holds.</h1>
    <p class="say">Track A is the engagement in front of us. Track B is why this is more than a tag repair. Selling B before A is how a confident sentence gets written on a bad number.</p>
    <div class="grid-2">
      <div class="card">
        <span class="tag now">Track A · now</span>
        <h2>A conversion you can defend.</h2>
        <p>Agree the action. Map both containers to the Ads conversion actions. Rehearse both journeys. Change only what the evidence supports. Watch it land. No new bids. No autonomous edits.</p>
        <p><strong>You leave with</strong> a register of Google’s flags, a cause for each one, a named version you can roll back, and a count that arrives in Ads for the action this test is about.</p>
      </div>
      <div class="card">
        <span class="tag later">Track B · after</span>
        <h2>An assistant that reads that count.</h2>
        <p>A health check. A plain account of last week. A warning when leads fall and clicks do not. Recommendations that tell you what to investigate before anyone touches a bid.</p>
        <p><strong>You do not leave with this yet.</strong> It is the roadmap. It is built on Google’s APIs, not on a browser extension. Your IT team has to agree before a production account is connected.</p>
      </div>
    </div>
  </article>`;
}

function architecture() {
  return `<article class="slide">
    <p class="kicker">06 · Where the number comes from</p>
    <h1>Claude is not in the middle. It does not become the analytics.</h1>
    <p class="say">Your sites talk to Tag Manager. Tag Manager talks to Google Analytics and to Google Ads. Ads is the counter this test is judged on. Analytics is the cross-check. An assistant, later, reads those systems. It does not replace them.</p>
    <div class="stack">
      <div class="node"><b>Your websites</b><span>jetsupport.com and conklindedecker.jetsupport.com. A visitor does something you have decided is worth counting.</span></div>
      <div class="node"><b>Google Tag Manager · two containers</b><span>Tags, triggers, variables, consent, and the linker that keeps the click attached to the visit. A tag does nothing until a trigger fires it.</span></div>
      <div class="grid-2">
        <div class="node"><b>Google Analytics 4</b><span>What people did on the site. Useful. Not a substitute for an Ads conversion.</span></div>
        <div class="node"><b>Google Ads</b><span>The conversion action, the campaign, the search term. This is the number the test is read on.</span></div>
      </div>
      <div class="node"><b>Later only · APIs and connectors</b><span>Claude asks those systems. Dashboard, explanation, and approved workflows sit here. Not this week.</span></div>
    </div>
  </article>`;
}

function count() {
  return `<article class="slide">
    <p class="kicker">07 · The first decision, before any tag</p>
    <h1>A tag that fires perfectly on the wrong action is not a success.</h1>
    <p class="say">Spend thirty to sixty minutes on this. A technically working conversion can still be a useless one. Primary means Google is allowed to bid toward it. If a weak click is primary, the auction is being taught the wrong lesson.</p>
    <div class="bands">
      <div class="band a"><b>Primary · this is what the test may chase</b>A qualified lead. A sales inquiry. A request for a consultation.</div>
      <div class="band b"><b>Secondary · worth seeing, dangerous if it is secretly the goal</b>A program question. A parts or engine question. A download. A form that was only started.</div>
      <div class="band c"><b>A clue · do not teach the auction this</b>A button clicked. Time on a page. A menu opened.</div>
    </div>
    <p><strong>The question to ask in the room:</strong> which of these is the test optimizing toward today? If the answer is “someone clicked Contact,” part of the repair is the definition, not only a broken tag.</p>
    <p><strong>The second question:</strong> does the Conklin subdomain send that same conversion, a different one, or none?</p>
  </article>`;
}

function actions() {
  return `<article class="slide">
    <p class="kicker">08 · What actually happens</p>
    <h1>Ten actions. An owner on each. Nothing is published before you say so.</h1>
    <p class="say">This is the work. The later slides explain why. If you remember one page, remember this one.</p>
    <div class="card" style="overflow-x:auto">
      <table>
        <thead><tr><th></th><th>Action</th><th>Owner</th><th>Done when</th></tr></thead>
        <tbody>
          <tr><td class="num">1</td><td><strong>Decide what the test counts</strong>, and whether Conklin sends it.</td><td><span class="owner">You</span></td><td>One sentence, agreed.</td></tr>
          <tr><td class="num">2</td><td><strong>Turn Google’s flag list into a register.</strong> Issue, where it lives, what would confirm it, whether it can distort the test.</td><td><span class="owner">Darshak</span></td><td>Every flag is a row, or it is written down as unclear.</td></tr>
          <tr><td class="num">3</td><td><strong>Read Google Ads before touching a tag.</strong> For each relevant action: name, category, status, source, primary or secondary, goals, counting, window, value, attribution, enhanced conversions, ID, label, diagnostics, activity since 4 August.</td><td><span class="owner">Darshak</span></td><td>The seven questions below are answered.</td></tr>
          <tr><td class="num">4</td><td><strong>Read both containers as if they were strangers.</strong> Do not copy a tick from jetsupport.com onto Conklin.</td><td><span class="owner">Darshak</span></td><td>The matrix below is filled twice. Latest published version noted.</td></tr>
          <tr><td class="num">5</td><td><strong>Rehearse both journeys in Preview,</strong> with dummy details, on the path the ad is buying.</td><td><span class="owner">Darshak</span></td><td>We can say what fired, what did not, and the consent state.</td></tr>
          <tr><td class="num">6</td><td><strong>Name the cause in one line,</strong> and the exact edit, including how to undo it.</td><td><span class="owner">Darshak</span></td><td>Not firing, wrong trigger, wrong ID or label, duplicate, consent, click lost between hosts, or an Ads setting.</td></tr>
          <tr><td class="num">7</td><td><strong>Approve the edit.</strong> Or send it back.</td><td><span class="owner">You</span></td><td>A named yes. Not silence.</td></tr>
          <tr><td class="num">8</td><td><strong>Make that edit in the workspace and Preview again.</strong></td><td><span class="owner">Darshak</span></td><td>The tag fires on success and stays quiet when the form is only opened.</td></tr>
          <tr><td class="num">9</td><td><strong>Publish a named version.</strong></td><td><span class="owner">You</span></td><td>The previous version is still there to roll back to.</td></tr>
          <tr><td class="num">10</td><td><strong>Watch for several days.</strong> The tag still fires. Ads receives it. It attaches to the campaign when the visit came from an ad.</td><td><span class="owner">Both</span></td><td>Until then, the August test is read with a caveat. Not as a verdict.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="grid-2" style="margin-top:0.8rem">
      <div class="card">
        <h2>Seven questions, in Ads</h2>
        <ul class="clean">
          <li>Does the conversion exist, under a name you would recognize?</li>
          <li>Is it on? Paused actions do not count.</li>
          <li>Is it arriving, next to clicks since 4 August?</li>
          <li>Is bidding using it?</li>
          <li>Is it the action from the hierarchy, not a button?</li>
          <li>Is a second action describing the same person?</li>
          <li>Do the conversion ID and label match the tag? This is the concrete check. The tag is wired by those two values.</li>
        </ul>
      </div>
      <div class="card">
        <h2>Filled twice, once per container</h2>
        <ul class="clean">
          <li>Google tag and conversion linker</li>
          <li>Ads tags, with ID and label</li>
          <li>Analytics events for the same journey</li>
          <li>Enhanced conversions and consent</li>
          <li>The trigger on the real success event</li>
          <li>Form variables and custom events</li>
          <li>A second tag that could count the same lead</li>
          <li>Anything that should carry the click across the two host names</li>
        </ul>
      </div>
    </div>
  </article>`;
}

function proof() {
  return `<article class="slide">
    <p class="kicker">09 · Proof, not a tidy settings screen</p>
    <h1>We follow the lead until a step drops it.</h1>
    <p class="say">Preview mode is the proof. Claude is not. Google’s Tag Assistant shows which tags fired, what triggered them, and what data was there. A configuration screen is only a drawing.</p>
    <div class="stack">
      <div class="node"><b>1 · Ad click</b><span>An identifier is attached. If a redirect strips it, the later lead cannot be tied to the campaign.</span></div>
      <div class="node"><b>2 · Landing page</b><span>The correct container loads, on that host. Consent has not blocked it.</span></div>
      <div class="node"><b>3 · The action you chose</b><span>Not the click that opens the form. The success.</span></div>
      <div class="node"><b>4 · The site announces it</b><span>If the page says one event name and the trigger listens for another, they miss.</span></div>
      <div class="node"><b>5 · The trigger</b><span>The usual break across two sites. Right for jetsupport.com, wrong for Conklin.</span></div>
      <div class="node"><b>6 · One Ads tag</b><span>ID and label match the conversion the test uses. A second tag is a double count, not a safety net.</span></div>
      <div class="node"><b>7 · Ads receives it, attached to the campaign</b><span>A real lead with no campaign attached is still a measurement failure.</span></div>
    </div>
    <h2 style="margin-top:1.2rem">The shape of a finding</h2>
    <p>This is how a write-up should read. It is not a claim about your account. We have not opened it.</p>
    <div class="card">
      <p>The lead fires on jetsupport.com. The equivalent journey on the Conklin subdomain does not fire the Ads tag this test is judged on. The action exists. The tag exists. The trigger differs. Preview shows the miss. Analytics still sees an event. Ads does not receive it. Next: align the trigger, Preview again, you publish, we watch.</p>
    </div>
    <h2>See what Preview actually looks like</h2>
    <div class="vids">
      ${vid("klkHi7AY-0A", "Preview a container before you publish", "Loves Data · about 9 minutes")}
      ${vid("mmy4vEtA0fE", "Enhanced conversions, after the base tag works", "Google Ads · about 3 minutes")}
    </div>
    <p>Enhanced conversions add a hashed email to a conversion that already fired. They do not repair a tag that never fired. We turn them on only if the base tag is proven and you accept the privacy terms.</p>
  </article>`;
}

function chrome() {
  return `<article class="dark">
    <div class="slide">
      <p class="kicker">10 · The point of the meeting</p>
      <h1>Convenience is not the architecture.</h1>
      <p class="say">Chrome is the fastest way to look at an account you are already signed into. That is a real convenience, and we will use it. It is a bad foundation for a system that has to tell you, every Monday, whether the count is true.</p>
      <div class="grid-2">
        <div class="card">
          <span class="tag now">Use it for this</span>
          <h2>An investigation, while you are in the chair.</h2>
          <p>You already have admin. You do not want a call that narrates every click. The extension can read the page, click, and type, inside that login. Used with a script and a person on the publish button, it shortens the audit.</p>
        </div>
        <div class="card">
          <span class="tag no">Do not build this on it</span>
          <h2>A reporting system, a monitor, or an operator.</h2>
          <p>Those jobs have to run when nobody has Chrome open. They have to ask the same question tomorrow and get an answer you can audit. A browser extension cannot be that.</p>
        </div>
      </div>
      <h2 style="color:white;margin-top:1.3rem">Why the convenience breaks as a system</h2>
      <div class="grid-3">
        <div class="card"><h2>It follows buttons.</h2><p>Google moves a button, and the check breaks. An API asks for the conversion by name. The button can move.</p></div>
        <div class="card"><h2>It needs you logged in.</h2><p>A Monday brief cannot depend on a particular browser, on a particular profile, being open.</p></div>
        <div class="card"><h2>It sees the screen, not the system.</h2><p>A setting in a collapsed panel becomes a false all-clear. If Preview disagrees with the assistant, the assistant is wrong.</p></div>
        <div class="card"><h2>It borrows the whole login.</h2><p>The audit belongs in a browser profile made for this job. Not the profile that also holds mail and finance.</p></div>
        <div class="card"><h2>A page can try to instruct it.</h2><p>Anthropic’s classifiers reduce prompt injection. They do not remove it. Approval stays on. It does not publish.</p></div>
        <div class="card"><h2>You cannot govern a click the way you govern a query.</h2><p>An API call has a scope. “This browser” is not a scope. That matters before your IT team will connect a production account.</p></div>
      </div>
      <h2 style="color:white;margin-top:1.3rem">Three tools. People mix them up because they share a name.</h2>
      <div class="grid-3">
        <div class="card"><h2>Claude, the chat</h2><p>Thinks and drafts. It cannot see Ads unless you paste a screen or connect a tool. Use it to pressure-test the definition of a lead. Do not ask it what the account is doing.</p></div>
        <div class="card"><h2>Claude Desktop</h2><p>Where a later Monday brief would run, through a connector. Its own browser starts signed out. That browser is not your Chrome. Anthropic’s split: Chrome for the account you already have open. The desktop browser for a web task that should not touch your session.</p></div>
        <div class="card"><h2>Claude in Chrome</h2><p>The only one sitting in your login. Right for this audit. Wrong the moment the job has to run without you in the chair. Practitioners who automate browsers use it the same way: one look inside a real session, then an API or a script for anything that must repeat.</p></div>
      </div>
      <h2 style="color:white;margin-top:1.3rem">It is also slow, and it spends tokens like a person rereading the screen</h2>
      <div class="grid-2">
        <div class="card">
          <h2>Time</h2>
          <p>Each step waits for the page, then for the model, then for the next click. Ads plus two containers is dozens of screens. That is many minutes, and someone has to stay signed in the entire time. It does not run overnight, and it is not faster than a careful first audit.</p>
        </div>
        <div class="card">
          <h2>Tokens</h2>
          <p>Chrome does not ask a short question. Every step sends another view of the screen, and earlier screens stay in the conversation unless they are discarded. On this class of browser agent, one screenshot is a few thousand tokens. A ten-step task is often about 30,000 tokens if the history is trimmed, and well over 100,000 if every screen is kept. A raw dump of a single page can pass 100,000 tokens before a click.</p>
        </div>
      </div>
      <p>An API request for the same conversion list is one structured answer. Walking the interface every Monday multiplies the time and the bill, and it is still less trustworthy than the API. That is a cost argument, separate from the safety one.</p>
      <h2 style="color:white;margin-top:1.3rem">What we graduate to</h2>
      <p>Claude Desktop, asking Google’s own connectors. The official Ads connector is read-only: it can report, it cannot change a budget. Analytics has an official connector for properties, reports, and funnels. Tag Manager has an API that can describe tags, triggers, versions, and permissions. A person still approves anything that changes the live account. Your IT and security team decides whether a production account is connected. A connector does not skip OAuth, the Ads developer token, or your review.</p>
      <div class="vids" style="margin-top:1rem">
        ${vid("rBJnWMD0Pho", "What Chrome actually does", "Anthropic · 1 minute 35 seconds")}
        ${vid("IypXvHej9eY", "Why the permissions matter", "Anthropic · about 1 minute")}
      </div>
      <p style="margin-top:0.8rem">Sources, if someone asks. <a href="https://claude.com/blog/cowork-built-in-browser">Anthropic on the two browsers</a>. <a href="https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely">Using Chrome safely</a>. <a href="https://getnadir.com/blog/browser-agent-token-cost-screenshots-accessibility-tree/">What a browser step costs in tokens</a>. <a href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server">Google’s read-only Ads connector</a>. <a href="https://github.com/googleanalytics/google-analytics-mcp">Analytics connector</a>.</p>
    </div>
  </article>`;
}

function safe() {
  return `<article class="slide">
    <p class="kicker">11 · The rule while Chrome is open</p>
    <h1>Audit. Explain. Propose. You approve. Then, and only then, we edit.</h1>
    <p class="say">We do not start from “fix everything you find.” The extension can act with the permissions of whoever is signed in. The sequence is the control.</p>
    <div class="flow">
      <span>0 Observe</span><i>→</i><span>1 Diagnose</span><i>→</i><span>2 Write the change</span><i>→</i><span>You approve</span><i>→</i><span>Edit the workspace</span><i>→</i><span>Preview again</span><i>→</i><span>You publish</span><i>→</i><span>Watch</span>
    </div>
    <div class="grid-2" style="margin-top:0.9rem">
      <div class="card"><h2>0 · Observe</h2><p>Read Ads, both containers, and the diagnostics. Write them down. No save, no pause, no delete, no publish.</p></div>
      <div class="card"><h2>1 · Diagnose</h2><p>Open Preview, the console, and the network list. Name the broken step. A confident sentence is still not permission.</p></div>
      <div class="card"><h2>2 · Prepare</h2><p>Draft the change in words: which trigger, which label, what to leave alone, how we test, how we undo it. You read it.</p></div>
      <div class="card"><h2>3 · Execute</h2><p>Only after a named yes. The agreed edit is saved in the workspace. You publish. Rollback is the previous version.</p></div>
    </div>
    <h2 style="margin-top:1rem">Four prompts. One at a time. Never merged into “repair the account.”</h2>
    <div class="grid-2">
      <div class="card"><h2>Read Ads</h2><p>Do not modify anything. Inventory every website-lead conversion: status, source, primary or secondary, counting, value, window, enhanced conversions, ID, label, diagnostics, activity since 4 August. Flag duplicates. Do not create, pause, or delete.</p></div>
      <div class="card"><h2>Read one container</h2><p>Read-only. Google tag, linker, Ads tags, Analytics events, triggers, variables. ID, label, and trigger on every Ads tag. Which trigger fires which tag. Latest published version. Run it again on the other container. Do not assume they match.</p></div>
      <div class="card"><h2>Compare</h2><p>Match every ID and label to a live action across both containers. Note an action with no tag, a tag with no action, and any path that could count the same lead twice. Write questions, not edits.</p></div>
      <div class="card"><h2>Rehearse</h2><p>Preview only. Dummy data only. jetsupport.com, then Conklin. What fired, what did not, consent, and whether an Ads request left with the right ID and label. Do not publish.</p></div>
    </div>
  </article>`;
}

function roadmap() {
  return `<article class="slide">
    <p class="kicker">12 · Roadmap · this engagement</p>
    <h1>Eight phases. Two deliverables. Then we stop and show you the evidence.</h1>
    <p class="say">This is Track A in the order we will actually run it. Each phase has an output. We do not skip to a fix because a screen looks wrong.</p>
    <div class="card" style="overflow-x:auto">
      <table>
        <thead><tr><th>Phase</th><th>What we do</th><th>What you have at the end</th></tr></thead>
        <tbody>
          <tr><td><strong>0 · The business</strong></td><td>Agree the hierarchy, and what Ads is allowed to chase. Decide Conklin’s role.</td><td>A definition. Without it, a perfect tag can still be the wrong tag.</td></tr>
          <tr><td><strong>1 · Inventory</strong></td><td>One sheet: system, object, purpose, status, issue, owner. Google’s flags become the issue column.</td><td>The source of truth. Later arguments point at a row.</td></tr>
          <tr><td><strong>2 · Ads</strong></td><td>Every relevant conversion action, including ID, label, primary or secondary, and whether it is receiving anything since 4 August.</td><td>The seven questions, answered, before Tag Manager is edited.</td></tr>
          <tr><td><strong>3 · Both containers</strong></td><td>The matrix, filled independently. Last published version. Any unpublished workspace edits.</td><td>A picture of drift between the corporate site and Conklin.</td></tr>
          <tr><td><strong>4 · The journey</strong></td><td>Trace ad, page, event, trigger, tag, Ads, campaign. On each host.</td><td>The step that drops the lead, named.</td></tr>
          <tr><td><strong>5 · Preview</strong></td><td>Dummy journey on both properties. Events, tags, consent, the outgoing Ads request.</td><td>Evidence. Not a diagram we merely believe.</td></tr>
          <tr><td><strong>6 · Chrome, inside the rules</strong></td><td>Observe, diagnose, draft. Dedicated browser profile. Approval on.</td><td>A faster inventory. Not a published container.</td></tr>
          <tr><td><strong>7 · The repair</strong></td><td>Approved edits only. Preview again. You publish. Watch several days. Enhanced conversions only if the base tag already fires and you accept the terms.</td><td>A named version, a rollback, and a caveat until the watch is clean.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Out of this engagement: budgets, bid strategies, keywords, pausing a campaign, consent, creative, the landing page, and what happens to a lead after it arrives. If a flag is about the media plan rather than the count, it comes back to you.</p>
  </article>`;
}

function later() {
  return `<article class="slide">
    <p class="kicker">13 · Roadmap · only after the count is real</p>
    <h1>Nine products. Each one reads your systems. None of them replaces them.</h1>
    <p class="say">This is Track B, held in one product, not nine separate tools. Nothing here starts until both sites report the action you chose, and until your IT team has agreed how a connector may see the account.</p>
    <div class="card" style="overflow-x:auto">
      <table>
        <thead><tr><th>Product</th><th>The question</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td><strong>1 · Health</strong></td><td>Is the count still healthy?</td><td>Reads the conversion actions and both containers. A score, then one sentence: what is wrong and why it matters. Not a wall of charts.</td></tr>
          <tr><td><strong>2 · Analyst</strong></td><td>How did paid search do last week?</td><td>Spend, clicks, qualified leads, named by campaign and landing page. Then why: campaign, search term, page, conversion. It stops if the count itself looks wrong.</td></tr>
          <tr><td><strong>3 · Recommendations</strong></td><td>What should we look at before changing a bid?</td><td>Google will suggest bid and asset changes. Those are not automatically right for a long aviation sale. The note says: cost moved, the rate moved, review search terms and the page first.</td></tr>
          <tr><td><strong>4 · Ask</strong></td><td>A different question, from sales, product, or leadership.</td><td>Which campaigns produce conversations a salesperson would recognize. Which service pages show intent. Where money is spent without an outcome. Same data. Willing to say “we cannot tell yet.”</td></tr>
          <tr><td><strong>5 · Monday note</strong></td><td>What changed, for people who will not open Ads?</td><td>What changed. What it seems to mean. What not to conclude. Which campaigns need a person. Whether the count itself looks unhealthy.</td></tr>
          <tr><td><strong>6 · Anomaly</strong></td><td>Leads fell. Did the market, or the tag?</td><td>Watches volume, rate, and spend. If clicks hold and the count does not, it checks the tag before anyone recommends a bid. This is the failure the current incident did not catch.</td></tr>
          <tr><td><strong>7 · Tracking QA</strong></td><td>Did the repair silently undo itself?</td><td>Status, volume, the latest container version, a rehearsed path on both hosts. A score. A ping only if it moved. An ongoing service, not a one-off project.</td></tr>
          <tr><td><strong>8 · Change impact</strong></td><td>Who depends on the trigger someone just edited?</td><td>Version diff, then tags, then conversions, then live campaigns. The warning lands before publish: this trigger feeds two Ads tags used by three campaigns.</td></tr>
          <tr><td><strong>9 · Operations</strong></td><td>Can it do the change, not only describe it?</td><td>Understand the request, query Ads and Analytics, inspect the container through its API, recommend, wait. Act only after you approve. Check the result. Write down what happened.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="grid-3" style="margin-top:0.8rem">
      <div class="card"><h2>This week</h2><p>Chrome as a reader. Preview. Your screens. You on publish.</p></div>
      <div class="card"><h2>Next build</h2><p>Desktop plus the read-only Ads connector, the Analytics connector, and the Tag Manager API when we need the architecture rather than a screenshot.</p></div>
      <div class="card"><h2>Only if you want history</h2><p>BigQuery, if you already keep marketing history there. Not required to repair August.</p></div>
    </div>
  </article>`;
}

function copilot() {
  return `<article class="slide">
    <p class="kicker">14 · The product after the repair</p>
    <h1>One copilot. It shows its evidence, and it cannot publish.</h1>
    <p class="say">JSSI Marketing Measurement Copilot is Track B, as a product you can open. It is not a chatbot beside Ads. Sample data only. No production password. <a href="copilot/">Open the prototype</a>.</p>
    <div class="flow">
      <span>Audit</span><i>→</i><span>Explain</span><i>→</i><span>Propose</span><i>→</i><span>You approve</span><i>→</i><span>Implement</span><i>→</i><span>Test</span><i>→</i><span>You publish</span>
    </div>
    <p>The model is not allowed to skip from audit to a live change. Writes stay off. Budgets, bids, campaigns, and consent are not tools it has.</p>
    <div class="grid-2" style="margin-top:0.8rem">
      <div class="card" style="background:#0e1726;color:#f6f3ec">
        <p class="kicker">Sample · not your account</p>
        <h2 style="color:white">Measurement health · 87</h2>
        <p style="color:#ddd6ca">Ads 74 · Tag Manager 91 · Consistency 68. One high finding. Two medium. Containers are selected after sign-in. Nothing is hard-coded.</p>
        <p style="color:white"><strong>High · possible ID mismatch.</strong> Ads conversion ID and the tag on the Conklin container do not match. jetsupport.com matches. Confidence is high because both values are on the record. We still do not call it broken until Preview shows the tag dark.</p>
      </div>
      <div class="card">
        <h2>What every finding has to carry</h2>
        <ul class="clean">
          <li>The finding, stated as possible until the evidence is enough.</li>
          <li>The evidence: the two IDs, the trigger, the container.</li>
          <li>Why it matters to this test.</li>
          <li>The likely cause.</li>
          <li>The recommended action.</li>
          <li>Confidence: high, medium, or low.</li>
          <li>A link back to the row it came from. No unsupported sentence.</li>
        </ul>
      </div>
    </div>
    <h2>What the first version actually contains</h2>
    <div class="grid-3">
      <div class="card"><h2>Read</h2><p>Ads conversion actions and both containers you select: tags, triggers, variables, versions. The map is conversion, then ID and label, then tag, then trigger, then the event on the site.</p></div>
      <div class="card"><h2>Ask</h2><p>Which conversions look wrong. Are the two containers consistent. What would explain under-reported leads. Show the evidence. The answer may only use connected data.</p></div>
      <div class="card"><h2>Approve</h2><p>Current state, proposed state, impact, risk, rollback. Approve, reject, or edit the proposal. The log stores who approved it and what happened. Publish stays with you.</p></div>
    </div>
    <p>Chrome remains optional, and only for what an API cannot see: Preview, the console, a screenshot of a screen that has no export. The page is data. It is never an instruction. The copilot does not wander off an allowlist of Ads, Tag Manager, and your two sites.</p>
  </article>`;
}

function stay() {
  return `<article class="slide">
    <p class="kicker">15 · What is worth doing next, and what is not</p>
    <h1>A repaired tag expires the next time someone publishes.</h1>
    <p class="say">The audit is a project. The value that remains is a watch on the count, an answer when leads move, and a warning before a trigger change ships. That is the work worth continuing. An agent that edits Ads on its own is not. It would be refused by your security team, and it is the wrong first product.</p>
    <div class="card" style="overflow-x:auto">
      <table>
        <thead><tr><th>In this order</th><th>What JSSI gets</th><th>Why it waits</th></tr></thead>
        <tbody>
          <tr><td><strong>1 · Health, every week</strong></td><td>A score and one sentence. Quiet, warning, or wrong, across Ads and both containers.</td><td>Starts the week the repair is believed. This is the thing that catches the next break.</td></tr>
          <tr><td><strong>2 · Why leads moved</strong></td><td>Campaign, search term, landing page, then a call: demand, media, the page, or the tag. Evidence on each.</td><td>The question a director will ask. Useless until the conversion means what the sentence says.</td></tr>
          <tr><td><strong>3 · Monday note</strong></td><td>What changed, what not to conclude, who needs to look. For people who will not open Ads.</td><td>After the health check has been right for a few weeks. Otherwise it launders a bad number.</td></tr>
          <tr><td><strong>4 · Before a publish</strong></td><td>This trigger feeds these tags, these conversions, these live campaigns.</td><td>Once versions are being read reliably. It belongs in the release, not in a side chat.</td></tr>
          <tr><td><strong>5 · A change, much later</strong></td><td>One approved edit, then a check, then a log. Writes exist, and they are off until then.</td><td>Only after the read-only system has been trusted. Not in the first build.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="grid-2" style="margin-top:0.8rem">
      <div class="card">
        <span class="tag now">Worth building</span>
        <p>Read-only Ads and Tag Manager. You pick the containers. Findings with confidence. An audit log. An approval card that does not press itself. Sample data until IT agrees a connector.</p>
      </div>
      <div class="card">
        <span class="tag no">Not in the first build</span>
        <p>A generic chat. Automatic publish. Budget or bid tools. Write access handed to the model. A warehouse. Anything that needs a production password to demonstrate.</p>
      </div>
    </div>
  </article>`;
}

function guard() {
  return `<article class="slide">
    <p class="kicker">16 · What stays human, even later</p>
    <h1>It proposes. You approve. The result is checked and written down.</h1>
    <p class="say">These rules hold on Thursday, and they still hold if the system gets smarter. Smarter is not the same as allowed.</p>
    <div class="grid-2">
      <div class="card">
        <span class="tag no">Never on its own</span>
        <ul class="clean">
          <li>Change a budget.</li>
          <li>Pause a campaign.</li>
          <li>Switch a bidding strategy.</li>
          <li>Publish a Tag Manager container.</li>
          <li>Delete a conversion action.</li>
          <li>Edit consent or privacy settings.</li>
          <li>Open a lead record, or submit a real customer form.</li>
          <li>Change production tracking with no named version to roll back to.</li>
        </ul>
      </div>
      <div class="card">
        <span class="tag now">Always</span>
        <div class="stack" style="margin-top:0.6rem">
          <div class="node"><b>Propose</b><span>The change, the reason, the test, the undo.</span></div>
          <div class="node"><b>You approve</b><span>A named yes. The assistant does not treat a reasonable draft as a yes.</span></div>
          <div class="node"><b>Execute only that</b><span>The workspace edit that was approved. Nothing adjacent.</span></div>
          <div class="node"><b>Verify</b><span>Preview, then Ads, over days rather than minutes.</span></div>
          <div class="node"><b>Log</b><span>What changed, who approved it, what the watch showed.</span></div>
        </div>
      </div>
    </div>
  </article>`;
}

function close() {
  return `<article class="slide">
    <p class="kicker">17 · What to leave on the table</p>
    <h1>The audit is the work. The copilot is how it stays true.</h1>
    <p class="say">The first block repairs the count. After that, the same evidence lives in a product you can open: findings, a proposed change, and a publish button that stays with you. The prototype uses sample data. It is not connected to your accounts.</p>
    <p><a href="copilot/">Open the Measurement Copilot</a></p>
    <div class="grid-2">
      <div class="card">
        <h2>I take</h2>
        <ul class="clean">
          <li>Google’s flags, turned into a register.</li>
          <li>Both containers and the related conversion actions, read without changing them.</li>
          <li>Both journeys, rehearsed, with what fired written down.</li>
          <li>The cause, and the exact edit, before anything is saved.</li>
          <li>The approved workspace edit, the re-test, and the first days of the watch.</li>
        </ul>
      </div>
      <div class="card">
        <h2>You keep</h2>
        <ul class="clean">
          <li>What the test is supposed to count.</li>
          <li>Admin. Access is for the work. It is not transferred.</li>
          <li>Publish, and the relationship with Google’s technical team.</li>
          <li>Bids, budgets, and whether the test keeps spending during the repair.</li>
          <li>Creative, the page, and what happens to a lead after it arrives.</li>
        </ul>
      </div>
    </div>
    <h2>Before the first working block, I need</h2>
    <ul class="clean">
      <li>Google’s flag list, as they sent it.</li>
      <li>The conversion the test is judged on, and what a visitor must do to count.</li>
      <li>Whether Conklin should send that conversion, a different one, or none.</li>
      <li>Both container IDs, and whether a consent banner sits in front of the tags.</li>
      <li>Who may publish while Jon is out.</li>
    </ul>
    <p>With those, the first session is an inventory and a cause. Without the flag list, it is a tour of the interface.</p>
    <h2>What we can put on the table, labeled as a prototype</h2>
    <p>Three screens, so Track B is concrete. Every figure is invented. It is not your account.</p>
    <div class="grid-3">
      <div class="card" style="background:#0e1726;color:#f6f3ec"><p class="kicker">Health</p><h2 style="color:white;font-size:2.4rem;margin:0.2rem 0">87</h2><p style="color:#ddd6ca">Two actions need a look. One container has a trigger the other does not.</p></div>
      <div class="card" style="background:#0e1726;color:#f6f3ec"><p class="kicker">What happened</p><h2 style="color:white">Clicks held. Leads did not.</h2><p style="color:#ddd6ca">The note names the campaign and the page, and refuses to conclude if the tag looks unhealthy.</p></div>
      <div class="card" style="background:#0e1726;color:#f6f3ec"><p class="kicker">What to do</p><h2 style="color:white">Do not touch the bid yet.</h2><p style="color:#ddd6ca">Match the lead tag to the action. Rehearse Conklin on its own. Then decide.</p></div>
    </div>
    <div class="card" style="margin-top:0.8rem;background:#0e1726;color:#f6f3ec">
      <p class="kicker">The line to close on</p>
      <h2 style="color:white">We will use Chrome to inspect, not to publish. The proof is Preview, and a conversion that arrives in Ads, on both of your sites, for the action this test is actually about. Once that count is trustworthy, we can put an assistant on top of it. Not before.</h2>
    </div>
    <p>That is a measurement foundation, then a marketing-operations layer. It is not a Chrome troubleshooting task. Phases 1 and 2 are this engagement. Health, the analyst, and approved operations are a later conversation.</p>
  </article>`;
}

const PAGES = { title, situation, problem, why, recommend, architecture, count, actions, proof, chrome, safe, roadmap, later, copilot, stay, guard, close };

function renderNav(id) {
  document.getElementById("nav").innerHTML = SLIDES.map((s, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `<a href="#/${s[0]}" class="${s[0] === id ? "active" : ""}"><b>${n}</b>${s[1]}</a>`;
  }).join("");
}

function pager(id) {
  const i = SLIDES.findIndex((s) => s[0] === id);
  const prev = SLIDES[i - 1];
  const next = SLIDES[i + 1];
  return `<div class="pager">
    ${prev ? `<a href="#/${prev[0]}"><small>Previous</small>${prev[1]}</a>` : "<span></span>"}
    ${next ? `<a href="#/${next[0]}"><small>Next</small>${next[1]}</a>` : "<span></span>"}
  </div>`;
}

function render() {
  const raw = (location.hash.replace(/^#\/?/, "").split("?")[0] || "title");
  const id = PAGES[raw] ? raw : "title";
  const dark = id === "title" || id === "chrome";
  document.body.style.background = dark ? "#0e1726" : "#f6f3ec";
  document.getElementById("view").innerHTML = PAGES[id]() + (dark ? "" : pager(id));
  if (dark) document.getElementById("view").insertAdjacentHTML("beforeend", pager(id).replace("pager", "pager"));
  renderNav(id);
  const active = document.querySelector("nav a.active");
  if (active) active.scrollIntoView({ block: "nearest" });
  window.scrollTo(0, 0);
}

document.body.addEventListener("click", (event) => {
  const button = event.target.closest("[data-yt]");
  if (!button) return;
  const frame = document.createElement("iframe");
  frame.className = "frame";
  frame.src = "https://www.youtube-nocookie.com/embed/" + button.dataset.yt + "?rel=0&autoplay=1";
  frame.title = button.dataset.title || "Video";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;
  button.replaceWith(frame);
});

window.addEventListener("hashchange", render);
window.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea")) return;
  const id = (location.hash.replace(/^#\/?/, "") || "title");
  const i = Math.max(0, SLIDES.findIndex((s) => s[0] === id));
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    const next = SLIDES[i + 1];
    if (next) location.hash = "/" + next[0];
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    const prev = SLIDES[i - 1];
    if (prev) location.hash = "/" + prev[0];
  }
});
render();
