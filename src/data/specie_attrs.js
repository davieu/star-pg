import React, {
  Component
} from "react";
const SpeciesAttr = {
  results: {}
  species: [{
      species: "Hutt",
      attrs: {
        STR: 0,
        DEX: -1,
        CON: 4,
        WIS: 1,
        CHA: 2
      }
      },
      {
      species: "Yoda's Species",
      attrs: {
        STR: 0,
        DEX: 0,
        CON: 3,
        WIS: 4,
        CHA: 2
      }
      },
      {
      species: "Trandoshan",
      attrs: {
        STR: 3,
        DEX: 1,
        CON: 3,
        WIS: 0,
        CHA: 0
      }
      },
      {
      species: "Mon Calamari",
      attrs: {
        STR: 3,
        DEX: 3,
        CON: 1,
        WIS: 1,
        CHA: 1
      }
      },
      {
      species: "Ewok",
      attrs: {
        STR: 0,
        DEX: 3,
        CON: 1,
        WIS: -1,
        CHA: 2
      }
      },
      {
      species: "Sullustan",
      attrs: {
        STR: 2,
        DEX: 2,
        CON: 2,
        WIS: 0,
        CHA: 0
      }
      },
      {
      species: "Neimodian",
      attrs: {
        STR: 2,
        DEX: 2,
        CON: 2,
        WIS: 0,
        CHA: 3
      }
      },
      {
      species: "Gungan",
      attrs: {
        STR: 2,
        DEX: 4,
        CON: 1,
        WIS: 0,
        CHA: 1
    }
    },
    {
      species: "Toydarian",
      attrs: {
        STR: 0,
        DEX: 3,
        CON: 4,
        WIS: 3,
        CHA: 0
    }
    },
    {
    species: "Dug",
    attrs: {
      STR: 2,
      DEX: -1,
      CON: 1,
      WIS: 1,
      CHA: 0
    }
    },
    {
    species: "Twi'lek",
    attrs: {
      STR: 1,
      DEX: 4,
      CON: 1,
      WIS: 1,
      CHA: 2
    }
    },
    {
    species: "Aleena",
    attrs: {
      STR: 2,
      DEX: 3,
      CON: 1,
      WIS: 2,
      CHA: 2
    }
    },
    {
    species: "Vulptereen",
    attrs: {
      STR: 1,
      DEX: 3,
      CON: 1,
      WIS: 3,
      CHA: 3
    }
    },
    {
    species: "Xexto",
    attrs: {
      STR: 1,
      DEX: 2,
      CON: 0,
      WIS: 1,
      CHA: 4
    }
    },
    {
    species: "Toong",
    attrs: {
      STR: 1,
      DEX: 3,
      CON: 1,
      WIS: 0,
      CHA: 3
    }
    },
    {
    species: "Cerean",
    attrs: {
      STR: 1,
      DEX: 4,
      CON: 1,
      WIS: 2,
      CHA: 1
    }
    },
    {
    species: "Nautolan",
    attrs: {
      STR: 0,
      DEX: 5,
      CON: 2,
      WIS: 1,
      CHA: 1
    }
    },
    {
    species: "Zabrak",
    attrs: {
      STR: 3,
      DEX: 2,
      CON: 1,
      WIS: 1,
      CHA: 2
    }
    },
    {
    species: "Tholothian",
    attrs: {
      STR: 3,
      DEX: 2,
      CON: 1,
      WIS: 3,
      CHA: 0
    }
    },
    {
    species: "Iktotchi",
    attrs: {
      STR: 0,
      DEX: 1,
      CON: 3,
      WIS: 4,
      CHA: 1
    }
    },
    {
    species: "Quermian",
    attrs: {
      STR: 2,
      DEX: 1,
      CON: 4,
      WIS: 2,
      CHA: 0
    }
    },
    {
    species: "Kel Dor",
    attrs: {
      STR: 1,
      DEX: 0,
      CON: 4,
      WIS: 5,
      CHA: 1
    }
    },
    {
    species: "Chagrian",
    attrs: {
      STR: 4,
      DEX: 0,
      CON: 2,
      WIS: 2,
      CHA: 1
    }
    },
    {
    species: "Geonosian",
    attrs: {
      STR: 2,
      DEX: 2,
      CON: 2,
      WIS: 2,
      CHA: 1
    }
    },
    {
    species: "Mirialan",
    attrs: {
      STR: 1,
      DEX: 3,
      CON: 2,
      WIS: 3,
      CHA: 2
    }
    },
    {
    species: "Clawdite",
    attrs: {
      STR: 2,
      DEX: 1,
      CON: 1,
      WIS: 2,
      CHA: 3
    }
    },
    {
    species: "Besalisk",
    attrs: {
      STR: 4,
      DEX: 4,
      CON: 0,
      WIS: 0,
      CHA: 1
    }
    },
    {
    species: "Kaminoan",
    attrs: {
      STR: 2,
      DEX: 1,
      CON: 4,
      WIS: 2,
      CHA: 0
    }
    },
    {
    species: "Skakoan",
    attrs: {
      STR: 3,
      DEX: 1,
      CON: 2,
      WIS: 2,
      CHA: 1
    }
    },
    {
    species: "Muun",
    attrs: {
      STR: 1,
      DEX: 3,
      CON: 1,
      WIS: 1,
      CHA: 3
    }
    },
    {
    species: "Pau'an",
    attrs: {
      STR: 1,
      DEX: 3,
      CON: 2,
      WIS: 2,
      CHA: 1
    }
    },
    {
    species: "Human",
    attrs: {
      STR: 2,
      DEX: 2,
      CON: 1,
      WIS: 1,
      CHA: 3
    }
    },
    {
    species: "Droid",
    attrs: {
      STR: 0,
      DEX: -1,
      CON: 2,
      WIS: 3,
      CHA: 0
    }
    },
    {
    species: "Wookiee",
    attrs: {
      STR: 4,
      DEX: 0,
      CON: 2,
      WIS: 2,
      CHA: -1
    }
    },
    {
    species: "Rodian",
    attrs: {
      STR: 2,
      DEX: 1,
      CON: 3,
      WIS: 0,
      CHA: 0
    }
    },
    {
    species: "Kaleesh",
    attrs: {
      STR: 2,
      DEX: 2,
      CON: 3,
      WIS: 1,
      CHA: 1
    }
    },
    {
    species: "Togruta",
    attrs: {
      STR: 1,
      DEX: 3,
      CON: 2,
      WIS: 1,
      CHA: 1
    }
    },
]}
export default SpeciesAttr;
