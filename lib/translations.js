// Translations for EN / IT / AR.
// Tech terms (TypeScript, Node, Anthropic, RAG, LLM, etc.) stay in English on purpose —
// they are proper names in the engineering world.

export const LOCALES = ["en", "it", "ar"];

export const LOCALE_META = {
  en: { code: "en", label: "EN", name: "English", dir: "ltr" },
  it: { code: "it", label: "IT", name: "Italiano", dir: "ltr" },
  ar: { code: "ar", label: "AR", name: "العربية", dir: "rtl" },
};

export const translations = {
  en: {
    header: {
      available: "available",
      nav: { about: "about", stack: "stack", work: "work", contact: "contact" },
    },
    hero: {
      availableForWork: "available for new work",
      anthropicCertified: "anthropic certified",
      remote: "remote",
      role: { senior: "senior", aiEngineer: "ai software engineer", architect: "system architect", fullstack: "full-stack" },
      typewriter: "I design and ship agentic AI systems — from prototype to production.",
      description: {
        prefix: "Independent consultant. I work with teams on ",
        a: "LLM applications",
        comma1: ", ",
        b: "agent runtimes",
        comma2: ", ",
        c: "retrieval systems",
        suffix: ", and the full-stack tooling around them. Node and TypeScript across the stack, architecture-first, comfortable end-to-end.",
      },
      ctaPrimary: "get in touch",
      ctaSecondary: "see work",
      evalLabel: "eval:",
      evalValue: "passing",
    },
    about: {
      label: "// what i do",
      headingPrefix: "Engineering at the seam between ",
      headingMid: " and ",
      headingSuffix: ".",
      headingA: "agents",
      headingB: "production",
      p1: {
        a: "I'm an ",
        b: "AI software engineer",
        c: " with a research and development background. I design system architectures and build the software around them — backend, frontend, data layer, and the agentic AI components stitched through.",
      },
      p2: {
        a: "Most of my recent work is around ",
        b: "LLM applications",
        c: " and ",
        d: "agentic systems",
        e: ": retrieval pipelines, agent runtimes, evaluation harnesses, and the production plumbing that makes them safe to ship. I work primarily in ",
        f: "Node",
        g: " and ",
        h: "TypeScript",
        i: " across the stack — agent runtimes, services, and Nuxt / Vue front-ends on top. Python comes in when the AI work calls for it.",
      },
      p3: "I work as a consultant. I take on projects where the architecture isn't decided yet, or where it needs to be rethought.",
      pillSoftware: "7y software",
      pillAi: "4y ai & agents",
      pillRd: "r&d background",
      credentialsLabel: "// credentials",
    },
    services: {
      ai: {
        title: "AI & Agentic Systems",
        description:
          "LLM applications, agent runtimes, RAG and retrieval, evaluation harnesses. Production agentic systems where reliability and traceability matter.",
      },
      arch: {
        title: "System Architecture",
        description:
          "Designing the backbone before the code. Data flow, service boundaries, deployment topology, failure modes. Documents engineers can actually build from.",
      },
      fullstack: {
        title: "Full-stack Delivery",
        description:
          "Node and TypeScript services, Nuxt / Vue front-ends, MongoDB and Postgres, queues, infra. End-to-end shipping when the team is small or the project is greenfield.",
      },
    },
    stack: {
      title: "Tools I reach for first.",
      backend: "Backend",
      ai: "AI & Agents",
      frontend: "Frontend",
      infra: "Infra",
      primaryBadge: "primary",
      packagesSuffix: "packages",
      footer: "// node and typescript across the stack. python where it earns its keep.",
    },
    work: {
      title: "Selected work, anonymized.",
      caseLabel: "case",
      problem: "Problem",
      approach: "Approach",
      outcome: "Outcome",
      footer: "// client work is anonymized by default. happy to walk through specifics on a call.",
      items: {
        agent: {
          title: "Multi-agent research pipeline",
          problem:
            "A B2B SaaS team needed analysts to triage long, semi-structured reports faster, without losing citation traceability.",
          approach:
            "Designed the agent runtime (planner → retrievers → critic) in TypeScript, an evaluation harness, and a Vue dashboard for review.",
          outcome:
            "Cut review time ~60% with citation-grounded answers and a measurable eval suite gating each release.",
        },
        rag: {
          title: "Domain-specific RAG",
          problem:
            "A regulated industry needed document QA over a private corpus with strict citation and access requirements.",
          approach:
            "Hybrid search (BM25 + dense), citation enforcement at generation time, MongoDB + pgvector, role-aware retrieval.",
          outcome:
            "Production rollout with 99.4% citation coverage on eval set; ~3x faster lookup than the legacy search.",
        },
        rewrite: {
          title: "Architecture rewrite",
          problem:
            "A monolithic Nuxt + Express app was bottlenecking new features and on-call was eating the team's week.",
          approach:
            "Re-architected into service boundaries with a documented contract, staged migration, feature parity tests.",
          outcome:
            "Shipped over 6 weeks with zero downtime and a 40% drop in P1 incidents in the first quarter.",
        },
      },
    },
    footer: {
      statusEcho: "echo $STATUS",
      statusValue: "Available for new consulting work.",
      emailEcho: "echo $EMAIL",
      cta: "start a conversation",
      copyright: "marwan tourky · built with next, tailwind, framer-motion",
    },
    meta: {
      title: "Marwan Tourky — Senior AI Software Engineer & System Architect",
      description:
        "Independent AI software engineer and system architect. LLM applications, agent pipelines, retrieval systems, and full-stack delivery. Node, TypeScript, Nuxt, Vue.",
    },
  },

  it: {
    header: {
      available: "disponibile",
      nav: { about: "info", stack: "stack", work: "lavori", contact: "contatti" },
    },
    hero: {
      availableForWork: "disponibile per nuovi progetti",
      anthropicCertified: "certificato anthropic",
      remote: "da remoto",
      role: { senior: "senior", aiEngineer: "ai software engineer", architect: "system architect", fullstack: "full-stack" },
      typewriter: "Progetto e rilascio sistemi AI agentici — dal prototipo alla produzione.",
      description: {
        prefix: "Consulente indipendente. Lavoro con i team su ",
        a: "applicazioni LLM",
        comma1: ", ",
        b: "agent runtime",
        comma2: ", ",
        c: "sistemi di retrieval",
        suffix: " e tutto lo stack che gira intorno. Node e TypeScript trasversalmente, architettura prima del codice, a mio agio end-to-end.",
      },
      ctaPrimary: "contattami",
      ctaSecondary: "vedi i lavori",
      evalLabel: "eval:",
      evalValue: "passing",
    },
    about: {
      label: "// chi sono",
      headingPrefix: "Ingegneria al confine tra ",
      headingMid: " e ",
      headingSuffix: ".",
      headingA: "agenti",
      headingB: "produzione",
      p1: {
        a: "Sono un ",
        b: "AI software engineer",
        c: " con un background in ricerca e sviluppo. Progetto architetture di sistema e costruisco il software che le anima — backend, frontend, livello dati e i componenti agentici che li attraversano.",
      },
      p2: {
        a: "Gran parte del mio lavoro recente ruota intorno alle ",
        b: "applicazioni LLM",
        c: " e ai ",
        d: "sistemi agentici",
        e: ": pipeline di retrieval, agent runtime, eval harness e la parte di produzione che li rende affidabili. Lavoro principalmente in ",
        f: "Node",
        g: " e ",
        h: "TypeScript",
        i: " su tutto lo stack — agent runtime, servizi e front-end Nuxt / Vue. Python entra in gioco quando il lavoro AI lo richiede.",
      },
      p3: "Lavoro come consulente. Prendo progetti in cui l'architettura non è ancora definita, o dove è il momento di ripensarla.",
      pillSoftware: "7a software",
      pillAi: "4a ai & agenti",
      pillRd: "background r&s",
      credentialsLabel: "// certificazioni",
    },
    services: {
      ai: {
        title: "AI & Sistemi Agentici",
        description:
          "Applicazioni LLM, agent runtime, RAG e retrieval, eval harness. Sistemi agentici in produzione dove affidabilità e tracciabilità contano.",
      },
      arch: {
        title: "Architettura di Sistema",
        description:
          "Disegnare la spina dorsale prima del codice. Flussi dati, confini dei servizi, topologia di deploy, failure mode. Documenti su cui i team possono effettivamente costruire.",
      },
      fullstack: {
        title: "Sviluppo Full-stack",
        description:
          "Servizi Node e TypeScript, front-end Nuxt / Vue, MongoDB e Postgres, code, infrastruttura. Consegna end-to-end quando il team è piccolo o il progetto è greenfield.",
      },
    },
    stack: {
      title: "Gli strumenti che uso per primi.",
      backend: "Backend",
      ai: "AI & Agenti",
      frontend: "Frontend",
      infra: "Infra",
      primaryBadge: "principale",
      packagesSuffix: "pacchetti",
      footer: "// node e typescript trasversalmente. python dove conviene davvero.",
    },
    work: {
      title: "Lavori selezionati, anonimizzati.",
      caseLabel: "case",
      problem: "Problema",
      approach: "Approccio",
      outcome: "Risultato",
      footer: "// i progetti dei clienti sono anonimizzati di default. dettagli volentieri in call.",
      items: {
        agent: {
          title: "Pipeline di ricerca multi-agente",
          problem:
            "Un team B2B SaaS aveva bisogno di far triagiare ai propri analisti report lunghi e semi-strutturati senza perdere la tracciabilità delle citazioni.",
          approach:
            "Disegnato l'agent runtime (planner → retrievers → critic) in TypeScript, un eval harness e una dashboard Vue per la revisione.",
          outcome:
            "Tempo di revisione ridotto di ~60% con risposte ancorate alle citazioni e una eval suite misurabile a ogni release.",
        },
        rag: {
          title: "RAG di dominio specifico",
          problem:
            "Un settore regolamentato aveva bisogno di document QA su un corpus privato con requisiti stringenti di citazione e accesso.",
          approach:
            "Ricerca ibrida (BM25 + dense), citation enforcement a generation time, MongoDB + pgvector, retrieval consapevole dei ruoli.",
          outcome:
            "Rollout in produzione con 99.4% di copertura citazioni sull'eval set; lookup ~3x più veloce della ricerca legacy.",
        },
        rewrite: {
          title: "Riscrittura architetturale",
          problem:
            "Un monolite Nuxt + Express bloccava le nuove feature e l'on-call mangiava la settimana del team.",
          approach:
            "Ri-architettato in confini di servizio con un contratto documentato, migrazione graduale, test di parità.",
          outcome:
            "Rilascio in 6 settimane senza downtime e calo del 40% degli incidenti P1 nel primo trimestre.",
        },
      },
    },
    footer: {
      statusEcho: "echo $STATUS",
      statusValue: "Disponibile per nuovi progetti di consulenza.",
      emailEcho: "echo $EMAIL",
      cta: "iniziamo a parlarne",
      copyright: "marwan tourky · costruito con next, tailwind, framer-motion",
    },
    meta: {
      title: "Marwan Tourky — Senior AI Software Engineer & System Architect",
      description:
        "AI software engineer e system architect indipendente. Applicazioni LLM, agent pipeline, sistemi di retrieval e delivery full-stack. Node, TypeScript, Nuxt, Vue.",
    },
  },

  ar: {
    header: {
      available: "متاح",
      nav: { about: "نبذة", stack: "الأدوات", work: "أعمال", contact: "تواصل" },
    },
    hero: {
      availableForWork: "متاح لمشاريع جديدة",
      anthropicCertified: "معتمد من Anthropic",
      remote: "عن بُعد",
      role: { senior: "أول", aiEngineer: "مهندس برمجيات ذكاء اصطناعي", architect: "مهندس أنظمة", fullstack: "Full-stack" },
      typewriter: "أصمّم وأطلق أنظمة ذكاء اصطناعي وكيلية — من النموذج الأولي إلى الإنتاج.",
      description: {
        prefix: "مستشار مستقل. أعمل مع الفِرَق على ",
        a: "تطبيقات LLM",
        comma1: "، ",
        b: "بيئات تشغيل الوكلاء",
        comma2: "، ",
        c: "أنظمة الاسترجاع",
        suffix: "، وكامل البنية البرمجية حولها. Node و TypeScript عبر كامل المنظومة، الهندسة قبل الكود، مرتاح من الطرف إلى الطرف.",
      },
      ctaPrimary: "تواصل معي",
      ctaSecondary: "اطّلع على الأعمال",
      evalLabel: "eval:",
      evalValue: "passing",
    },
    about: {
      label: "// نبذة",
      headingPrefix: "هندسة على الحدّ الفاصل بين ",
      headingMid: " و",
      headingSuffix: ".",
      headingA: "الوكلاء",
      headingB: "الإنتاج",
      p1: {
        a: "أنا ",
        b: "مهندس برمجيات ذكاء اصطناعي",
        c: " بخلفية بحث وتطوير. أصمّم هندسة الأنظمة وأبني البرمجيات حولها — الواجهة الخلفية والأمامية وطبقة البيانات ومكوّنات الذكاء الاصطناعي الوكيلية المنسوجة بينها.",
      },
      p2: {
        a: "معظم عملي الأخير يدور حول ",
        b: "تطبيقات LLM",
        c: " و",
        d: "الأنظمة الوكيلية",
        e: ": خطوط الاسترجاع، بيئات تشغيل الوكلاء، أُطر التقييم، والبنية الإنتاجية التي تجعل إطلاقها آمنًا. أعمل أساسًا بـ ",
        f: "Node",
        g: " و",
        h: "TypeScript",
        i: " عبر كامل المنظومة — بيئات تشغيل الوكلاء والخدمات وواجهات Nuxt / Vue. أستخدم Python عند الحاجة لذلك في عمل الذكاء الاصطناعي.",
      },
      p3: "أعمل كمستشار. أتعامل مع المشاريع التي لم تُحسم هندستها بعد، أو التي تستدعي إعادة تفكير.",
      pillSoftware: "٧ سنوات برمجة",
      pillAi: "٤ سنوات ذكاء ووكلاء",
      pillRd: "خلفية بحث وتطوير",
      credentialsLabel: "// شهادات",
    },
    services: {
      ai: {
        title: "الذكاء الاصطناعي والأنظمة الوكيلية",
        description:
          "تطبيقات LLM، بيئات تشغيل الوكلاء، RAG والاسترجاع، أُطر التقييم. أنظمة وكيلية إنتاجية حيث الموثوقية والتتبّع يهمّان.",
      },
      arch: {
        title: "هندسة الأنظمة",
        description:
          "تصميم الهيكل قبل الكود. تدفق البيانات، حدود الخدمات، طوبولوجيا النشر، أنماط الفشل. وثائق يستطيع المهندسون البناء عليها فعلًا.",
      },
      fullstack: {
        title: "تطوير شامل (Full-stack)",
        description:
          "خدمات بـ Node و TypeScript، واجهات Nuxt / Vue، MongoDB و Postgres، طوابير ومنصّات. تسليم من الطرف إلى الطرف عندما يكون الفريق صغيرًا أو المشروع جديدًا.",
      },
    },
    stack: {
      title: "الأدوات التي أبدأ بها.",
      backend: "Backend",
      ai: "AI & Agents",
      frontend: "Frontend",
      infra: "Infra",
      primaryBadge: "أساسي",
      packagesSuffix: "حِزَم",
      footer: "// Node و TypeScript عبر كامل المنظومة. Python عندما يستحق ذلك.",
    },
    work: {
      title: "أعمال مختارة، بصيغة مجهولة.",
      caseLabel: "case",
      problem: "المشكلة",
      approach: "المقاربة",
      outcome: "النتيجة",
      footer: "// أعمال العملاء بصيغة مجهولة افتراضيًا. يسعدني الدخول في التفاصيل في مكالمة.",
      items: {
        agent: {
          title: "خطّ بحث متعدّد الوكلاء",
          problem:
            "احتاج فريق B2B SaaS إلى تمكين المحلّلين من فرز تقارير طويلة وشبه منظّمة بشكل أسرع، دون فقدان تتبّع الاستشهادات.",
          approach:
            "صمّمت بيئة تشغيل الوكلاء (مخطّط ← مسترجِعات ← ناقد) بـ TypeScript، إطار تقييم، ولوحة تحكم Vue للمراجعة.",
          outcome:
            "خفض زمن المراجعة بنحو ٦٠٪ مع إجابات مدعومة بالاستشهادات ومجموعة تقييم قابلة للقياس تُدخِل كل إصدار.",
        },
        rag: {
          title: "RAG لمجال محدّد",
          problem:
            "قطاع منظَّم احتاج إلى QA على المستندات فوق مجموعة خاصة بمتطلبات صارمة للاستشهاد والوصول.",
          approach:
            "بحث هجين (BM25 + كثيف)، فرض الاستشهاد عند التوليد، MongoDB + pgvector، استرجاع واعٍ بالأدوار.",
          outcome:
            "إطلاق إنتاجي بتغطية استشهادات ٩٩.٤٪ على مجموعة التقييم؛ بحث أسرع بنحو ٣ أضعاف من الإصدار القديم.",
        },
        rewrite: {
          title: "إعادة كتابة الهندسة",
          problem:
            "تطبيق Nuxt + Express أحادي البنية كان يعرقل الميزات الجديدة وكان الـ on-call يستهلك أسبوع الفريق.",
          approach:
            "أعدت هيكلته إلى حدود خدمات بعقد موثَّق، مع هجرة مرحلية واختبارات تكافؤ الميزات.",
          outcome:
            "تم الإطلاق على مدى ٦ أسابيع بدون أي توقّف، وانخفاض ٤٠٪ في حوادث P1 في الربع الأول.",
        },
      },
    },
    footer: {
      statusEcho: "echo $STATUS",
      statusValue: "متاح لأعمال استشارية جديدة.",
      emailEcho: "echo $EMAIL",
      cta: "ابدأ محادثة",
      copyright: "مروان طورقي · مبني بـ Next و Tailwind و framer-motion",
    },
    meta: {
      title: "مروان طورقي — مهندس برمجيات ذكاء اصطناعي أول ومهندس أنظمة",
      description:
        "مهندس برمجيات ذكاء اصطناعي ومهندس أنظمة مستقل. تطبيقات LLM، خطوط وكلاء، أنظمة استرجاع وتسليم Full-stack. Node و TypeScript و Nuxt و Vue.",
    },
  },
};

export function getTranslations(locale) {
  return translations[locale] || translations.en;
}

// Resolve "a.b.c" path against a translations object.
export function resolvePath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}
