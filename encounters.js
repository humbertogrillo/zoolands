const rooms = [
    {
        order: 1,
        rolls:[
            {
                type: "creature",
                name: "gosma",
                picture: "",
                stats: {
                    attack: -2,
                    life: 2,
                    align: 0 // 0 = sempre ataca, 5 = sempre ajuda
                }
            },
            {
                type: "item",
                name: "adaga",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 1
                }
            },
            {
                type: "creature",
                name: "fada",
                picture: "",
                stats: {
                    attack: -2,
                    life: 3,
                    align: 3
                }
            },
            {
                type: "item",
                name: "manopla",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 1,
                }
            },
            {
                type: "creature",
                name: "arbusto",
                picture: "",
                stats: {
                    attack: -2,
                    special: ["sleep"],
                    life: 4,
                    align: 1
                }
            },
            {
                type: "item",
                name: "pulseira",
                picture: "",
                stats: {
                    type: "acessory",
                    where: "hand",
                    bonus: 1,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 2,
        rolls:[
            {
                type: "creature",
                name: "besouro",
                picture: "",
                stats: {
                    attack: -2,
                    life: 5,
                    align: 1
                }
            },
            {
                type: "item",
                name: "arco",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 1,
                    special: ["first"]
                }
            },
            {
                type: "creature",
                name: "aranha",
                picture: "",
                stats: {
                    attack: -2,
                    life: 6,
                    align: 1
                }
            },
            {
                type: "item",
                name: "botas",
                picture: "",
                stats: {
                    type: "armour",
                    where: "feet",
                    bonus: 1
                }
            },
            {
                type: "creature",
                name: "sanguessuga",
                picture: "",
                stats: {
                    attack: -2,
                    special: ["drain"],
                    life: 2,
                    align: 1
                }
            },
            {
                type: "item",
                name: "anel",
                picture: "",
                stats: {
                    type: "acessory",
                    where: "hand",
                    bonus: 1,
                    attribute: "life"

                }
            }
        ]
    },
    {
        order: 3,
        rolls:[
            {
                type: "creature",
                name: "morcego",
                picture: "",
                stats: {
                    attack: -2,
                    special: ["sleep"],
                    life: 3,
                    align: 2
                }
            },
            {
                type: "item",
                name: "cajado",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 2
                }
            },
            {
                type: "creature",
                name: "fogo-fatuo",
                picture: "",
                stats: {
                    attack: -2,
                    special: ["ethereal"],
                    life: 4,
                    align: 3
                }
            },
            {
                type: "item",
                name: "joelheiras",
                picture: "",
                stats: {
                    type: "armour",
                    where: "legs",
                    bonus: 2
                }
            },
            {
                type: "creature",
                name: "goblin",
                picture: "",
                stats: {
                    attack: -2,
                    special: ["horde"],
                    life: 5,
                    align:2
                }
            },
            {
                type: "item",
                name: "colar",
                picture: "",
                stats: {
                    type: "acessory",
                    where: "head",
                    bonus: 2,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 4,
        rolls:[
            {
                type: "creature",
                name: "esqueleto",
                picture: "",
                stats: {
                    attack: -2,
                    special: ["critical"],
                    life: 6,
                    align: 0
                }
            },
            {
                type: "item",
                name: "cimitarra",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 2
                }
            },
            {
                type: "creature",
                name: "anfibio",
                picture: "",
                stats: {
                    attack: -1,
                    special: ["poison"],
                    life: 2,
                    align: 3
                }
            },
            {
                type: "item",
                name: "cotoveleira",
                picture: "",
                stats: {
                    type: "armour",
                    where: "arms",
                    bonus: 2
                }
            },
            {
                type: "creature",
                name: "tritão",
                picture: "",
                stats: {
                    attack: -1,
                    life: 3,
                    align: 4
                }
            },
            {
                type: "item",
                name: "pingente",
                picture: "",
                stats: {
                    type: "acessory",
                    where: "head",
                    bonus: 2,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 5,
        rolls:[
            {
                type: "creature",
                name: "fantasma",
                picture: "",
                stats: {
                    attack: -1,
                    special: ["ethereal"],
                    life: 4,
                    align: 0
                }
            },
            {
                type: "creature",
                name: "zumbi",
                picture: "",
                stats: {
                    attack: -1,
                    special: ["horde"],
                    life: 5,
                    align: 0
                }
            },
            {
                type: "creature",
                name: "kobold",
                picture: "",
                stats: {
                    attack: -1,
                    special: ["horde"],
                    life: 6,
                    align: 2
                }
            },
            {
                type: "creature",
                name: "diabrete",
                picture: "",
                stats: {
                    attack: -1,
                    life: 2,
                    align: 1
                }
            },
            {
                type: "creature",
                name: "gnol",
                picture: "",
                stats: {
                    attack: -1,
                    life: 3,
                    align: 2
                }
            },
            {
                type: "creature",
                name: "mimico",
                picture: "",
                stats: {
                    attack: -1,
                    special: ["hiden"],
                    life: 4,
                    align: 0
                }
            }
        ]
    },
    {
        order: 6,
        rolls:[
            {
                type: "creature",
                name: "reptil",
                picture: "",
                stats: {
                    attack: -1,
                    life: 5,
                    align: 2
                }
            },
            {
                type: "item",
                name: "besta",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 3,
                    special: ["first"]
                }
            },
            {
                type: "creature",
                name: "aviano",
                picture: "",
                stats: {
                    attack: -1,
                    life: 6,
                    align: 4
                }
            },
            {
                type: "item",
                name: "capacete",
                picture: "",
                stats: {
                    type: "armour",
                    where: "head",
                    bonus: 3
                }
            },
            {
                type: "creature",
                name: "vampiro",
                picture: "",
                stats: {
                    attack: 0,
                    special: ["drain"],
                    life: 2,
                    align: 1
                }
            },
            {
                type: "item",
                name: "pergaminho",
                picture: "",
                stats: {
                    type: "consumable",
                    bonus: 3,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 7,
        rolls:[
            {
                type: "creature",
                name: "urso",
                picture: "",
                stats: {
                    attack: 0,
                    life: 4,
                    special: ["hold"],
                    align: 2
                }
            },
            {
                type: "item",
                name: "cetro",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 3,
                    special: ["first"]
                }
            },
            {
                type: "creature",
                name: "gargula",
                picture: "",
                stats: {
                    attack: 0,
                    life: 5,
                    align: 0
                }
            },
            {
                type: "item",
                name: "peitoral",
                picture: "",
                stats: {
                    type: "armour",
                    where: "breast",
                    bonus: 3
                }
            },
            {
                type: "creature",
                name: "ogro",
                picture: "",
                stats: {
                    attack: 0,
                    life: 6,
                    align: 1
                }
            },
            {
                type: "item",
                name: "talismã",
                picture: "",
                stats: {
                    type: "acessory",
                    where: "head",
                    bonus: 3,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 8,
        rolls:[
            {
                type: "creature",
                name: "centauro",
                picture: "",
                stats: {
                    attack: 0,
                    life: 2,
                    align: 3
                }
            },
            {
                type: "item",
                name: "katana",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 4
                }
            },
            {
                type: "creature",
                name: "minotauro",
                picture: "",
                stats: {
                    attack: 0,
                    life: 3,
                    align: 2
                }
            },
            {
                type: "item",
                name: "peitoral",
                picture: "",
                stats: {
                    type: "armour",
                    where: "breast",
                    bonus: 4
                }
            },
            {
                type: "creature",
                name: "quimera",
                picture: "",
                stats: {
                    attack: 0,
                    life: 4,
                    align: 2
                }
            },
            {
                type: "item",
                name: "runas",
                picture: "",
                stats: {
                    type: "consumable",
                    bonus: 4,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 9,
        rolls:[
            {
                type: "creature",
                name: "pesadelo",
                picture: "",
                stats: {
                    attack: 0,
                    special: ["ethereal"],
                    life: 5,
                    align: 0
                }
            },
            {
                type: "item",
                name: "maça",
                picture: "",
                stats: {
                    type: "weapon",
                    bonus: 4
                }
            },
            {
                type: "creature",
                name: "gigante",
                picture: "",
                stats: {
                    attack: 0,
                    life: 6,
                    align: 1
                }
            },
            {
                type: "item",
                name: "escudo",
                picture: "",
                stats: {
                    type: "armour",
                    where: "arms",
                    bonus: 4
                }
            },
            {
                type: "creature",
                name: "golem",
                picture: "",
                stats: {
                    attack: 0,
                    life: 2,
                    special: ["ethereal"],
                    align: 0
                }
            },
            {
                type: "item",
                name: "máscara",
                picture: "",
                stats: {
                    type: "acessory",
                    where: "head",
                    bonus: 4,
                    attribute: "life"
                }
            }
        ]
    },
    {
        order: 10,
        rolls:[
            {
                type: "creature",
                name: "elemental",
                picture: "",
                stats: {
                    attack: 1,
                    special: ["ethereal"],
                    life: 3,
                    align: 1
                }
            },
            {
                type: "creature",
                name: "basilisco",
                picture: "",
                stats: {
                    attack: 1,
                    special: ["poison"],
                    life: 4,
                    align: 1
                }
            },
            {
                type: "creature",
                name: "necromante",
                picture: "",
                stats: {
                    attack: 1,
                    special: ["ethereal"],
                    life: 5,
                    align: 0
                }
            },
            {
                type: "creature",
                name: "esfinge",
                picture: "",
                stats: {
                    attack: 1,
                    apecial: ["hold"],
                    life: 6,
                    align: 2
                }
            },
            {
                type: "creature",
                name: "hidra",
                picture: "",
                stats: {
                    attack: 1,
                    life: 5,
                    align:1
                }
            },
            {
                type: "creature",
                name: "dragão",
                picture: "",
                stats: {
                    attack: 1,
                    life: 6,
                    align: 2
                }
            }
        ]
    },
    
];