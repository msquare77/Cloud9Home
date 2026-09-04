// ============================================================
// CLOUD 9 TRAVEL JOURNAL — Article data
// Add a new article by adding a new object to TRAVEL_JOURNAL_ARTICLES.
// No component code needs to change to add an article.
// ============================================================

export interface TravelJournalBodyBlock {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'highlight';
  text?: string;
  items?: string[];
}

export interface TravelJournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categories: string[];
  destination: string | null;
  readTime: number;
  publishDate: string | null;
  featured: boolean;
  tags: string[];
  author: string;
  deck: string;
  pullQuote: string;
  travelNotes: Record<string, string>;
  body: TravelJournalBodyBlock[];
  relatedSlugs: string[];
}

export const TRAVEL_JOURNAL_CATEGORIES = [
  'All',
  'Cruising',
  'Alaska',
  'Africa Safari',
  'Caribbean',
  'Travel Stories',
  'Travel Tips',
  'Group Travel'
];

export const TRAVEL_JOURNAL_ARTICLES: TravelJournalArticle[] = 
[
  {
    slug: "our-unwritten-rules-of-travel",
    title: "Our Unwritten Rules of Travel",
    excerpt: "The small habits and quiet agreements that make a trip feel easy, from the first morning to the last.",
    category: "Travel Stories",
    categories: ["Travel Stories", "Travel Tips"],
    destination: null,
    readTime: 8,
    publishDate: null,
    featured: true,
    tags: ["mindset", "habits", "planning"],
    author: "The Cloud 9 Team",
    deck: "Nobody hands you a rulebook when you start traveling. You write it yourself, one trip at a time.",
    pullQuote: "The best itinerary still leaves room for the afternoon you didn't plan.",
    travelNotes: {
      "Best for": "Anyone building their own travel style",
      "What surprised us": "How much the small habits matter more than the big decisions",
      "Good to know": "None of these are rules you need to follow — just ones we've found useful"
    },
    body: [
      { type: "p", text: "Every traveler ends up with a personal set of habits, even if they never write them down. A way of packing. A rule about the first evening. A refusal to plan the whole day. Ours came together slowly, trip by trip, mostly from getting things wrong the first time and quietly deciding not to make the same mistake twice." },
      { type: "p", text: "None of what follows is a formula, and none of it is unique to us — most seasoned travelers land on some version of it eventually. But it's the closest thing we have to a shared philosophy, and it's changed the way almost every trip since has gone." },
      { type: "h2", text: "Arrive slower than you think you need to" },
      { type: "p", text: "The instinct on day one is to go see everything immediately, as if the trip might be cancelled by lunch. We've learned to resist that. A slow first afternoon — checking in, walking without a destination, finding where breakfast will happen tomorrow — sets the tone for the whole trip far better than sprinting straight to the top attraction." },
      { type: "p", text: "It also means the second day starts from a place of being settled rather than jet-lagged and overstimulated, which changes how much you actually enjoy what you're seeing. There's a version of travel where you spend the first two days recovering from travel itself, and a version where you simply build the recovery into the plan from the start. We'll take the second one every time." },
      { type: "h2", text: "Leave one block of the day unplanned" },
      { type: "p", text: "Full itineraries look productive on paper and feel exhausting in practice. We plan the anchor — the excursion, the reservation, the thing that needed booking in advance — and leave the rest loose enough that a good recommendation from a local, or just curiosity, can change the plan." },
      { type: "ul", items: [
        "Book the must-do things; let the rest stay flexible",
        "Ask one local person what they'd do with a free afternoon",
        "Say yes to the detour more often than not",
        "Treat 'we have nothing planned right now' as a feature, not a gap"
      ]},
      { type: "p", text: "This is where most of our favorite travel memories have come from — never the thing we researched for months, always the thing we stumbled into because we hadn't filled the whole day. A packed schedule can be its own kind of blindfold; you're moving too fast between the planned stops to notice what's happening around you." },
      { type: "h2", text: "Pack for the trip you're actually taking" },
      { type: "p", text: "Not the trip you're imagining, or the one from the brochure. We've gotten better over the years at packing for real weather, real activity levels, and real amounts of laundry, rather than an aspirational version of ourselves who suddenly becomes a different kind of traveler the moment we land somewhere new." },
      { type: "p", text: "That means fewer 'just in case' items and more honest questions before we zip the suitcase: will we actually wear this, will we actually do that activity, do we actually need a backup for the backup. Overpacking rarely ruins a trip outright, but it adds a low hum of friction to every single day — one more bag to manage, one more thing to keep track of, one more reason the room feels cluttered by day three." },
      { type: "h2", text: "Let the trip change your plans, not just your photos" },
      { type: "p", text: "The most useful shift we've made isn't a packing trick or a scheduling habit — it's a willingness to actually let a place change our plans mid-trip, instead of just collecting pictures of it and moving on to the next scheduled thing. If a port turns out to be more interesting than expected, we stay longer and adjust the rest. If a recommended restaurant is the best meal of the trip, we go back a second time instead of forcing ourselves through the next entry on the list." },
      { type: "p", text: "None of this is a formula. It's just what's worked for us, trip after trip — and it keeps changing a little every time we go somewhere new. If there's a single unwritten rule underneath all the others, it's probably this one: build a plan loose enough that the trip still has room to surprise you." }
    ],
    relatedSlugs: ["alaska-africa-or-the-caribbean", "from-alaska-to-africa", "things-we-never-cruise-without"]
  },
  {
    slug: "from-strangers-to-travel-friends",
    title: "From Strangers to Travel Friends: What Happens on a Group Cruise",
    excerpt: "How a table of strangers on night one usually ends up exchanging numbers by the final dinner.",
    category: "Group Travel",
    categories: ["Group Travel", "Cruising"],
    destination: "At Sea",
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["group travel", "cruising", "community"],
    author: "The Cloud 9 Team",
    deck: "There's a particular kind of friendship that only seems to form at sea, over a week of shared dinners and shore days.",
    pullQuote: "By the third dinner, nobody's checking name tags anymore.",
    travelNotes: {
      "Best for": "First-time group cruisers who are nervous about the 'group' part",
      "What surprised us": "How quickly a shared table turns into a shared trip",
      "Don't miss": "The excursions — they're where the real conversations happen"
    },
    body: [
      { type: "p", text: "Group cruising has a reputation for being about the ship — the pools, the shows, the buffet, the sheer scale of the thing. What people talk about less is what happens at the dinner table, night after night, with the same faces across from you. That's usually the part that ends up mattering most by the end of the week." },
      { type: "h2", text: "Night one is polite. Night three is honest." },
      { type: "p", text: "The first dinner is small talk: where everyone's from, how many cruises they've done, whether the seas are supposed to be rough tomorrow. Pleasant, easy, forgettable. By the third night, the conversation has usually moved on to something more real — the reason someone booked the trip, a story about a previous vacation gone sideways, an opinion about the ports still to come, or just an honest complaint about a shore excursion that didn't live up to the brochure." },
      { type: "p", text: "It happens faster than it would on land, probably because there's nowhere else to be. You're all going to be at that same table again tomorrow, and the day after, which changes the incentive to actually get to know each other instead of keeping things surface-level for the whole week." },
      { type: "h2", text: "The table itself matters more than you'd think" },
      { type: "p", text: "Cruise lines put some thought into seating, and it shows. A table of six or eight strangers, seated together night after night, ends up functioning a bit like a recurring dinner party thrown by nobody in particular. Nobody chose their tablemates, which somehow makes it easier — there's none of the pressure of a party where everyone already half-knows each other, just a shared, slightly novel situation everyone's figuring out together." },
      { type: "p", text: "We've sat at tables that clicked from the first course and tables that took a few nights to warm up, and both kinds ended up producing good company by the end of the week. The format itself seems to do a lot of the work, regardless of who happens to be seated where." },
      { type: "h2", text: "Shore days do the rest" },
      { type: "p", text: "If dinners plant the seed, shore excursions are where it actually grows. There's something about a shared bus ride, a slightly delayed tender, or a group photo nobody quite planned that turns a set of polite tablemates into something closer to a small travel party." },
      { type: "ul", items: [
        "Shared excursions turn tablemates into a small travel party",
        "A rough tender ride or a missed bus back becomes a story you all tell later",
        "Group photos start happening without anyone organizing them",
        "By mid-week, people start saving each other seats without being asked"
      ]},
      { type: "p", text: "None of it is engineered. Nobody sits everyone down and tells them to bond. It's just what tends to happen when a group of people share meals, itineraries, and the occasional minor mishap over the course of a week at sea." },
      { type: "h2", text: "The final dinner feels different every time" },
      { type: "p", text: "By the last night, the table that started as strangers usually looks nothing like it did on night one. Conversations run longer. People linger after dessert instead of heading straight back to their cabins. Contact information gets exchanged, sometimes formally, sometimes just scribbled on a napkin, and travel plans for next year get floated before the check even arrives." },
      { type: "h2", text: "It isn't guaranteed, and that's fine too" },
      { type: "p", text: "Not every table clicks the same way. Some groups stay friendly-but-distant for the whole trip, and there's nothing wrong with that either — not every dinner needs to turn into a lasting friendship for the cruise to be worth taking. But it happens often enough, trip after trip, that we've stopped being surprised by it. If you're nervous about the 'group' part of group cruising, that's usually the part worth being least nervous about." },
      { type: "p", text: "We've since gone on trips specifically because a former tablemate mentioned they were planning one, which says something about how far this can go. It isn't the reason to book a group cruise in the first place — the itinerary and the destination should still do most of that work — but it's a genuinely welcome bonus, and one we didn't expect the first time it happened to us." }
    ],
    relatedSlugs: ["why-we-sometimes-stay-on-the-ship", "things-we-never-cruise-without", "would-we-cruise-alaska-again"]
  },
  {
    slug: "why-we-sometimes-stay-on-the-ship",
    title: "Why We Sometimes Stay on the Ship When Everyone Else Gets Off",
    excerpt: "Port days aren't mandatory, and every so often the best decision is to do absolutely nothing.",
    category: "Cruising",
    categories: ["Cruising"],
    destination: "At Sea",
    readTime: 6,
    publishDate: null,
    featured: false,
    tags: ["cruising", "rest", "pacing"],
    author: "The Cloud 9 Team",
    deck: "There's a quiet kind of luxury in a nearly empty ship while everyone else is ashore.",
    pullQuote: "A full ship becomes a private one for a few hours, and that's worth something too.",
    travelNotes: {
      "Good to know": "Most onboard venues stay open, just much quieter, on port days",
      "Why we loved it": "It reset our energy for the rest of the week",
      "One thing we'd change": "We'd plan it in advance instead of deciding last minute"
    },
    body: [
      { type: "p", text: "There's an unspoken assumption that every port day means getting off the ship. Most of the time we do — that's usually the whole point of the itinerary, after all. But every so often, usually mid-week, usually after a couple of long shore days in a row, we stay on board instead, and it's rarely a decision we regret." },
      { type: "h2", text: "The ship changes shape when it empties out" },
      { type: "p", text: "With most passengers ashore, the pool deck thins out, the lines disappear, and the whole ship takes on a slower, quieter feel that's almost impossible to experience any other time during the week. It's a genuinely different experience of the same space, and one that's easy to miss if you treat every port as mandatory." },
      { type: "p", text: "We've used these days for the things that get crowded out otherwise: a long breakfast with no agenda, a nap that isn't rushed, actually finishing the book we brought instead of reading three pages before falling asleep from exhaustion. Small things, but the kind that add up over a full week of near-constant movement." },
      { type: "h2", text: "It isn't about skipping the destination" },
      { type: "p", text: "This only works because we've already been intentional about which ports matter most to us and planned accordingly. Staying aboard isn't about disengaging from the trip — it's about pacing it, so that the ports we do get off for get our full energy instead of leftover energy from a week of nonstop excursions." },
      { type: "p", text: "We've come back from an off-ship day at half our normal energy more than once, and noticed it in how much we actually enjoyed the excursion. A day of genuine rest in the middle of the week tends to pay that energy back with interest for the ports that follow." },
      { type: "p", text: "There's also a subtler benefit that took us a while to notice: staying aboard means you actually get to appreciate the ship itself, rather than treating it purely as transportation between destinations. The design, the little details in the public spaces, the crew who keep everything running — all of it is easier to notice and enjoy on a day when you're not rushing off to catch a tender." },
      { type: "h2", text: "The decision is usually made the night before" },
      { type: "p", text: "We've learned not to force it. Some weeks, every port earns its place and we're off the ship early each morning without a second thought. Other weeks, by day four or five, it's obvious that one of us — or both of us — needs a slower day before the next excursion. Making that call the night before, rather than scrambling in the morning, tends to make the whole thing feel like a choice instead of a fallback." },
      { type: "p", text: "It's a small thing, staying aboard for a day. But it's become one of those habits that quietly makes the rest of the cruise better, simply by giving us permission to not do everything." },
      { type: "h2", text: "What an empty ship actually feels like" },
      { type: "p", text: "It's a strange, pleasant sensation the first time you experience it — the same ship that felt genuinely busy the day before suddenly has open loungers everywhere, no line for coffee, and a kind of hush over the whole vessel that's hard to describe to someone who hasn't felt it. Staff have a bit more time to chat. The pace of the whole day slows to match the smaller crowd." },
      { type: "p", text: "We've talked to other cruisers who admitted they'd never once considered staying aboard, purely out of a sense that it would be 'wasting' the port. We understand the instinct completely — we felt it ourselves the first time — but it's worth trying at least once. It tends to change how you think about the rest of the itinerary." }
    ],
    relatedSlugs: ["from-strangers-to-travel-friends", "things-we-never-cruise-without", "our-unwritten-rules-of-travel"]
  },
  {
    slug: "things-we-never-cruise-without",
    title: "Things We Never Cruise Without",
    excerpt: "The small, unglamorous items that quietly make every cruise easier than the one before.",
    category: "Cruising",
    categories: ["Cruising", "Travel Tips"],
    destination: "At Sea",
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["cruising", "packing", "travel tips"],
    author: "The Cloud 9 Team",
    deck: "None of this is glamorous. All of it earns its place in the suitcase, trip after trip.",
    pullQuote: "The best packing list isn't clever. It's just tested.",
    travelNotes: {
      "Good to know": "This list is less about gear and more about habits worth repeating",
      "Best for": "Anyone packing for their first — or fifteenth — cruise"
    },
    body: [
      { type: "p", text: "Ask any regular cruiser what's in their bag and you'll get a list shaped entirely by past inconveniences. Ours is no different — every item earned its spot by solving a problem we ran into at least once, usually more than once, before we finally learned the lesson and started packing for it." },
      { type: "h2", text: "The essentials" },
      { type: "ul", items: [
        "A door magnet or two, for keeping track of which cabin is ours in a long hallway",
        "A portable fan for cabins on the warmer side",
        "A small day bag for port days, separate from the cabin luggage",
        "A printed copy of key documents, even when everything is also on a phone",
        "Reusable water bottle, refilled at the buffet before excursions",
        "A few reusable clips for curtains that don't quite block out the light"
      ]},
      { type: "p", text: "None of these are exciting purchases. Most of them cost very little. But each one has, at some point, saved us from a genuinely annoying moment — the wrong door in a hallway of identical doors, a stuffy cabin at 2am, a scramble for paperwork when a phone battery dies at the worst possible time." },
      { type: "p", text: "A few of these items also turned out to double as unexpected conversation starters. More than one tablemate has asked where we found a particular door magnet, or admitted they'd never thought to bring a portable fan and wished they had. Small, practical items like these have a way of quietly marking you as someone who's done this before, in a way that's oddly satisfying." },
      { type: "h2", text: "The habits that matter more than the gear" },
      { type: "p", text: "Packing light enough to leave room for what we buy along the way. Checking the daily programme the night before, not the morning of, so we're not making decisions half-awake over coffee. Building in one buffer day with nothing booked, in case a port gets cancelled for weather, so a change in plans doesn't feel like a crisis." },
      { type: "p", text: "We've also learned to pack a little differently depending on the kind of cruise. A trip built around excursions and shore time needs more of the practical gear — the day bag, the water bottle, comfortable shoes that have already been broken in. A trip built more around relaxing onboard shifts the priorities toward comfort in the cabin itself." },
      { type: "h2", text: "What we've stopped bringing" },
      { type: "p", text: "Just as useful as the list of what we pack is the shorter list of what we've quietly stopped bringing after realizing it never actually got used. Formal outfits we overestimated the need for. Backup electronics for backup electronics. An overly detailed printed itinerary that never once matched what we actually ended up doing." },
      { type: "p", text: "None of it is exciting. All of it adds up to a noticeably smoother week — fewer small frustrations, fewer moments of digging through a suitcase for something that should have been easier to find, more time actually enjoying the trip instead of managing it." },
      { type: "h2", text: "The list keeps evolving" },
      { type: "p", text: "This isn't a finished list, and we don't expect it ever will be. Every cruise seems to teach us one more small lesson worth carrying into the next one — a better way to organize the cabin, a piece of gear we didn't know we needed until we didn't have it. That's part of why we keep coming back to write these things down; the list is genuinely still growing." },
      { type: "p", text: "If there's one piece of advice underneath all of it, it's this: pay attention to your own small frustrations on a trip, and actually do something about them before the next one. That's really all a packing list like this is — a running record of problems solved, one cruise at a time." }
    ],
    relatedSlugs: ["our-unwritten-rules-of-travel", "why-we-sometimes-stay-on-the-ship", "would-we-cruise-alaska-again"]
  },
  {
    slug: "alaska-photos-dont-prepare-you-for",
    title: "Alaska Is One of Those Places Photos Just Don't Prepare You For",
    excerpt: "The scale of it is the part no photograph quite manages to carry home.",
    category: "Alaska",
    categories: ["Alaska"],
    destination: "Alaska",
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["alaska", "scenery", "first impressions"],
    author: "The Cloud 9 Team",
    deck: "Everyone tells you Alaska is big. It still isn't what you expect.",
    pullQuote: "You stop reaching for your camera at some point, because you realize it isn't going to capture this anyway.",
    travelNotes: {
      "What surprised us": "How much scale is lost in a photograph — mountains that look modest in a picture are enormous in person",
      "Best for": "First-time visitors expecting 'pretty' rather than 'overwhelming'"
    },
    body: [
      { type: "p", text: "We'd seen the photos, the way most people have — glaciers, mountains, water so still it looks painted. Everyone who's been says some version of the same thing beforehand: it's bigger than you think, bring a real camera, you won't believe it. None of it prepared us for what it's actually like to be there, and it took a couple of days to understand why the warnings never quite land in advance." },
      { type: "h2", text: "It's a scale problem, not a beauty problem" },
      { type: "p", text: "Photographs flatten distance. A mountain range that takes up your entire field of vision becomes a background detail in a picture, and a glacier that's taller than a building becomes a blue smear near the water line. In person, none of that compression happens — everything is exactly as large as it actually is, and it's disorienting in the best way, the kind of disorientation that makes you stop mid-sentence." },
      { type: "p", text: "There's also nothing nearby to compare it to. No familiar building, no person standing at the base for scale, nothing your brain can use as a reference point. So the landscape just reads as enormous in a way that's hard to process quickly, and easy to underestimate from a screen." },
      { type: "p", text: "It's the kind of thing you notice yourself trying and failing to explain to people back home. Words like 'huge' and 'massive' get used constantly on a trip like this and somehow all still feel inadequate by the end of the week, worn smooth from overuse but never quite matching what's actually in front of you." },
      { type: "h2", text: "The light does something too" },
      { type: "p", text: "Depending on the season, the light stretches out in a way that changes how the whole landscape reads — softer, longer shadows, colors that shift slowly instead of all at once. It's the kind of thing you notice is different before you can explain why, and it makes the same view look meaningfully different from one hour to the next." },
      { type: "h2", text: "We stopped photographing and started watching" },
      { type: "p", text: "By the second day we'd mostly stopped trying to photograph everything and started just watching it instead. Partly because the photos genuinely weren't doing it justice, and partly because we realized we were spending more time looking through a viewfinder than actually looking. Once we let that go, the trip slowed down in a good way." },
      { type: "ul", items: [
        "Give yourself permission to not photograph everything",
        "Watch the water for wildlife even when nothing's been announced",
        "Layer up more than feels necessary — the wind off the water changes everything",
        "Pick a few moments to really be present for, rather than documenting all of them"
      ]},
      { type: "p", text: "That, more than any single sight, is what we remember most. Not a specific photo, but the general, physical sensation of being somewhere that felt genuinely larger than what we'd prepared ourselves for. It's the kind of place that makes you recalibrate what 'big' even means, and that recalibration is worth the trip on its own." },
      { type: "h2", text: "The silence adds to the scale" },
      { type: "p", text: "There's a stretch of quiet that settles in when you're moving past a landscape this large, especially away from the ports and closer to the more remote stretches of coastline. Fewer sounds compete for your attention out there, which somehow makes the scale even more noticeable — nothing to distract you from just how much space there is around you." },
      { type: "p", text: "We'd expected Alaska to be beautiful. We hadn't expected it to be quite this humbling, in the specific sense of making our usual points of reference feel small and slightly irrelevant. That's not a complaint. If anything, it's the exact thing that made the trip worth taking." }
    ],
    relatedSlugs: ["what-it-feels-like-to-see-a-glacier", "would-we-cruise-alaska-again", "from-alaska-to-africa"]
  },
  {
    slug: "what-it-feels-like-to-see-a-glacier",
    title: "What It Actually Feels Like to See a Glacier Up Close",
    excerpt: "It's colder, louder and stranger than the word 'glacier' really prepares you for.",
    category: "Alaska",
    categories: ["Alaska"],
    destination: "Alaska",
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["alaska", "glaciers", "wildlife"],
    author: "The Cloud 9 Team",
    deck: "It moves, it groans, and every so often, it calves — and none of that comes through in a brochure.",
    pullQuote: "Ice that old doesn't behave the way you expect ice to behave.",
    travelNotes: {
      "Don't miss": "Give it time — the best moments are the ones you wait for, not the ones you rush past",
      "What surprised us": "How loud it is. Glaciers creak, crack and occasionally roar",
      "Good to know": "Bring more layers than you think you'll need, even in summer"
    },
    body: [
      { type: "p", text: "We'd used the word 'glacier' casually for years without really picturing what one is. It's a word that shows up in documentaries and geography lessons, filed away as a fact rather than an experience. Up close, it stops being a word and becomes something closer to a living structure — deep blue in places, streaked with sediment in others, and constantly, almost imperceptibly, moving." },
      { type: "h2", text: "It doesn't look the way you expect" },
      { type: "p", text: "The color is the first surprise. Glacial ice, especially the oldest and most compressed parts, reads as a deep, saturated blue rather than the plain white most people picture. It comes from how densely the ice has been packed over centuries, squeezing out the air pockets that normally scatter light and make ice look white. Once you've seen that blue in person, it's hard to picture a glacier any other way again." },
      { type: "p", text: "The texture surprised us too. From a distance it looks smooth, almost sculpted. Up close, it's rougher and more varied than that — crevasses, ridges, streaks of darker rock and debris carried along as the ice has moved. It reads less like a single solid mass and more like something with real history written into its surface, which in a very literal sense it is." },
      { type: "h2", text: "The sound is the part nobody mentions" },
      { type: "p", text: "Ice under that much pressure doesn't sit quietly. It groans, cracks, and every so often lets go of a piece with a sound that carries much further than you'd expect across open water — sharp, sudden, closer to a rifle shot or rolling thunder than anything you'd associate with ice. The first time it happened, we genuinely didn't understand what we were hearing, and turned around half-expecting to see something else entirely." },
      { type: "p", text: "That sound, more than the sight itself, is what stays with people. You can describe the color and the scale reasonably well after the fact. The sound is much harder to explain to someone who wasn't there." },
      { type: "h2", text: "Patience pays off" },
      { type: "p", text: "The temptation is to snap a photo and move on, especially if there's a schedule to keep. The better instinct, when there's time for it, is to stay a while — the light changes, the ice shifts, and if you're lucky, you'll catch a calving event, which is worth far more than the photo you would have taken instead." },
      { type: "ul", items: [
        "Watch the waterline for smaller pieces breaking off — it often happens before the big ones",
        "Keep your camera down for a stretch and just listen",
        "Ask your guide what to watch for; they can often read the ice better than you'd expect",
        "Don't rush the moment for the next stop on the schedule"
      ]},
      { type: "p", text: "It's easy to treat a glacier as one more stop on an itinerary, something to see and check off. Given even a little time and attention, it turns into something closer to an event — unpredictable, a little loud, and genuinely unlike anything else on the trip." },
      { type: "h2", text: "Every glacier is a little different" },
      { type: "p", text: "We'd assumed, going in, that one glacier would look roughly like the next once we'd seen a couple. That turned out to be wrong. Each one had its own shape, its own coloring, its own particular sounds — some quieter and more still, others clearly more active, with ice visibly shifting and cracking throughout the time we spent near them." },
      { type: "p", text: "That variation is part of what makes it worth seeing more than one if the itinerary allows for it. What felt almost like a formality after the first sighting — 'we've seen a glacier, we know what this is now' — turned out to be nothing of the sort. Each one earned its own reaction." }
    ],
    relatedSlugs: ["alaska-photos-dont-prepare-you-for", "would-we-cruise-alaska-again", "our-unwritten-rules-of-travel"]
  },
  {
    slug: "would-we-cruise-alaska-again",
    title: "Would We Cruise Alaska Again? Absolutely. Here's Why.",
    excerpt: "A trip we booked cautiously turned into one we'd recommend without hesitation.",
    category: "Alaska",
    categories: ["Alaska", "Cruising"],
    destination: "Alaska",
    readTime: 8,
    publishDate: null,
    featured: false,
    tags: ["alaska", "cruising", "reflection"],
    author: "The Cloud 9 Team",
    deck: "Not every trip earns a repeat. This one did, and it wasn't close.",
    pullQuote: "Some places you visit once to say you've been. Alaska, we'd go back to just to see it again.",
    travelNotes: {
      "Why we loved it": "The pace of a cruise matches the pace Alaska deserves — slow, scenic, unhurried",
      "What we'd do again": "Every bit of it, including the days we didn't get off the ship",
      "One thing we'd change": "We'd build in an extra day before the cruise to adjust before boarding"
    },
    body: [
      { type: "p", text: "We went into it without huge expectations, mostly because we weren't sure a cruise was the right way to see somewhere as vast as Alaska. There's a version of that trip built around flights and rental cars and long drives between viewpoints, and we genuinely debated which approach made more sense before booking. It didn't take long to be proven wrong about our hesitation." },
      { type: "h2", text: "The ship turned out to be the right vantage point" },
      { type: "p", text: "Alaska's coastline is enormous, and a lot of what makes it remarkable — glaciers calving into the sea, mountains rising directly out of the water, wildlife along the shoreline — is genuinely best seen from the water. A cruise puts you in exactly the right spot without needing to plan the logistics of getting there yourself, and without the fatigue of long overland travel between each highlight." },
      { type: "p", text: "There's also something to be said for waking up somewhere completely different each morning without having packed a single bag the night before. That particular kind of ease turned out to matter more than we expected going in." },
      { type: "p", text: "We'd also underestimated how much the onboard experience would add to the trip in its own right. Naturalists and local guides aboard gave context to what we were seeing that we wouldn't have had access to on a purely self-guided trip, and the evening talks turned out to be some of the more educational, genuinely interesting moments of the entire week." },
      { type: "p", text: "Even the days between the more dramatic stops had their own rhythm worth appreciating — quieter stretches of scenic cruising where nothing in particular was scheduled, just miles of coastline passing by the window, which turned out to be some of the most restful hours of the whole week." },
      { type: "h2", text: "What stayed with us" },
      { type: "ul", items: [
        "The scale of the landscape, which no photo before the trip prepared us for",
        "How different each port felt from the last, despite all being 'Alaska'",
        "The pace — slow enough to actually take it in, structured enough to not waste a day",
        "The wildlife sightings that happened without any warning, right from the deck"
      ]},
      { type: "p", text: "Each port had its own personality in a way we hadn't anticipated. Some felt shaped almost entirely by the water and the fishing industry built around it. Others leaned into the history of the region in a way that gave the whole day a different texture. By the end of the week, 'Alaska' had stopped feeling like a single place and started feeling like a collection of very different ones loosely connected by coastline." },
      { type: "h2", text: "What we'd do differently" },
      { type: "p", text: "If we're being honest about the one thing we'd change, it's arrival planning — flying in the same day the cruise departs left less buffer than we'd have liked, and a rough travel day is not the ideal way to start a week you've been looking forward to for months. Building in an extra day beforehand, just to adjust and rest, would have made the first couple of days even better than they already were." },
      { type: "h2", text: "Would we do it again" },
      { type: "p", text: "We've been asked more than once if it's worth doing again, given how much ground we already covered. Our answer hasn't changed: yes, without hesitation, and probably in a different season next time to see how differently the same coastline can look. Some destinations feel complete after one visit. Alaska felt like the opposite — like we'd only really scratched the surface of what a place that size has to offer." },
      { type: "h2", text: "Who we'd recommend it to" },
      { type: "p", text: "We've since recommended this trip to a wide range of people, and it's held up for nearly all of them — travelers who wanted a more active, excursion-heavy week and travelers who mostly wanted to sit on a deck and watch the coastline pass by. That flexibility, more than any single feature of the trip, is probably what makes it such an easy recommendation." },
      { type: "p", text: "The one group we'd steer elsewhere is travelers looking for constant heat and nonstop nightlife — that's simply not what this trip is, and going in with those expectations is the fastest way to be disappointed by something genuinely excellent on its own terms." }
    ],
    relatedSlugs: ["what-it-feels-like-to-see-a-glacier", "alaska-photos-dont-prepare-you-for", "alaska-africa-or-the-caribbean"]
  },
  {
    slug: "first-time-you-see-an-elephant-in-the-wild",
    title: "The First Time You See an Elephant in the Wild",
    excerpt: "Nothing about a zoo enclosure prepares you for how it feels to see one in open space.",
    category: "Africa Safari",
    categories: ["Africa Safari"],
    destination: "Africa",
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["safari", "wildlife", "first impressions"],
    author: "The Cloud 9 Team",
    deck: "There's a version of this animal you think you already know. You don't, not until you're there.",
    pullQuote: "Everyone in the vehicle goes quiet at the same moment, without anyone saying to.",
    travelNotes: {
      "What surprised us": "How silent the vehicle gets — nobody has to ask for quiet, it just happens",
      "Best for": "First-time safari travelers expecting a 'nice animal sighting' rather than the real thing"
    },
    body: [
      { type: "p", text: "You think you know what an elephant looks like. Most of us grew up seeing them in documentaries, zoos, picture books — a familiar shape, a familiar sound, a fact you've known since childhood. None of that is quite the same as the moment one steps out of the tree line, in open space, moving at its own unhurried pace, with nothing between you but distance." },
      { type: "h2", text: "Scale changes everything" },
      { type: "p", text: "There's no enclosure fence to give you a sense of proportion, no glass to remind you where you stand relative to the animal. It's just space, and the elephant fills more of it than you expected. Even a calm, distant elephant carries a kind of presence that's hard to describe until you've felt it yourself — something closer to weather than wildlife, a shift in the atmosphere of the whole area rather than just a sighting to note." },
      { type: "p", text: "The ears, the size of the footprints left behind, the sheer unhurried confidence of the walk — all of it reads differently at that scale and that proximity than it ever does through glass or a screen." },
      { type: "p", text: "There's also a kind of self-possession to a wild elephant that a captive one never quite has, and it's hard to put your finger on why until you've seen both. It isn't performing for anyone or waiting on a schedule. It's simply going about its own business in a landscape that belongs to it far more than it belongs to any of us watching from a vehicle nearby." },
      { type: "h2", text: "The quiet says more than words would" },
      { type: "p", text: "What we remember most isn't a fact or a detail — it's the way the whole vehicle went quiet at once, without anyone asking for it. Conversations that had been running easily all morning just stopped. Cameras that had been clicking constantly went still for a moment before anyone remembered to use them. That reaction, repeated trip after trip for different travelers, tells you something these animals do to people regardless of how many nature documentaries they've watched beforehand." },
      { type: "h2", text: "It changes how you see the rest of the trip" },
      { type: "p", text: "After that first sighting, something shifts in how the rest of the safari feels. The checklist mentality — spot this animal, photograph that one — starts to matter less than it did that morning. You start paying closer attention generally, because you now know firsthand that the difference between 'seeing an animal' and actually experiencing one is enormous, and worth slowing down for." },
      { type: "ul", items: [
        "Put the camera down for the first minute or two and just watch",
        "Notice the sounds as much as the sight — the environment usually reacts too",
        "Ask your guide about the individual animal if they know it; many do",
        "Expect the moment to feel bigger than you prepared for, and let it"
      ]},
      { type: "p", text: "It's the kind of first encounter that ends up defining the whole trip in hindsight, even if it happens on the very first drive. Everything that follows gets measured a little against that first quiet, startled reaction — and very little else on the trip quite matches it, no matter how many more sightings follow." },
      { type: "h2", text: "It's worth preparing yourself for, a little" },
      { type: "p", text: "We don't say that to overhype it or set an impossible bar. It's more that it helps to know, going in, that the reaction is likely to be stronger than you'd guess from photos and stories alone. Travelers who go in expecting 'a nice animal sighting' sometimes seem almost thrown by how much it actually affects them — and that reaction is worth being ready for rather than surprised by." },
      { type: "p", text: "If there's one piece of advice we'd give a first-time safari traveler specifically about this moment, it's simply: let it be a big deal. There's no need to underplay it or rush past it toward the next stop on the drive. It earns the reaction." }
    ],
    relatedSlugs: ["the-big-five-and-the-moments-between", "why-safari-is-about-more-than-spotting-animals", "our-unwritten-rules-of-travel"]
  },
  {
    slug: "the-big-five-and-the-moments-between",
    title: "The Big Five — and the Moments Between Them We Loved Even More",
    excerpt: "Checking off a list turned out to be the least memorable part of the safari.",
    category: "Africa Safari",
    categories: ["Africa Safari"],
    destination: "Africa",
    readTime: 8,
    publishDate: null,
    featured: false,
    tags: ["safari", "wildlife", "big five"],
    author: "The Cloud 9 Team",
    deck: "We went in tracking a checklist. We came home remembering everything that happened around it.",
    pullQuote: "The list gets you looking. What you actually remember is everything you saw while looking.",
    travelNotes: {
      "Don't miss": "The early morning and late afternoon drives — the light and the activity are both better",
      "Why we loved it": "The list gave the days structure, but the unplanned moments gave them meaning"
    },
    body: [
      { type: "p", text: "The Big Five is the thing everyone asks about before a safari and the thing almost nobody talks about afterward in the same way. We went in with the list in mind, the way most first-time safari travelers do — it's a natural way to frame expectations for a trip built around wildlife you've never seen up close. What actually stayed with us, once we got home and started telling people about it, was everything happening around it." },
      { type: "h2", text: "The list is a good excuse to pay attention" },
      { type: "p", text: "Tracking five specific animals means spending long stretches of time scanning the landscape closely — which is exactly how you end up noticing everything else. A hundred small things happen on a game drive that have nothing to do with the checklist: a bird doing something strange, light hitting the grass a certain way, a guide pointing out tracks most of us would have walked straight past without a second glance." },
      { type: "p", text: "In that sense, the checklist did its job even though it stopped being the point. It gave us a reason to look closely at a landscape we might otherwise have skimmed past, and that closer attention is where most of the good memories actually came from." },
      { type: "p", text: "We've since talked to first-time safari travelers who arrive determined to see all five in the first two days, treating each drive as an opportunity that either succeeds or fails based on the checklist. We understand the instinct, but it tends to work against the trip rather than for it — the drives that produced the best stories for us were rarely the ones we approached with that kind of urgency." },
      { type: "h2", text: "The mornings deserve their own mention" },
      { type: "p", text: "Early drives have a completely different character than the rest of the day. The air is colder, the animals tend to be more active before the heat sets in, and the light does something to the landscape that's hard to see at any other hour. More than once, the best twenty minutes of a full day happened in that early window, well before most of the itinerary's 'highlights' were even scheduled to begin." },
      { type: "h2", text: "What we remember best" },
      { type: "ul", items: [
        "The mornings, cold enough for blankets, before the day heats up",
        "Our guide's ability to read the landscape in ways we couldn't begin to",
        "The moments between sightings, which turned out to be most of the drive",
        "A quiet lunch stop with a view that had nothing to do with the checklist"
      ]},
      { type: "p", text: "None of those moments made it onto any list beforehand, because none of them were things we knew to expect. That's probably the real lesson of the whole trip — the itinerary tells you what you're likely to see, but it can't tell you what you'll actually remember, and those two things overlap much less than you'd think going in." },
      { type: "h2", text: "Did we complete the list" },
      { type: "p", text: "We did see all five, eventually, spread across different drives, and there was a genuine moment of satisfaction each time one got crossed off. But if you'd asked us on the flight home what the safari was actually about, the list would barely have come up. It was the framework the trip was built around, not the story we ended up telling." },
      { type: "h2", text: "What we'd tell a first-timer" },
      { type: "p", text: "If you're heading out on your first safari with the Big Five firmly in mind, that's completely fine — it's a natural way to frame the trip, and there's real satisfaction in checking each one off as it happens. Just hold the list loosely. Let your guide set the pace of the day rather than pushing to find the next name on it, and pay attention to what's happening in between." },
      { type: "p", text: "The travelers we've met who seemed happiest at the end of a safari weren't the ones who'd completed the list fastest. They were the ones who'd clearly been paying attention to everything else along the way, and who talked about the trip afterward in terms of moments rather than a scorecard." }
    ],
    relatedSlugs: ["first-time-you-see-an-elephant-in-the-wild", "why-safari-is-about-more-than-spotting-animals", "alaska-africa-or-the-caribbean"]
  },
  {
    slug: "why-safari-is-about-more-than-spotting-animals",
    title: "Why Safari Is About So Much More Than Spotting Animals",
    excerpt: "The wildlife draws you there. Something else is what makes you want to go back.",
    category: "Africa Safari",
    categories: ["Africa Safari"],
    destination: "Africa",
    readTime: 8,
    publishDate: null,
    featured: false,
    tags: ["safari", "reflection", "guides"],
    author: "The Cloud 9 Team",
    deck: "Ask anyone who's been more than once, and the animals are rarely the first thing they mention.",
    pullQuote: "You go for the wildlife. You go back for everything else the wildlife brought you to.",
    travelNotes: {
      "Best for": "Nature travel with an interest in more than checklists",
      "What we'd do again": "Spend more time talking with our guides about the land itself, not just the animals on it"
    },
    body: [
      { type: "p", text: "Before our first safari, we assumed the appeal was straightforward: go somewhere with a high concentration of animals you don't see at home, and watch them. That's true as far as it goes, and it's a perfectly good reason to book a trip. It's just not the whole story, and it stopped being the whole story for us fairly quickly, usually within the first day or two." },
      { type: "h2", text: "The land itself does a lot of the work" },
      { type: "p", text: "There's a rhythm to the bush that has nothing to do with any single animal — the way the light changes across a day, the sounds that shift from morning to evening, the sense of being somewhere genuinely wild rather than managed for visitors. That atmosphere turned out to matter as much as any single sighting, and it's the part that's hardest to explain to someone who hasn't experienced it firsthand." },
      { type: "p", text: "It's easy to underestimate how much of a safari is really about that atmosphere until you're sitting still in it — the temperature dropping as the sun goes down, the insects starting up right on schedule, a landscape that feels alive even in the stretches without a single animal in sight." },
      { type: "p", text: "We started noticing, a few days in, that we were paying closer attention to sunsets there than we tend to anywhere else. Nothing about the sky itself was necessarily different from a sunset at home. It was the setting around it — the openness, the sounds beginning to shift for the evening — that made the whole thing feel worth stopping for, every single time, in a way that surprised us." },
      { type: "h2", text: "The guides make the difference" },
      { type: "p", text: "A good guide isn't just finding animals — they're reading a landscape most of us have no ability to interpret, and translating it into something we can understand and appreciate. A shift in birdsong, a set of tracks in the dust, the direction a group of animals is facing — all of it means something to someone who's spent years learning to read it, and almost nothing to a first-time visitor without that guidance." },
      { type: "p", text: "The best conversations of the trip happened during quiet stretches of driving, not during the sightings themselves — questions about the ecosystem, about the history of the land, about how the guide first got into this work. Those conversations added a layer to the trip that no amount of animal sightings alone could have provided." },
      { type: "h2", text: "It reframes how you think about wildlife generally" },
      { type: "p", text: "Spending real time in a place like this changes how you think about wildlife even after you've left it. It's harder to watch a nature documentary the same way once you've experienced the actual scale, sound, and unpredictability of an ecosystem in person. The documentary version is tidy and edited; the real version is slower, quieter, and far more interesting for it." },
      { type: "ul", items: [
        "Ask your guide questions beyond 'what animal is that'",
        "Sit with the quiet stretches instead of wishing them away",
        "Pay attention to the landscape changing across the day, not just the wildlife in it",
        "Expect the trip to change how you think about nature travel generally"
      ]},
      { type: "p", text: "That combination — the land, the pace, the people reading it for you — is what actually pulls people back to safari again and again, long after the novelty of seeing a lion for the first time has worn off. The animals get you there. Everything else is what makes you want to come back." }
    ],
    relatedSlugs: ["the-big-five-and-the-moments-between", "first-time-you-see-an-elephant-in-the-wild", "from-alaska-to-africa"]
  },
  {
    slug: "our-kind-of-caribbean-day",
    title: "Our Kind of Caribbean Day: No Schedule Required",
    excerpt: "The best Caribbean days we've had were the ones we didn't plan at all.",
    category: "Caribbean",
    categories: ["Caribbean"],
    destination: "Caribbean",
    readTime: 6,
    publishDate: null,
    featured: false,
    tags: ["caribbean", "relaxation", "pacing"],
    author: "The Cloud 9 Team",
    deck: "No excursion booked, no list to work through — just the day, unfolding on its own.",
    pullQuote: "Some destinations are made for a checklist. The Caribbean is made for the opposite.",
    travelNotes: {
      "Best for": "Travelers who over-plan everywhere else and want permission not to",
      "Good to know": "Leaving a full day open is a plan, not a lack of one"
    },
    body: [
      { type: "p", text: "Most of our trips have a structure — excursions booked, a list of things we don't want to miss, a rough shape to each day that we've usually sketched out weeks in advance. The Caribbean is where we've learned to drop all of that, at least for a day or two, and it's usually the part of the trip we talk about most afterward, more than any excursion we actually paid for." },
      { type: "h2", text: "The appeal of doing nothing in particular" },
      { type: "p", text: "A day with no schedule sounds like a wasted opportunity when you're planning a trip months in advance, staring at a spreadsheet of activities and wondering if you're leaving something good off the list. In practice, it's the opposite. Without an itinerary to keep, the day slows down to whatever pace feels right — water in the morning, shade in the afternoon, no clock to watch and nowhere that needs to be reached by a certain hour." },
      { type: "p", text: "It takes a bit of getting used to, honestly. The first hour or two of an unscheduled day can feel almost uncomfortable if you're used to a full itinerary — a nagging sense that you should be doing something more. That feeling tends to fade fast, usually somewhere around the second cup of coffee or the first stretch of just watching the water." },
      { type: "p", text: "We've noticed this discomfort seems to hit certain kinds of travelers harder than others. People used to structuring every part of their working lives around a calendar sometimes find the first empty day the hardest to enjoy, ironically. By the second unscheduled day, though, almost everyone we've traveled with has come around to it completely." },
      { type: "h2", text: "It's a different kind of memory" },
      { type: "p", text: "The excursions we've booked elsewhere tend to produce memories built around a specific moment — an animal sighting, a glacier calving, a landmark we'd been looking forward to for months. The unscheduled Caribbean days produce a different kind of memory: a general, warm sense of the whole day, without any single highlight standing out. We've come to value both equally, even though they work in almost opposite ways." },
      { type: "h2", text: "How we've learned to build these days in" },
      { type: "ul", items: [
        "Leave at least one full day with nothing booked, even on a shorter trip",
        "Resist the urge to fill it in once you arrive and see the itinerary looking empty",
        "Let meals happen whenever you're actually hungry, not on a schedule",
        "Treat a good nap as a legitimate use of vacation time"
      ]},
      { type: "p", text: "We still book plenty of excursions on Caribbean trips — a good tour, a great meal reservation, a specific beach we've heard is worth the trip. But we've learned to protect at least one day from all of that, and it's consistently the day that ends up feeling the most like an actual vacation, rather than a very pleasant version of a to-do list." },
      { type: "h2", text: "It took us a few trips to learn this" },
      { type: "p", text: "Our early Caribbean trips looked nothing like this. We booked something for nearly every day, treating the whole week like an opportunity that had to be maximized rather than simply enjoyed. Looking back at those itineraries now, they read more like work schedules than vacation plans, and we don't remember most of the individual activities nearly as clearly as we remember the handful of days we eventually left open." },
      { type: "p", text: "It's a strange kind of vacation math: fewer planned activities, and yet somehow a fuller sense of having actually rested by the time the trip ends. We didn't expect that going in, and it took a few trips of overplanning before we finally trusted the opposite approach enough to try it." }
    ],
    relatedSlugs: ["caribbean-memories-nothing-to-do-with-the-beach", "alaska-africa-or-the-caribbean", "our-unwritten-rules-of-travel"]
  },
  {
    slug: "alaska-africa-or-the-caribbean",
    title: "Alaska, Africa or the Caribbean: Which Adventure Is More Your Style?",
    excerpt: "Three very different trips, three very different kinds of traveler that each one suits best.",
    category: "Travel Stories",
    categories: ["Travel Stories"],
    destination: null,
    readTime: 8,
    publishDate: null,
    featured: false,
    tags: ["comparison", "trip planning", "reflection"],
    author: "The Cloud 9 Team",
    deck: "We've done all three now, and they couldn't ask more different things of a traveler.",
    pullQuote: "The right trip has less to do with the destination and more to do with what kind of traveler you are that year.",
    travelNotes: {
      "Best for": "Anyone choosing between destinations and unsure where to start",
      "Good to know": "The 'best' trip really does depend on what you want out of it, not just where you go"
    },
    body: [
      { type: "p", text: "We get asked fairly often which of these three we'd recommend, as if there's a single right answer waiting to be discovered. There isn't — each one asks something different of you, rewards a different kind of traveler, and honestly suits a different mood depending on the year you've had leading up to it." },
      { type: "h2", text: "Alaska: for the traveler who wants scale" },
      { type: "p", text: "Alaska rewards patience and a willingness to be quietly overwhelmed by scale. It's less about doing and more about witnessing — glaciers, mountains, wildlife, all on a scope that takes some adjusting to. If you're the kind of traveler who wants a trip that resets your sense of proportion, this is the one that does it most reliably." },
      { type: "p", text: "It's also a trip that rewards slowing down. The pace is naturally unhurried, the days built more around observation than activity, and travelers hoping for a packed, high-energy schedule sometimes find the pacing takes a day or two to appreciate." },
      { type: "h2", text: "Africa: for the traveler who wants to be present" },
      { type: "p", text: "Safari asks for early mornings, long stretches of watching and waiting, and a willingness to let the experience unfold at its own pace rather than yours. It rewards attention more than almost anywhere else we've been, and it tends to be the trip that stays with people the longest afterward, precisely because it demands so much presence in the moment." },
      { type: "p", text: "This is probably the trip we'd steer toward someone who says they want to 'really experience' a place, rather than just see it. It isn't the most relaxing of the three, but it may be the most rewarding." },
      { type: "h2", text: "The Caribbean: for the traveler who wants to exhale" },
      { type: "p", text: "This is the trip with the fewest demands. Warm water, slower days, very little that needs planning once you've arrived. It's the one we recommend most often to people who haven't taken a real break in a while, or who are coming off a stretch of travel that felt more like a checklist than a vacation." },
      { type: "p", text: "It's also, in our experience, the easiest of the three to tailor — equally suited to a trip built around activity and excursions or one built almost entirely around doing nothing at all. That flexibility makes it a strong pick for a group with genuinely mixed preferences, in a way the other two trips honestly aren't." },
      { type: "h2", text: "So which one is right for you" },
      { type: "ul", items: [
        "Want to feel small in the best possible way? Alaska.",
        "Want a trip that demands your full attention and gives it back tenfold? Africa.",
        "Want to actually rest, with room to be as active or as idle as you like? The Caribbean."
      ]},
      { type: "p", text: "None of these is objectively 'better.' The honest answer to which one is right for you usually has more to do with what kind of year you've had than which destination photographs better. We've loved each one for completely different reasons, and we'd struggle badly if forced to pick just one for good." },
      { type: "h2", text: "The question we actually ask ourselves now" },
      { type: "p", text: "These days, before we book anything, we've stopped asking 'which destination' first and started asking something closer to 'what do we actually need from this trip.' Do we need to switch off completely, or do we need to be pushed a little out of our routine? Do we want a week that demands nothing of us, or one that asks for early mornings and full attention in exchange for something more memorable?" },
      { type: "p", text: "Once that question is answered honestly, the destination tends to follow fairly naturally. It's a small shift in how we plan, but it's made choosing between trips like these far easier than trying to rank them against each other in the abstract." }
    ],
    relatedSlugs: ["from-alaska-to-africa", "would-we-cruise-alaska-again", "our-kind-of-caribbean-day"]
  },
  {
    slug: "from-alaska-to-africa",
    title: "From Alaska to Africa: Why We Don't Have Just One Kind of Vacation",
    excerpt: "Loving one kind of trip has never stopped us from loving a completely different one just as much.",
    category: "Travel Stories",
    categories: ["Travel Stories"],
    destination: null,
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["variety", "reflection", "trip planning"],
    author: "The Cloud 9 Team",
    deck: "Some travelers pick a lane. We've never been able to.",
    pullQuote: "Why choose a favorite kind of trip when the whole point of travel is that it doesn't have to be just one thing?",
    travelNotes: {
      "Why we loved it": "Each trip resets our expectations for what a vacation can even look like",
      "What we'd do again": "Keep alternating rather than settling into one type of trip"
    },
    body: [
      { type: "p", text: "People sometimes assume travelers eventually specialize — the cruise person, the safari person, the beach person, each with a clear identity built around one particular kind of trip. We've never quite landed there, and at this point, after enough trips to notice the pattern, we don't think we will." },
      { type: "h2", text: "Contrast is part of the appeal" },
      { type: "p", text: "Coming home from a slow, quiet Caribbean trip and then booking something as physically dramatic as Alaska isn't a contradiction to us — it's the whole point. Each kind of trip resets what we expect a vacation to feel like, which makes the next one, whatever it is, feel fresh instead of familiar. If we only ever booked one kind of trip, we suspect even our favorite kind would eventually start to feel routine." },
      { type: "p", text: "We've watched other travelers settle firmly into one type of trip, and there's nothing wrong with that — knowing exactly what you love and returning to it is its own kind of contentment. It's just never been how we've traveled, and the older we get, the less interested we are in changing that about ourselves." },
      { type: "p", text: "There's also something useful about the contrast itself. A demanding, early-mornings kind of trip makes you appreciate a slow one afterward in a way you might not otherwise. And a stretch of pure relaxation tends to leave you hungry for something more active by the time it's over." },
      { type: "h2", text: "Different trips ask different things of you" },
      { type: "ul", items: [
        "Alaska asks for patience and a tolerance for cold mornings",
        "Safari asks for early alarms and long stretches of quiet attention",
        "The Caribbean asks for almost nothing at all",
        "A group cruise asks you to be a little more social than usual, and rewards it"
      ]},
      { type: "p", text: "We've noticed that each type of trip also brings out a slightly different version of us as travelers. We're more patient on safari than we are almost anywhere else. We're more social on a cruise than we tend to be at home. We're more willing to do absolutely nothing in the Caribbean than we'd ever admit to being in daily life. Traveling to different kinds of places, it turns out, is also a way of noticing different sides of yourself." },
      { type: "h2", text: "Why we've stopped picking a favorite" },
      { type: "p", text: "We've stopped trying to pick a favorite kind of trip, because the honest answer changes depending on the year, the season, and what we're looking to get out of the time away. Variety, at this point, is the preference itself, more than any single destination could ever be. If anything, the question we've started asking before booking isn't 'where should we go' so much as 'what do we need from this trip right now' — and the destination tends to follow from there." },
      { type: "h2", text: "We'd rather be beginners more often" },
      { type: "p", text: "There's a particular kind of humility that comes with trying a very different kind of trip after getting comfortable with another. The confidence we've built up as cruisers doesn't transfer directly to a safari, and the instincts we've developed on safari don't map neatly onto a Caribbean beach week. Each new kind of trip puts us back in the position of learning something from scratch, and we've come to genuinely enjoy that feeling rather than avoid it." },
      { type: "p", text: "It's easy to get very good at one kind of vacation and stop there. We'd rather stay a little bit of a beginner, trip after trip, if it means the range of places and experiences we get to have stays this wide." }
    ],
    relatedSlugs: ["alaska-africa-or-the-caribbean", "would-we-cruise-alaska-again", "why-safari-is-about-more-than-spotting-animals"]
  },
  {
    slug: "caribbean-memories-nothing-to-do-with-the-beach",
    title: "Our Favourite Caribbean Memories That Had Nothing to Do With the Beach",
    excerpt: "The water and sand get all the credit. Our best memories usually happened somewhere else.",
    category: "Caribbean",
    categories: ["Caribbean"],
    destination: "Caribbean",
    readTime: 7,
    publishDate: null,
    featured: false,
    tags: ["caribbean", "reflection", "local culture"],
    author: "The Cloud 9 Team",
    deck: "Ask us for our best Caribbean memory and the beach probably won't come up.",
    pullQuote: "The postcard image gets you there. It's rarely what you remember once you leave.",
    travelNotes: {
      "What surprised us": "How much of what we remember happened away from the water",
      "Don't miss": "A conversation with someone local — it tends to outlast any view"
    },
    body: [
      { type: "p", text: "The Caribbean sells itself on the beach, and understandably so — the water really is that color, the sand really is that soft, and the photos really do look like they've been edited even when they haven't been. But when we think back on specific trips, months or years later, the beach is rarely what comes to mind first." },
      { type: "h2", text: "It's the small, unplanned things" },
      { type: "p", text: "A conversation with someone who'd lived on the island their whole life, offered freely and unhurried in a way that felt genuinely different from a scripted tourism interaction. A local dish we hadn't planned on trying, recommended by someone who noticed us hesitating over a menu and steered us toward something better than what we'd have picked ourselves. Music drifting from somewhere we couldn't quite see, that we ended up following simply out of curiosity. None of it was on an itinerary, and none of it was something we could have planned for even if we'd tried." },
      { type: "p", text: "What ties those moments together, looking back, is that none of them happened because we were looking for them. They happened because we'd left just enough unstructured time in the day for something unplanned to have room to occur. A schedule packed tight from breakfast to sunset doesn't really leave space for that kind of thing to happen, no matter how good the schedule is." },
      { type: "h2", text: "The beach is the backdrop, not the story" },
      { type: "p", text: "We still spend plenty of time in the water, and we're not arguing anyone should skip it — it's a genuinely wonderful part of any Caribbean trip, and there's a reason it's the image everyone reaches for. But if you asked us to describe our favorite Caribbean trip in a sentence, the sentence probably wouldn't mention the beach at all — it would be about a person, a meal, or a moment that had nothing to do with the postcard." },
      { type: "h2", text: "Why those moments stick" },
      { type: "p", text: "There's something about the beach itself that, however beautiful, tends to blur together after a few trips — one stretch of turquoise water starts to resemble the next in memory. The unplanned, human moments don't blur the same way. A specific conversation, a specific dish, a specific piece of music heard once and never again — those stay sharp in a way the scenery, gorgeous as it is, often doesn't." },
      { type: "ul", items: [
        "Say yes to a conversation you weren't expecting to have",
        "Ask for a local recommendation instead of relying only on guidebooks",
        "Wander somewhere with no plan for at least one afternoon",
        "Let the trip surprise you away from the water, not just in it"
      ]},
      { type: "p", text: "It's a strange thing to say about a destination famous for its beaches, but our best Caribbean memories have consistently been the ones that happened when we looked up from the water and toward everything else the place had to offer." },
      { type: "h2", text: "We still love the beach, for the record" },
      { type: "p", text: "None of this is a knock against the beach itself — it's still the reason most of us book these trips in the first place, and there's nothing wrong with a vacation built almost entirely around it. We just no longer assume it will be the part we remember best, and that shift in expectation has made us more open to everything else happening around the edges of a typical beach day." },
      { type: "p", text: "If anything, letting go of the assumption that the beach has to be the highlight freed up the rest of the trip to surprise us in ways it might not have otherwise. We'd recommend the same shift to anyone planning their first Caribbean trip: enjoy the water fully, but keep an eye out for everything happening just past it." }
    ],
    relatedSlugs: ["our-kind-of-caribbean-day", "alaska-africa-or-the-caribbean", "our-unwritten-rules-of-travel"]
  }
];

export function getArticleBySlug(slug: string): TravelJournalArticle | null {
  return TRAVEL_JOURNAL_ARTICLES.find(a => a.slug === slug) || null;
}

export function getFeaturedArticle(): TravelJournalArticle {
  return TRAVEL_JOURNAL_ARTICLES.find(a => a.featured) || TRAVEL_JOURNAL_ARTICLES[0];
}
