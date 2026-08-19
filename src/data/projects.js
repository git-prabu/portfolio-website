// Architecture "Selected Works". Copy is drawn from Prabu's print portfolio.
// `hero` / `wire` point to /public/works/*. Missing files fall back to a
// styled placeholder (see AssetImage), so real renders swap in with no code change.

export const projects = [
  {
    id: "stone-villa",
    index: "01",
    title: "Stone Villa",
    kind: "Residential · Palm Jumeirah",
    year: "2024",
    tools: ["Rhino", "SketchUp", "D5 Render"],
    hero: "/works/stone-villa.jpg",
    wire: "/works/stone-villa-wire.jpg",
    summary:
      "A waterfront villa designed to belong on Palm Jumeirah — private and solid from the street, open and generous toward the water.",
    body: [
      "Stone Villa started from a simple idea: design a villa that would feel right at home among the modern waterfront houses that line the island. The concept was to create something that belongs to that setting — private and solid from the street, but open and generous toward the water.",
      "The material palette keeps things calm and grounded — charcoal stone, warm travertine, and wood — tied together by large glass windows that connect the interior to the water and the palm-lined street outside. Cantilevered volumes and a double-height living space give the house a sense of scale suited to a luxury island plot.",
    ],
  },
  {
    id: "catalyst-hub",
    index: "02",
    title: "Catalyst Hub",
    kind: "Mixed-use campus",
    year: "2025",
    tools: ["Rhino", "Grasshopper", "D5 Render"],
    hero: "/works/catalyst-hub.jpg",
    wire: "/works/catalyst-hub-wire.jpg",
    summary:
      "A mixed-use business campus conceived as one architectural gesture — a cluster of towers rising from a single continuous, sculptural base.",
    body: [
      "Rather than treating each program as an isolated block, the design fuses the Office Towers, Innovation Tower, and Startup Tower into a unified organic form — their fluid white shells branching upward like a single living structure, while a distinct dark-glass volume marks the Innovation Tower as the campus's technological core.",
      "The plan shows how the towers touch down and spread into one connected base. Each shell flares out at the bottom into its own petal-shaped floor plate, and where they meet in the middle they share cores, circulation, and the main public space — so the structure works as one floor plan instead of three separate buildings.",
    ],
  },
  {
    id: "valley-house",
    index: "03",
    title: "Valley House",
    kind: "Conceptual retreat",
    year: "2025",
    tools: ["Rhino", "Grasshopper", "D5 Render"],
    hero: "/works/valley-house.jpg",
    wire: "/works/valley-house-wire.jpg",
    summary:
      "A residential retreat in a mountainous landscape, built around a single idea: living in rhythm with light.",
    body: [
      "The whole plan is organised like an eye, with a circular bathing courtyard at the dead centre acting as the pupil — an open oculus that pulls daylight, sky, and weather straight down into the heart of the home. Inside, a soft, natural palette of warm timber, pale concrete, and stone keeps nothing competing with the light.",
      "All the rooms wrap around that central courtyard in a ring, so every space stays tied to the light at the middle. The private quarters are separated by six rotating, 360-degree doors that double as moving walls — slide one and you divide or reconnect the rooms, letting shadow and light shift through the house as the day moves.",
    ],
  },
  {
    id: "ripple-pavilion",
    index: "04",
    title: "Ripple Pavilion",
    kind: "Public pavilion",
    year: "2025",
    tools: ["Rhino", "Grasshopper", "Blender"],
    hero: "/works/ripple-pavilion.jpg",
    wire: "/works/ripple-pavilion-wire.jpg",
    summary:
      "A waterside pavilion off the main walking bridge — a calm place to pause near the water, where the reflection reveals the true form.",
    body: [
      "The concept plays with how we read a droplet: the shells are full droplet forms built inverted — bulb up, tapering to a point — so it's the reflection in the water that shows the drop the right way up, pointed and falling, the way a real one looks. The water is what reveals the true droplet.",
      "The forms were built in Rhino and Grasshopper and textured in Blender with a rippling blue pattern like water hit by a drop. When the surface is calm the reflection makes everything perfectly symmetrical, making the pavilion both a shaded place to sit and a focal point from the banks.",
    ],
  },
  {
    id: "halcyon",
    index: "05",
    title: "Halcyon",
    kind: "Speculative · Marine",
    year: "2026",
    tools: ["Rhino", "Grasshopper", "Blender"],
    hero: "/works/halcyon.jpg",
    wire: "/works/halcyon-wire.jpg",
    summary:
      "A floating, parametric ocean structure that filters microplastics without harming marine life.",
    body: [
      "Rather than straining water through a mesh, Halcyon uses acoustic waves to gently herd plastic particles into collection channels while organisms swim freely past. AI-driven optical sensors detect marine life and pause intake when animals approach, and the units are deployed only at pollution hotspots like harbour mouths, away from breeding grounds.",
      "Its luminous skin draws aesthetic inspiration from marine bioluminescence, but the glow is functional rather than biological — a live sensor display, brightening to indicate pollution density and the system's real-time filtering efficiency.",
    ],
  },
  {
    id: "facade-design",
    index: "06",
    title: "Facade Design",
    kind: "Parametric study",
    year: "2026",
    tools: ["Rhino", "Grasshopper"],
    hero: "/works/facade-design.jpg",
    wire: "/works/facade-design-wire.jpg",
    summary:
      "A parametric facade study exploring a porous screen of vertical fins that modulate light, privacy, and a storefront's relationship to the street.",
    body: [
      "The whole pattern is built in Grasshopper — a row of vertical fins that get fat and thin as they rise, creating repeating leaf-shaped gaps across the front. At the ground floor the two middle fins split apart to make the entrance, so the door is simply the same pattern opened up bigger, rather than a hole cut into it.",
      "The screen wraps a three-level store behind glass, filtering light during the day and glowing from inside at night.",
    ],
  },
  {
    id: "form-study",
    index: "07",
    title: "Form Study",
    kind: "Computational exploration",
    year: "2026",
    tools: ["Rhino", "Grasshopper", "Dendro", "Crystallon"],
    hero: "/works/form-study.jpg",
    wire: "/works/form-study-wire.jpg",
    summary:
      "A form-exploration project investigating porous, membrane-like geometry as a continuous, self-supporting surface.",
    body: [
      "The lattice-supported form was created using the Dendro and Crystallon Grasshopper plugins — Crystallon to build the cellular lattice structure, and Dendro to mesh and volumetrically resolve it into a continuous, self-supporting surface.",
    ],
  },
];

export default projects;
