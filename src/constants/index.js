import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "program",
        title: "Program",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "italiano",
        title: "Italiano",
    },
    {
        id: "storia",
        title: "Storia",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator2",
        icon: creator,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "First Year",
        company_name: "Click To Explore",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        path: "/prova",
    },
    {
        title: "Second Year",
        company_name: "Click To Explore",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        path: "/prova",
    },
    {
        title: "Third Year",
        company_name: "Click To Explore",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        path: "/prova",
    },
    {
        title: "Fourth Year",
        company_name: "Click To Explore",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        path: "/prova",
    },
    {
        title: "Fifth Year",
        company_name: "Click To Explore",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        path: "/ciao",
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Hackaton",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

const storia = {
    nome: "Storia",
    docente: "Giulia Montesi",
    argomenti: [
        {
            capitolo: 1,
            titolo: "All’alba del ‘900 tra euforia e inquietudini",
            argomenti: [
                {
                    titolo: "I fattori dell’espansione",
                    spiegazione:
                        "Gli anni che segnano l'inizio del XX secolo sono caratterizzati da una fervente espansione economica e territoriale delle potenze mondiali. Questi fattori di espansione includono lo sviluppo industriale, la ricerca di nuovi mercati e risorse, nonché la volontà di imporsi come potenze dominanti a livello globale.",
                },
                {
                    titolo: "L’organizzazione scientifica del lavoro",
                    spiegazione:
                        "L'organizzazione scientifica del lavoro è un approccio alla gestione industriale sviluppato nel periodo che si contraddistingue per l'applicazione di principi scientifici per migliorare l'efficienza produttiva. Questo modello ha portato a una maggiore divisione del lavoro, alla standardizzazione dei processi e alla ricerca di metodi più razionali per aumentare la produttività.",
                },
                {
                    titolo: "Una società in movimento",
                    spiegazione:
                        "Il periodo all'alba del XX secolo è caratterizzato da significativi cambiamenti sociali e culturali. La crescita economica e l'urbanizzazione hanno portato a una maggiore mobilità sociale, con la formazione di nuove classi sociali e il declino delle tradizionali strutture sociali. Questi cambiamenti hanno anche portato a una maggiore attenzione alle questioni sociali e all'emergere di movimenti politici e sociali.",
                },
                {
                    titolo: "Il sindacalismo operaio",
                    spiegazione:
                        "Il sindacalismo operaio è emerso come una forza significativa nel panorama politico ed economico del periodo. I lavoratori si sono organizzati in sindacati per difendere i propri diritti e migliorare le condizioni lavorative. Questo movimento ha giocato un ruolo importante nel promuovere riforme sociali e nell'affermare i diritti dei lavoratori all'interno delle società industrializzate.",
                },
            ],
            img: "src/assets/storia/storia_1.jpg",
        },
        {
            capitolo: 2,
            titolo: "I mutamenti dello scenario mondiale",
            argomenti: [
                {
                    titolo: "La nascita del nazionalismo in Europa",
                    spiegazione:
                        "Il nazionalismo ha iniziato a crescere in Europa nel XIX secolo, alimentato da una serie di fattori tra cui l'ascesa delle potenze nazionali, il desiderio di autodeterminazione dei popoli e il consolidamento degli stati-nazione. Questo ha portato a cambiamenti significativi nelle relazioni internazionali e alla crescita delle tensioni tra le nazioni europee.",
                },
                {
                    titolo: "La Russia zarista",
                    spiegazione:
                        "La Russia sotto il regime zarista era caratterizzata da un sistema politico autocratico e da profonde disparità sociali ed economiche. La politica interna era segnata da repressione politica e dalla mancanza di riforme significative, mentre sul fronte estero la Russia era impegnata in conflitti imperiali e diplomatici che ne minavano la stabilità.",
                },
                {
                    titolo: "Gli USA verso il ruolo di potenza mondiale",
                    spiegazione:
                        "Nel periodo all'incirca dell'inizio del XX secolo, gli Stati Uniti stavano emergendo come una potenza mondiale. Con una rapida crescita economica, espansione territoriale e ambizioni imperiali, gli USA stavano acquisendo un ruolo sempre più influente sulla scena internazionale, sfidando le potenze europee tradizionali.",
                },
            ],
            img: "src/assets/storia/storia_2.jpg",
        },
        {
            capitolo: 3,
            titolo: "L’Italia nell’età giolittiana",
            argomenti: [
                {
                    titolo: "Giolitti al governo ed il rapporto con i socialisti",
                    spiegazione:
                        "Giovanni Giolitti è stato uno dei principali statisti italiani del periodo pre-bellico. Il suo governo è stato caratterizzato da politiche di modernizzazione e di compromesso con i socialisti, al fine di garantire la stabilità politica e promuovere lo sviluppo economico.",
                },
                {
                    titolo: "I caratteri del sistema giolittiano",
                    spiegazione:
                        "Il sistema giolittiano si basava su un compromesso tra le forze politiche, con l'obiettivo di mantenere la stabilità politica e promuovere lo sviluppo economico. Questo modello si è caratterizzato per politiche pragmatiche e per una certa forma di clientelismo, che ha permesso il mantenimento del potere da parte di Giolitti per un lungo periodo.",
                },
                {
                    titolo: "Lo sviluppo industriale e la politica economica",
                    spiegazione:
                        "Durante l'età giolittiana, l'Italia ha conosciuto un significativo sviluppo industriale, con la crescita di settori come l'industria pesante, la siderurgia e l'automobilistica. Giolitti ha promosso politiche economiche volte a sostenere questo sviluppo, tra cui la protezione dell'industria nazionale e la promozione degli investimenti esteri.",
                },
                {
                    titolo: "Il divario Nord/Sud",
                    spiegazione:
                        "Uno dei tratti distintivi dell'Italia nell'età giolittiana era il divario economico e sociale tra il Nord industrializzato e il Sud agricolo. Questa disparità ha contribuito a tensioni sociali e politiche, alimentando il malcontento e le rivendicazioni per maggiori opportunità e giustizia sociale nelle regioni meridionali.",
                },
                {
                    titolo: "Nazionalismo italiano",
                    spiegazione:
                        "Durante l'età giolittiana, si è assistito ad un crescente sentimento nazionalista in Italia, alimentato dall'aspirazione a consolidare l'unità nazionale e a ottenere un ruolo di rilievo sulla scena internazionale. Questo nazionalismo ha influenzato la politica estera italiana e ha contribuito alla coesione nazionale del Paese.",
                },
                {
                    titolo: "L’epilogo della stagione giolittiana",
                    spiegazione:
                        "La stagione giolittiana è giunta al termine a causa di una serie di crisi politiche ed economiche, tra cui la guerra di Libia e lo scoppio della Prima Guerra Mondiale. Questi eventi hanno segnato la fine del governo di Giolitti e l'inizio di un periodo di instabilità politica e conflitto sociale in Italia.",
                },
            ],
            img: "src/assets/storia/storia_3.jpg",
        },
        {
            capitolo: 4,
            titolo: "La Grande guerra",
            argomenti: [
                {
                    titolo: "Da crisi locale a conflitto continentale",
                    spiegazione:
                        "La Prima Guerra Mondiale è stata originariamente scatenata da una serie di crisi locali e tensioni internazionali che si sono poi trasformate in un conflitto su scala continentale. Eventi come l'assassinio dell'arciduca Francesco Ferdinando d'Austria nel 1914 hanno innescato una serie di alleanze militari e dichiarazioni di guerra che hanno coinvolto molte nazioni europee.",
                },
                {
                    titolo: "Gli schieramenti belligeranti",
                    spiegazione:
                        "La Prima Guerra Mondiale ha visto la formazione di due principali alleanze militari: gli Alleati, composti principalmente da Francia, Regno Unito, Russia e successivamente dagli Stati Uniti, e le Potenze Centrali, che includevano Germania, Austria-Ungheria e l'Impero Ottomano. Questi schieramenti si sono scontrati in una serie di battaglie che hanno caratterizzato il conflitto.",
                },
                {
                    titolo: "Da guerra di movimento a guerra di posizione",
                    spiegazione:
                        "Inizialmente la guerra si caratterizzava per la mobilità e la velocità degli spostamenti delle truppe, ma presto si trasformò in una guerra di posizione caratterizzata da trincee e dalla staticità dei fronti. Questo cambiamento portò a un prolungamento del conflitto e a una crescente devastazione delle aree coinvolte.",
                },
                {
                    titolo: "L’Italia dall’intervento alla neutralità",
                    spiegazione:
                        "L'Italia, inizialmente neutrale, entrò in guerra a fianco degli Alleati nel 1915, dopo aver firmato il Patto di Londra. L'intervento italiano fu motivato da aspirazioni territoriali e dalla promessa di ottenere territori irredenti. Tuttavia, il conflitto si rivelò disastroso per l'Italia, con pesanti perdite umane e pochi guadagni territoriali.",
                },
                {
                    titolo: "1915-1916 un’immane carneficina",
                    spiegazione:
                        "Gli anni 1915-1916 videro alcune delle battaglie più sanguinose e brutali della guerra, come la battaglia di Verdun e la battaglia della Somme. Queste battaglie causarono milioni di morti e feriti da entrambe le parti, senza portare a significativi cambiamenti nei confini territoriali.",
                },
                {
                    titolo: "Le armi della tecnologia e della propaganda",
                    spiegazione:
                        "La Prima Guerra Mondiale vide l'introduzione di nuove tecnologie belliche, come il gas tossico, i carri armati e gli aerei da combattimento. Allo stesso tempo, entrambi gli schieramenti utilizzarono la propaganda per mobilitare le masse e giustificare il conflitto, influenzando l'opinione pubblica e sostenendo lo sforzo bellico.",
                },
                {
                    titolo: "La mobilitazione collettiva al servizio della guerra totale",
                    spiegazione:
                        "La Prima Guerra Mondiale fu caratterizzata da una mobilitazione totale delle risorse economiche, sociali e umane dei paesi coinvolti. Gli sforzi bellici coinvolsero l'intera società, con lo sfruttamento delle risorse industriali, la leva obbligatoria e l'intervento dello Stato nell'economia.",
                },
                {
                    titolo: "Le svolte del 1917",
                    spiegazione:
                        "Il 1917 fu un anno cruciale nella Prima Guerra Mondiale. La Rivoluzione Russa portò alla caduta dello zar e all'ascesa al potere dei bolscevichi, che successivamente firmarono un armistizio con le Potenze Centrali, uscendo così dal conflitto. Allo stesso tempo, gli Stati Uniti entrarono in guerra a fianco degli Alleati, cambiando radicalmente l'equilibrio delle forze.",
                },
                {
                    titolo: "L’epilogo della guerra",
                    spiegazione:
                        "La Prima Guerra Mondiale si concluse con la firma dell'Armistizio di Compiègne nel novembre 1918. Questo segnò la sconfitta delle Potenze Centrali e la vittoria degli Alleati, ma lasciò dietro di sé un bilancio di distruzione, morte e instabilità politica che avrebbe avuto profonde conseguenze per gli anni a venire.",
                },
            ],
            img: "src/assets/storia/storia_4.jpg",
        },
        {
            capitolo: 5,
            titolo: "I fragili equilibri del dopoguerra",
            argomenti: [
                {
                    titolo: "I trattati di pace e la Società delle Nazioni",
                    spiegazione:
                        "Il dopoguerra fu segnato dalla firma di una serie di trattati di pace che cercavano di porre fine al conflitto e di stabilire nuovi confini e rapporti internazionali. La Società delle Nazioni fu fondata con l'obiettivo di prevenire futuri conflitti attraverso la diplomazia e la cooperazione internazionale.",
                },
                {
                    titolo: "I problemi dell’economia postbellica",
                    spiegazione:
                        "Dopo la guerra, molti paesi si trovarono ad affrontare gravi problemi economici, tra cui inflazione, disoccupazione e indebitamento. La ricostruzione postbellica richiese un enorme sforzo e molte nazioni dovettero affrontare difficoltà nel riprendersi dagli effetti devastanti del conflitto.",
                },
                {
                    titolo: "Le finanze e gli scambi internazionali",
                    spiegazione:
                        "Il dopoguerra vide un cambiamento nei rapporti finanziari e commerciali internazionali, con la fine del sistema aureo e l'introduzione di nuovi meccanismi di gestione economica. Il protezionismo e le politiche commerciali nazionali divennero più diffusi, mentre la cooperazione economica internazionale rimase limitata.",
                },
                {
                    titolo: "Francia e Gran Bretagna",
                    spiegazione:
                        "Francia e Gran Bretagna furono tra le principali potenze vincitrici della Prima Guerra Mondiale, ma entrambe affrontarono sfide interne ed esterne nel dopoguerra. La Francia cercò di assicurarsi la sicurezza attraverso la creazione di una cintura di stati cuscinetto, mentre il Regno Unito dovette affrontare il declino dell'impero coloniale e le conseguenze sociali del conflitto.",
                },
                {
                    titolo: "Gli esordi del movimento nazionalista in India",
                    spiegazione:
                        "Il dopoguerra vide un crescente movimento nazionalista in India, che cercava l'indipendenza dal dominio coloniale britannico. Leader come Mahatma Gandhi guidarono campagne di disobbedienza civile e resistenza non violenta contro il governo coloniale, portando gradualmente all'indipendenza dell'India nel 1947.",
                },
            ],
            img: "src/assets/storia/storia_5.jpg",
        },
        {
            capitolo: 6,
            titolo: "La rivoluzione bolscevica e il biennio rosso",
            argomenti: [
                {
                    titolo: "Dalla caduta dello zar alla rivoluzione d’ottobre",
                    spiegazione:
                        "La rivoluzione russa del 1917 portò alla caduta dello zar Nicola II e alla presa del potere da parte dei bolscevichi, guidati da Lenin e Trotsky. La Rivoluzione d'Ottobre mise fine al regime zarista e portò all'instaurazione del primo stato socialista al mondo.",
                },
                {
                    titolo: "Dalla guerra civile alla NEP",
                    spiegazione:
                        "Dopo la rivoluzione, la Russia fu sconvolta da una lunga e cruenta guerra civile tra i bolscevichi e le forze anti-comuniste, conosciute come i Bianchi. La guerra civile terminò con la vittoria dei bolscevichi, che iniziarono a consolidare il loro potere e a introdurre politiche economiche come la NEP (Nuova Politica Economica) per stabilizzare il paese.",
                },
                {
                    titolo: "L’Europa senza pace",
                    spiegazione:
                        "Il dopoguerra in Europa fu segnato da instabilità politica, sociale ed economica. Molti paesi europei affrontarono rivolte sociali, agitazioni politiche e disordini civili, mentre le conseguenze della guerra e le richieste di ricostruzione resero difficile il ritorno alla normalità.",
                },
                {
                    titolo: "La Repubblica di Weimar in Germania",
                    spiegazione:
                        "La Repubblica di Weimar fu il regime democratico che succedette all'impero tedesco dopo la sconfitta nella Prima Guerra Mondiale. Tuttavia, la Repubblica si trovò ad affrontare numerosi problemi, tra cui instabilità politica, inflazione galoppante e disordini sociali, che alla fine favorirono l'ascesa del nazismo.",
                },
                {
                    titolo: "Il difficile dopoguerra in Italia",
                    spiegazione:
                        "In Italia, il dopoguerra fu caratterizzato da instabilità politica, conflitti sociali e difficoltà economiche. Il paese si trovò diviso tra forze politiche contrapposte, tra cui socialisti, comunisti, fascisti e monarchici, e affrontò sfide come la ricostruzione postbellica, il debito pubblico e la questione degli irredentisti.",
                },
                {
                    titolo: "Dalla vittoria mutilata al biennio rosso",
                    spiegazione:
                        "La vittoria italiana nella Prima Guerra Mondiale fu considerata 'mutilata' a causa della mancata ottenimento di alcuni territori promessi nel Patto di Londra. Questo generò un sentimento di frustrazione e scontento nella popolazione, che si manifestò nel 'biennio rosso' (1919-1920), un periodo di intensa agitazione sociale e conflitto politico caratterizzato da scioperi, occupazioni di fabbriche e scontri di strada.",
                },
            ],
            img: "src/assets/storia/storia_6.jpg",
        },
        {
            capitolo: 7,
            titolo: "Il regime fascista di Mussolini",
            argomenti: [
                {
                    titolo: "Dai Fasci di combattimento alla marcia su Roma",
                    spiegazione:
                        "Il regime fascista di Mussolini ebbe origine dai Fasci di combattimento, movimento politico di estrema destra fondato nel 1919. Nel 1922, Mussolini orchestrò la Marcia su Roma, una dimostrazione di forza che portò alla sua nomina a capo del governo italiano da parte del re Vittorio Emanuele III.",
                },
                {
                    titolo: "Dalla legge Acerbo al Delitto Matteotti",
                    spiegazione:
                        "La legge Acerbo del 1923 favorì il Partito Nazionale Fascista nelle elezioni con un sistema elettorale che assegnava la maggioranza dei seggi al partito che avesse ottenuto la maggioranza relativa dei voti. Il Delitto Matteotti del 1924, l'assassinio del deputato socialista Giacomo Matteotti da parte di squadristi fascisti, scatenò una grave crisi politica.",
                },
                {
                    titolo: "La fascistizzazione dello Stato",
                    spiegazione:
                        "Durante il regime fascista, lo Stato italiano subì una profonda trasformazione in senso autoritario e totalitario. Le istituzioni democratiche furono progressivamente soppiantate da strutture di potere controllate dal Partito Fascista, che estese il suo controllo su tutti gli aspetti della vita politica, sociale ed economica del paese.",
                },
                {
                    titolo: "L’antifascismo",
                    spiegazione:
                        "L'antifascismo rappresentò l'opposizione al regime di Mussolini da parte di gruppi politici, sindacati, intellettuali e cittadini che si opponevano alla dittatura fascista e alle sue politiche autoritarie, repressive e nazionaliste. L'antifascismo si manifestò attraverso movimenti di resistenza, proteste, scioperi e atti di sabotaggio.",
                },
                {
                    titolo: "I rapporti con la Chiesa e i Patti Lateranensi",
                    spiegazione:
                        "I Patti Lateranensi del 1929 furono un accordo tra il regime fascista italiano e la Santa Sede che pose fine alla questione romana, riconoscendo lo Stato della Città del Vaticano come entità sovrana e istituendo una serie di privilegi per la Chiesa cattolica in Italia. Questi patti consolidarono il sostegno della Chiesa al regime fascista.",
                },
                {
                    titolo: "L’organizzazione del consenso",
                    spiegazione:
                        "Il regime fascista utilizzò una serie di strumenti e pratiche per ottenere e mantenere il consenso della popolazione italiana. Questi includono la propaganda di regime, il controllo dei media, la repressione delle opposizioni politiche, l'esaltazione del nazionalismo e dell'identità italiana, e la promozione di politiche di benessere sociale per attirare il sostegno dei cittadini.",
                },
                {
                    titolo: "La politica economica del fascismo",
                    spiegazione:
                        "La politica economica del regime fascista si basava su un modello di economia corporativa e interventista. Lo Stato interveniva pesantemente nell'economia per promuovere l'industrializzazione, il protezionismo, l'autarchia e il controllo statale dei settori chiave dell'economia, come l'industria pesante e le risorse naturali.",
                },
                {
                    titolo: "Gli squilibri interni alla società italiana",
                    spiegazione:
                        "Il regime fascista portò a una serie di profondi squilibri e contraddizioni nella società italiana. Questi includono la soppressione delle libertà civili e politiche, la violenza e la discriminazione contro gli oppositori politici e le minoranze, la promozione di un culto della personalità intorno a Mussolini e la militarizzazione della società.",
                },
                {
                    titolo: "La politica estera fascista",
                    spiegazione:
                        "La politica estera del regime fascista fu caratterizzata dall'espansionismo e dalla ricerca di prestigio internazionale. Mussolini mirava a riaffermare l'influenza italiana nel Mediterraneo e a competere con le grandi potenze europee. Tuttavia, l'avventura bellica in Africa e nei Balcani portò alla sconfitta italiana durante la Seconda Guerra Mondiale.",
                },
                {
                    titolo: "Le leggi razziali e le discriminazioni contro gli ebrei",
                    spiegazione:
                        "Le leggi razziali fasciste del 1938 introdussero discriminazioni legali contro gli ebrei in Italia, limitando i loro diritti civili, professionali ed economici. Queste leggi segnarono un'inversione della politica precedente del regime nei confronti degli ebrei e furono il preludio alla persecuzione e alla deportazione degli ebrei italiani durante la Seconda Guerra Mondiale.",
                },
            ],
            img: "src/assets/storia/storia_7.jpg",
        },
        {
            capitolo: 8,
            titolo: "La crisi del ‘29 e l’America di Roosevelt",
            argomenti: [
                {
                    titolo: "Gli “anni ruggenti”",
                    spiegazione:
                        "Gli 'anni ruggenti' furono un periodo di prosperità economica, crescita industriale e cambiamento sociale negli Stati Uniti degli anni '20. La società americana conobbe una fervida attività culturale, con lo sviluppo del jazz, del cinema e della letteratura, ma anche un'eccessiva speculazione finanziaria e un aumento delle disuguaglianze sociali.",
                },
                {
                    titolo:
                        "La fine di un’epoca: il crollo di Wall Street e la grande depressione",
                    spiegazione:
                        "Il crollo di Wall Street del 1929 segnò l'inizio della Grande Depressione, la più grave crisi economica del XX secolo. Il crollo dei mercati finanziari portò a un collasso del sistema bancario, a una disoccupazione di massa e a una contrazione drammatica della produzione industriale, con conseguenze devastanti per l'economia globale.",
                },
                {
                    titolo: "Il New Deal di Roosevelt",
                    spiegazione:
                        "Il New Deal fu un programma di riforme e interventi governativi introdotto dal presidente americano Franklin D. Roosevelt per affrontare la Grande Depressione. Il New Deal comprendeva una serie di misure per stimolare l'economia, creare posti di lavoro, proteggere i risparmi dei cittadini, riformare il sistema finanziario e fornire assistenza sociale ai più bisognosi.",
                },
                {
                    titolo: "L’interventismo dello stato",
                    spiegazione:
                        "Il New Deal segnò un cambiamento significativo nel ruolo dello Stato nell'economia americana, con un maggiore intervento governativo per stabilizzare l'economia e proteggere i cittadini dalla povertà e dalla disoccupazione. Il governo federale assunse un ruolo attivo nel regolare l'attività economica, nel promuovere la riforma sociale e nel fornire servizi pubblici.",
                },
            ],
            img: "src/assets/storia/storia_8.jpg",
        },
        {
            capitolo: 9,
            titolo: "Il regime di Stalin in Unione Sovietica",
            argomenti: [
                {
                    titolo: "La nascita dell’Unione Sovietica",
                    spiegazione:
                        "L'Unione Sovietica nacque nel 1922 dalla fusione delle repubbliche socialiste russe, ucraine, bielorusse e transcaucasiche. La fondazione dell'URSS segnò l'inizio di un nuovo ordine politico, economico e sociale basato sull'ideologia comunista e sull'egemonia del Partito Comunista guidato da Lenin e poi da Stalin.",
                },
                {
                    titolo: "L’ascesa al potere di Stalin",
                    spiegazione:
                        "Dopo la morte di Lenin nel 1924, Stalin emerse come il leader incontrastato del Partito Comunista e dell'Unione Sovietica. Utilizzando tattiche politiche astute e spesso brutali, Stalin consolidò il suo potere, eliminando gli oppositori politici, controllando l'apparato del partito e instaurando un regime di terrore e repressione.",
                },
                {
                    titolo: "La collettivizzazione",
                    spiegazione:
                        "La collettivizzazione agricola fu una politica economica introdotta da Stalin per trasformare le piccole proprietà agricole in coltivazioni collettive controllate dallo Stato. Questa politica portò a una rapida industrializzazione dell'Unione Sovietica, ma causò anche carestie, disordini e milioni di morti.",
                },
                {
                    titolo: "L’industria ed i piani quinquennali",
                    spiegazione:
                        "Per modernizzare e industrializzare l'Unione Sovietica, Stalin introdusse i piani quinquennali, una serie di programmi economici pianificati centralmente per sviluppare l'industria pesante, le infrastrutture e le risorse naturali del paese. Questi piani portarono a una rapida crescita economica, ma anche a gravi violazioni dei diritti umani e a una repressione politica.",
                },
                {
                    titolo: "Le connotazioni del regime sovietico",
                    spiegazione:
                        "Il regime di Stalin in Unione Sovietica fu caratterizzato da un controllo totalitario dello Stato sulla società e l'economia, con un culto della personalità intorno a Stalin, la censura dei media, la repressione delle opposizioni politiche e la sistematica violazione dei diritti umani. Questo regime portò a un'espansione del potere statale e a una limitazione delle libertà individuali.",
                },
                {
                    titolo: "Il terrore staliniano",
                    spiegazione:
                        "Il terrore staliniano fu una campagna di repressione politica e sociale attuata dal regime di Stalin per eliminare gli oppositori politici e consolidare il suo potere. Questa campagna comprendeva arresti di massa, processi politici farsa, deportazioni, lavori forzati nei gulag e esecuzioni sommarie, con milioni di vittime.",
                },
            ],
            img: "src/assets/storia/storia_9.jpg",
        },
        {
            capitolo: 10,
            titolo: "La Germania nazista",
            argomenti: [
                {
                    titolo: "L’epilogo della Repubblica di Weimar",
                    spiegazione:
                        "La Repubblica di Weimar, nata nel 1919 in seguito alla sconfitta tedesca nella Prima Guerra Mondiale, si concluse con l'ascesa di Adolf Hitler al potere nel 1933. Caratterizzata da instabilità politica, crisi economica e violenza politica, la Repubblica di Weimar fu indebolita dalla polarizzazione ideologica e dalle difficoltà socio-economiche.",
                },
                {
                    titolo: "La scalata al potere di Hitler",
                    spiegazione:
                        "Adolf Hitler salì al potere attraverso una combinazione di abilità politica, manipolazione mediatica e repressione violenta. Utilizzando il malcontento sociale, il nazionalismo e l'antisemitismo, Hitler consolidò il suo potere eliminando gli oppositori politici e creando un regime totalitario.",
                },
                {
                    titolo: "I primi provvedimenti del regime",
                    spiegazione:
                        "Una volta salito al potere, il regime nazista intraprese una serie di provvedimenti per consolidare il controllo dello Stato e per perseguire la sua agenda ideologica. Questi provvedimenti includevano la soppressione delle libertà civili, la creazione di organizzazioni paramilitari come le SS e la Gestapo, e la promulgazione di leggi discriminatorie contro gli ebrei.",
                },
                {
                    titolo: "La dittatura totalitaria del Terzo Reich",
                    spiegazione:
                        "Il Terzo Reich di Hitler fu un regime totalitario caratterizzato dalla concentrazione del potere nelle mani del Führer, dalla propaganda di massa, dalla repressione politica e dalla persecuzione delle minoranze. La dittatura nazista controllava ogni aspetto della vita pubblica e privata, imponendo l'adesione al partito nazista e la conformità ideologica.",
                },
                {
                    titolo: "L’antisemitismo",
                    spiegazione:
                        "L'antisemitismo fu un pilastro fondamentale dell'ideologia nazista e della politica del Terzo Reich. Basato su pregiudizi storici, culturali e razziali, l'antisemitismo nazista portò alla persecuzione sistematica degli ebrei, culminando nell'Olocausto, durante il quale milioni di ebrei furono perseguitati, imprigionati e uccisi nei campi di concentramento.",
                },
            ],
            img: "src/assets/storia/storia_10.jpg",
        },
        {
            capitolo: 11,
            titolo: "Verso la catastrofe",
            argomenti: [
                {
                    titolo: "Il riarmo della Germania nazista",
                    spiegazione:
                        "Dopo la presa del potere da parte di Hitler, la Germania nazista iniziò un programma di riarmo segreto e una politica di espansione territoriale. Queste azioni infransero i trattati internazionali e alimentarono le tensioni con le potenze alleate.",
                },
                {
                    titolo: "La guerra civile in Spagna",
                    spiegazione:
                        "La guerra civile spagnola fu un conflitto politico e ideologico che scoppiò nel 1936 e durò fino al 1939. Oppositori repubblicani e franchisti si scontrarono per il controllo del governo spagnolo, con il coinvolgimento di forze esterne come Italia e Germania nazista in sostegno ai franchisti e dell'Unione Sovietica in sostegno ai repubblicani.",
                },
                {
                    titolo: "Le premesse di un nuovo conflitto",
                    spiegazione:
                        "Gli eventi degli anni '30, tra cui la politica aggressiva di Hitler, il riarmo tedesco, le tensioni internazionali e i conflitti regionali come la guerra civile spagnola, crearono le premesse per lo scoppio di un nuovo conflitto mondiale. Il mondo si trovava sull'orlo della catastrofe.",
                },
            ],
            img: "src/assets/storia/storia_11.jpg",
        },
        {
            capitolo: 12,
            titolo: "La seconda guerra mondiale",
            argomenti: [
                {
                    titolo: "L’invasione della Polonia e la disfatta della Francia",
                    spiegazione:
                        "L'invasione della Polonia da parte della Germania nazista nel settembre 1939 segnò l'inizio della Seconda Guerra Mondiale. La rapida avanzata tedesca, resa possibile dalla tattica della Blitzkrieg, portò alla disfatta della Polonia e successivamente alla caduta della Francia nel 1940.",
                },
                {
                    titolo: "Le prime difficoltà per l’Asse",
                    spiegazione:
                        "Nonostante le vittorie iniziali, l'Asse (Germania, Italia e Giappone) iniziò a incontrare difficoltà durante la guerra. L'Inghilterra resistette ai bombardamenti tedeschi durante la Battaglia d'Inghilterra, mentre la Germania si scontrò con la resistenza sovietica durante l'invasione dell'Unione Sovietica.",
                },
                {
                    titolo: "L’Operazione Barbarossa contro l’Unione Sovietica",
                    spiegazione:
                        "L'Operazione Barbarossa, l'invasione nazista dell'Unione Sovietica avviata nel giugno 1941, fu un momento cruciale della Seconda Guerra Mondiale. Nonostante iniziali successi, l'offensiva tedesca si arenò davanti a Mosca e portò a una guerra di logoramento che indebolì entrambe le forze.",
                },
                {
                    titolo:
                        "L’attacco giapponese a Pearl Harbor e l’ingresso in guerra degli USA",
                    spiegazione:
                        "L'attacco giapponese a Pearl Harbor il 7 dicembre 1941 segnò l'entrata degli Stati Uniti nella Seconda Guerra Mondiale. Questo attacco portò gli Stati Uniti a dichiarare guerra al Giappone e alle potenze dell'Asse, trasformando il conflitto in una guerra mondiale su vasta scala.",
                },
                {
                    titolo: "La svolta nel conflitto",
                    spiegazione:
                        "La svolta nel conflitto avvenne nel 1942-1943 con le vittorie alleate in Nord Africa e la sconfitta delle forze dell'Asse a Stalingrado. Questi eventi segnarono un punto di svolta nella guerra, ribaltando il momentum a favore degli Alleati.",
                },
                {
                    titolo: "La caduta del fascismo. L’armistizio e la guerra in Italia",
                    spiegazione:
                        "La caduta del fascismo in Italia avvenne nel 1943 con l'arresto di Mussolini e l'instaurazione di un governo provvisorio. L'armistizio dell'8 settembre 1943 portò all'occupazione tedesca dell'Italia settentrionale e allo scoppio di una guerra civile tra partigiani e truppe tedesche.",
                },
                {
                    titolo: "Dallo sbarco in Normandia alla sconfitta tedesca",
                    spiegazione:
                        "Lo sbarco in Normandia del giugno 1944 segnò l'inizio dell'invasione alleata dell'Europa occidentale. Questa operazione, conosciuta come D-Day, portò alla liberazione della Francia e all'avanzata degli Alleati in Europa, culminando nella sconfitta tedesca nel maggio 1945.",
                },
                {
                    titolo: "La bomba atomica e la resa del Giappone",
                    spiegazione:
                        "L'uso delle bombe atomiche su Hiroshima e Nagasaki da parte degli Stati Uniti nel agosto 1945 portò alla resa del Giappone, segnando la fine della Seconda Guerra Mondiale nel teatro del Pacifico. Questi eventi ebbero un impatto duraturo sulla storia mondiale e sulle politiche di sicurezza internazionale.",
                },
            ],
            img: "src/assets/storia/storia_12.jpg",
        },
        {
            capitolo: 13,
            titolo: "L’Italia spaccata in due",
            argomenti: [
                {
                    titolo: "Il Neofascismo di Salò",
                    spiegazione:
                        "Il periodo della Repubblica Sociale Italiana, nota come Neofascismo di Salò, fu caratterizzato dalla dittatura fascista nella parte settentrionale dell'Italia, sotto il controllo di Mussolini e dell'Asse. Questo periodo vide la continuazione della repressione politica e delle violazioni dei diritti umani.",
                },
                {
                    titolo:
                        "La ricostituzione dei partiti antifascisti e il movimento partigiano",
                    spiegazione:
                        "Dopo la caduta del regime fascista, in Italia si assistette alla ricostituzione dei partiti antifascisti e all'organizzazione del movimento partigiano. Queste forze combatterono per la liberazione del Paese dall'occupazione tedesca e per l'instaurazione di un nuovo governo democratico.",
                },
                {
                    titolo: "Le operazioni militari e la liberazione",
                    spiegazione:
                        "Le operazioni militari degli Alleati, supportate dal movimento partigiano, portarono alla liberazione dell'Italia dall'occupazione nazista. Dalle regioni settentrionali a quelle meridionali, le truppe alleate avanzarono liberando città e combattendo le forze tedesche in ritirata.",
                },
                {
                    titolo: "L’Italia occupata",
                    spiegazione:
                        "Dopo l'armistizio dell'8 settembre 1943, l'Italia fu occupata dalle forze tedesche nella parte settentrionale e centrale del Paese, mentre la parte meridionale passò sotto il controllo delle forze alleate. Questo periodo fu caratterizzato da repressione, resistenza e lotta per la liberazione.",
                },
            ],
            img: "src/assets/storia/storia_13.jpg",
        },
        {
            capitolo: 14,
            titolo: "Un mondo diviso in due blocchi",
            argomenti: [
                {
                    titolo: "Le nuove organizzazioni mondiali",
                    spiegazione:
                        "Dopo la Seconda Guerra Mondiale, emersero nuove organizzazioni internazionali come le Nazioni Unite e il Fondo Monetario Internazionale, che cercarono di promuovere la cooperazione e la pace tra le nazioni.",
                },
                {
                    titolo: "La contrapposizione USA/URSS",
                    spiegazione:
                        "La contrapposizione tra Stati Uniti e Unione Sovietica divenne la caratteristica dominante della politica mondiale dopo la Seconda Guerra Mondiale. Questo confronto, noto come Guerra Fredda, si manifestò attraverso competizione politica, economica e militare su scala globale.",
                },
                {
                    titolo: "La formazione dei due blocchi",
                    spiegazione:
                        "Durante la Guerra Fredda, il mondo si divise in due blocchi contrapposti: il blocco occidentale guidato dagli Stati Uniti e il blocco orientale guidato dall'Unione Sovietica. Questi due blocchi si scontrarono su questioni ideologiche, economiche e territoriali.",
                },
                {
                    titolo: "Le due Germanie",
                    spiegazione:
                        "La divisione della Germania in due stati separati, la Repubblica Federale di Germania (Ovest) e la Repubblica Democratica Tedesca (Est), rappresentò una delle manifestazioni più evidenti della divisione del mondo durante la Guerra Fredda.",
                },
                {
                    titolo: "La decolonizzazione",
                    spiegazione:
                        "Dopo la Seconda Guerra Mondiale, molte colonie in Africa, Asia e America Latina ottennero l'indipendenza dai loro colonizzatori europei. Questo processo, noto come decolonizzazione, portò a profondi cambiamenti politici, sociali ed economici nel mondo.",
                },
            ],
            img: "src/assets/storia/storia_14.jpg",
        },
        {
            capitolo: 15,
            titolo: "Gli anni della “coesistenza competitiva” e il Sessantotto",
            argomenti: [
                {
                    titolo: "Chruscev e gli equilibri internazionali",
                    spiegazione:
                        "Il periodo della coesistenza competitiva vide una serie di negoziati e confronti tra Stati Uniti e Unione Sovietica sotto la guida di leader come Nikita Chruscev. Questi negoziati spesso portavano a momenti di tensione e crisi, come la Crisi dei missili di Cuba.",
                },
                {
                    titolo: "La nascita della CEE",
                    spiegazione:
                        "La Comunità Economica Europea (CEE), fondata nel 1957, fu un'organizzazione che mirava a promuovere la cooperazione economica tra i suoi membri. La CEE segnò un passo importante verso l'integrazione europea e contribuì alla stabilità e alla prosperità del continente.",
                },
                {
                    titolo: "L’America latina e la rivoluzione cubana",
                    spiegazione:
                        "L'America latina visse un periodo di turbolenza politica e sociale negli anni '60, con movimenti di protesta e rivoluzioni contro regimi autoritari e oligarchici. La rivoluzione cubana, guidata da Fidel Castro, ebbe un impatto significativo sulla politica regionale e internazionale.",
                },
                {
                    titolo: "Gli USA di Kennedy",
                    spiegazione:
                        "L'amministrazione Kennedy negli Stati Uniti fu caratterizzata da una politica estera attiva e dalla promozione dei diritti civili. Kennedy affrontò sfide come la Crisi dei missili di Cuba e sostenne movimenti per i diritti civili negli Stati Uniti.",
                },
                {
                    titolo: "La guerra del Vietnam",
                    spiegazione:
                        "La guerra del Vietnam fu uno dei conflitti più divisivi e traumatici degli anni '60 e '70. Coinvolgendo gli Stati Uniti come parte della loro politica di contenimento del comunismo, la guerra vide il coinvolgimento di forze vietnamite comuniste e la resistenza da parte dei ribelli vietnamiti del Sud.",
                },
            ],
            img: "src/assets/storia/storia_15.jpg",
        },
        {
            capitolo: 16,
            titolo: "L’Italia dalla ricostruzione al Sessantotto",
            argomenti: [
                {
                    titolo: "Il Paese all’indomani della guerra",
                    spiegazione:
                        "Dopo la Seconda Guerra Mondiale, l'Italia si trovò di fronte a enormi sfide economiche, sociali e politiche. La ricostruzione post-bellica portò a una rinascita economica, ma anche a tensioni sociali e politiche legate alla lotta tra forze di sinistra e di destra.",
                },
                {
                    titolo: "La rinascita dei partiti",
                    spiegazione:
                        "Dopo la caduta del regime fascista, in Italia si assistette alla rinascita dei partiti politici, inclusi quelli di ispirazione liberale, socialista e comunista. Questi partiti si impegnarono nella costruzione di un nuovo assetto politico e nella difesa dei valori democratici.",
                },
                {
                    titolo: "L’avvio della stagione democratica",
                    spiegazione:
                        "Con l'approvazione della Costituzione nel 1948, l'Italia avviò una stagione democratica caratterizzata dalla pluralità politica, dal rispetto dei diritti civili e dalla partecipazione popolare. Questo periodo segnò una svolta importante nella storia politica del Paese.",
                },
                {
                    titolo: "La Costituzione e le istituzioni repubblicane",
                    spiegazione:
                        "La Costituzione Italiana del 1948 stabilì i principi fondamentali dello Stato italiano, tra cui la separazione dei poteri, il federalismo, e il riconoscimento dei diritti fondamentali dei cittadini. Questo documento rimane il pilastro della democrazia italiana.",
                },
                {
                    titolo: "Il miracolo economico",
                    spiegazione:
                        "Negli anni '50 e '60, l'Italia visse un periodo di rapida crescita economica noto come il miracolo economico. Grazie a politiche di sviluppo industriale, investimenti pubblici e integrazione europea, l'Italia divenne una delle principali potenze economiche mondiali.",
                },
            ],
            img: "src/assets/storia/storia_16.jpg",
        },
    ],
};

const italiano = {
    nome: "Italiano",
    docente: "Giulia Montesi",
    argomenti: [
        {
            titolo: "Il Naturalismo francese: Emile Zola L’Inizio dell’Ammazzatoio",
            img: "src/assets/italiano/italiano_1.jpg",
        },
        {
            titolo: "Il Verismo",
            img: "src/assets/italiano/italiano_2.jpg",
        },
        {
            titolo: "Giovanni Verga",
            argomenti: [
                {
                    titolo: "Inizio e conclusione di Nedda",
                    spiegazione:
                        "Questo si riferisce all'inizio e alla conclusione del racconto 'Nedda' di Giovanni Verga. Il racconto narra la storia di una giovane donna di campagna che lotta contro le aspettative sociali e le difficoltà della vita rurale.",
                },
                {
                    titolo: "Rosso Malpelo",
                    spiegazione:
                        "Rosso Malpelo è uno dei racconti più famosi di Giovanni Verga. Narra la storia di un ragazzo emarginato e discriminato dalla società a causa del suo aspetto e della sua origine sociale. Il racconto esplora temi come l'ingiustizia sociale, la povertà e la crudeltà umana.",
                },
                {
                    titolo: "La roba",
                    spiegazione:
                        "La Roba è un romanzo di Giovanni Verga che descrive la lotta per il potere e il possesso in una comunità siciliana. Il termine 'roba' si riferisce alla proprietà, in particolare alla terra e ai beni materiali, che diventa oggetto di desiderio e conflitto tra i personaggi.",
                },
                {
                    titolo: "La Giornata di Gesualdo",
                    spiegazione:
                        "Questo si riferisce al racconto 'La Giornata di Gesualdo' di Giovanni Verga. Il racconto segue la giornata di un contadino siciliano di nome Gesualdo e riflette sulle sue esperienze, emozioni e relazioni all'interno della sua comunità.",
                },
                {
                    titolo: "La morte di Gesualdo",
                    spiegazione:
                        "Questo si riferisce alla morte del personaggio Gesualdo nel racconto omonimo di Giovanni Verga. La morte di Gesualdo rappresenta un momento significativo nel racconto, con implicazioni emotive e simboliche per la storia e i personaggi coinvolti.",
                },
                {
                    titolo: "La prefazione ai Malavoglia",
                    spiegazione:
                        "La prefazione ai Malavoglia è un'introduzione scritta da Giovanni Verga che precede il romanzo 'I Malavoglia'. In essa, Verga fornisce una panoramica sulla storia e i personaggi del romanzo, oltre a condividere le sue riflessioni sull'importanza della verità e della realtà nella narrativa.",
                },
                {
                    titolo: "L’inizio dei Malavoglia",
                    spiegazione:
                        "L'inizio dei Malavoglia si riferisce al primo capitolo del romanzo 'I Malavoglia' di Giovanni Verga. Questo capitolo stabilisce il contesto e presenta i personaggi principali della famiglia Malavoglia, situata in una piccola comunità di pescatori in Sicilia.",
                },
                {
                    titolo: "L’addio di ‘Ntoni",
                    spiegazione:
                        "L’addio di ‘Ntoni si riferisce a un momento chiave nel romanzo 'I Malavoglia' di Giovanni Verga. 'Ntoni' è uno dei membri della famiglia Malavoglia e il suo addio rappresenta un punto di svolta nella narrazione, con conseguenze significative per la famiglia e la comunità.",
                },
            ],
            img: "src/assets/italiano/italiano_3.jpeg",
        },
        {
            titolo: "La Scapigliatura",
            spiegazione:
                "La Scapigliatura è un movimento letterario e artistico che emerse in Italia nel XIX secolo. Si caratterizzava per il suo atteggiamento anticonformista e ribelle nei confronti della società e della cultura borghese dell'epoca.",
            img: "src/assets/italiano/italiano_4.jpg",
        },
        {
            titolo: "Giovanni Pascoli",
            argomenti: [
                {
                    titolo: "Il Fanciullino",
                    spiegazione:
                        "Il Fanciullino è una raccolta di poesie di Giovanni Pascoli che esplora il tema dell'infanzia e la perdita dell'innocenza. Le poesie riflettono sui ricordi dell'infanzia e sull'ingenuità della giovinezza.",
                },
                {
                    titolo: "Lavandare",
                    spiegazione:
                        "Lavandare è una poesia di Giovanni Pascoli che celebra il lavoro delle donne che lavano i panni nei fiumi. La poesia evoca immagini di semplicità e bellezza nella vita quotidiana.",
                },
                {
                    titolo: "X Agosto",
                    spiegazione:
                        "X Agosto è una poesia di Giovanni Pascoli dedicata al ricordo della morte tragica di suo padre, avvenuta nell'agosto del 1867. La poesia esplora il tema del lutto e della perdita.",
                },
                {
                    titolo: "Temporale",
                    spiegazione:
                        "Temporale è una poesia di Giovanni Pascoli che descrive l'atmosfera e le emozioni durante un temporale estivo. La poesia evoca sensazioni di ansia e meraviglia di fronte alla potenza della natura.",
                },
                {
                    titolo: "Novembre",
                    spiegazione:
                        "Novembre è una poesia di Giovanni Pascoli che riflette sull'autunno e sulle sue associazioni con la malinconia e la fine. La poesia evoca immagini di tristezza e desolazione.",
                },
                {
                    titolo: "Il lampo",
                    spiegazione:
                        "Il lampo è una poesia di Giovanni Pascoli che descrive l'esperienza di vedere un lampo nel cielo notturno. La poesia evoca sensazioni di meraviglia e incertezza di fronte alla brevità e all'imprevedibilità della vita.",
                },
            ],
            img: "src/assets/italiano/italiano_5.jpg",
        },
        {
            titolo: "Gabriele D’Annunzio",
            argomenti: [
                {
                    titolo: "Pastori",
                    spiegazione:
                        "Pastori è un'opera teatrale di Gabriele D'Annunzio che esplora temi di amore, passione e tradimento nella vita rurale italiana. La pièce è nota per la sua sensualità e la sua rappresentazione della natura.",
                },
            ],
            img: "src/assets/italiano/italiano_6.jpg",
        },
        {
            titolo: "Luigi Pirandello",
            argomenti: [
                {
                    titolo: "L’umorismo",
                    spiegazione:
                        "L’umorismo è una raccolta di racconti di Luigi Pirandello che esplorano il tema dell'assurdità e della contraddizione nella vita quotidiana. I racconti sono caratterizzati da situazioni comiche e paradossali.",
                },
                {
                    titolo: "La conclusione di Uno, nessuno, centomila",
                    spiegazione:
                        "La conclusione di Uno, nessuno, centomila è il momento in cui il protagonista, Vitangelo Moscarda, raggiunge una profonda consapevolezza di sé e delle sue molteplici identità. La conclusione riflette sui temi dell'identità e della percezione.",
                },
                {
                    titolo: "Il treno ha fischiato",
                    spiegazione:
                        "Il treno ha fischiato è un racconto di Luigi Pirandello che esplora il tema della ribellione individuale contro l'autorità e le convenzioni sociali. Il racconto riflette sul conflitto tra il desiderio di libertà e la paura delle conseguenze.",
                },
                {
                    titolo: "Ciaula scopre la luna",
                    spiegazione:
                        "Ciaula scopre la luna è un racconto di Luigi Pirandello che narra la storia di un ragazzo pastore che sogna di vedere la luna per la prima volta. Il racconto esplora il tema dell'aspirazione alla bellezza e alla libertà.",
                },
                {
                    titolo: "Il Fu Mattia Pascal",
                    spiegazione:
                        "Il Fu Mattia Pascal è un romanzo di Luigi Pirandello che segue le vicende di Mattia Pascal, un uomo che decide di cambiare identità dopo essere stato dato per morto. Il romanzo esplora temi di identità, libertà e alienazione.",
                },
                {
                    titolo: "La patente",
                    spiegazione:
                        "La patente è un racconto di Luigi Pirandello che racconta la storia di un uomo che si mette nei guai dopo aver ottenuto una patente di guida. Il racconto esplora il tema della responsabilità e delle conseguenze delle proprie azioni.",
                },
            ],
            img: "src/assets/italiano/italiano_7.jpg",
        },
        {
            titolo: "Italo Svevo",
            argomenti: [
                {
                    titolo: "La Coscienza di Zeno",
                    spiegazione:
                        "La Coscienza di Zeno è un romanzo di Italo Svevo che narra le vicende di Zeno Cosini, un uomo nevrotico che cerca di smettere di fumare attraverso una serie di tentativi falliti. Il romanzo esplora temi di psicoanalisi, memoria e identità.",
                },
            ],
            img: "src/assets/italiano/italiano_8.jpg",
        },
        {
            titolo: "Giuseppe Ungaretti",
            argomenti: [
                {
                    titolo: "In memoria",
                    spiegazione:
                        "In memoria è una poesia di Giuseppe Ungaretti che riflette sul tema della guerra e del sacrificio. La poesia evoca sentimenti di dolore e commozione di fronte alla perdita di vite umane.",
                },
                {
                    titolo: "Veglia",
                    spiegazione:
                        "Veglia è una poesia di Giuseppe Ungaretti che esplora il tema della solitudine e della notte. La poesia cattura l'atmosfera silenziosa e misteriosa della notte, invitando il lettore a riflettere sulla propria esistenza.",
                },
                {
                    titolo: "Soldati",
                    spiegazione:
                        "Soldati è una poesia di Giuseppe Ungaretti che descrive l'esperienza dei soldati durante la guerra. La poesia cattura l'angoscia e il terrore della guerra, oltre alla fragilità della vita umana di fronte alla violenza e alla distruzione.",
                },
                {
                    titolo: "Fratelli",
                    spiegazione:
                        "Fratelli è una poesia di Giuseppe Ungaretti che riflette sul tema dell'amicizia e della fratellanza. La poesia esplora i legami profondi tra gli uomini e l'importanza della solidarietà nelle situazioni di crisi e di guerra.",
                },
                {
                    titolo: "San Martino del Carso",
                    spiegazione:
                        "San Martino del Carso è una poesia di Giuseppe Ungaretti che commemora i soldati caduti durante la Prima Guerra Mondiale. La poesia evoca immagini di desolazione e morte, riflettendo sulla tragedia della guerra e sul sacrificio dei giovani soldati.",
                },
                {
                    titolo: "Mattina",
                    spiegazione:
                        "Mattina è una poesia di Giuseppe Ungaretti che celebra la bellezza e la rinascita della natura. La poesia evoca immagini di luce e speranza, invitando il lettore a contemplare la meraviglia del nuovo giorno.",
                },
                {
                    titolo: "Natale",
                    spiegazione:
                        "Natale è una poesia di Giuseppe Ungaretti che riflette sul significato del Natale e sulla sua importanza nella tradizione cristiana. La poesia evoca sentimenti di gioia e spiritualità, celebrando la nascita di Gesù Cristo.",
                },
            ],
            img: "src/assets/italiano/italiano_10.jpg",
        },
        {
            titolo: "Salvatore Quasimodo",
            argomenti: [
                {
                    titolo: "Ed è subito sera",
                    spiegazione:
                        "Ed è subito sera è una poesia di Salvatore Quasimodo che riflette sul tema dell'effimero e della transitorietà della vita. La poesia evoca immagini di tramonto e oscurità, invitando il lettore a riflettere sulla brevità dell'esistenza umana.",
                },
                {
                    titolo: "Milano, agosto 1943",
                    spiegazione:
                        "Milano, agosto 1943 è una poesia di Salvatore Quasimodo che ricorda i bombardamenti su Milano durante la Seconda Guerra Mondiale. La poesia cattura l'orrore e la distruzione della guerra, oltre alla resilienza e alla speranza del popolo milanese.",
                },
                {
                    titolo: "Alle fronde dei salici",
                    spiegazione:
                        "Alle fronde dei salici è una poesia di Salvatore Quasimodo che celebra la bellezza e la quiete della natura. La poesia evoca immagini di pace e serenità, offrendo un momento di riflessione e contemplazione.",
                },
                {
                    titolo: "Uomo del mio tempo",
                    spiegazione:
                        "Uomo del mio tempo è una poesia di Salvatore Quasimodo che riflette sul tema dell'alienazione e della solitudine nell'era moderna. La poesia esplora il senso di disorientamento e smarrimento dell'individuo nella società contemporanea.",
                },
            ],
            img: "src/assets/italiano/italiano_11.jpg",
        },
        {
            titolo: "Eugenio Montale",
            argomenti: [
                {
                    titolo: "Non chiederci la parola",
                    spiegazione:
                        "Non chiederci la parola è una poesia di Eugenio Montale che riflette sul tema della comunicazione e del silenzio. La poesia evoca immagini di sospensione e mistero, invitando il lettore a riflettere sul significato del non detto.",
                },
                {
                    titolo: "Meriggiare pallido e assorto",
                    spiegazione:
                        "Meriggiare pallido e assorto è una poesia di Eugenio Montale che celebra la bellezza e la quiete del meriggio. La poesia evoca immagini di pace e serenità, offrendo un momento di contemplazione e riflessione.",
                },
                {
                    titolo: "Spesso il male di vivere ho incontrato",
                    spiegazione:
                        "Spesso il male di vivere ho incontrato è una poesia di Eugenio Montale che riflette sul tema del dolore e della sofferenza. La poesia esplora il senso di disillusione e smarrimento di fronte alle difficoltà della vita.",
                },
            ],
            img: "src/assets/italiano/italiano_12.jpg",
        },
        {
            titolo: "Primo Levi",
            argomenti: [
                {
                    titolo: "Se questo è un uomo",
                    spiegazione:
                        "Se questo è un uomo è un libro di Primo Levi che narra la sua esperienza nei campi di concentramento durante l'Olocausto. Il libro riflette sul tema della sopravvivenza, della dignità umana e del male assoluto.",
                },
            ],
            img: "src/assets/italiano/italiano_13.jpg",
        },
        {
            titolo: "Italo Calvino",
            argomenti: [
                {
                    titolo: "Cosimo sugli alberi",
                    spiegazione:
                        "Cosimo sugli alberi è un romanzo di Italo Calvino che narra la storia di un giovane aristocratico che decide di trascorrere la sua vita sugli alberi. Il romanzo esplora il tema della libertà individuale e dell'immaginazione creativa.",
                },
            ],
            img: "src/assets/italiano/italiano_14.jpg",
        },
    ],
};

const educazioneCivica = {
    nome: "IO NON PARTECIPO ALLA GUERRA, E’LA GUERRA CHE PARTECIPA A ME",
    materia: "Educazione Civica",
    argomenti: [
        {
            capitolo: 0,
            titolo: "Manipolazione dell'Informazione e Propaganda",
            paragrafi: [
                {
                    id: 1,
                    testo: "Cari colleghi e amici, "
                },
                {
                    id: 2,
                    testo: "Mi trovo qui oggi per discutere una questione di estrema importanza: la possibile partecipazione del nostro paese a un conflitto armato. Voglio iniziare con una citazione di Jurij Levitanskij: 'Io non partecipo alla guerra, è la guerra che partecipa a me.' Questa affermazione racchiude una verità profonda: la guerra non è un evento isolato che coinvolge solo i soldati al fronte, ma una realtà che permea ogni aspetto della nostra vita e della nostra società."
                },
            ],
            img: "",
        },
        {
            capitolo: 1,
            titolo: "Manipolazione dell'Informazione e Propaganda",
            paragrafi: [
                {
                    id: 1,
                    testo:
                        "la propaganda è un mezzo volto a conquistare il favore e l'adesione di un pubblico sempre più vasto mediante ogni mezzo idoneo a influire sulla psicologia collettiva e sul comportamento delle masse. Questo strumento viene ampiamente utilizzato specialmente in politica e può avere un ruolo manipolatorio sull’opinione pubblica causando estremismi e polarizzazione della società."
                },
                {
                    id: 2,
                    testo: "Questo dà vita a quello che George Orwell, nel suo celebre romanzo 'La fattoria degli animali', descrive come un sistema in cui la propaganda e la manipolazione dell'informazione sono utilizzate per mantenere il controllo e giustificare le azioni dei leader."
                },
                {
                    id: 3,
                    testo:
                        "L’esempio più eclatante ai giorni d’oggi di una comunicazione che giustifica l'intervento militare è rappresentato da quello che sta succedendo in Ucraina e in Palestina."
                },
                {
                    id: 4,
                    testo:
                        "Questo tipo di manipolazione crea un clima di paura e odio, rendendo la guerra non solo accettabile ma necessaria agli occhi del pubblico. Dobbiamo essere consapevoli di queste dinamiche e resistere alla tentazione di accettare passivamente le informazioni che ci vengono fornite."
                },
            ],
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kitchener-leete.jpg/220px-Kitchener-leete.jpg",
        },
        {
            capitolo: 2,
            titolo: "L'Era della Globalizzazione dell'Informazione",
            paragrafi: [
                {
                    id: 1,
                    testo: "Oggi una guerra non è combattuta solamente con le armi, viviamo in un'era in cui internet, i social media e i media online hanno rivoluzionato il mondo. Tutti siamo sui social media, questo enorme afflusso di persone rende i social media ed internet il posto migliore per politici o chiunque altro per manipolare, disinformare ed pubblicizzare le loro strategie propagandistiche, giuste o sbagliate che siano. La capacità di influenzare l'opinione pubblica attraverso la comunicazione è diventata un'arma strategica."
                },
                {
                    id: 2,
                    testo: "Le fake news e la disinformazione possono propagarsi rapidamente, creando confusione e fomentando divisioni. È essenziale che impariamo a navigare nel vasto oceano di informazioni digitali con spirito critico. Dobbiamo promuovere l'alfabetizzazione mediatica e incoraggiare i nostri cittadini a verificare le fonti e a riflettere sulle notizie che leggono."
                }
            ],
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxziD_nKcUf22z7wza6eNU_LZ-N1YUq9wuxemq6vd3Q&s",
        },
        {
            capitolo: 3,
            titolo: " L'Impatto della Tecnologia",
            paragrafi: [
                {
                    id: 1,
                    testo: "Il progresso di nuove tecnologie ci rende responsabili di come le utilizziamo, la tecnologia ha cambiato il modo in cui percepiamo e facciamo la guerra. La tecnologia rappresenta il progresso, ed il progresso non va fermato, ma dovrebbe essere regolamentato in modo da ridurre al minimo l’utilizzo improprio di queste tecnologie, che possono essere straordinariamente utili per la nostra vita quanto pericolose se utilizzate impropriamente."
                },
                {
                    id: 2,
                    testo: "Un esempio di un arma a doppio taglio sono le criptovalute, delle monete completamente decentralizzate grazie all’utilizzo della blockchain. Il vantaggio di questa tecnologia è proprio questa decentralizzazione rispetto ad enti privati e governativi come delle banche o dei governi, il lato negativo di questa tecnologia è la difficile identificazione di chi ha fatto una transazione."

                },
                {
                    id: 3,
                    testo: "Questo perché l'identità di chi fa una transazione non viene esplicitata o regolamentata da un ente centrale come una banca, anche se tutte le transazioni sono visibili a tutti, non è possibile risalire esattamente a chi ha fatto una transazione."

                },
                {
                    id: 4,
                    testo: "Questo rende le criptovalute un ottimo strumento per attività criminali organizzate e per finanziare operazioni militari illegali. Come ogni tecnologia che porta una rivoluzione positiva presenta dei limiti e dei pericoli se utilizzata impropriamente, è nostro dovere formare le generazioni a venire sul corretto utilizzo di queste tecnologie, la stessa cosa riguardo l’intelligenza artificiale, diffondendo consapevolezza e responsabilità."

                }
            ],
            img: "https://www.telefonica.com/en/wp-content/uploads/sites/5/2022/06/Imagen1.jpg?w=1224&h=673&crop=1",
        },
        {
            capitolo: 4,
            titolo: " Il Consenso e la Giustizia",
            paragrafi: [
                {
                    id: 1,
                    testo: "Il consenso è un principio fondamentale in una società democratica. Nessuna decisione di tale gravità, come quella di entrare in guerra, dovrebbe essere presa senza un ampio consenso da parte del popolo. È nostro dovere opporci alla guerra e lottare per far sì che quei diritti inviolabili che abbiamo ottenuto con fatica restino tali."
                },
                {
                    id: 2,
                    testo: "È necessario e fondamentale utilizzare il nostro diritto di voto per fare in modo che sbagli che sono avvenuti nel passato non si ripetano mai più. Solo attraverso una partecipazione attiva e informata possiamo sperare di prevenire ulteriori conflitti e garantire che le decisioni prese riflettano veramente la volontà del popolo."

                },
                {
                    id: 3,
                    testo: "Inoltre, il sistema giudiziario deve garantire che le leggi internazionali siano rispettate e che i crimini di guerra non rimangano impuniti. Il processo penale deve essere uno strumento di giustizia e non di vendetta. Questo non solo per rendere giustizia alle vittime, ma anche per stabilire un precedente che dissuada futuri atti di barbarie e mantenga l'ordine internazionale"

                },
                {
                    id: 4,
                    testo: "L'importanza dello strumento della giustizia non può essere sottovalutata. La giustizia è il pilastro su cui si basa la fiducia dei cittadini nelle istituzioni. Quando le leggi vengono applicate in modo equo e trasparente, si crea un senso di sicurezza e ordine che è essenziale per il funzionamento armonioso di qualsiasi società. In contesti di guerra, la giustizia assume un ruolo ancora più cruciale. Garantire che coloro che commettono atrocità siano chiamati a rispondere delle loro azioni non solo fornisce un senso di risarcimento alle vittime, ma serve anche come deterrente per futuri crimini. Una giustizia forte e imparziale è la base su cui costruire una pace duratura e prevenire il ripetersi degli orrori del passato."

                }
            ],
            img: "https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/2023/02/12/Commenti%20e%20inchieste/ImmaginiWeb/Ritagli/AdobeStock_565100773-kGCH--1020x533@IlSole24Ore-Web.jpeg?r=1080x566",
        },
        {
            capitolo: 5,
            titolo: "Razzismo e Guerra",
            paragrafi: [
                {
                    id: 1,
                    testo: "La guerra può causare e alimentare razzismo e xenofobia, soprattutto all’interno dei territori in guerra ma all’estero. Purtroppo abbiamo molti esempi di questo, persone che scappano dal proprio paese come Russi ed Ucraini che molto spesso non vengono accolti nella società come meriterebbero. Ma vengono discriminati e visti agli occhi della popolazione più ignorante come portatori dell’ideologia del proprio paese. Quello che dovremmo ricordarci è che non dobbiamo associare ideologie politiche di stati totalitari come la Russia di Putin a tutti i russi. È nostro dovere combattere questi pregiudizi e promuovere una cultura di inclusione e rispetto per tutte le persone."
                }
            ],
            img: "https://images.ctfassets.net/qpn1gztbusu2/73F6n7qzizBCqbwbAPHTsP/470126d4b7f3fdf888b215816ea3d484/livre-audio-racisme.jpg?fm=jpg&w=3840&q=70",
        },
        {
            capitolo: 6,
            titolo: "Global Warming",
            paragrafi: [
                {
                    id: 1,
                    testo: "Infine, non possiamo ignorare l'impatto devastante che la guerra ha sull'ambiente. Le guerre moderne contribuiscono significativamente al riscaldamento globale attraverso l'inquinamento, la distruzione degli ecosistemi e l'uso intensivo di risorse. In un momento in cui il nostro pianeta è già gravemente minacciato dai cambiamenti climatici, dobbiamo cercare soluzioni pacifiche e sostenibili per risolvere i conflitti."
                }
            ],
            img: "https://s45727.pcdn.co/wp-content/uploads/2020/10/Climate-change-2-scaled-2.jpg.optimal.jpg",
        },
        {
            capitolo: 7,
            titolo: "Conclusione",
            paragrafi: [
                {
                    id: 1,
                    testo: "In conclusione la guerra non è mai stata una soluzione ai nostri problemi, come la storia ci ha insegnato in passato, il vero problema è la guerra. Io credo fermamente che la partecipazione a questo conflitto non sia giusta né necessaria. Dobbiamo trovare vie alternative per risolvere i nostri disaccordi e costruire un futuro migliore per tutti."
                },
                {
                    id: 2,
                    testo: "Grazie."
                }
            ],
            img: "",
        },
    ],
};

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    italiano,
    storia,
    educazioneCivica
};
