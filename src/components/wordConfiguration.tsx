

const verbFormList = [
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["sum", "es", "est"],
                        plural: ["sumus", "estis", "sunt"]
                    },
                    imperfect: {
                        singular: ["eram", "erās", "erat"],
                        plural: ["erāmus", "erātis", "erant"]
                    },
                    perfect: {
                        singular: ["fuī", "fuistī", "fuit"],
                        plural: ["fuimus", "fuistis", "fuērunt"]
                    },
                    pluperfect: {
                        singular: ["fueram", "fuerās", "fuerat"],
                        plural: ["fuerāmus", "fuerātis", "fuerant"]
                    },
                    infinitive: "esse"
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["portō", "portās", "portat"],
                        plural: ["portāmus", "portātis", "portant"]
                    },
                    imperfect: {
                        singular: ["portābam", "portābās", "portābat"],
                        plural: ["portābāmus", "portābātis", "portābant"]
                    },
                    perfect: {
                        singular: ["portāvī", "portāvistī", "portāvit"],
                        plural: ["portāvimus", "portāvistis", "portāvērunt"]
                    },
                    pluperfect: {
                        singular: ["portāveram", "portāverās", "portāverat"],
                        plural: ["portāverāmus", "portāverātis", "portāverant"]
                    },
                    infinitive: "portāre"
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["doceō", "docēs", "docet"],
                        plural: ["docēmus", "docētis", "docent"]
                    },
                    imperfect: {
                        singular: ["docēbam", "docēbās", "docēbat"],
                        plural: ["docēbāmus", "docēbātis", "docēbant"]
                    },
                    perfect: {
                        singular: ["docuī", "docuistī", "docuit"],
                        plural: ["docuimus", "docuistis", "docuērunt"]
                    },
                    pluperfect: {
                        singular: ["docueram", "docuerās", "docuerat"],
                        plural: ["docuerāmus", "docuerātis", "docuerant"]
                    },
                    infinitive: "docēre"
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["trahō", "trahis", "trahit"],
                        plural: ["trahimus", "trahitis", "trahunt"]
                    },
                    imperfect: {
                        singular: ["trahēbam", "trahēbās", "trahēbat"],
                        plural: ["trahēbāmus", "trahēbātis", "trahēbant"]
                    },
                    perfect: {
                        singular: ["trāxī", "trāxistī", "trāxit"],
                        plural: ["trāximus", "trāxistis", "trāxērunt"]
                    },
                    pluperfect: {
                        singular: ["trāxeram", "trāxerās", "trāxerat"],
                        plural: ["trāxerāmus", "trāxerātis", "trāxerant"]
                    },
                    infinitive: "trahere"
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["audiō", "audīs", "audit"],
                        plural: ["audīmus", "audītis", "audiunt"]
                    },
                    imperfect: {
                        singular: ["audiēbam", "audiēbās", "audiēbat"],
                        plural: ["audiēbāmus", "audiēbātis", "audiēbant"]
                    },
                    perfect: {
                        singular: ["audīvī", "audīvistī", "audīvit"],
                        plural: ["audīvimus", "audīvistis", "audīvērunt"]
                    },
                    pluperfect: {
                        singular: ["audīveram", "audīverās", "audīverat"],
                        plural: ["audīverāmus", "audīverātis", "audīverant"]
                    },
                    infinitive: "audīre"
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
                    imperfect: {
                        singular: ["poteram", "poterās", "poterat"],
                        plural: ["poterāmus", "poterātis", "poterant"]
                    },
                    perfect: {
                        singular: ["potuī", "potuistī", "potuit"],
                        plural: ["potuimus", "potuistis", "potuērunt"]
                    },
                    pluperfect: {
                        singular: ["potueram", "potuerās", "potuerat"],
                        plural: ["potuerāmus", "potuerātis", "potuerant"]
                    },
                    infinitive: "posse"
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
                    imperfect: {
                        singular: ["volēbam", "volēbas", "volēbat"],
                        plural: ["volēbāmus", "volēbātis", "volēbant"]
                    },
                    perfect: {
                        singular: ["voluī", "voluistī", "voluit"],
                        plural: ["voluimus", "voluistis", "voluērunt"]
                    },
                    pluperfect: {
                        singular: ["volueram", "voluerās", "voluerat"],
                        plural: ["voluerāmus", "voluerātis", "voluerant"]
                    },
                    infinitive: "velle"
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
                    imperfect: {
                        singular: ["nōlēbam", "nōlēbās", "nōlēbat"],
                        plural: ["nōlēbāmus", "nōlēbātis", "nōlēbant"],
                    },
                    perfect: {
                        singular: ["nōluī", "nōluistī", "nōluit"],
                        plural: ["nōluimus", "nōluistis", "nōluērunt"]
                    },
                    pluperfect: {
                        singular: ["nōlueram", "nōluerās", "nōluerat"],
                        plural: ["nōluerāmus", "nōluerātis", "nōluerant"]
                    },
                    infinitive: "nōlle"
                }
            }
        }
    },
    {
        active: {
            masculine: {
                indicative: {
                    present: {
                        singular: ["eō", "īs", "it"],
                        plural: ["īmus", "ītis", "eunt"]
                    },
                    imperfect: {
                        singular: ["ībam", "ībās", "ībat"],
                        plural: ["ībāmus", "ībātis", "ībant"],
                    },
                    perfect: {
                        singular: ["iī", "iistī", "iit"],
                        plural: ["iimus", "iitis", "iērunt"]
                    },
                    pluperfect: {
                        singular: ["ieram", "ierās", "ierat"],
                        plural: ["ierāmus", "ierātis", "ierant"]
                    },
                    infinitive: "nōlle"
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
    /** First Declension Nouns **/
    {
        nominative: {
            singular: "puella",
            plural: "puellae"
        },
        genitive: {
            singular: "puellae",
            plural: "puellarum"
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
    // {
    //     nominative: {
    //         singular: "poena",
    //         plural: "poenae"
    //     },
    //     genitive: {
    //         singular: "poenae",
    //         plural: "poenarum"
    //     },
    //     dative: {
    //         singular: "poenī",
    //         plural: "poenīs"
    //     },
    //     accusative: {
    //         singular: "poenam",
    //         plural: "poenas"
    //     },
    //     ablative: {
    //         singular: "poenī",
    //         plural: "poenīs"
    //     }
    // },
    /** End first declension nouns **/

    /** Second declension nouns **/
    // {
    //     nominative: {
    //         singular: "faber",
    //         plural: "fabrī"
    //     },
    //     genitive: {
    //         singular: "fabri",
    //         plural: "faborum"
    //     },
    //     dative: {
    //         singular: "fabrō",
    //         plural: "fabris"
    //     },
    //     accusative: {
    //         singular: "fabrum",
    //         plural: "fabrōs"
    //     },
    //     ablative: {
    //         singular: "fabrō",
    //         plural: "fabrīs"
    //     }
    // },
    // {
    //     nominative: {
    //         singular: "otium",
    //         plural: "otia"
    //     },
    //     genitive: {
    //         singular: "otiī",
    //         plural: "otiorum"
    //     },
    //     dative: {
    //         singular: "otiō",
    //         plural: "otiis"
    //     },
    //     accusative: {
    //         singular: "otium",
    //         plural: "otia"
    //     },
    //     ablative: {
    //         singular: "otiō",
    //         plural: "otiīs"
    //     }
    // },

    // second declension masculine
    {
        nominative: {
            singular: "servus",
            plural: "servī"
        },
        genitive: {
            singular: "servī",
            plural: "servōrum"
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

    // this is a 2nd-declension neuter noun
    /** End Second Declension Nouns **/
    {
        nominative: {
            singular: "templum",
            plural: "templa"
        },
        genitive: {
            singular: "templī",
            plural: "templōrum"
        },
        dative: {
            singular: "templō",
            plural: "templīs"
        },
        accusative: {
            singular: "templum",
            plural: "templa"
        },
        ablative: {
            singular: "templō",
            plural: "templīs"
        }
    },

    /** Begin Third Declension Nouns **/
    // leō is third declension masculine/feminine
    {
        nominative: {
            singular: "leō",
            plural: "leōnēs"
        },
        genitive: {
            singular: "leōnis",
            plural: "leōnum"
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

    // // corpus is neuter 3rd declension
    // // the neuter nouns have the following adjustments from other 3rd-declension nouns
    // {
    //     nominative: {
    //         singular: "corpus",
    //         plural: "corpora"
    //     },
    //     genitive: {
    //         singular: "corporis",
    //         plural: ""
    //     },
    //     dative: {
    //         singular: "",
    //         plural: ""
    //     },
    //     accusative: {
    //         singular: "corporus",
    //         plural: "corpora"
    //     },
    //     ablative: {
    //         singular: "",
    //         plural: ""
    //     }
    // },

    // this is a special type of 3rd-declension noun
    // an i-stem 3rd declension noun
    {
        nominative: {
            singular: "cīvis",
            plural: "cīvēs"
        },
        genitive: {
            singular: "cīvis",
            plural: "cīvium"
        },
        dative: {
            singular: "cīvī",
            plural: "cīvibus"
        },
        accusative: {
            singular: "cīvem",
            plural: "cīvēs"
        },
        ablative: {
            singular: "cīve",
            plural: "cīvibus"
        }
    },

    // this is a 3rd-declension neuter noun
    {
        nominative: {
            singular: "nōmen",
            plural: "nōmina"
        },
        genitive: {
            singular: "nōminis",
            plural: "nōminum"
        },
        dative: {
            singular: "nōminī",
            plural: "nōminibus"
        },
        accusative: {
            singular: "nōmen",
            plural: "nōmina"
        },
        ablative: {
            singular: "nōmine",
            plural: "nōminibus"
        }
    },
]

const pronounFormList = [
    {
        nominative: {
            singular: {
                masculine: "hic",
                feminine: "haec",
                neuter: "hoc"
            },
            plural: {
                masculine: "hī",
                feminine: "hae",
                neuter: "haec"
            },
        },
        genitive: {
            singular: {
                masculine: "huius",
                feminine: "huius",
                neuter: "huius"
            },
            plural: {
                masculine: "hōrum",
                feminine: "hārum",
                neuter: "hōrum"
            },
        },
        dative: {
            singular: {
                masculine: "huic",
                feminine: "huic",
                neuter: "huic"
            },
            plural: {
                masculine: "hīs",
                feminine: "hīs",
                neuter: "hīs"
            },
        },
        accusative: {
            singular: {
                masculine: "hunc",
                feminine: "hanc",
                neuter: "hoc"
            },
            plural: {
                masculine: "hōs",
                feminine: "hās",
                neuter: "haec"
            },
        },
        ablative: {
            singular: {
                masculine: "hōc",
                feminine: "hāc",
                neuter: "hōc"
            },
            plural: {
                masculine: "hīs",
                feminine: "hīs",
                neuter: "hīs"
            },
        }
    },
    {
        nominative: {
            singular: {
                masculine: "ille",
                feminine: "illa",
                neuter: "illud"
            },
            plural: {
                masculine: "illī",
                feminine: "illae",
                neuter: "illa"
            },
        },
        genitive: {
            singular: {
                masculine: "illīus",
                feminine: "illīus",
                neuter: "illīus"
            },
            plural: {
                masculine: "illōrum",
                feminine: "illārum",
                neuter: "illōrum"
            },
        },
        dative: {
            singular: {
                masculine: "illī",
                feminine: "illī",
                neuter: "illī"
            },
            plural: {
                masculine: "illīs",
                feminine: "illīs",
                neuter: "illīs"
            },
        },
        accusative: {
            singular: {
                masculine: "illum",
                feminine: "illam",
                neuter: "illud"
            },
            plural: {
                masculine: "illōs",
                feminine: "illās",
                neuter: "illa"
            },
        },
        ablative: {
            singular: {
                masculine: "illō",
                feminine: "illā",
                neuter: "illō"
            },
            plural: {
                masculine: "illīs",
                feminine: "illīs",
                neuter: "illīs"
            },
        }
    },
    {
        nominative: {
            singular: {
                masculine: "is",
                feminine: "ea",
                neuter: "id"
            },
            plural: {
                masculine: "eī",
                feminine: "eae",
                neuter: "ae"
            },
        },
        genitive: {
            singular: {
                masculine: "eius",
                feminine: "eius",
                neuter: "eius"
            },
            plural: {
                masculine: "eōrum",
                feminine: "eārum",
                neuter: "eōrum"
            },
        },
        dative: {
            singular: {
                masculine: "eī",
                feminine: "eī",
                neuter: "eī"
            },
            plural: {
                masculine: "eīs",
                feminine: "eīs",
                neuter: "eīs"
            },
        },
        accusative: {
            singular: {
                masculine: "eum",
                feminine: "ea",
                neuter: "id"
            },
            plural: {
                masculine: "eōs",
                feminine: "eās",
                neuter: "ea"
            },
        },
        ablative: {
            singular: {
                masculine: "eō",
                feminine: "eā",
                neuter: "eō"
            },
            plural: {
                masculine: "eīs",
                feminine: "eīs",
                neuter: "eīs"
            },
        }
    },
    {
        nominative: {
            singular: {
                masculine: "quī",
                feminine: "quae",
                neuter: "quod"
            },
            plural: {
                masculine: "quī",
                feminine: "quae",
                neuter: "quae"
            },
        },
        genitive: {
            singular: {
                masculine: "cuius",
                feminine: "cuius",
                neuter: "cuius"
            },
            plural: {
                masculine: "quōrum",
                feminine: "quārum",
                neuter: "quōrum"
            },
        },
        dative: {
            singular: {
                masculine: "cui",
                feminine: "cui",
                neuter: "cui"
            },
            plural: {
                masculine: "quibus",
                feminine: "quibus",
                neuter: "quibus"
            },
        },
        accusative: {
            singular: {
                masculine: "quem",
                feminine: "quam",
                neuter: "quod"
            },
            plural: {
                masculine: "quōs",
                feminine: "quās",
                neuter: "quae"
            },
        },
        ablative: {
            singular: {
                masculine: "quō",
                feminine: "quā",
                neuter: "quō"
            },
            plural: {
                masculine: "quibus",
                feminine: "quibus",
                neuter: "quibus"
            },
        }
    },
]

export {verbEndingStructure, verbFormList, nounFormList, pronounFormList}
















