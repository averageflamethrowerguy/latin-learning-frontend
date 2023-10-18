/**
 * Format:
 *  [English, Latin (Form 1), Latin (Form 2)]
 */
const wordList = [
    ["dog", "canis", "canem"],
    ["cook", "coquus"],
    ["is", "est"],
    ["daughter", "fīlia"],
    ["son", "fīlius"],
    ["garden", "hortus"],
    ["in/on", "in"],
    ["works, is working", "labōrat"],
    ["mother", "māter"],
    ["father", "pater"],
    ["sits, is sitting", "sedet"],
    ["slave", "servus"],
    ["street", "via"],
    ["greets", "salūtat", "salūtāvit"],
    ["friend", "amīcus"],
    ["slave-girl, slave-woman", "ancilla"],
    ["dinner", "cēna"],
    ["food", "cibus"],
    ["master", "dominus"],
    ["sleeps", "dormit", "dormīvit"],
    ["enters", "intrat", "intrāvit"],
    ["happy", "laetus"],
    ["praises", "laudat", "laudāvit"],
    ["merchant", "mercātor"],
    ["also", "quoque"],
    ["to", "ad"],
    ["drinks", "bibit", "bibit"],
    ["looks around", "circumspectat", "circumspectāvit"],
    ["shouts", "clāmat", "clāmāvit"],
    ["look!", "ecce!"],
    ["and", "et"],
    ["goes out", "exit"],
    ["waits for", "exspectat"],
    ["door", "iānua"],
    ["angry", "īrātus"],
    ["lion", "leō"],
    ["big, large, great", "magnus"],
    ["ship", "nāvis"],
    ["not", "nōn"],
    ["carries", "portat", "portāvit"],
    ["replies", "respondet", "respondit"],
    ["laughs, smiles", "rīdet", "rīsit"],
    ["hello!", "salvē!"],
    ["gets up, stands up", "surgit", "surrēxit"],
    ["store, shop, inn", "taberna"],
    ["sees", "videt", "vīdit"],
    ["wine", "vīnum"],
    ["does", "agit", "agitāvit"],
    ["ring", "ānulus"],
    ["cooks", "coquit"],
    ["why?", "cūr?"],
    ["out of, from", "ē, ex"],
    ["I", "ego"],
    ["alas! oh dear!", "ēheu!"],
    ["has", "habet"],
    ["says", "inquit"],
    ["judge", "iūdex"],
    ["liar", "mendāx"],
    ["money", "pecūnia"],
    ["terrified", "perterritus"],
    ["poet", "poēta"],
    ["searches for, looks for", "quaerit", "quaesīvit"],
    ["who?", "quis?"],
    ["gives back", "reddit"],
    ["enough", "satis"],
    ["but", "sed"],
    ["sign, seal, signal", "signum"],
    ["you", "tū"],
    ["calls", "vocat", "vocāvit"],
    ["is here", "adest"],
    ["are here", "adsunt"],
    ["farmer", "agricola"],
    ["walks", "ambulat", "ambulāvit"],
    ["hears, listens to", "audit", "audīvit"],
    ["shout, uproar", "clāmor"],
    ["hurries", "contendit", "contendit"],
    ["runs", "currit", "cucurrit"],
    ["hurrah!", "euge!"],
    ["play, story", "fābula"],
    ["woman", "fēmina"],
    ["today", "hodiē"],
    ["young man", "iuvenis"],
    ["my, mine", "meus"],
    ["many", "multī"],
    ["much", "multus"],
    ["very good, excellent, best", "optimus"],
    ["heads for, attacks, seeks", "petit", "petīvit"],
    ["applauds, claps", "plaudit", "plausit"],
    ["girl", "puella"],
    ["old man", "senex"],
    ["looks at, watches", "spectat", "spectāvit"],
    ["stands", "stat"],
    ["crowd", "turba"],
    ["where?", "ubi?"],
    ["city", "urbs"],
    ["comes", "venit", "vēnit"],
    ["out, absent", "abest", "aberat"],
    ["bedroom", "cubiculum"],
    ["good", "bonus"],
    ["buys", "emit", "ēmit"],
    ["fiercely", "ferōciter"],
    ["hurries", "festīnat", "festināvit"],
    ["brave, strong", "fortis"],
    ["thief", "fūr"],
    ["intently", "intentē"],
    ["freedman, ex-slave", "lībertus"],
    ["once, some time ago", "ōlim"],
    ["small, little", "parvus"],
    ["through", "per"],
    ["after, when", "postquam"],
    ["hits, punches, whacks", "pulsat", "pulsāvit"],
    ["because", "quod"],
    ["thing", "rēs", "rem"],
    ["writes", "scrībit", "scrīpsit"],
    ["suddenly", "subitō"],
    ["overcomes, overpowers", "superat", "superāvit"],
    ["then", "tum"],
    ["sells", "vēndit", "vēndidit"],
    ["your", "tuus"],
    ["finds fault with, tells off, curses", "vituperat", "vituperāvit"],
    ["eats dinner, dines", "cēnat", "cēnāvit"],
    ["catches sight of", "cōnspicit", "cōnspexit"],
    ["with", "cum"],
    ["makes, does", "facit", "fēcit"],
    ["yesterday", "heri"],
    ["huge", "ingēns"],
    ["understands", "intellegit", "intellēxit"],
    ["weeps, cries", "lacrimat", "lacrimāvit"],
    ["dead", "mortuus"],
    ["tells, relates", "nārrat", "nārrāvit"],
    ["kills", "necat", "necāvit"],
    ["nothing", "nihil"],
    ["all", "omnis"],
    ["prepares", "parat", "parāvit"],
    ["near", "prope"],
    ["asks", "rogat", "rogāvit"],
    ["quietly", "tacitē"],
    ["however", "tamen"],
    ["frightens", "terret", "terruit"],
    ["very much, very", "valdē"],
    ["chases, hunts", "agitat", "agitāvit"],
    ["eats", "cōnsūmit", "cōnsūmpsit"],
    ["leads, takes", "dūcit", "dūxit"],
    ["him", "eum"],
    ["easily", "facile"],
    ["fierce", "ferōx", "ferōcem"],
    ["sword", "gladius"],
    ["this", "hic"],
    ["cowardly", "ignāvus"],
    ["messenger", "nūntius"],
    ["foot", "pēs", "pedem"],
    ["gate", "porta"],
    ["demands", "postulat", "postulāvit"],
    ["boy", "puer"],
    ["fights", "pugnat", "pugnāvit"],
    ["often", "saepe"],
    ["blood", "sanguis", "sanguinem"],
    ["woods, forest", "silva"],
    ["show, spectacle", "spectāculum"],
    ["at once", "statim"],
    ["whole", "totus"],
    ["recognizes", "agnōscit", "agnōvit"],
    ["quickly", "celeriter"],
    ["wants", "cupit", "cupīvit"],
    ["gives", "dat", "dedit"],
    ["day", "diēs", "diem"],
    ["throws, sends out", "ēmittit", "ēmīsit"],
    ["brings, carries", "fert", "tulit"],
    ["human being, man", "homō", "hominem"],
    ["guest", "hospes", "hospitem"],
    ["that", "ille"],
    ["looks at, inspects, examines", "īnspicit", "īnspexit"],
    ["again", "iterum"],
    ["remains, stays", "manet", "mānsit"],
    ["middle", "medius"],
    ["soon", "mox"],
    ["offers", "offert", "obtulit"],
    ["shows", "ostendit", "ostendit"],
    ["after", "post"],
    ["proceeds, advances", "prōcēdit", "prōcessit"],
    ["beautiful", "pulcher"],
    ["comes back, returns", "revenit", "revēnit"],
    ["hands over", "trādit", "trādidit"],
    ["goes away", "abit", "abiit"],
    ["accepts", "accipit", "accēpit"],
    ["clever, cunning", "callidus"],
    ["satisfied", "contentus"],
    ["exclaims", "exclāmat", "exclāmāvit"],
    ["brother", "frāter", "frātrem"],
    ["lives", "habitat", "habitāvit"],
    ["empire", "imperium"],
    ["finds", "invenit", "invēnit"],
    ["book", "liber"],
    ["we", "nōs"],
    ["announces", "nūntiat", "nūntiāvit"],
    ["peace", "pāx", "pācem"],
    ["harbor", "portus"],
    ["than", "quam"],
    ["always", "semper"],
    ["saves, looks after", "servat", "servāvit"],
    ["alone", "sōlus"],
    ["his, her, their", "suus"],
    ["is silent, is quiet", "tacet", "tacuit"],
    ["wife", "uxor", "uxōrem"],
    ["violently, loudly", "vehementer"],
    ["you all", "vōs"],
    ["takes", "capit", "cēpit"],
    ["citizen", "cīvis", "cīvem"],
    ["gathers, meets", "convenit", "convēnit"],
    ["trusts, believes", "crēdit", "crēdidit"],
    ["about", "dē"],
    ["supports", "favet", "fāvet"],
    ["invites", "invītat", "invitāvit"],
    ["goes", "it", "iit"],
    ["reads", "legit", "lēgit"],
    ["generous", "liberālis", "liberālem"],
    ["no!", "minimē!"],
    ["wall", "mūrus"],
    ["our", "noster"],
    ["now", "nunc"],
    ["it pleases", "placet", "placuit"],
    ["first", "prīmus"],
    ["promises", "prōmittit", "prōmīsit"],
    ["fight", "pugna"],
    ["senator", "senātor", "senātōrem"],
    ["worried, anxious", "sollicitus"],
    ["stupid", "stultus"],
    ["goodbye!", "valē!"],
    ["strikes, beats", "verberat", "verberāvit"],
    ["man", "vir", "virum"],
    ["loses", "āmittit", "āmīsit"],
    ["fills", "complet", "complēvit"],
    ["guards", "custōdit", "custōdīvit"],
    ["letter", "epistula"],
    ["flame", "flamma"],
    ["bravely", "fortiter"],
    ["in vain", "frūstrā"],
    ["runs away, flees", "fugit", "fūgit"],
    ["farm", "fundus"],
    ["lies", "iacet", "iacuit"],
    ["now", "iam"],
    ["therefore", "igitur"],
    ["strange, extraordinary", "mirābilis", "mirābilem"],
    ["sends", "mittit", "mīsit"],
    ["mountain", "mōns", "montem"],
    ["very well", "optimē"],
    ["nearly, almost", "paene"],
    ["feels", "sentit", "sēnsit"],
    ["at last", "tandem"],
    ["temple", "templum"],
    ["ground, land", "terra"],
    ["is afraid, fears", "timet", "timuit"],
    ["one","ūnus"],
    ["two", "duo"],
    ["three", "trēs"]
]

const verbFormList = [
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["sum", "es", "est"],
                        plural: ["sumus", "estis", "sunt"]
                    },
                    perfect: {
                        singular: ["eram", "erās", "erat"],
                        plural: ["erāmus", "erātis", "erant"]
                    }
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["sum", "es", "est"],
                        plural: ["sumus", "estis", "sunt"]
                    },
                    perfect: {
                        singular: ["eram", "erās", "erat"],
                        plural: ["erāmus", "erātis", "erant"]
                    }
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["possum", "potes", "potest"],
                        plural: ["possumus", "potestis", "possunt"]
                    },
                    perfect: {
                        singular: ["", "", ""],
                        plural: ["", "", ""]
                    }
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["volō", "vīs", "vult"],
                        plural: ["volumus", "vultis", "volunt"]
                    },
                    perfect: {
                        singular: ["", "", ""],
                        plural: ["", "", ""]
                    }
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["nōlō", "nōn vīs", "nōn vult"],
                        plural: ["nōlumus", "nōn vultis", "nōlunt"]
                    },
                    perfect: {
                        singular: ["", "", ""],
                        plural: ["", "", ""]
                    }
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["dīco", "dīcis", "dīcit"],
                        plural: ["dīcimus", "dīcitis", "dīcunt"]
                    },
                    imperfect: {
                        singular: ["dīcēbam", "dīcēbās", "dīcēbat"],
                        plural: ["dīcēbāmus", "dīcēbātis", "dīcēbant"]
                    },
                    perfect: {
                        singular: ["dīxī", "dīxistī", "dīxit"],
                        plural: ["dīximus", "dīxistis", "diērunt"]
                    }
                }
            }
        }
    },
]

const verbEndingStructure = {
    active: {
        masculine: {
            indicative: {
                present: {
                    singular: ["ō/m", "s", "t"],
                    plural: ["mus", "tis", "nt"]
                },
                imperfect: {

                },
                perfect: {
                    singular: ["ī", "istī", "it"],
                    plural: ["imus", "istis", "ērunt"]
                }
            }
        }
    }
}

const nounFormList = [
    {
        nominative: {
            singular: "puella",
            plural: "puellae"
        },
        dative: {
            singular: "puellae",
            plural: "puellīs"
        },
        accusative: {
            singular: "puellam",
            plural: "puellās"
        },
        ablative: {
            singular: "puellā",
            plural: "puellīs"
        }
    },
    {
        nominative: {
            singular: "survus",
            plural: "servī"
        },
        dative: {
            singular: "servō",
            plural: "servīs"
        },
        accusative: {
            singular: "servum",
            plural: "servōs"
        },
        ablative: {
            singular: "servō",
            plural: "servīs"
        }
    },
    {
        nominative: {
            singular: "leō",
            plural: "leōnēs"
        },
        dative: {
            singular: "leōnī",
            plural: "leōnibus"
        },
        accusative: {
            singular: "leōnem",
            plural: "leōnēs"
        },
        ablative: {
            singular: "leōne",
            plural: "leōnibus"
        }
    },
]

export {wordList, verbEndingStructure, verbFormList, nounFormList}
















