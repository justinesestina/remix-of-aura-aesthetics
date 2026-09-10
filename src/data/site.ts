import doctorHero from "@/assets/doctor-hero.png";
import cover from "@/assets/cover.png";
import logo from "@/assets/logo.png";
import services from "@/assets/sevices.png";
import services1 from "@/assets/services1.png";
import services2 from "@/assets/services2.png";
import services3 from "@/assets/services3.png";
import services4 from "@/assets/services4.png";
import services5 from "@/assets/services5.png";

export { logo };

export const images = {
  heroPortrait: doctorHero,
  surgeonPortrait: cover,
  clinicInterior: cover,
  doctorCutout: doctorHero,
  doctorBanner: cover,
  profileBanner: cover,
  signatureTreatments: services,
  face: doctorHero,
  breast: cover,
  body: cover,
  nonsurgical: doctorHero,
};

export const treatmentPosters = [
  { title: "Skin Boosters", image: services1 },
  { title: "Botox Treatments", image: services2 },
  { title: "Surgical Procedures", image: services3 },
  { title: "Premium Skin Boosters", image: services4 },
  { title: "Mesolipo", image: services5 },
];

export const clinicLocations = [
  "Premier Drip",
  "Idara",
  "Aura Ruz",
  "Queens Wellness",
  "Prestige",
  "Noah and Eve",
];

export const clinic = {
  name: "DR. BRENT VICENTE",
  shortName: "Dr. Brent Vicente",
  tagline: "Doctor of Aesthetic Medicine & Cosmetic Surgery",
  description:
    "Beauty, health, lifestyle guidance and cosmetic care by the owner of Glowing Aesthetic and Wellness Center.",
  phoneLabel: "0917 308 5712",
  phoneHref: "tel:+639173085712",
  email: "",
  addressLines: ["Available by appointment", "Across six partner clinics"],
  hours: [
    { day: "Daily", time: "10:00 AM — 9:00 PM" },
    { day: "Consultations", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  surgeon: {
    name: "Brent Vicente, MD",
    specialty: "Aesthetic Medicine & Cosmetic Surgery",
    credentials: "Doctor of Medicine",
    education: "Aesthetic medicine and cosmetic surgery practice",
    memberships: ["Glowing Aesthetic and Wellness Center"],
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const credentials = [
  "Expert Care",
  "Safe & Trusted",
  "Natural Results",
  "Personalized Plans",
  "Six Clinic Locations",
];

export type Category = "Face" | "Breast" | "Body" | "Non-Surgical";
export const categories: Category[] = ["Face", "Breast", "Body", "Non-Surgical"];

export type Procedure = {
  slug: string;
  name: string;
  category: Category;
  excerpt: string;
  recovery: string;
  image: string;
  overview: string[];
  candidate: string[];
  expect: string[];
  recoveryNotes: string[];
  considerations: string[];
};

const baseFaqNote =
  "Suitability is determined during consultation. Every procedure has potential risks and considerations, and individual results vary.";

export const procedures: Procedure[] = [
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    category: "Face",
    excerpt:
      "Refinement of nasal proportion and structure, planned around facial balance and breathing function.",
    recovery: "[Typical recovery placeholder]",
    image: images.face,
    overview: [
      "Rhinoplasty addresses the shape, proportion and structural support of the nose. Planning begins with an assessment of facial balance, skin quality and nasal function.",
      "The surgical approach is selected individually. Some patients require structural support, others a conservative refinement. " + baseFaqNote,
    ],
    candidate: [
      "Physically healthy and a non-smoker, or willing to stop smoking as advised",
      "Concerns about nasal shape, proportion or breathing",
      "Realistic expectations regarding what surgery can and cannot change",
    ],
    expect: [
      "An in-depth consultation including medical history and photographic assessment",
      "A personalised surgical plan discussed in detail before any decision is made",
      "Pre-operative preparation instructions provided by the clinic team",
    ],
    recoveryNotes: [
      "Swelling and bruising are expected and settle gradually",
      "A splint or support may be worn for an initial period",
      "Follow-up appointments are scheduled to monitor healing",
    ],
    considerations: [
      "Results develop over an extended period as swelling resolves",
      "Revision surgery is sometimes required",
      "All surgery carries risk; these are reviewed in consultation",
    ],
  },
  {
    slug: "facelift",
    name: "Facelift",
    category: "Face",
    excerpt:
      "Repositioning of facial tissue to address laxity along the mid-face, jawline and neck.",
    recovery: "[Typical recovery placeholder]",
    image: images.face,
    overview: [
      "A facelift repositions deeper facial tissue rather than relying on skin tension alone, with the aim of a natural-looking, rested appearance.",
      baseFaqNote,
    ],
    candidate: [
      "Noticeable laxity of the mid-face, jawline or neck",
      "Good general health and stable weight",
      "An understanding that ageing continues after surgery",
    ],
    expect: [
      "Assessment of facial anatomy, skin quality and volume",
      "Discussion of surgical and non-surgical alternatives",
      "A written plan including anaesthesia and facility details",
    ],
    recoveryNotes: [
      "Initial swelling and tightness are common",
      "Activity is reintroduced gradually as advised",
      "Scar care guidance is provided at follow-up",
    ],
    considerations: [
      "Results vary with anatomy, skin quality and healing",
      "Complementary treatments are sometimes discussed",
      "Potential risks are reviewed individually",
    ],
  },
  {
    slug: "eyelid-surgery",
    name: "Eyelid Surgery",
    category: "Face",
    excerpt:
      "Conservative treatment of upper or lower eyelid heaviness, planned around the natural eye shape.",
    recovery: "[Typical recovery placeholder]",
    image: images.face,
    overview: [
      "Eyelid surgery addresses excess skin or heaviness around the eyes. Conservative planning helps preserve the natural shape and expression of the eye.",
      baseFaqNote,
    ],
    candidate: [
      "Heaviness or excess skin of the upper or lower eyelids",
      "Healthy eyes without untreated conditions",
      "Realistic and clearly discussed goals",
    ],
    expect: [
      "Ophthalmic and eyelid assessment",
      "Discussion of anaesthesia options",
      "Individualised pre-operative instructions",
    ],
    recoveryNotes: [
      "Bruising around the eyes is expected initially",
      "Screen time and activity are limited briefly",
      "Follow-up reviews monitor healing",
    ],
    considerations: [
      "Asymmetry between eyes is common before and after surgery",
      "Dryness or irritation may occur temporarily",
      "Individual outcomes vary",
    ],
  },
  {
    slug: "breast-augmentation",
    name: "Breast Augmentation",
    category: "Breast",
    excerpt:
      "Volume and proportion planning using implants or fat transfer, guided by anatomy and preference.",
    recovery: "[Typical recovery placeholder]",
    image: images.breast,
    overview: [
      "Breast augmentation is planned around chest measurements, tissue quality and personal preference. Options and trade-offs are reviewed in consultation.",
      baseFaqNote,
    ],
    candidate: [
      "Desire for change in breast volume or proportion",
      "Stable weight and good general health",
      "Willingness to attend long-term follow-up",
    ],
    expect: [
      "Measurement-based planning and sizing discussion",
      "Review of implant types, placement and alternatives",
      "Documented informed consent process",
    ],
    recoveryNotes: [
      "A support garment is typically worn",
      "Upper-body activity is restricted initially",
      "Position and shape settle over time",
    ],
    considerations: [
      "Implants are not considered lifetime devices",
      "Further surgery may be required in the future",
      "Sensation changes are possible",
    ],
  },
  {
    slug: "breast-lift",
    name: "Breast Lift",
    category: "Breast",
    excerpt:
      "Reshaping and repositioning of breast tissue, with scar patterns selected individually.",
    recovery: "[Typical recovery placeholder]",
    image: images.breast,
    overview: [
      "A breast lift repositions tissue and the nipple-areola complex. Scar pattern is chosen according to anatomy and the degree of change required.",
      baseFaqNote,
    ],
    candidate: [
      "Changes following pregnancy, weight change or time",
      "Stable weight and good general health",
      "Acceptance of scarring inherent to the procedure",
    ],
    expect: [
      "Detailed anatomical assessment and photography",
      "Explanation of scar patterns and placement",
      "Personalised surgical plan",
    ],
    recoveryNotes: [
      "Supportive garments are worn as directed",
      "Gradual return to activity",
      "Scars mature over an extended period",
    ],
    considerations: [
      "Scarring is permanent though it typically fades",
      "Breast shape continues to change with time",
      "Individual results vary",
    ],
  },
  {
    slug: "liposuction",
    name: "Liposuction",
    category: "Body",
    excerpt:
      "Targeted contouring of localised fat deposits in patients at or near a stable weight.",
    recovery: "[Typical recovery placeholder]",
    image: images.body,
    overview: [
      "Liposuction refines contour in specific areas. It is a contouring procedure rather than a treatment for weight management.",
      baseFaqNote,
    ],
    candidate: [
      "Localised fat deposits resistant to diet and exercise",
      "Stable weight and reasonable skin quality",
      "Clear understanding of what contouring can achieve",
    ],
    expect: [
      "Area-by-area assessment and marking",
      "Discussion of technique and anaesthesia",
      "Compression garment planning",
    ],
    recoveryNotes: [
      "Compression garments are worn as instructed",
      "Swelling settles progressively",
      "Light activity is usually encouraged early",
    ],
    considerations: [
      "Contour irregularities are possible",
      "Skin retraction varies between patients",
      "Weight change can alter results",
    ],
  },
  {
    slug: "abdominoplasty",
    name: "Abdominoplasty",
    category: "Body",
    excerpt:
      "Restoration of abdominal contour, often following pregnancy or significant weight change.",
    recovery: "[Typical recovery placeholder]",
    image: images.body,
    overview: [
      "Abdominoplasty addresses excess skin and, where indicated, separation of the abdominal muscles. Planning includes scar placement and recovery support.",
      baseFaqNote,
    ],
    candidate: [
      "Excess abdominal skin or muscle laxity",
      "Stable weight and completed family planning where relevant",
      "Ability to rest during the early recovery period",
    ],
    expect: [
      "Comprehensive medical assessment",
      "Scar placement discussion",
      "Structured recovery planning",
    ],
    recoveryNotes: [
      "Restricted movement in the first phase of recovery",
      "Gradual return to daily activities",
      "Regular follow-up appointments",
    ],
    considerations: [
      "A permanent scar is inherent to the procedure",
      "Recovery is longer than for many other procedures",
      "Individual outcomes vary",
    ],
  },
  {
    slug: "injectable-treatments",
    name: "Injectable Treatments",
    category: "Non-Surgical",
    excerpt:
      "Conservative, medically supervised injectable treatments for balance and skin quality.",
    recovery: "[Typical recovery placeholder]",
    image: images.nonsurgical,
    overview: [
      "Non-surgical treatments are used selectively, either as an alternative to surgery or alongside a broader plan. Conservative dosing supports natural-looking outcomes.",
      baseFaqNote,
    ],
    candidate: [
      "Early signs of volume loss or skin laxity",
      "Preference for non-surgical options",
      "Realistic expectations of temporary effects",
    ],
    expect: [
      "Facial assessment and treatment mapping",
      "Explanation of products, effects and duration",
      "Review appointment where appropriate",
    ],
    recoveryNotes: [
      "Minor swelling or bruising may occur",
      "Most daily activities resume quickly",
      "Aftercare instructions are provided",
    ],
    considerations: [
      "Effects are temporary and require maintenance",
      "Not all concerns are suitable for injectables",
      "Risks are reviewed prior to treatment",
    ],
  },
];

export const principles = [
  {
    number: "01",
    title: "Individualized Planning",
    body: "No two consultations are the same. Anatomy, medical history and personal goals shape every plan before anything is scheduled.",
  },
  {
    number: "02",
    title: "Safety First",
    body: "Assessment, accredited facilities and clear informed consent underpin each stage of care. Suitability is always determined in consultation.",
  },
  {
    number: "03",
    title: "Natural-Looking Aesthetic",
    body: "The intention is proportion and balance rather than transformation — refinement that reads as your own features, considered carefully.",
  },
  {
    number: "04",
    title: "Thoughtful Aftercare",
    body: "Recovery is planned alongside the procedure itself, with scheduled follow-up and direct access to the clinical team.",
  },
];

export const carePath = [
  { step: "01", title: "Consultation", body: "An unhurried conversation about goals, concerns and questions." },
  { step: "02", title: "Medical Assessment", body: "Health history, examination and, where indicated, further investigation." },
  { step: "03", title: "Personalized Planning", body: "A documented plan including options, alternatives and considerations." },
  { step: "04", title: "Preparation", body: "Written pre-operative guidance and a pre-procedure review." },
  { step: "05", title: "Follow-Up Care", body: "Scheduled reviews and ongoing access to the clinical team." },
];

export type GalleryCase = {
  id: string;
  procedure: string;
  category: Category;
  image: string;
  caseInfo: string;
};

export const galleryCases: GalleryCase[] = [
  { id: "case-01", procedure: "Rhinoplasty", category: "Face", image: images.face, caseInfo: "Patient in their 20s. [Case detail placeholder]." },
  { id: "case-02", procedure: "Breast Augmentation", category: "Breast", image: images.breast, caseInfo: "Patient in their 30s. [Case detail placeholder]." },
  { id: "case-03", procedure: "Abdominoplasty", category: "Body", image: images.body, caseInfo: "Patient in their 40s. [Case detail placeholder]." },
  { id: "case-04", procedure: "Injectable Treatments", category: "Non-Surgical", image: images.nonsurgical, caseInfo: "Patient in their 30s. [Case detail placeholder]." },
  { id: "case-05", procedure: "Facelift", category: "Face", image: images.heroPortrait, caseInfo: "Patient in their 50s. [Case detail placeholder]." },
  { id: "case-06", procedure: "Breast Lift", category: "Breast", image: images.breast, caseInfo: "Patient in their 40s. [Case detail placeholder]." },
  { id: "case-07", procedure: "Liposuction", category: "Body", image: images.body, caseInfo: "Patient in their 30s. [Case detail placeholder]." },
  { id: "case-08", procedure: "Eyelid Surgery", category: "Face", image: images.face, caseInfo: "Patient in their 50s. [Case detail placeholder]." },
];

export const galleryDisclaimer =
  "Selected results are shown for educational purposes. Individual outcomes vary, and images are not a prediction of results.";

export const testimonials = [
  {
    quote:
      "The consultation was unhurried and honest. Every question was answered, including the ones I hadn't thought to ask.",
    initials: "A. M.",
    procedure: "[Procedure Name]",
  },
  {
    quote:
      "What I remember most is how carefully the options were explained — including the reasons to wait and reconsider.",
    initials: "K. R.",
    procedure: "[Procedure Name]",
  },
  {
    quote:
      "Aftercare felt like a continuation of the same conversation. I always knew who to contact and what to expect next.",
    initials: "J. L.",
    procedure: "[Procedure Name]",
  },
  {
    quote:
      "A calm, private environment and a team that treated the decision as mine to make, at my own pace.",
    initials: "S. D.",
    procedure: "[Procedure Name]",
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const postCategories = ["Patient Guides", "Recovery", "Skin & Aesthetics", "Clinic News"];

export const posts: Post[] = [
  {
    slug: "preparing-for-your-consultation",
    title: "Preparing for your consultation",
    category: "Patient Guides",
    excerpt:
      "What to bring, what to ask, and how to make the most of an initial conversation with a surgeon.",
    date: "March 2026",
    author: clinic.surgeon.name,
    image: images.clinicInterior,
    body: [
      {
        heading: "Before the appointment",
        paragraphs: [
          "A consultation is a two-way assessment. Bringing a written list of questions, a summary of your medical history and a note of any medication helps make the conversation productive.",
          "There is no expectation to decide anything on the day. Suitability is determined in consultation, and time to reflect is part of the process.",
        ],
      },
      {
        heading: "Questions worth asking",
        paragraphs: [
          "Ask about the specific approach recommended for you, the alternatives considered, the recovery involved, and the potential risks and considerations.",
          "Ask, too, about follow-up: who you will see, when, and how to reach the clinic if something concerns you.",
        ],
      },
    ],
  },
  {
    slug: "understanding-recovery",
    title: "Understanding recovery as a planned stage of care",
    category: "Recovery",
    excerpt:
      "Recovery is not an afterthought. It is planned alongside the procedure, with defined milestones and support.",
    date: "February 2026",
    author: clinic.surgeon.name,
    image: images.body,
    body: [
      {
        heading: "A planned phase",
        paragraphs: [
          "Recovery timelines differ by procedure and by patient. Planning practical support at home, time away from work and realistic activity limits reduces avoidable stress.",
          "Individual results vary, and healing does not follow a straight line. Scheduled reviews exist to monitor progress and answer questions as they arise.",
        ],
      },
    ],
  },
  {
    slug: "skin-quality-and-aesthetic-planning",
    title: "Skin quality and aesthetic planning",
    category: "Skin & Aesthetics",
    excerpt:
      "Why skin health is assessed before any surgical or non-surgical plan is considered.",
    date: "January 2026",
    author: clinic.surgeon.name,
    image: images.nonsurgical,
    body: [
      {
        heading: "Assessment first",
        paragraphs: [
          "Skin thickness, elasticity and history of sun exposure all influence what a given approach can achieve. These are assessed at consultation.",
          "In some cases a non-surgical plan is more appropriate; in others, no intervention is recommended at all.",
        ],
      },
    ],
  },
  {
    slug: "clinic-notes-spring",
    title: "Clinic notes: a new consultation suite",
    category: "Clinic News",
    excerpt: "A quieter, more private space designed around the consultation itself.",
    date: "January 2026",
    author: clinic.shortName,
    image: images.clinicInterior,
    body: [
      {
        heading: "A considered environment",
        paragraphs: [
          "The new consultation suite was designed to feel calm and private, with natural light and space for unhurried conversation.",
          "[Clinic news placeholder content.]",
        ],
      },
    ],
  },
];

export const generalFaqs = [
  {
    q: "What happens during a consultation?",
    a: "A consultation includes a discussion of your goals, a review of medical history, an examination where appropriate, and an explanation of the options and alternatives available to you. Suitability is determined during consultation.",
  },
  {
    q: "How should I prepare for a procedure?",
    a: "Written pre-procedure instructions are provided and reviewed with you. These typically cover medication, smoking, fasting and practical arrangements for the day itself.",
  },
  {
    q: "What is recovery like?",
    a: "Recovery differs by procedure and by patient. A planned recovery timeline, activity guidance and follow-up schedule are provided as part of your individual plan.",
  },
  {
    q: "How are follow-up appointments arranged?",
    a: "Follow-up appointments are scheduled before your procedure and adjusted as healing progresses. Contact details for the clinical team are provided throughout.",
  },
  {
    q: "How do I ask about fees or financing?",
    a: "Fee information is provided in writing following consultation, as it depends on the individual plan. Please contact the clinic for details.",
  },
  {
    q: "How is suitability determined?",
    a: "Suitability depends on anatomy, medical history and personal goals. Every procedure has potential risks and considerations, and a consultation is required to determine the appropriate treatment.",
  },
];
