'use strict';
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let characterSchema = Schema({
  account: String,
  campaign: String,
  retired: Boolean,
  description: {
    name: String,
    class: String,
    level: {type: Number, default: 0},
    alignment: String,
    race: String,
    subrace: String,
    diety:String,
    size: String,
    height: String,
    weight: {type: Number, default: 0},
    gender: String,
    currentXP: {type: Number, default: 0},
    neededXP: {type: Number, default: 0},
    speed: {type: Number, default: 0}
  },
  baseStats: [
    {
      name: String,
      score: {type: Number, default: 0},
      tempScore: {type: Number, default: 0}
    }
  ],
  health: {
    hpMax: {type: Number, default: 0},
    hpCurrent: {type: Number, default: 0}
  },
  ac: {
    natAc: {type: Number, default: 0},
    misc: Array //array of integers.
  },
  bab: {
    one: {type: Number, default: 0},
    two: {type: Number, default: 0},
    three: {type: Number, default: 0},
    four:{type: Number, default: 0}
  },
  initiative: {
    misc: Array //array of integers (will need to be able to dynamically add)
  },
  attack: [
    {
      name: String,
      misc: Array, //array of ints
      temp: Array,
    }
  ],
  saves:[
    {
      name: String,
      magic: {type: Number, default: 0},
      misc: Array,
      temp: {type: Number, default: 0},
    }
  ],
  weapons: [
    {
      name: String,
      damage: String,
      crit: String,
      attBonus: {type: Number, default: 0},
      rangeInc: {type: Number, default: 0},
      dmgType: String,
      weight: {type: Number, default: 0},
      location: String,
      description: String,
      modifiers: {
        skills:[
          {
            skill: String,
            mod: {type: Number, default: 0}
          }
        ],
        stats: [
          {
            stat: String,
            mod: {type: Number, default: 0}
          }
        ]
      }
    }
  ],
  armor: [
    {
      name: String,
      slotType: String,
      ac: {type: Number, default: 0},
      maxDex: {type: Number, default: 0},
      checkPen: {type: Number, default: 0},
      spellfail: {type: Number, default: 0},
      speed: {type: Number, default: 0},
      weight: {type: Number, default: 0},
      equipped: Boolean,
      location: String,
      description: String,
      modifiers: {
        skills:[
          {
            skill: String,
            mod: {type: Number, default: 0}
          }
        ],
        stats: [
          {
            stat: String,
            mod: {type: Number, default: 0}
          }
        ]
      }
    }
  ],
  inventory: [
    {
      name: String,
      weight: {type: Number, default: 0},
      price: {type: Number, default: 0},
      qty: {type: Number, default: 0},
      location: String,
      description: String,
      modifiers: {
        skills:[
          {
            skill: String,
            mod: {type: Number, default: 0}
          }
        ],
        stats: [
          {
            stat: String,
            mod: {type: Number, default: 0}
          }
        ]
      }
    }
  ],
  currency:{
    p:{
      value: {type: Number, default: 0},
      mod: {type: Number, default: 100}
    },
    g:{
      value: {type: Number, default: 0},
      mod: {type: Number, default: 10}
    },
    s: {
      value: {type: Number, default: 0},
      mod: {type: Number, default: 1}
    },
    c:{
      value: {type: Number, default: 0},
      mod: {type: Number, default: 0.1}
    }
  },
  feats: [
    {
      name: String,
      description: String
    }
  ],
  skills: {
    ranksMax: {type: Number, default: 0},
    pointsMax: {type: Number, default: 0},
    skillList: [
      {
        name: String,
        mod: String,
        ranks: {type: Number, default: 0},
        misc: Array,
        classSkill: Boolean,
        penMod: {type: Number, default: 0}
      }
    ]
  },
  spells:{
    0: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistence: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ], //0 lvl
    1: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    2: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    3: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    4: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    5: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    6: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    7: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    8: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
    9: [
      {
        name:String,
        prepared: {type: Number, default: 0},
        components: {
          verbal: Boolean,
          somatic: Boolean,
          material: Boolean,
          focus: Boolean,
          xp: Boolean
        },
        castTime: String,
        range: String,
        target: String,
        duration: String,
        saveType: String,
        resistace: String,
        description: String,
        modifiers: {
          skills:[
            {
              skill: String,
              mod: {type: Number, default: 0}
            }
          ],
          stats: [
            {
              stat: String,
              mod: {type: Number, default: 0}
            }
          ]
        }
      }
    ],
  }, //spells
  notes:{
    general:String,
    private: String,
    custom:[
      {
        title: String,
        description:String
      }
    ]
  },
  contacts: [
    {
      name: String,
      description: String,
      attitude: String,
      color: String //lets you sort by color???
    }
  ],
  locations: [
    {
      name: String,
      maxWeight: {type: Number, default: 0}
    }
  ]
});

module.exports = mongoose.model('Character', characterSchema);