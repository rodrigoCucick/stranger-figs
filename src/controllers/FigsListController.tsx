import { FigData } from "../types/FigData";

export default class FigsListController {    
  private createFig(
    figImgUrl: string,
    figNumber: number,
    figQntAvailable: number,
    figTags: string[]): FigData {
      return { figImgUrl, figNumber, figQntAvailable, figTags };
  }

  public createSeasonOneFigs(): FigData[] {
    return [
      this.createFig("./res/8.jpg", 8, 1, ["Season 1","Pág. 2"]),
      this.createFig("./res/9.jpg", 9, 1, ["Season 1","Pág. 2"]),
      this.createFig("./res/12.jpg", 12, 1, ["Season 1","Pág. 3"]),
      this.createFig("./res/13.jpg", 13, 1, ["Season 1","Pág. 3"]),
      this.createFig("./res/15.jpg", 15, 1, ["Especial", "Season 1","Pág. 4"]),
      this.createFig("./res/17.jpg", 17, 1, ["Season 1","Pág. 4"]),
      this.createFig("./res/21.jpg", 21, 1, ["Season 1","Pág. 5"]),
      this.createFig("./res/28.jpg", 28, 1, ["Especial", "Season 1","Pág. 6"])
    ];
  }

  public createSeasonTwoFigs(): FigData[] {
    return [
      this.createFig("./res/46.jpg", 46, 1, ["Season 2","Pág. 10"]),
      this.createFig("./res/47.jpg", 47, 1, ["Season 2","Pág. 10"]),
      this.createFig("./res/51.jpg", 51, 1, ["Season 2","Pág. 11"]),
      this.createFig("./res/62.jpg", 62, 1, ["Especial", "Season 2","Pág. 13"]),
      this.createFig("./res/68.jpg", 68, 1, ["Season 2","Pág. 14"]),
      this.createFig("./res/72.jpg", 72, 1, ["Season 2","Pág. 15"])
    ];
  }

  public createSeasonThreeFigs(): FigData[] {
    return [
      this.createFig("./res/117.jpg", 117, 1, ["Season 3","Pág. 23"]),
      this.createFig("./res/129.jpg", 129, 1, ["Especial", "Season 3","Pág. 25"])
    ];
  }

  public createSeasonFourFigs(): FigData[] {
    return [
      this.createFig("./res/160.jpg", 160, 1, ["Season 4","Pág. 31"])
    ];
  }
}
