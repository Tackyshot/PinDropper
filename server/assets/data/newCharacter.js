module.exports = {
  account: '', //USERNAME GOES HERE
  campaign: '', //CAMPAIGN NAME GOES HERE
  retired: false,
  description: {
    name: '',
    class: '',
    level: 0,
    alignment: '',
    race: '',
    subrace: '',
    diety:'',
    size: '',
    height: '',
    weight: 0,
    gender: '',
    currentXP: 0,
    neededXP: 0,
    speed: 0
  },
  baseStats: [
    {
      name: 'str',
      score: 0,
      tempScore: 0
    },
    {
      name: 'dex',
      score: 0,
      tempScore: 0
    },
    {
      name: 'con',
      score: 0,
      tempScore: 0
    },
    {
      name: 'int',
      score: 0,
      tempScore: 0
    },
    {
      name: 'wis',
      score: 0,
      tempScore: 0
    },
    {
      name: 'cha',
      score: 0,
      tempScore: 0
    }
  ],
  health: {
    hpMax: 0,
    hpCurrent: 0
  },
  ac: {
    natAc: 0,
    misc: [] //array of integers.
  },
  bab: {
    one: 0,
    two: 0,
    three: 0,
    four:0
  },
  initiative: {
    misc: [] //array of integers (will need to be able to dynamically add)
  },
  attack: [
    {
      name: 'melee',
      misc: [], //array of ints
      temp: [],
    },
    {
      name: 'range',
      misc: [], //array of ints
      temp: [],
    },
    {
      name: 'grapple',
      misc: [], //array of ints
      temp: [],
    }
  ],
  saves:[
    {
      name: 'fort',
      magic: 0,
      misc: [],
      temp: 0,
    },
    {
      name: 'ref',
      magic: 0,
      misc: [],
      temp: 0,
    },
    {
      name: 'will',
      magic: 0,
      misc: [],
      temp: 0,
    }
  ],
  weapons: [
    {
      name: '',
      damage: '',
      crit: '',
      attBonus: 0,
      rangeInc: 0,
      dmgType: '',
      weight: 0,
      location: '',
      description: '',
      modifiers: {
        skills:[
          {
            skill: '',
            mod: 0
          }
        ],
        stats: [
          {
            stat: '',
            mod: 0
          }
        ]
      }
    }
  ],
  armor: [
    {
      name: '',
      slotType: '',
      ac: 0,
      maxDex: 0,
      checkPen: 0,
      spellfail: 0,
      speed: 0,
      weight: 0,
      equipped: false,
      location: '',
      description: '',
      modifiers: {
        skills:[
          {
            skill: '',
            mod: 0
          }
        ],
        stats: [
          {
            stat: '',
            mod: 0
          }
        ]
      }
    }
  ],
  inventory: [
    {
      name: '',
      weight: 0,
      price: 0,
      qty: 0,
      location: '',
      description: '',
      equipped: false,
      modifiers: {
        skills:[
          {
            skill: '',
            mod: 0
          }
        ],
        stats: [
          {
            stat: '',
            mod: 0
          }
        ]
      }
    }
  ],
  currency:[
    {
      name: 'platinum',
      value: 0,
      mod: 10
    },
    {
      name: 'gold',
      value: 0,
      mod: 1
    },
    {
      name: 'silver',
      value: 0,
      mod: 0.1
    },
    {
      name: 'copper',
      value: 0,
      mod: 0.01
    }
  ],
  feats: [
    {
      name: '',
      description: '',
      modifiers: {
        skills:[
          {
            skill: '',
            mod: 0
          }
        ],
        stats: [
          {
            stat: '',
            mod: 0
          }
        ]
      }
    }
  ],
  skills: {
    ranksMax: 0,
    pointsMax: 0,
    skillList: [
      {
        name: '',
        mod: '', //refrences str or cha or something.
        ranks: 0,
        misc: [],
        classSkill: false,
        penMod: 0
      }
    ]
  },
  spells:{
    0: [
      {
        name:'',
        prepared: 0,
        preparedAt: 0,
        components: {
          verbal: false,
          somatic: false,
          material: false,
          focus: false,
          xp: false
        },
        castTime: '',
        range: '',
        target: '',
        duration: '',
        saveType: '',
        resistence: '',
        description: '',
        modifiers: {
          skills:[
            {
              skill: '',
              mod: 0
            }
          ],
          stats: [
            {
              stat: '',
              mod: 0
            }
          ]
        }
      }
    ], //0 lvl
  }, //spells
  notes:[
    {
      type: 'prebaked',
      notes:[
        {
          title: 'general',
          private: false,
          description: ''
        },
        {
          title: 'private',
          private: true,
          description: ''
        }
      ]
    },
    {
      type: 'custom',
      notes: [
        {
          title: 'custom title',
          private: false,
          description: 'custom description'
        }
      ]
    }
  ],
  contacts: [
    {
      name: '',
      description: '',
      attitude: '',
      color: '' //lets you sort by color???
    }
  ],
  locations: [
    {
      name: '',
      maxWeight: 0
    }
  ]

}