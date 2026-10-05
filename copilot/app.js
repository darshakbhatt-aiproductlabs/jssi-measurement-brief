const VIEWS = [
  ["health", "Health"],
  ["ads", "Google Ads"],
  ["containers", "Containers"],
  ["map", "Mapping"],
  ["findings", "Findings"],
  ["approval", "Approval"],
  ["ask", "Ask"],
  ["log", "Audit log"],
];

const CONVERSIONS = [
  {
    id: "AW-1001",
    name: "Qualified lead",
    label: "Ql8fK2",
    status: "Enabled",
    category: "Qualified lead",
    primary: "Secondary",
    counting: "One",
    value: "None",
    window: "30 days",
    enhanced: "Off",
    include: "No",
    conv: 26,
    note: "The action this test should be judged on.",
  },
  {
    id: "AW-1002",
    name: "Contact click",
    label: "CtClick",
    status: "Enabled",
    category: "Contact",
    primary: "Primary",
    counting: "Every",
    value: "None",
    window: "30 days",
    enhanced: "Off",
    include: "Yes",
    conv: 410,
    note: "Included in the conversions column. Bidding can chase it.",
  },
  {
    id: "AW-1003",
    name: "Program brochure",
    label: "Br9pQ1",
    status: "Enabled",
    category: "Download",
    primary: "Secondary",
    counting: "One",
    value: "None",
    window: "30 days",
    enhanced: "Off",
    include: "No",
    conv: 0,
    note: "No matching tag in either sample container.",
  },
];

const CAMPAIGNS = [
  ["Brand · Maintenance", "1,840", "22", "Qualified lead"],
  ["Conklin · Parts and engines", "960", "4", "Qualified lead"],
  ["Nonbrand · Financing", "410", "0", "Qualified lead"],
  ["Brand · Maintenance", "1,840", "310", "Contact click"],
];

const TAGS = {
  jet: [
    ["Google tag", "All pages", "Present"],
    ["Conversion linker", "Initialization", "Present"],
    ["Ads · Qualified lead", "form_success", "ID AW-1001 · label Ql8fK2"],
    ["Ads · Qualified lead (duplicate)", "contact_click", "Same ID and label. Fires on the click, not the success."],
    ["GA4 · generate_lead", "form_success", "Analytics only. Not an Ads conversion."],
  ],
  conklin: [
    ["Google tag", "All pages", "Present"],
    ["Conversion linker", "—", "Not in this container"],
    ["Ads · Qualified lead", "form_submit", "ID AW-1001 · label contact_v1"],
    ["Ads · Contact click", "contact_click", "ID AW-1002 · label CtClick"],
  ],
};

const FINDINGS = [
  {
    id: "f1",
    sev: "High",
    confidence: "High",
    title: "Possible conversion-label mismatch on Conklin",
    finding: "The qualified-lead tag on the Conklin container does not carry the label of the Ads conversion it is named after.",
    evidence: [
      "Google Ads conversion “Qualified lead” uses ID AW-1001 and label Ql8fK2.",
      "jetsupport.com tag “Ads · Qualified lead” uses AW-1001 and Ql8fK2.",
      "Conklin tag of the same name uses AW-1001 and label contact_v1.",
    ],
    why: "If the test is judged on Qualified lead, Conklin inquiries may never attach to it. A different label is a different conversion, or a conversion Ads does not know.",
    cause: "The two containers were not kept to the same conversion action. The trigger name also differs: form_success on jetsupport.com, form_submit on Conklin.",
    action: "Do not edit yet. Confirm in Preview that a successful Conklin form sends contact_v1, then propose changing that label to Ql8fK2 only if contact_v1 is not a real, separate action.",
    systems: "Google Ads, Conklin container",
  },
  {
    id: "f2",
    sev: "High",
    confidence: "High",
    title: "Contact click is primary and included in bidding",
    finding: "The action allowed to steer the auction is a click, not a qualified lead.",
    evidence: [
      "Contact click is marked Primary and included in the conversions column.",
      "It counts every click. The sample shows 410 of them.",
      "Qualified lead is Secondary, counts one, and shows 26.",
    ],
    why: "A working tag on Contact click makes the test look busy while teaching Google to find people who tap a button.",
    cause: "The conversion used for bidding was never aligned to the business definition.",
    action: "A person decides whether Contact click should be secondary and excluded from the conversions column. The copilot will not change it.",
    systems: "Google Ads",
  },
  {
    id: "f3",
    sev: "Medium",
    confidence: "High",
    title: "Conklin has no conversion linker",
    finding: "The container that serves the Conklin subdomain does not include a conversion linker.",
    evidence: ["jetsupport.com has a conversion linker on Initialization.", "The Conklin container’s linker row is absent."],
    why: "Without the linker, a click identifier is more likely to be dropped, especially across the two host names. The lead can be real and still not credit the campaign.",
    cause: "The second container was not given the same base tags as the first.",
    action: "Propose adding the linker on Initialization after the label question is settled. Preview both hosts before any publish.",
    systems: "Conklin container",
  },
  {
    id: "f4",
    sev: "Medium",
    confidence: "Medium",
    title: "Possible duplicate qualified-lead tag on jetsupport.com",
    finding: "Two tags send AW-1001 / Ql8fK2. One listens for form success. One listens for the contact click.",
    evidence: [
      "Tag “Ads · Qualified lead” trigger: form_success.",
      "Tag “Ads · Qualified lead (duplicate)” trigger: contact_click. Same ID and label.",
    ],
    why: "One person can count twice, or a click can count as a qualified lead.",
    cause: "A second tag was added without retiring the first.",
    action: "Confirm in Preview which tag fires on a click that does not submit. Do not delete either tag from this screen.",
    systems: "jetsupport.com container",
  },
  {
    id: "f5",
    sev: "Medium",
    confidence: "Medium",
    title: "Program brochure exists in Ads and in neither container",
    finding: "An enabled conversion action has no tag found in the sample containers.",
    evidence: ["Ads action Program brochure, label Br9pQ1, 0 recent conversions.", "Neither tag list contains Br9pQ1."],
    why: "It may be unused, or it may be implemented outside these two containers. Zero volume is not proof it is broken.",
    cause: "Unknown until someone confirms whether a brochure download is in scope for this test.",
    action: "Ask whether this action should be measured. If not, leave it. Do not pause it from here.",
    systems: "Google Ads",
  },
  {
    id: "f6",
    sev: "Low",
    confidence: "High",
    title: "Enhanced conversions are off on the qualified lead",
    finding: "The qualified-lead action is not sending hashed first-party data.",
    evidence: ["Enhanced conversions: Off, on all three sample actions."],
    why: "This can improve match rate after a tag already fires. It cannot repair a tag that never fires, and it needs a privacy decision.",
    cause: "Not configured.",
    action: "Park it until the base tag is proven on both hosts and someone accepts the customer-data terms.",
    systems: "Google Ads",
  },
];

const ANSWERS = [
  {
    q: "Which conversions look incorrectly configured?",
    keys: ["incorrect", "configured", "wrong", "which google"],
    body: "Two findings are high confidence and high severity. Contact click is primary and included in bidding, while Qualified lead is secondary. The Conklin qualified-lead tag uses label contact_v1, not Ql8fK2. Program brochure has no tag in these containers; that is medium confidence, because it may live somewhere else.",
    evidence: ["f2", "f1", "f5"],
  },
  {
    q: "Are the two containers consistent?",
    keys: ["consistent", "containers", "match", "two gtm"],
    body: "No. They disagree on the qualified-lead label, on the success event name, and on the conversion linker. They agree on the Google tag and on the contact-click action. Do not copy a pass from jetsupport.com onto Conklin.",
    evidence: ["f1", "f3"],
  },
  {
    q: "Which tags look like duplicates?",
    keys: ["duplicate", "duplicates"],
    body: "On jetsupport.com, two tags send AW-1001 / Ql8fK2. Only one of them waits for form success. Confidence is medium until Preview shows both firing.",
    evidence: ["f4"],
  },
  {
    q: "Why might leads be underreported?",
    keys: ["under", "lead", "leads", "decline", "fell", "why"],
    body: "On this sample, Conklin can fail in two places before demand is even the question. The label contact_v1 does not match Qualified lead, and there is no conversion linker. Separately, the conversions column is dominated by Contact click, so a report that uses that column will not describe qualified leads at all. Clicks on the Conklin campaign are 960 against 4 qualified leads. That gap is not yet explained. It is a reason to rehearse the journey, not a reason to change a bid.",
    evidence: ["f1", "f3", "f2"],
  },
  {
    q: "What should be validated next?",
    keys: ["validate", "next", "preview"],
    body: "Preview, with dummy details, on both hosts. On jetsupport.com, confirm form_success fires one qualified-lead tag and the click does not. On Conklin, confirm what label leaves on form submit, and whether the click identifier survives. The copilot has not seen a Preview session. Until it has, none of these findings is called broken.",
    evidence: ["f1", "f4"],
  },
  {
    q: "Which issue has the highest business impact?",
    keys: ["impact", "highest", "business"],
    body: "Contact click as the primary action. It changes what the auction is allowed to learn. The label mismatch changes whether Conklin counts at all. The linker is the next most likely reason a real lead would not credit a campaign. Enhanced conversions are last.",
    evidence: ["f2", "f1", "f3"],
  },
];

const state = {
  view: "health",
  filter: "All",
  selected: "f1",
  proposal: "pending",
  draft: "Change the Conklin tag “Ads · Qualified lead” label from contact_v1 to Ql8fK2. Do not publish. Rehearse a dummy form success in Preview and confirm the request carries AW-1001 and Ql8fK2.",
  ask: "",
  answer: 3,
  log: [
    { t: "Sample loaded", d: "Read-only fixtures for two containers and three conversion actions. No production account was contacted." },
  ],
};

function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => (c === "&" ? "&" + "amp;" : c === "<" ? "&" + "lt;" : "&" + "gt;"));
}

function stamp(detail) {
  state.log.unshift({ t: new Date().toLocaleString(), d: detail });
  save();
}

function finding(id) {
  return FINDINGS.find((f) => f.id === id);
}

function badge(sev) {
  const cls = sev === "High" ? "hi" : sev === "Medium" ? "md" : "lo";
  return `<span class="badge ${cls}">${sev}</span>`;
}

function load() {
  try {
    const data = JSON.parse(localStorage.getItem("jssi-copilot") || "null");
    if (!data) return;
    if (data.proposal) state.proposal = data.proposal;
    if (data.draft) state.draft = data.draft;
    if (Array.isArray(data.log) && data.log.length) state.log = data.log;
  } catch (err) { /* sample state remains */ }
}
function save() {
  localStorage.setItem("jssi-copilot", JSON.stringify({ proposal: state.proposal, draft: state.draft, log: state.log }));
}

function health() {
  const highs = FINDINGS.filter((f) => f.sev === "High").length;
  return `
    <h1>Measurement health</h1>
    <p class="lede">Scores describe the sample fixtures, not a live JSSI account. A high score is not permission to read the August test as a result. Preview has not been run.</p>
    <div class="grid scores">
      <article class="card"><p class="badge md">Needs a person</p><div class="score">71 <small>/ 100</small></div><h2>Overall</h2><p>Pulled down by a primary action that is only a click, and by the two containers disagreeing.</p></article>
      <article class="card"><div class="score">64</div><h2>Google Ads</h2><p>Contact click is in the bidding set. Qualified lead is not.</p></article>
      <article class="card"><div class="score">74</div><h2>Tag Manager</h2><p>Base tag is present on both. Conklin is missing the linker.</p></article>
      <article class="card"><div class="score">62</div><h2>Consistency</h2><p>Qualified-lead label and success event differ across containers.</p></article>
      <article class="card"><div class="score">80</div><h2>QA</h2><p>No destructive change is possible. Preview evidence is still empty.</p></article>
    </div>
    <div class="split" style="margin-top:12px">
      <article class="card">
        <h2>${highs} high · ${FINDINGS.filter((f) => f.sev === "Medium").length} medium · ${FINDINGS.filter((f) => f.sev === "Low").length} low</h2>
        ${FINDINGS.map((f) => `<button class="rowbtn" data-go="findings" data-find="${f.id}">${badge(f.sev)} <strong>${esc(f.title)}</strong><br><span>${esc(f.systems)} · confidence ${esc(f.confidence)}</span></button>`).join("")}
      </article>
      <article class="card">
        <h2>What this screen will not say</h2>
        <p>It will not say a conversion is broken. The label mismatch is high confidence because both values are on the record. It is still a possible miss until Preview shows the request.</p>
        <p>It will not recommend a bid change. Clicks on the Conklin sample campaign are 960 and qualified leads are 4. That is a measurement question first.</p>
        <div class="actions"><button class="btn" data-go="approval">Review the proposed change</button><button class="btn-ghost" data-go="ask">Ask from this evidence</button></div>
      </article>
    </div>`;
}

function ads() {
  const rows = CONVERSIONS.map((c) => `<tr>
    <td><strong>${esc(c.name)}</strong><div class="mono">${esc(c.id)} · ${esc(c.label)}</div></td>
    <td>${esc(c.status)}</td>
    <td>${esc(c.primary)}<div>${esc(c.include === "Yes" ? "In the conversions column" : "Not in the conversions column")}</div></td>
    <td>${esc(c.counting)} · ${esc(c.window)}</td>
    <td>${esc(c.enhanced)}</td>
    <td class="mono">${c.conv}</td>
  </tr>`).join("");
  const camps = CAMPAIGNS.map((r) => `<tr>${r.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("");
  return `
    <h1>Google Ads</h1>
    <p class="lede">Read-only. These are the counters the test would be judged on. Nothing here can be paused, deleted, or given a budget.</p>
    <div class="card" style="overflow:auto">
      <table>
        <thead><tr><th>Action</th><th>Status</th><th>Role</th><th>Counting</th><th>Enhanced</th><th>Sample volume</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <h2 style="margin-top:16px">Campaign rows, same sample</h2>
    <div class="card" style="overflow:auto">
      <table>
        <thead><tr><th>Campaign</th><th>Clicks</th><th>Conversions</th><th>Action</th></tr></thead>
        <tbody>${camps}</tbody>
      </table>
    </div>`;
}

function containers() {
  const table = (rows) => `<table><thead><tr><th>Tag</th><th>Trigger</th><th>Recorded</th></tr></thead><tbody>${rows.map((r) => `<tr><td><strong>${esc(r[0])}</strong></td><td class="mono">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</tbody></table>`;
  return `
    <h1>Two containers, read separately</h1>
    <p class="lede">IDs are sample values chosen for this prototype. A real connection would let you pick the containers after authentication. They are not hard-coded as production IDs.</p>
    <div class="split even">
      <article class="card"><h2>jetsupport.com</h2><p class="mono">GTM-SAMPLE1 · published v14 · workspace matches</p>${table(TAGS.jet)}</article>
      <article class="card"><h2>conklindedecker.jetsupport.com</h2><p class="mono">GTM-SAMPLE2 · published v6 · workspace matches</p>${table(TAGS.conklin)}</article>
    </div>`;
}

function map() {
  return `
    <h1>Qualified lead, followed through</h1>
    <p class="lede">One conversion, two implementations. The break is marked. This is a map of the fixtures, not a Preview result.</p>
    <div class="chain">
      <article><b>Ads action</b><span class="mono">Qualified lead<br>AW-1001<br>Ql8fK2</span></article>
      <article><b>jetsupport.com tag</b><span>Same ID and label. Trigger form_success. A second tag repeats it on contact_click.</span></article>
      <article><b>Conklin tag</b><span class="badge hi">Differs</span><span class="mono"><br>AW-1001<br>contact_v1</span><span> Trigger form_submit. No linker in the container.</span></article>
      <article><b>Not yet shown</b><span>The data layer event on a real submit, and the Ads request in the network panel. That is Preview.</span></article>
    </div>
    <div class="actions"><button class="btn" data-go="findings" data-find="f1">Open the finding</button></div>`;
}

function findings() {
  const list = FINDINGS.filter((f) => state.filter === "All" || f.sev === state.filter);
  const f = finding(state.selected) || list[0];
  const filters = ["All", "High", "Medium", "Low"].map((name) => `<button class="${state.filter === name ? "on" : ""}" data-filter="${name}">${name}</button>`).join("");
  return `
    <h1>Findings</h1>
    <p class="lede">Each one carries evidence. Confidence is about the record, not about whether the live site is broken.</p>
    <div class="filters">${filters}</div>
    <div class="split">
      <div>${list.map((item) => `<button class="rowbtn ${item.id === f.id ? "on" : ""}" data-find="${item.id}">${badge(item.sev)} <strong>${esc(item.title)}</strong><br><span>Confidence ${esc(item.confidence)}</span></button>`).join("") || "<p>No findings at this severity.</p>"}</div>
      <article class="card">
        <p>${badge(f.sev)} <span class="badge lo">Confidence ${esc(f.confidence)}</span></p>
        <h2>${esc(f.title)}</h2>
        <p>${esc(f.finding)}</p>
        <h2>Evidence</h2>
        <ul>${f.evidence.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
        <h2>Why it matters</h2><p>${esc(f.why)}</p>
        <h2>Likely cause</h2><p>${esc(f.cause)}</p>
        <h2>Recommended action</h2><p>${esc(f.action)}</p>
        <p class="mono">${esc(f.systems)}</p>
        ${f.id === "f1" ? `<div class="actions"><button class="btn" data-go="approval">Open the proposal</button></div>` : ""}
      </article>
    </div>`;
}

function approval() {
  const status = {
    pending: ["Awaiting a person", "md"],
    approved: ["Approved. Not published.", "ok"],
    rejected: ["Rejected. No change made.", "hi"],
    modified: ["Proposal edited. Still awaiting approval.", "md"],
  }[state.proposal];
  return `
    <h1>Proposed change</h1>
    <p class="lede">One change, for the label mismatch. Approving it records your decision. It does not edit Tag Manager. Publish stays disabled on purpose.</p>
    <article class="card">
      <p><span class="badge ${status[1]}">${status[0]}</span></p>
      <div class="split even">
        <div><h2>Current</h2><p class="mono">Conklin tag “Ads · Qualified lead”<br>AW-1001 · contact_v1<br>Trigger form_submit</p></div>
        <div><h2>Proposed</h2><p>${esc(state.draft)}</p></div>
      </div>
      <h2>Expected impact</h2>
      <p>A successful Conklin form would send the conversion the test is judged on, if Preview confirms the rest of the chain.</p>
      <h2>Risk</h2>
      <p>If contact_v1 is a real, separate action, replacing it would hide that action. That is why this is a proposal, not an edit.</p>
      <h2>Rollback</h2>
      <p>Do not publish until a named version exists to return to. This prototype cannot create that version.</p>
      <div id="edit" hidden>
        <h2>Edit the proposal</h2>
        <textarea id="draft">${esc(state.draft)}</textarea>
      </div>
      <div class="actions">
        <button class="btn" id="approve" ${state.proposal === "approved" ? "disabled" : ""}>Approve</button>
        <button class="btn-ghost" id="reject">Reject</button>
        <button class="btn-ghost" id="modify">Modify proposal</button>
        <button class="btn" id="save-draft" hidden>Save revision</button>
        <button class="btn" disabled>Publish container</button>
      </div>
      <p>Publish is locked. A later build may prepare a workspace edit after approval. It still will not publish it.</p>
    </article>`;
}

function ask() {
  const a = ANSWERS[state.answer] || ANSWERS[0];
  const ev = a.evidence.map((id) => finding(id)).filter(Boolean);
  return `
    <h1>Ask</h1>
    <p class="lede">Answers are written from the fixtures on this screen. If the evidence is not here, the answer should say so. This is not a general chatbot.</p>
    <div class="ask-list">${ANSWERS.map((item, i) => `<button class="btn-ghost ${i === state.answer ? "on" : ""}" data-ask="${i}">${esc(item.q)}</button>`).join("")}</div>
    <form id="ask-form" class="actions">
      <input type="text" id="ask-q" placeholder="Ask about the sample account" value="${esc(state.ask)}" />
      <button class="btn" type="submit">Answer from evidence</button>
    </form>
    <article class="card">
      <h2>${esc(a.q)}</h2>
      <p>${esc(a.body)}</p>
      <h2>Evidence used</h2>
      <ul>${ev.map((f) => `<li><button class="btn-ghost" data-go="findings" data-find="${f.id}">${esc(f.title)}</button></li>`).join("")}</ul>
    </article>`;
}

function log() {
  return `
    <h1>Audit log</h1>
    <p class="lede">Decisions made in this browser, on this sample. Refreshing keeps them on this device only. Nothing was sent to Google.</p>
    <div class="card log">
      ${state.log.map((row) => `<p><time>${esc(row.t)}</time><br>${esc(row.d)}</p>`).join("")}
    </div>`;
}

const PAGES = { health, ads, containers, map, findings, approval, ask, log };

function render() {
  document.getElementById("crumb").textContent = (VIEWS.find((v) => v[0] === state.view) || VIEWS[0])[1];
  document.getElementById("nav").innerHTML = VIEWS.map((v) => `<button type="button" data-go="${v[0]}" class="${v[0] === state.view ? "on" : ""}">${v[1]}</button>`).join("");
  document.getElementById("main").innerHTML = (PAGES[state.view] || health)();
}

document.body.addEventListener("click", (event) => {
  const go = event.target.closest("[data-go]");
  const find = event.target.closest("[data-find]");
  const filter = event.target.closest("[data-filter]");
  const askBtn = event.target.closest("[data-ask]");
  if (filter) {
    state.filter = filter.dataset.filter;
    const still = FINDINGS.find((f) => f.id === state.selected && (state.filter === "All" || f.sev === state.filter));
    if (!still) state.selected = (FINDINGS.find((f) => state.filter === "All" || f.sev === state.filter) || FINDINGS[0]).id;
  }
  if (find && find.dataset.find) state.selected = find.dataset.find;
  if (askBtn) state.answer = Number(askBtn.dataset.ask);
  if (go) state.view = go.dataset.go;
  if (event.target.id === "approve") {
    state.proposal = "approved";
    stamp("Approved the label proposal for the Conklin qualified-lead tag. No container was edited. Publish remains locked.");
  } else if (event.target.id === "reject") {
    state.proposal = "rejected";
    stamp("Rejected the label proposal. No change was made.");
  } else if (event.target.id === "modify") {
    document.getElementById("edit").hidden = false;
    document.getElementById("save-draft").hidden = false;
    return;
  } else if (event.target.id === "save-draft") {
    state.draft = document.getElementById("draft").value.trim() || state.draft;
    state.proposal = "modified";
    stamp("Revised the proposal. It is still awaiting approval. Nothing was published.");
  } else if (!go && !find && !filter && !askBtn) return;
  render();
});

document.body.addEventListener("submit", (event) => {
  if (event.target.id !== "ask-form") return;
  event.preventDefault();
  const q = document.getElementById("ask-q").value.toLowerCase();
  state.ask = document.getElementById("ask-q").value;
  const hit = ANSWERS.findIndex((a) => a.keys.some((k) => q.includes(k)));
  state.answer = hit === -1 ? 0 : hit;
  if (hit === -1) state.answer = -1;
  render();
});

const _ask = ask;
function askWithFallback() {
  if (state.answer === -1) {
    return `
      <h1>Ask</h1>
      <p class="lede">Answers are written from the fixtures on this screen. If the evidence is not here, the answer should say so.</p>
      <form id="ask-form" class="actions">
        <input type="text" id="ask-q" placeholder="Ask about the sample account" value="${esc(state.ask)}" />
        <button class="btn" type="submit">Answer from evidence</button>
      </form>
      <article class="card">
        <h2>Not in this sample</h2>
        <p>There is no evidence here for that question. It is not answered from general knowledge. Try one of the prepared questions, or ask about labels, containers, duplicates, or underreported leads.</p>
      </article>`;
  }
  return _ask();
}
PAGES.ask = askWithFallback;

load();
render();
