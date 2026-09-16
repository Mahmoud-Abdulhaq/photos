import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  ShieldAlert, 
  Zap, 
  Flame, 
  BookOpen, 
  Swords, 
  Quote, 
  Maximize2,
  Info,
  Eye
} from 'lucide-react';

interface Character {
  id: number;
  title: string;
  kanji: string;
  subtitle: string;
  grade: 'Special Grade' | 'Grade 1' | 'Special Grade 1' | 'Grade 2' | 'Grade 3' | 'Heavenly Restriction';
  category: 'Special Grade' | 'Jujutsu High' | 'Zenin Clan' | 'Curses & Wombs';
  affiliation: string;
  quote: string;
  overview: string;
  techniqueName: string;
  techniqueDetails: string[];
  domainName: string;
  domainKanji: string;
  domainDescription: string;
  keyFeats: string[];
  url: string;
  themeColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

const JJK_CHARACTERS: Character[] = [
  {
    id: 1,
    title: 'Satoru Gojo',
    kanji: '五条 悟',
    subtitle: 'The Strongest Sorcerer of the Modern Era',
    grade: 'Special Grade',
    category: 'Special Grade',
    affiliation: 'Tokyo Jujutsu High • Gojo Clan Head',
    quote: 'Throughout heaven and earth, I alone am the honored one.',
    overview: 'The undisputed apex of modern jujutsu sorcery and teacher to the next generation at Tokyo Jujutsu High. Born as the first sorcerer in 400 years to inherit both the Limitless technique and the Six Eyes, his very birth disrupted the global balance of power, forcing curses worldwide to grow drastically stronger just to counterbalance his existence. Behind his playful, arrogant, and carefree demeanor lies a fiercely protective mentor working to dismantle the corrupt jujutsu conservative council by nurturing strong, enlightened allies.',
    techniqueName: 'Limitless (無下限呪術) & Six Eyes (六眼)',
    techniqueDetails: [
      'Infinity (Neutral Limitless): Brings the mathematical concept of infinity into reality, slowing down incoming attacks infinitely so they can never make physical contact.',
      'Cursed Technique Lapse - Blue (蒼): Creates negative spatial distance, causing surrounding reality to rapidly collapse into a magnetic vacuum that pulls and crushes targets.',
      'Cursed Technique Reversal - Red (赫): Inverts cursed energy through reverse cursed technique to unleash a devastating kinetic repulsive shockwave twice as powerful as Blue.',
      'Hollow Technique - Purple (茈): Collides the divergent realities of Blue and Red to create an imaginary mass that obliterates all matter in its trajectory.',
      'Six Eyes (六眼): Grants supreme atomic-level perception of cursed energy, reducing his cursed energy expenditure to essentially zero and rendering stamina exhaustion impossible.'
    ],
    domainName: 'Unlimited Void',
    domainKanji: '無量空処 (Muryōkūsho)',
    domainDescription: 'Transports targets into the metaphysical center of infinity itself. The domain floods the victim’s consciousness with infinite thoughts, sights, and stimuli simultaneously, completely paralyzing brain function and leaving targets catatonic in seconds.',
    keyFeats: [
      'Single-handedly shifted the balance of the jujutsu world upon his birth.',
      'Overcame near-death against Toji Fushiguro by awakening Reverse Cursed Technique and Hollow Purple.',
      'Eliminated 1,000 transfigured humans in Shibuya within 0.2 seconds without killing civilian hostages.',
      'Fought the climactic Duel in Shinjuku against 20-Finger Sukuna and Mahoraga.'
    ],
    url: '/images/gojo.jpg',
    themeColor: 'hover:shadow-cyan-500/30 hover:border-cyan-500/60',
    badgeBg: 'bg-cyan-950/70',
    badgeBorder: 'border-cyan-500/50',
    badgeText: 'text-cyan-300',
  },
  {
    id: 2,
    title: 'Ryomen Sukuna',
    kanji: '両面 宿儺',
    subtitle: 'King of Curses & Heian Calamity',
    grade: 'Special Grade',
    category: 'Curses & Wombs',
    affiliation: 'Heian Era Calamity • Independent Entity',
    quote: 'Stand proud. You are strong.',
    overview: 'An ancient, four-armed warlord from the Golden Age of Jujutsu (the Heian Period) who crushed all sorcerers and allied factions that stood against him. Feared as a living natural disaster, his soul was divided into twenty indestructible cursed fingers after his death. Sadistic, hedonistic, and overwhelmingly arrogant, Sukuna recognizes only absolute strength, considering human lives, morality, and feelings to be insignificant trifles.',
    techniqueName: 'Shrine (御厨子 - Mizushi) & Divine Flame',
    techniqueDetails: [
      'Dismantle (解): Invisible, supersonic slashing blades typically used on inanimate objects and sorcerers without high cursed reinforcement.',
      'Cleave (捌): An adaptive slashing attack that adjusts its cursed energy output in real-time to match the target’s toughness, severing them in a single strike.',
      'Furnace / Divine Flame (竈 - Fuga): A primordial flame arrow summoned by chanting "Open," detonating in a massive thermobaric explosion that incinerates entire city blocks.',
      'World Cutting Slash: An advanced spatial cut developed by modeling Mahoraga’s adaptation, slicing through space, reality, and the fabric of the world itself.'
    ],
    domainName: 'Malevolent Shrine',
    domainKanji: '伏魔御廚子 (Fukuma Mizushi)',
    domainDescription: 'A divine open-barrier domain manifesting an eerie Buddhist-inspired shrine adorned with ox skulls. By refusing to close a barrier, Sukuna creates a binding vow expanding his lethal sure-hit radius up to 200 meters, relentlessly cleaving and dismantling every living and inanimate thing inside until reduced to dust.',
    keyFeats: [
      'Defeated all sorcerer leagues during the Golden Age of Jujutsu single-handedly.',
      'Annihilated the Special Grade Curse Jogo in Shibuya without taking a single scratch.',
      'Subdued the untamed divine general Mahoraga through an open-barrier domain and flame arrow.',
      'Took control of Megumi Fushiguro and slew Satoru Gojo in the Battle of Shinjuku.'
    ],
    url: '/images/sukuna.jpg',
    themeColor: 'hover:shadow-red-600/40 hover:border-red-600/70',
    badgeBg: 'bg-red-950/80',
    badgeBorder: 'border-red-600/60',
    badgeText: 'text-red-400',
  },
  {
    id: 3,
    title: 'Yuji Itadori',
    kanji: '虎杖 悠仁',
    subtitle: 'Tiger of West High & The Unyielding Vessel',
    grade: 'Grade 1',
    category: 'Jujutsu High',
    affiliation: 'Tokyo Jujutsu High (First Year)',
    quote: 'I don’t care about a reason. Even if I die, even if I am reincarnated, I will exorcise you.',
    overview: 'A high school athlete with superhuman physical prowess genetically engineered by Kenjaku to serve as the perfect vessel for Ryomen Sukuna. After swallowing Sukuna’s cursed finger to save Megumi, Yuji entered the world of sorcery with an unbreakable resolve to give people "proper deaths." Despite enduring tragic loss, brutal torment, and existential guilt, Yuji possesses an indomitable cog-like spirit, emerging as a frontline vanguard whose punches shake the very boundary of souls.',
    techniqueName: 'Soul Striking, Consecutive Black Flash & Blood Manipulation',
    techniqueDetails: [
      'Divergent Fist: A signature double-impact punch where his fist hits with raw superhuman strength followed by a delayed burst of heavy cursed energy.',
      'Black Flash Mastery (黒閃): A spatial distortion occurring when cursed energy applies within 0.000001 seconds of physical impact, boosting strike power to the exponent of 2.5. Holds the record for consecutive strikes.',
      'Soul Boundary Perception: Because two souls inhabited his body, Yuji can perceive the shape of souls, striking directly at the border between soul and body to diminish cursed energy control.',
      'Blood Manipulation & Reverse Cursed Technique: Inherited from consuming his Death Painting brothers, granting toxic blood weaponization and accelerated cellular healing.'
    ],
    domainName: 'Train Platform Barrier / Soul Domain',
    domainKanji: '領域展開 (Unnamed Station Domain)',
    domainDescription: 'A nostalgic mental and spiritual domain taking the form of his snowy hometown train station and suburban memory landscapes, locking Sukuna in an intimate confrontation where Yuji dismantles the line between soul and vessel.',
    keyFeats: [
      'Landed four consecutive Black Flashes in his first major battle against Hanami.',
      'Defeated the Special Grade curse Mahito in the depths of the Shibuya subways alongside Aoi Todo.',
      'Survived point-blank beatdowns from Sukuna and the Culling Game’s strongest players.',
      'Landed seven consecutive Black Flashes against Sukuna during the final battle in Shinjuku.'
    ],
    url: '/images/yuji.jpg',
    themeColor: 'hover:shadow-rose-600/35 hover:border-rose-500/60',
    badgeBg: 'bg-rose-950/70',
    badgeBorder: 'border-rose-500/50',
    badgeText: 'text-rose-300',
  },
  {
    id: 4,
    title: 'Megumi Fushiguro',
    kanji: '伏黒 恵',
    subtitle: 'Ten Shadows Prodigy & Zenin Clan Heir',
    grade: 'Grade 2',
    category: 'Jujutsu High',
    affiliation: 'Tokyo Jujutsu High (First Year) • Zenin Clan',
    quote: 'I will save people unequally. I want more good people to enjoy fairness, even if only a few.',
    overview: 'A brooding, highly analytical first-year sorcerer at Tokyo Jujutsu High and son of the infamous Toji Fushiguro. Abandoned as a child, he was taken under Satoru Gojo’s wing. He inherited the Zenin Clan’s most revered technique, the Ten Shadows, granting him the potential to rival the Limitless. Megumi is guided by a grounded moral compass: rather than acting as a heroic savior for everyone, he chooses to selectively rescue the few innocent souls who deserve mercy.',
    techniqueName: 'Ten Shadows Technique (十種影法術)',
    techniqueDetails: [
      'Shadow Familiar Summoning: Uses hand signs (mudras) to summon up to 10 distinct Shikigami from shadows as combat companions.',
      'Divine Dog (Totality): A vicious lupine predator fused from the deceased white and black dogs, capable of clawing through Special Grade curses.',
      'Nue & Max Elephant & Toad: Aerial shockwaves, crushing floods of pressurized water, and versatile tongue-grappling mobility.',
      'Mahoraga (魔虚羅): The untamed ultimate divine general. Possesses the eight-spoke Dharmachakra wheel of adaptation, enabling him to adapt to any offensive or defensive attack phenomenon.'
    ],
    domainName: 'Chimera Shadow Garden',
    domainKanji: '嵌合暗翳庭 (Kangō An\'eitei)',
    domainDescription: 'Floods the entire enclosed area with a deep, endless swamp of liquid shadow. Within this domain, Megumi can summon multiple copies of all his Shikigami simultaneously, submerge enemies into darkness to drown them, and hide himself inside shadow decoys.',
    keyFeats: [
      'Manifested an incomplete Domain Expansion to defeat the Yasohachi Bridge Special Grade Finger Bearer.',
      'Survived a lethal duel against Toji Fushiguro during the Shibuya incident.',
      'Outsmarted and defeated the veteran sorcerer Reggie Star in the Tokyo No. 1 Culling Game colony.',
      'Formed the foundation of Sukuna’s final strategy to overcome Gojo’s Infinity.'
    ],
    url: '/images/megumi.jpg',
    themeColor: 'hover:shadow-emerald-500/30 hover:border-emerald-500/60',
    badgeBg: 'bg-emerald-950/70',
    badgeBorder: 'border-emerald-500/50',
    badgeText: 'text-emerald-300',
  },
  {
    id: 5,
    title: 'Nobara Kugisaki',
    kanji: '釘崎 野薔薇',
    subtitle: 'Steel, Nails & Resonance',
    grade: 'Grade 3',
    category: 'Jujutsu High',
    affiliation: 'Tokyo Jujutsu High (First Year)',
    quote: 'What makes us so special? I love myself when I’m pretty and all dressed up! And I love myself when I’m strong!',
    overview: 'A sharp-tongued, fiercely independent first-year student from a rural village in the Tohoku countryside. Nobara moved to Tokyo to escape the suffocating conformity of small-town life and to reunite with her childhood friend Saori. Unapologetically confident, she refuses to compromise either her femininity or her combat ferocity, charging into battle with a metal hammer, iron nails, and straw voodoo dolls.',
    techniqueName: 'Straw Doll Technique (芻霊呪法 - Sūrei Juhō)',
    techniqueDetails: [
      'Resonance (共鳴り): Transmits cursed energy from an enemy’s severed part (blood, flesh, limbs) through a straw doll straight into the target’s core and soul, bypassing distance and defenses.',
      'Hairpin (簪): Drives cursed-energy-infused nails into walls, ground, or objects and detonates them like explosive shrapnel charges.',
      'Black Flash Synchronization: Landed a direct Black Flash alongside Yuji against the Death Painting brothers Kechizu and Eso.',
      'Soul Piercing: Her technique targets the metaphysical soul directly, making her one of the few natural counters to transfiguration curses like Mahito.'
    ],
    domainName: 'Direct Soul Resonance (Domain Counterpart)',
    domainKanji: '芻霊呪法・魂侵蝕',
    domainDescription: 'While she does not possess a barrier domain, her Straw Doll technique acts as an unavoidable remote sure-hit by weaponizing body parts directly against the soul across vast geographic distances.',
    keyFeats: [
      'Defeated the Special Grade curse womb Kechizu alongside Yuji with a coordinated Black Flash.',
      'Dealt crippling internal soul damage to Mahito’s true body through his decoy clone in Shibuya.',
      'Awakened from a coma in the final battle to strike Sukuna’s final finger with Resonance, freezing the King of Curses at the decisive moment.'
    ],
    url: '/images/nobara.jpg',
    themeColor: 'hover:shadow-pink-500/30 hover:border-pink-500/60',
    badgeBg: 'bg-pink-950/70',
    badgeBorder: 'border-pink-500/50',
    badgeText: 'text-pink-300',
  },
  {
    id: 6,
    title: 'Yuta Okkotsu',
    kanji: '乙骨 憂太',
    subtitle: 'Special Grade Prodigy & Queen of Curses',
    grade: 'Special Grade',
    category: 'Special Grade',
    affiliation: 'Tokyo Jujutsu High (Second Year)',
    quote: 'We’re in love. It’s pure love. I won’t let Gojo-sensei have to kill his best friend a second time.',
    overview: 'A second-year student at Tokyo Jujutsu High and one of only four recognized Special Grade sorcerers in Japan. A distant relative of Satoru Gojo through their shared ancestor Sugawara no Michizane, Yuta was cursed by the apparition of his childhood sweetheart Rika Orimoto after her fatal car crash. After freeing Rika’s human soul, she left behind a titanic cursed entity. Gentle and empathetic, Yuta will show boundless brutality to anyone who threatens his friends.',
    techniqueName: 'Copy (模倣) & Boundless Cursed Energy',
    techniqueDetails: [
      'Technique Copying: Can unconditionally copy, store, and utilize the cursed techniques of other sorcerers (Cursed Speech, Sky Manipulation, Dhruv’s Shikigami, Shrine, Charles’ Future Sight).',
      'Rika Manifestation: A colossal Shikigami serving as external cursed storage, wielding an arsenal of cursed weapons and replenishing Yuta’s reserves.',
      'Boundless Energy Reservoir: Possesses greater raw cursed energy volume than Satoru Gojo himself, cloaking his body and blade in a continuous shroud of crushing force.',
      'Reverse Cursed Healing Output: One of the rare sorcerers capable of outputting positive energy outward to heal mortal wounds or incinerate curses by touching them.'
    ],
    domainName: 'Authentic Mutual Love',
    domainKanji: '真贋相愛 (Shin\'ai Sōkoku)',
    domainDescription: 'A romantic, haunting domain filled with giant ribbons, knotted ropes, and an infinite graveyard of katanas embedded in the earth. Each sword holds a randomly copied cursed technique that Yuta can instantly wield with guaranteed sure-hit lethality.',
    keyFeats: [
      'Defeated Suguru Geto during the Night Parade of a Hundred Demons as a first-year novice.',
      'Conquered the Sendai Colony four-way stalemate single-handedly against ancient sorcerers and cursed spirits.',
      'Ambushed and decapitated Kenjaku in the Culling Game to avenge the sorcerer world.',
      'Entered Gojo’s body via Kenjaku’s copied brain-transplant technique to counter Sukuna’s Malevolent Shrine.'
    ],
    url: '/images/yuta.jpg',
    themeColor: 'hover:shadow-purple-500/35 hover:border-purple-500/60',
    badgeBg: 'bg-purple-950/70',
    badgeBorder: 'border-purple-500/50',
    badgeText: 'text-purple-300',
  },
  {
    id: 7,
    title: 'Kento Nanami',
    kanji: '七海 建人',
    subtitle: '7:3 Ratio Precision & The Model Adult',
    grade: 'Grade 1',
    category: 'Jujutsu High',
    affiliation: 'Tokyo Jujutsu High Alumnus • Former Salaryman',
    quote: 'Jujutsu sorcery is shit! Work is shit! So if both are equally shit, I decided to go with the one I was more suited for.',
    overview: 'A stoic, immaculate Grade 1 sorcerer who left the jujutsu world after the tragic death of his classmate Yu Haibara to work as a corporate financial broker. Realizing that money management provided no real meaning, he returned to sorcery with a solemn conviction: to protect innocent youths from being consumed by the horrors of the battlefield. He served as the grounded, reliable mentor figure Yuji needed most.',
    techniqueName: 'Ratio Technique (十劃呪法 - Jūkaku Juhō) & Overtime Vow',
    techniqueDetails: [
      'Forced 7:3 Weak Point: Divides the length of any chosen target into a 7:3 ratio. Hitting that exact point forcefully inflicts a critical blow, bypassing the enemy’s natural defense.',
      'Collapse (瓦落瓦落): Applies the 7:3 ratio to structural terrain and building foundations, causing catastrophic structural collapse to bury opponents.',
      'Overtime Binding Vow (時間外労働): Deliberately limits his cursed energy output to 80-90% during standard working hours (9 AM - 5 PM). After 5 PM, his cursed energy skyrockets to 120%.',
      'Consecutive Black Flash Record: Held the historic record of four consecutive Black Flashes in a single combat engagement before Yuji matched it.'
    ],
    domainName: 'Simple Domain & Ratio Strike',
    domainKanji: '簡易領域 (Simple Domain Defense)',
    domainDescription: 'While lacking an innate Domain Expansion, Nanami wields an iron-clad Simple Domain barrier technique that neutralizes enemy sure-hit effects, combined with precise cleaves from his blunt wrapped blade.',
    keyFeats: [
      'Survived Mahito’s initial soul transfiguration and escaped the underground sewer ambush.',
      'Taught Yuji Itadori fundamental cursed energy management and combat mentality.',
      'Withstood Dagon’s deadly Domain Expansion sure-hit swarm through pure stamina.',
      'Slaughtered dozens of transfigured humans in Shibuya while heavily burned before meeting his heroic end.'
    ],
    url: '/images/nanami.jpg',
    themeColor: 'hover:shadow-amber-500/30 hover:border-amber-500/60',
    badgeBg: 'bg-amber-950/70',
    badgeBorder: 'border-amber-500/50',
    badgeText: 'text-amber-300',
  },
  {
    id: 8,
    title: 'Toji Fushiguro',
    kanji: '伏黒 甚爾',
    subtitle: 'The Sorcerer Killer & Pure Physical Apex',
    grade: 'Heavenly Restriction',
    category: 'Zenin Clan',
    affiliation: 'Ex-Zenin Clan • Freelance Assassin',
    quote: 'Did you think a monkey without cursed energy couldn’t kill you? The Zenin clan threw me away, but look at you now.',
    overview: 'The infamous "Sorcerer Killer," father of Megumi Fushiguro, and outcast of the Zenin Clan. Born with a Heavenly Restriction that stripped away 100% of his cursed energy down to zero, the elitist Zenin family despised and abused him. In exchange, his physical body became an evolutionary marvel: immune to domain barriers, faster than sound, possessing supernatural 5-sense environmental perception, and capable of assassinating the strongest sorcerers on Earth.',
    techniqueName: 'Zero Cursed Energy & Cursed Tool Mastery',
    techniqueDetails: [
      'Invisible to Barriers: Possessing zero cursed energy, barriers and domain expansions cannot detect or trap him; he moves like a ghost unaffected by domain sure-hit rules.',
      'Inverted Spear of Heaven (天逆鉾): A cursed dagger that forcibly cancels and nullifies any active cursed technique upon contact, which he used to puncture Gojo’s Infinity.',
      'Split Soul Katana (釈魂刀): A blade that ignores physical durability and cuts directly through the soul of any entity.',
      'Inventory Curse: A small worm-like curse he swallowed to carry an arsenal of heavy weapons without releasing any detectable cursed energy leakage.'
    ],
    domainName: 'Domain Immunity (Physical Superiority)',
    domainKanji: '天与呪縛 (Zero Cursed Energy Nature)',
    domainDescription: 'Domain sure-hit barriers treat Toji like an inanimate object (such as a rock or wall), preventing sure-hit techniques from locking onto him unless he explicitly agrees to enter.',
    keyFeats: [
      'Infiltrated Tokyo Jujutsu High and mortally wounded teenage Satoru Gojo and Suguru Geto in 2006.',
      'Successfully assassinated the Star Plasma Vessel Riko Amanai, permanently shifting the future of the world.',
      'Resurrected in Shibuya via seance, instantly invaded Dagon’s domain, took Playful Cloud, and beat the Special Grade curse to death.'
    ],
    url: '/images/toji.jpg',
    themeColor: 'hover:shadow-slate-400/30 hover:border-slate-400/60',
    badgeBg: 'bg-slate-900',
    badgeBorder: 'border-slate-600',
    badgeText: 'text-slate-300',
  },
  {
    id: 9,
    title: 'Suguru Geto',
    kanji: '夏油 傑',
    subtitle: 'Curse Manipulator & The Fallen Idealist',
    grade: 'Special Grade',
    category: 'Special Grade',
    affiliation: 'Former Tokyo Jujutsu High • Curse Users Leader',
    quote: 'Are you the strongest because you’re Satoru Gojo? Or are you Satoru Gojo because you’re the strongest?',
    overview: 'One of four recognized Special Grade sorcerers and former best friend to Satoru Gojo during their youth at Tokyo Jujutsu High. Geto originally believed that sorcerers had an honorable duty to protect weaker non-sorcerers ("monkeys"). However, the relentless psychological trauma of swallowing foul-tasting cursed spirits, combined with witnessing non-sorcerers murder innocent sorcerers, warped his ideals into genocide, striving to exterminate all non-sorcerers to create a world free of cursed spirits.',
    techniqueName: 'Cursed Spirit Manipulation (呪霊操術 - Jurei Sōjutsu)',
    techniqueDetails: [
      'Spirit Subjugation: Can capture and command naturally formed cursed spirits by consuming them as black spheres. If the difference in grade is two levels or higher, he can absorb them without any conditions.',
      'Maximum - Uzumaki (極ノ番「うずまき」): Condenses hundreds or thousands of captured cursed spirits into a singular hyper-compressed blast of cursed energy.',
      'Technique Extraction: When Uzumaki consumes a Semi-Grade 1 or higher curse, it extracts the spirit’s innate cursed technique for Geto’s permanent personal use.',
      'Close Combat Martial Arts: Master of hand-to-hand combat and martial polearms, expertly wielding the three-section staff Playful Cloud.'
    ],
    domainName: 'Womb Profusion',
    domainKanji: '胎蔵遍野 (Taizō Hen\'ya)',
    domainDescription: 'An eerie open-barrier domain manifesting a pillar of rotting curse faces, unleashing an omnidirectional vortex of extracted cursed techniques that obliterates entire battlefields.',
    keyFeats: [
      'Absorbed and commanded over 4,400 cursed spirits during his prime.',
      'Orchestrated the worldwide Night Parade of a Hundred Demons in Shinjuku and Kyoto simultaneously.',
      'Clashed against awakened Yuta and fully manifest Queen of Curses Rika in Jujutsu Kaisen 0.',
      'His body was hijacked post-mortem by the ancient thousand-year sorcerer Kenjaku.'
    ],
    url: '/images/geto.jpg',
    themeColor: 'hover:shadow-violet-600/35 hover:border-violet-500/60',
    badgeBg: 'bg-violet-950/70',
    badgeBorder: 'border-violet-500/50',
    badgeText: 'text-violet-300',
  },
  {
    id: 10,
    title: 'Choso',
    kanji: '脹相',
    subtitle: 'Eldest Death Painting & Devoted Big Brother',
    grade: 'Special Grade',
    category: 'Curses & Wombs',
    affiliation: 'Death Painting Wombs • Ally to Yuji Itadori',
    quote: 'As an older brother, I must lead the way. Even if my brothers make mistakes, I will be the one to stand in front of them.',
    overview: 'The eldest of the nine Death Painting Wombs, created 150 years ago through the vile experiments of Noritoshi Kamo (Kenjaku) on a human woman and cursed spirit. Preserved as a cursed fetus for over a century, Choso views his brothers as his only reason for living. After fighting Yuji in Shibuya, an innate blood-resonance triggered a sudden realization that Yuji is his youngest brother, transforming Choso into Yuji’s fiercest and most selfless protector.',
    techniqueName: 'Blood Manipulation (赤血操術 - Sekketsu Sōjutsu)',
    techniqueDetails: [
      'Endless Blood Conversion: Because he is half-curse, Choso can convert cursed energy directly into blood, eliminating the human risk of fatal blood loss and anemia.',
      'Piercing Blood (穿血): Compresses blood to its absolute limit between his clasped palms and fires a supersonic beam of pressurized crimson liquid with rifle-like piercing velocity.',
      'Supernova (百斂・超新星): Releases orbiting spheres of condensed blood that detonate outward in all directions like omnidirectional fragmentation grenades.',
      'Flowing Red Scale - Stack: Accelerates his pulse, body temperature, and red blood cell count to boost physical strength, reflexes, and optical acuity past human limits.'
    ],
    domainName: 'Simple Domain Defense & Blood Barrier',
    domainKanji: '赤血簡易領域 (Sekketsu Barrier)',
    domainDescription: 'Possesses master-level Simple Domain defensive technique, capable of shielding himself and allies from Special Grade domain sure-hit attacks and extreme thermal blasts.',
    keyFeats: [
      'Defeated Yuji Itadori in a brutal hand-to-hand bathroom clash in Shibuya.',
      'Defeated Special Grade 1 candidate Naoya Zenin with his signature Supernova technique.',
      'Turned against his "creator" Kenjaku to defend Yuji and Yuki Tsukumo at the Tomb of the Star.',
      'Sacrificed his own life by creating a blood barrier to protect Yuji from Sukuna’s catastrophic Divine Flame explosion in Shinjuku.'
    ],
    url: '/images/choso.jpg',
    themeColor: 'hover:shadow-red-700/35 hover:border-red-600/60',
    badgeBg: 'bg-red-950/80',
    badgeBorder: 'border-red-700/60',
    badgeText: 'text-red-300',
  },
  {
    id: 11,
    title: 'Maki Zenin',
    kanji: '禪院 真希',
    subtitle: 'The Awakened Demon & Successor to Toji',
    grade: 'Heavenly Restriction',
    category: 'Zenin Clan',
    affiliation: 'Tokyo Jujutsu High (Second Year) • Zenin Clan',
    quote: 'Mai told me to destroy everything. So that’s what I’m going to do.',
    overview: 'A second-year student at Tokyo Jujutsu High and twin sister to Mai. Born into the patriarchal, elitist Zenin clan with negligible cursed energy, she was forced to wear enchanted glasses to see curses and was relegated to servant status. Following Mai’s tragic sacrifice, every trace of cursed energy in Maki’s body was dissolved, completing her Heavenly Restriction and transforming her into a physical demon identical in power to Toji Fushiguro.',
    techniqueName: 'Completed Heavenly Restriction & Soul Blade Mastery',
    techniqueDetails: [
      'Total Heavenly Restriction: Possesses zero cursed energy, granting complete immunity to domain barriers, silent spatial invisibility, and godlike reflexes.',
      'Split Soul Katana: Wields a duplicate of Toji’s soul-cutting blade forged by Mai’s dying cursed creation technique, slicing through the soul of any target while ignoring physical armor.',
      'Dragon Bone (竜骨): A specialized three-pronged blade that absorbs the kinetic energy and cursed force of enemy attacks, storing it to fire jet-engine thrust from back exhaust ports.',
      'Environmental Awareness: Senses air currents, thermal gradations, and gravitational micro-shifts to read an opponent’s movements before they even begin.'
    ],
    domainName: 'Domain Annihilation (Invisible to Barriers)',
    domainKanji: '天与呪縛・完全解脱',
    domainDescription: 'Like Toji, domain barriers cannot recognize Maki as a living being, making her entirely immune to sure-hit lethal effects. She can walk through domain barriers at will without breaking them.',
    keyFeats: [
      'Annihilated the entire Zenin Clan, the elite Kukuru unit, and the Hei squad single-handedly.',
      'Slaughtered the vengeful Special Grade cursed spirit incarnation of Naoya Zenin.',
      'Infiltrated Sukuna’s battle arena undetected and impaled the King of Curses through the heart with the Split Soul Katana.'
    ],
    url: '/images/maki.jpg',
    themeColor: 'hover:shadow-teal-500/30 hover:border-teal-500/60',
    badgeBg: 'bg-teal-950/70',
    badgeBorder: 'border-teal-500/50',
    badgeText: 'text-teal-300',
  },
  {
    id: 12,
    title: 'Naoya Zenin',
    kanji: '禪院 直哉',
    subtitle: 'The 24 FPS Speedster & Head of the Hei',
    grade: 'Special Grade 1',
    category: 'Zenin Clan',
    affiliation: 'Zenin Clan (Head Candidate) • Hei Unit Leader',
    quote: 'The only ones who could stand side by side with Satoru Gojo were Toji-kun and me. A monkey like you can’t even perceive my frames.',
    overview: 'The arrogant youngest son of clan head Naobito Zenin and supreme leader of the elite Zenin combat squad, the Hei. Egotistical, chauvinistic, and obsessed with speed, Naoya looks down on anyone he considers beneath him, idolizing only Toji Fushiguro’s raw masculine violence and Satoru Gojo’s power. Enraged when Megumi Fushiguro was appointed the 27th clan head over him, Naoya hunted down Megumi, Yuji, and Maki with murderous intent.',
    techniqueName: 'Projection Sorcery (投射呪法 - Tōsha Juhō)',
    techniqueDetails: [
      '24 Frames Per Second: Divides a single second of real time into 24 distinct frames of motion. Once an optical path is mapped out in his mind, he executes it with unstoppable acceleration.',
      'Frame Freeze Trap: If an opponent is touched by Naoya’s palm and fails to move in 24 FPS increments, they are frozen inside an inflexible 1-second animation cell, open to fatal blows.',
      'Supersonic Stacking: By continuously stacking frame acceleration across uninterrupted combat paths, he easily shatters the sound barrier, weaponizing sonic booms as physical battering rams.',
      'Rebirth as Vengeful Curse: After being killed without cursed energy by Maki’s mother, he returned as a flying supersonic jet-like cursed spirit.'
    ],
    domainName: 'Time Cell Moon Palace',
    domainKanji: '時胞月宮殿 (Jigū Getsuden)',
    domainDescription: 'A horrific domain taking the form of a giant floating embryonic eye. The sure-hit forces the 24-frame rule onto every single cell in the victim’s body; if the target moves, their internal cellular structures tear themselves apart in gory devastation.',
    keyFeats: [
      'Ambushed Choso and Yuji simultaneously with overwhelming supersonic speed.',
      'Achieved Mach 3 flight velocity in his cursed spirit incarnation during the Culling Game.',
      'Pushed Maki Zenin to her absolute limit before she awakened full Heavenly Restriction spatial perception.'
    ],
    url: '/images/naoya.jpg',
    themeColor: 'hover:shadow-amber-500/30 hover:border-amber-400/60',
    badgeBg: 'bg-amber-950/70',
    badgeBorder: 'border-amber-500/50',
    badgeText: 'text-amber-300',
  },
];

type CategoryFilter = 'All' | 'Special Grade' | 'Jujutsu High' | 'Zenin Clan' | 'Curses & Wombs';
type ModalTab = 'overview' | 'technique' | 'feats' | 'quote';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [shrineIntensity, setShrineIntensity] = useState<'subtle' | 'balanced' | 'vivid'>('balanced');
  const [showShrineModal, setShowShrineModal] = useState(false);

  // Filtered characters
  const filteredCharacters = useMemo(() => {
    return JJK_CHARACTERS.filter((char) => {
      const matchesCategory = selectedCategory === 'All' || char.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        char.title.toLowerCase().includes(query) ||
        char.kanji.includes(query) ||
        char.subtitle.toLowerCase().includes(query) ||
        char.techniqueName.toLowerCase().includes(query) ||
        char.domainName.toLowerCase().includes(query) ||
        char.grade.toLowerCase().includes(query) ||
        char.affiliation.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Modal navigation
  const currentModalCharacter = activeModalIndex !== null ? JJK_CHARACTERS[activeModalIndex] : null;

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + JJK_CHARACTERS.length) % JJK_CHARACTERS.length);
      setActiveTab('overview');
    }
  };

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % JJK_CHARACTERS.length);
      setActiveTab('overview');
    }
  };

  // Keyboard navigation for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
        setShowShrineModal(false);
      }
      if (activeModalIndex !== null) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-8 px-4 sm:px-6 lg:px-8 selection:bg-red-900 selection:text-white relative">
      {/* Fixed Sukuna's Malevolent Shrine Background behind entire application */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <img
          src="/images/malevolent_shrine.jpg"
          alt="Sukuna's Malevolent Shrine"
          className={`w-full h-full object-cover object-center filter contrast-125 saturate-110 transition-opacity duration-700 ${
            shrineIntensity === 'subtle' ? 'opacity-25' :
            shrineIntensity === 'vivid' ? 'opacity-65' : 'opacity-40'
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignettes and Cursed Blood Mist Gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-neutral-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.85)_80%)]" />
        <div className="absolute inset-0 bg-red-950/20 mix-blend-color-burn" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-semibold text-red-400 mb-3 tracking-wider uppercase shadow-inner backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            Jujutsu Kaisen Character Archive
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            Sorcerers & Curses
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Click any character portrait to explore their comprehensive lore, innate cursed techniques, domain expansions, and canonical feats.
          </p>
        </header>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 mb-8 bg-neutral-900/80 p-3 rounded-2xl border border-neutral-800/80 backdrop-blur-md shadow-lg">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {(['All', 'Special Grade', 'Jujutsu High', 'Zenin Clan', 'Curses & Wombs'] as CategoryFilter[]).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/40 font-semibold'
                      : 'bg-neutral-800/70 text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'All (12)' : cat}
                </button>
              )
            )}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, technique, domain..."
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-neutral-950/80 border border-neutral-800 rounded-xl text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Section Container with Sukuna's Malevolent Shrine directly behind the images */}
        <section className="relative rounded-3xl p-3 sm:p-5 md:p-6 border border-red-950/70 bg-neutral-950/75 backdrop-blur-md shadow-2xl overflow-hidden mb-12">
          {/* Malevolent Shrine Artwork directly behind the images grid */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <img
              src="/images/malevolent_shrine.jpg"
              alt="Sukuna's Malevolent Shrine behind images"
              className={`w-full h-full object-cover object-center filter contrast-125 saturate-110 transition-opacity duration-700 ${
                shrineIntensity === 'subtle' ? 'opacity-25' :
                shrineIntensity === 'vivid' ? 'opacity-70' : 'opacity-45'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-transparent to-neutral-950/85" />
            <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay" />
          </div>

          {/* Domain Expansion Header Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-5 pb-3.5 border-b border-red-950/60">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-red-300 uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Domain Expansion: Malevolent Shrine (伏魔御廚子)</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-neutral-400 text-[11px] hidden sm:inline">Shrine Ambience:</span>
              {(['subtle', 'balanced', 'vivid'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setShrineIntensity(level)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition cursor-pointer capitalize ${
                    shrineIntensity === level
                      ? 'bg-red-700 text-white font-semibold shadow-sm'
                      : 'bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {level}
                </button>
              ))}
              <button
                onClick={() => setShowShrineModal(true)}
                className="ml-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-neutral-900/90 hover:bg-neutral-800 text-red-400 border border-red-900/40 hover:border-red-600/60 transition cursor-pointer flex items-center gap-1"
                title="Inspect Sukuna's Malevolent Shrine architecture and lore"
              >
                <Eye className="w-3 h-3" />
                <span>View Shrine</span>
              </button>
            </div>
          </div>

          {/* 3-Column Equal Dimensions Grid */}
          <div id="photo-grid" className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {filteredCharacters.map((char) => {
              const originalIndex = JJK_CHARACTERS.findIndex((c) => c.id === char.id);
              return (
                <div
                  key={char.id}
                  id={`photo-card-${char.id}`}
                  onClick={() => {
                    setActiveModalIndex(originalIndex);
                    setActiveTab('overview');
                  }}
                  className={`group flex flex-col bg-neutral-950/85 sm:bg-neutral-900/85 backdrop-blur-md rounded-2xl overflow-hidden border border-neutral-800/80 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-red-600/70 ${char.themeColor}`}
                >
                  {/* 1:1 Aspect Ratio Image Container */}
                  <div className="aspect-square w-full bg-neutral-950 overflow-hidden relative">
                    {/* Subtle Malevolent Shrine underlayer directly behind each character photo */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                      <img
                        src="/images/malevolent_shrine.jpg"
                        alt="Malevolent Shrine underlayer"
                        className="w-full h-full object-cover opacity-25 filter blur-[0.5px]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-neutral-950/30" />
                    </div>

                    <img
                      src={char.url}
                      alt={char.title}
                      className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top Badges (Grade & Kanji) */}
                    <div className="relative z-20 top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border backdrop-blur-md shadow-sm ${char.badgeBg} ${char.badgeBorder} ${char.badgeText}`}
                      >
                        {char.grade}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-neutral-950/70 text-neutral-200 border border-neutral-800 backdrop-blur-md">
                        {char.kanji}
                      </span>
                    </div>

                    {/* Hover Overlay with Inspect Badge */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600/90 text-white text-[11px] font-semibold shadow-md">
                          <BookOpen className="w-3 h-3" />
                          Read Character Profile
                        </span>
                        <div className="p-1.5 rounded-lg bg-neutral-900/80 border border-neutral-700 text-white">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-3.5 text-center flex flex-col justify-center bg-neutral-900/95 border-t border-neutral-800/60">
                    <h2 className="text-sm font-bold text-neutral-100 group-hover:text-white transition-colors truncate">
                      {char.title}
                    </h2>
                    <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors truncate mt-0.5">
                      {char.subtitle}
                    </p>
                    <div className="mt-2 text-[11px] text-red-400 font-medium group-hover:underline flex items-center justify-center gap-1">
                      <Info className="w-3 h-3" />
                      <span>Click to know more</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Empty Search Result */}
        {filteredCharacters.length === 0 && (
          <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <ShieldAlert className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-200">No sorcerers found</h3>
            <p className="text-xs text-neutral-400 mt-1">Try searching for a different name, technique, or grade</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white rounded-xl transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Character Description & Lore Lightbox Modal */}
        {currentModalCharacter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setActiveModalIndex(null)}
            />

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalIndex(null)}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Large Image Column */}
              <div className="w-full md:w-5/12 aspect-square md:aspect-auto bg-neutral-950 relative flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={currentModalCharacter.url}
                  alt={currentModalCharacter.title}
                  className="w-full h-full object-cover"
                />

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/70 border border-neutral-800/80 text-white hover:bg-neutral-900 hover:scale-110 transition cursor-pointer"
                  title="Previous Character (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/70 border border-neutral-800/80 text-white hover:bg-neutral-900 hover:scale-110 transition cursor-pointer"
                  title="Next Character (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Direct Image Link Badge */}
                <div className="absolute bottom-3 left-3 z-10">
                  <a
                    href={currentModalCharacter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950/80 border border-neutral-800 text-[11px] text-neutral-300 hover:text-white transition"
                  >
                    <span>View Raw Full Portrait</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Character Lore & Technique Detail Column */}
              <div className="w-full md:w-7/12 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto">
                <div>
                  {/* Grade Badge & Kanji Header */}
                  <div className="flex items-center justify-between gap-2 mb-2 pr-8">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${currentModalCharacter.badgeBg} ${currentModalCharacter.badgeBorder} ${currentModalCharacter.badgeText}`}
                      >
                        {currentModalCharacter.grade}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {currentModalCharacter.affiliation}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-neutral-400 font-mono">
                      {currentModalCharacter.kanji}
                    </span>
                  </div>

                  {/* Character Name & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentModalCharacter.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-red-400 font-medium mt-0.5">
                    {currentModalCharacter.subtitle}
                  </p>

                  {/* Modal Navigation Tabs */}
                  <div className="flex items-center gap-1.5 mt-4 mb-4 border-b border-neutral-800 pb-2">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                        activeTab === 'overview'
                          ? 'bg-neutral-800 text-white font-semibold'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>About & Lore</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('technique')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                        activeTab === 'technique'
                          ? 'bg-neutral-800 text-white font-semibold'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Technique & Domain</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('feats')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                        activeTab === 'feats'
                          ? 'bg-neutral-800 text-white font-semibold'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <Swords className="w-3.5 h-3.5 text-red-400" />
                      <span>Key Feats</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('quote')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                        activeTab === 'quote'
                          ? 'bg-neutral-800 text-white font-semibold'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <Quote className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Quote</span>
                    </button>
                  </div>

                  {/* Tab 1: Overview & Lore Description */}
                  {activeTab === 'overview' && (
                    <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed animate-in fade-in duration-150">
                      <div className="p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                        <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                          Character Profile & Backstory
                        </h4>
                        <p className="text-neutral-200 leading-relaxed">
                          {currentModalCharacter.overview}
                        </p>
                      </div>

                      {/* Signature Quote Banner */}
                      <div className="p-3 rounded-xl bg-neutral-950/40 border-l-2 border-red-500 flex items-start gap-2.5">
                        <Quote className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <p className="italic text-xs text-neutral-300">
                          "{currentModalCharacter.quote}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Technique & Domain Expansion */}
                  {activeTab === 'technique' && (
                    <div className="space-y-3.5 text-xs sm:text-sm animate-in fade-in duration-150">
                      {/* Innate Technique */}
                      <div className="p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2">
                          <Zap className="w-3.5 h-3.5" />
                          <span>Innate Technique: {currentModalCharacter.techniqueName}</span>
                        </div>
                        <ul className="space-y-1.5 pl-2">
                          {currentModalCharacter.techniqueDetails.map((detail, idx) => (
                            <li key={idx} className="text-neutral-300 text-xs flex items-start gap-1.5 leading-relaxed">
                              <span className="text-amber-400 mt-0.5">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Domain Expansion */}
                      <div className="p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
                            <Flame className="w-3.5 h-3.5" />
                            <span>Domain Expansion: {currentModalCharacter.domainName}</span>
                          </div>
                          <span className="text-xs font-mono text-neutral-400">
                            {currentModalCharacter.domainKanji}
                          </span>
                        </div>
                        <p className="text-neutral-300 text-xs leading-relaxed">
                          {currentModalCharacter.domainDescription}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Key Feats & Battles */}
                  {activeTab === 'feats' && (
                    <div className="p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 animate-in fade-in duration-150">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400 mb-3">
                        <Swords className="w-3.5 h-3.5" />
                        <span>Canonical Combat Feats & Impact:</span>
                      </div>
                      <ul className="space-y-2.5">
                        {currentModalCharacter.keyFeats.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed">
                            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-red-950 border border-red-700/60 text-[10px] text-red-300 font-bold shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tab 4: Quotes & Philosophy */}
                  {activeTab === 'quote' && (
                    <div className="space-y-3 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 animate-in fade-in duration-150">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-2">
                        <Quote className="w-3.5 h-3.5" />
                        <span>Defining Quote & Ideology</span>
                      </div>
                      <blockquote className="text-base italic font-serif text-neutral-100 pl-4 border-l-4 border-red-600 my-2">
                        "{currentModalCharacter.quote}"
                      </blockquote>
                      <div className="pt-2 text-xs text-neutral-400">
                        <p>
                          <strong className="text-neutral-300">Affiliation:</strong> {currentModalCharacter.affiliation}
                        </p>
                        <p className="mt-1">
                          <strong className="text-neutral-300">Grade Classification:</strong> {currentModalCharacter.grade}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls & Next/Prev Hints */}
                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono">
                    Character {(activeModalIndex ?? 0) + 1} of {JJK_CHARACTERS.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition cursor-pointer"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition cursor-pointer"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Malevolent Shrine Domain Inspection Modal */}
        {showShrineModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-neutral-950/90 backdrop-blur-lg animate-in fade-in duration-200">
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setShowShrineModal(false)}
            />
            <div className="relative z-10 w-full max-w-4xl bg-neutral-900 border border-red-900/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]">
              <button
                onClick={() => setShowShrineModal(false)}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Shrine Artwork */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-neutral-950 relative overflow-hidden shrink-0">
                <img
                  src="/images/malevolent_shrine.jpg"
                  alt="Ryomen Sukuna's Malevolent Shrine"
                  className="w-full h-full object-cover filter contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-950/90 border border-red-600/60 text-red-300">
                    Open Barrier Domain
                  </span>
                  <p className="text-white text-xs font-semibold mt-1">
                    200-Meter Lethal Sure-Hit Radius • Cursed Calamity
                  </p>
                </div>
              </div>

              {/* Domain Mechanics & Lore */}
              <div className="w-full md:w-1/2 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-950/80 border border-red-600/60 text-red-400">
                      Special Grade Divine Construct
                    </span>
                    <span className="text-sm font-bold text-neutral-400 font-mono">
                      伏魔御廚子
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                    <span>Malevolent Shrine</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-red-400 font-medium mt-0.5">
                    Fukuma Mizushi • Ryomen Sukuna's Innate Domain
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Unlike ordinary domain expansions that entrap their prey inside an enclosed pocket dimension, Sukuna paints his demonic shrine directly onto the canvas of physical reality without a closing barrier.
                  </p>

                  <div className="mt-4 space-y-2.5">
                    <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                      <h4 className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>The Open-Barrier Binding Vow</span>
                      </h4>
                      <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                        By granting an escape route via an open barrier, a binding vow expands his sure-hit radius up to 200 meters, pulverizing everything in reach.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                      <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                        <Swords className="w-3.5 h-3.5" />
                        <span>Relentless Cleave & Dismantle Barrage</span>
                      </h4>
                      <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                        Dismantle relentlessly slices inanimate matter and buildings, while Cleave dynamically adjusts output to slice sorcerers according to their toughness.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                      <h4 className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5" />
                        <span>Furnace / Divine Flame (竈 - Fuga)</span>
                      </h4>
                      <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                        Sukuna ignites the pulverized airborne dust created by his domain's slashes into a catastrophic thermobaric firestorm that incinerates entire city blocks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 italic">
                    "Stand proud. You are strong."
                  </span>
                  <button
                    onClick={() => setShowShrineModal(false)}
                    className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition cursor-pointer"
                  >
                    Close Domain
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
