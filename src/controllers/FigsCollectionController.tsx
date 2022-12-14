import { FigsCollection } from "../types/FigsCollection";
import { FigStatusInCollection } from "../types/FigStatusInCollection";

export default class FigsCollectionController {
  private _figs: FigStatusInCollection[] = [
    { figNumber: 1,   figIsCollected: false,  figIsSpecial: false },
    { figNumber: 2,   figIsCollected: false,  figIsSpecial: false },
    { figNumber: 3,   figIsCollected: false,  figIsSpecial: false },
    { figNumber: 4,   figIsCollected: true,   figIsSpecial: false },
    { figNumber: 5,   figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 6,   figIsCollected: true,   figIsSpecial: false },
    { figNumber: 7,   figIsCollected: false,  figIsSpecial: false },
    { figNumber: 8,   figIsCollected: true,   figIsSpecial: false },
    { figNumber: 9,   figIsCollected: true,   figIsSpecial: false },
    { figNumber: 10,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 11,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 12,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 13,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 14,  figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 15,  figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 16,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 17,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 18,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 19,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 20,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 21,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 22,  figIsCollected: false,   figIsSpecial: false },
    { figNumber: 23,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 24,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 25,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 26,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 27,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 28,  figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 29,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 30,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 31,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 32,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 33,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 34,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 35,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 36,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 37,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 38,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 39,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 40,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 41,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 42,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 43,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 44,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 45,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 46,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 47,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 48,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 49,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 50,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 51,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 52,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 53,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 54,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 55,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 56,  figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 57,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 58,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 59,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 60,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 61,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 62,  figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 63,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 64,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 65,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 66,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 67,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 68,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 69,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 70,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 71,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 72,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 73,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 74,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 75,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 76,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 77,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 78,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 79,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 80,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 81,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 82,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 83,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 84,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 85,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 86,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 87,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 88,  figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 89,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 90,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 91,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 92,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 93,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 94,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 95,  figIsCollected: false,  figIsSpecial: false },
    { figNumber: 96,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 97,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 98,  figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 99,  figIsCollected: true,   figIsSpecial: false },
    { figNumber: 100, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 101, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 102, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 103, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 104, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 105, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 106, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 107, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 108, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 109, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 110, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 111, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 112, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 113, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 114, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 115, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 116, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 117, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 118, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 119, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 120, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 121, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 122, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 123, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 124, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 125, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 126, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 127, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 128, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 129, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 130, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 131, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 132, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 133, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 134, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 135, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 136, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 137, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 138, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 139, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 140, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 141, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 142, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 143, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 144, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 145, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 146, figIsCollected: true,   figIsSpecial: true  },
    { figNumber: 147, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 148, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 149, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 150, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 151, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 152, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 153, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 154, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 155, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 156, figIsCollected: false,  figIsSpecial: true  },
    { figNumber: 157, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 158, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 159, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 160, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 161, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 162, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 163, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 164, figIsCollected: true,   figIsSpecial: false },
    { figNumber: 165, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 166, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 167, figIsCollected: false,  figIsSpecial: false },
    { figNumber: 168, figIsCollected: false,  figIsSpecial: false },
  ];

  public obtainFigsCollection(): FigsCollection {
    return { figs: this._figs };
  }
}
