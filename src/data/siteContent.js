export const siteMeta = {
  title: 'The AI-Augmented Architect',
  heroTitle: 'The AI-Augmented Architect',
  heroSubtitle: 'A practical guide to designing software, teams, and legacy modernization for a world where humans and AI agents work together.',
  heroDescription:
    'This is not a prompt cookbook. It is a durable architecture book for architects, technology leaders, and program managers who need to modernize real enterprises without breaking what already works.',
  stats: [
    { value: '16', label: 'Chapters' },
    { value: '6', label: 'Parts' },
    { value: '1', label: 'Continuous case study' },
  ],
}

export const audiences = [
  {
    title: 'Architects',
    description:
      'For architects who need a durable framework for deciding what to delegate, how to keep systems legible, and how to modernize without chaos.',
  },
  {
    title: 'Technology leaders',
    description:
      'For CTOs, VPs, and directors who must turn “adopt AI” into a real operating model, not a pile of disconnected pilots.',
  },
  {
    title: 'Program and delivery leaders',
    description:
      'For program managers and transformation leaders who need governance, sequencing, and execution patterns that survive contact with reality.',
  },
]

export const bookParts = [
  {
    icon: '🧭',
    title: 'Part I, The New Discipline',
    summary:
      'Defines the role, separates hype from durable change, and reframes the architect’s job around judgment, specification, and verification.',
    chapters: [
      'Defining the AI-Augmented Architect',
      'What AI Changes, and What It Doesn’t',
      'The New Division of Labor',
    ],
  },
  {
    icon: '🧱',
    title: 'Part II, Designing for Delegation',
    summary:
      'Shows how to make systems legible and bounded enough that AI-assisted change is safe, testable, and actually useful.',
    chapters: [
      'Architecting for AI-Assisted Change',
      'Boundaries: Separating Front-End, Back-End, and Services',
      'Observability and Operability',
      'Designing for Scale, Data, and Integration',
    ],
  },
  {
    icon: '🛡️',
    title: 'Part III, Trust and Control',
    summary:
      'Covers verification, risk, and the guardrails required when teams rely on work they did not hand-author line by line.',
    chapters: [
      'Verifying Work You Didn’t Write',
      'Security, Privacy, and Compliance',
      'Failure Modes and the New Shape of Technical Debt',
    ],
  },
  {
    icon: '🏚️',
    title: 'Part IV, The Legacy Estate',
    summary:
      'Focuses on the real enterprise problem: systems you cannot rewrite, barely understand, and still must modernize safely.',
    chapters: [
      'Understanding and Modernizing Legacy Systems',
      'Build, Buy, or Modernize: The Portfolio Decision',
    ],
  },
  {
    icon: '👥',
    title: 'Part V, People, Governance, and Economics',
    summary:
      'Turns architecture into an organizational practice, covering roles, policy, adoption, and the economics of AI-augmented delivery.',
    chapters: [
      'Roles, Teams, and Skills',
      'Governance, Policy, and Adoption',
      'The Economics of AI-Augmented Delivery',
    ],
  },
  {
    icon: '🌊',
    title: 'Part VI, The Moving Frontier',
    summary:
      'Ends with the one thing that will keep changing: the tools. The focus is how to build an architecture practice that stays stable while the frontier moves.',
    chapters: ['Architecting for an Uncertain Future'],
  },
]

export const companionCards = [
  {
    icon: '🧪',
    title: 'Examples',
    description:
      'Reference artifacts that show how the book’s ideas look in practice: memos, scorecards, boundary specs, governance packs, and operating models.',
    link: '/examples',
    cta: 'See examples',
  },
  {
    icon: '📝',
    title: 'Worksheets & forms',
    description:
      'Copyable templates you can use with your own teams for modernization planning, delegation decisions, observability, governance, and economics.',
    link: '/worksheets',
    cta: 'Use worksheets',
  },
  {
    icon: '🧭',
    title: 'Labs',
    description:
      'Facilitated exercises that turn the book into team practice, from the AI mandate workshop to legacy portfolio triage.',
    link: '/labs',
    cta: 'Run a lab',
  },
  {
    icon: '📚',
    title: 'Companion map',
    description:
      'A chapter-to-resource map so readers can move from the book’s argument to a practical artifact without guessing where to start.',
    link: '/companion',
    cta: 'Use the companion',
  },
]

export const exampleArtifacts = [
  {
    title: 'AI mandate clarifier memo',
    chapters: 'Chapters 1–2',
    description:
      'A one-page memo that turns “adopt AI” into distinct decisions about architecture, operations, governance, and expected business outcomes.',
    bullets: [
      'Separates tooling purchases from architectural choices',
      'Names what moved from production work into judgment work',
      'Gives leaders a durable position instead of a hype response',
    ],
  },
  {
    title: 'Delegation spectrum decision board',
    chapters: 'Chapters 3–4',
    description:
      'A working example of how to place work on the assisted, delegated, and autonomous spectrum using reversibility, blast radius, verifiability, and system understanding.',
    bullets: [
      'Highlights where work is safe to delegate first',
      'Shows what must remain human-owned',
      'Turns intuition into a repeatable architecture decision',
    ],
  },
  {
    title: 'Contract-first boundary pack',
    chapters: 'Chapters 4–5',
    description:
      'A boundary example showing how a front end, service, and downstream integration can evolve independently when the contract is explicit.',
    bullets: [
      'Request and response contract',
      'Ownership of business logic',
      'Checks that catch boundary erosion early',
    ],
  },
  {
    title: 'Observability signal map',
    chapters: 'Chapters 6–8',
    description:
      'A model operating view of what to observe in background jobs, business outcomes, and delegated changes so teams can trust what is running.',
    bullets: [
      'Silent-failure prevention for scheduled work',
      'Signals tied to business outcomes, not just uptime',
      'Feedback loops for act, observe, correct',
    ],
  },
  {
    title: 'Legacy modernization scorecard',
    chapters: 'Chapters 11–12',
    description:
      'An example portfolio pack for deciding whether to build, buy, wrap, strangle, or leave a legacy system alone for now.',
    bullets: [
      'Business criticality vs technical risk',
      'Understanding level and data gravity',
      'Sequencing based on what is safe to learn on first',
    ],
  },
  {
    title: 'Governance and economics briefing pack',
    chapters: 'Chapters 13–16',
    description:
      'A leadership-facing example for team design, operating guardrails, adoption sequencing, and the business case for AI-augmented delivery.',
    bullets: [
      'Role and skill implications',
      'Policy questions worth making explicit',
      'Economic framing that goes beyond “faster coding”',
    ],
  },
]

export const worksheets = [
  {
    title: 'AI mandate reframing worksheet',
    intro: 'Use this when leadership says “adopt AI” and you need to turn that into real architectural decisions.',
    template: `1. What problem are we actually trying to solve?
- Cost reduction:
- Speed of delivery:
- Legacy modernization:
- Better operations:
- New customer capability:

2. Which decisions are architectural, not just purchasing?
- Boundaries or decomposition decisions:
- Verification and trust decisions:
- Data ownership decisions:
- Governance or compliance decisions:

3. What must remain human-owned?
- Judgment calls with irreversible consequences:
- Risk or compliance ownership:
- Business-semantic decisions:

4. What would success look like in 12 months?
- One visible win:
- One system made safer to change:
- One operating metric improved:
- One capability the team can repeat:`
  },
  {
    title: 'Delegation decision scorecard',
    intro: 'Use this before letting agents work on a system or task.',
    template: `Task or change:
System or boundary affected:

Score each dimension from 1 (dangerous) to 5 (favorable)
- Reversible if wrong:
- Blast radius is contained:
- Correctness is cheaply verifiable:
- Intent is clearly specifiable:
- System is well understood:

Decision
- Human-led only:
- Human-supervised delegation:
- Bounded delegated work:
- Candidate for higher autonomy:

What would have to change to move one step safer?`
  },
  {
    title: 'System legibility audit',
    intro: 'Use this to assess whether a system is ready for AI-assisted change.',
    template: `System:
Owner:

Legibility signals
- Real boundaries exist between parts:
- Contracts are explicit and checked:
- Tests act as specification for critical behavior:
- Key context is written near the code and design:
- Dependency graph is understandable:
- Observability exists for the behaviors we cannot afford to miss:

Top three dark areas
1.
2.
3.

What “turning on the lights” means for this system over the next quarter:`
  },
  {
    title: 'Contract-first interface form',
    intro: 'Use this to define a boundary before front-end, back-end, or service work begins.',
    template: `Capability name:
Consumer:
Provider:

Business intent
- User or workflow outcome:
- Non-negotiable constraints:

Contract
- Request shape:
- Response shape:
- Errors and failure states:
- Versioning rule:
- What logic lives behind the contract:

Verification
- Tests that prove the contract:
- Observability signals tied to the contract:
- What breaks loudly if the boundary erodes:`
  },
  {
    title: 'Observability and operating readiness checklist',
    intro: 'Use this for background jobs, workflows, and any system you expect to change safely.',
    template: `System or job:
Critical business outcome:

Can we answer yes?
- We know within minutes if it fails
- We can see volume, duration, and failure rate
- We can trace a failed outcome to a likely cause
- We observe business success, not only technical uptime
- We know which signals matter most to operators
- A delegated change includes the signals needed to verify it in production

Missing signals to add next:`
  },
  {
    title: 'Build, buy, or modernize worksheet',
    intro: 'Use this for legacy portfolio decisions where the wrong answer is expensive to reverse.',
    template: `System:
Business owner:

Current state
- Business criticality:
- Revenue or compliance impact:
- Team understanding level:
- Integration complexity:
- Data migration risk:
- Replacement urgency:

Options
- Build new:
- Buy/replace:
- Modernize in place:
- Wrap and defer:
- Leave alone for now:

Decision rationale
- Best option now:
- Why not the others:
- Preconditions to revisit this in 6–12 months:`
  },
  {
    title: 'Governance and adoption checklist',
    intro: 'Use this to make policy explicit before teams scale AI-assisted delivery.',
    template: `Team or program:

Policy questions
- What work may be delegated without approval?
- What work requires human review before merge or release?
- What data may never be exposed to external tools?
- What verification evidence is required?
- How are prompts, specs, and outputs retained or audited?
- Who owns exceptions and incident review?

Adoption questions
- Which team goes first?
- What early work is safe enough to learn on?
- What capability do we need to teach before rollout expands?`
  },
]

export const labs = [
  {
    title: 'Lab 1, Reframe the AI mandate',
    duration: '60–90 minutes',
    forWho: 'Architecture and leadership teams',
    outcome: 'A concrete statement of what “adopt AI” means for your organization and what it definitely does not mean.',
    steps: [
      'List the different meanings leadership is collapsing into one phrase',
      'Separate purchasing decisions from architecture decisions',
      'Define one safe first move and one dangerous move to avoid',
    ],
  },
  {
    title: 'Lab 2, Delegation and boundary workshop',
    duration: '90 minutes',
    forWho: 'Architects, leads, and senior engineers',
    outcome: 'A prioritized list of work that can be delegated now, later, or not yet.',
    steps: [
      'Choose three real work items from your backlog',
      'Score them on reversibility, blast radius, verifiability, clarity, and system understanding',
      'Redesign one boundary or contract to make a currently risky task safer',
    ],
  },
  {
    title: 'Lab 3, Operability and silent failure review',
    duration: '60 minutes',
    forWho: 'Engineering, SRE, and operations teams',
    outcome: 'A list of silent failures you can no longer tolerate and the signals required to catch them.',
    steps: [
      'Inventory critical background jobs and async workflows',
      'Ask how you would know within minutes if each one failed',
      'Define the missing observability and ownership',
    ],
  },
  {
    title: 'Lab 4, Legacy estate triage',
    duration: '90–120 minutes',
    forWho: 'Architecture and portfolio teams',
    outcome: 'A defensible sequence for modernization rather than a wish list ordered by pain alone.',
    steps: [
      'List key legacy systems and score understanding, risk, and business criticality',
      'Identify which system is tempting but unsafe to tackle first',
      'Define the first safer system that teaches the capabilities you need later',
    ],
  },
  {
    title: 'Lab 5, Governance and economics review',
    duration: '60–90 minutes',
    forWho: 'Technology leaders and transformation sponsors',
    outcome: 'A practical guardrail set and an economic narrative that extends beyond “faster coding.”',
    steps: [
      'Define required review points and prohibited data exposure',
      'Identify where value shows up in specification, verification, and modernization, not just production',
      'Choose the measures leadership should watch over the next two quarters',
    ],
  },
]

export const companionMap = [
  {
    part: 'Part I, The New Discipline',
    resource: 'Mandate reframing worksheet, AI mandate clarifier memo, Lab 1',
  },
  {
    part: 'Part II, Designing for Delegation',
    resource: 'Delegation scorecard, legibility audit, contract-first form, Labs 2–3',
  },
  {
    part: 'Part III, Trust and Control',
    resource: 'Verification and control examples, risk-focused operating checklists',
  },
  {
    part: 'Part IV, The Legacy Estate',
    resource: 'Legacy modernization scorecard, build-buy-modernize worksheet, Lab 4',
  },
  {
    part: 'Part V, People, Governance, and Economics',
    resource: 'Governance checklist, operating model example, Lab 5',
  },
  {
    part: 'Part VI, The Moving Frontier',
    resource: 'A stable decision framework to revisit as tools change',
  },
]

export const buyPagePoints = [
  'A durable framework instead of tool-churn commentary',
  'A full enterprise case study that runs through the book',
  'Clear positioning for architects, technology leaders, and program managers',
  'Practical guidance for architects, executives, and program leaders',
]
