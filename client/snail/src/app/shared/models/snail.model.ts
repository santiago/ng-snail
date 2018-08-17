export class SnailTry {
  public id: number;
  public h: number;
  public u: number;
  public d: number;
  public f: number;
  public date: string;
  public result: string;

  constructor(snailTry: any = null) {
    this.id = snailTry ? snailTry.id : null;
    this.h = snailTry ? snailTry.h : 0;
    this.u = snailTry ? snailTry.Name : 0;
    this.d = snailTry ? snailTry.Description : 0;
    this.f = snailTry ? snailTry.Category : 0;
    this.date = snailTry ? snailTry.date : null;
    this.result = snailTry ? snailTry.Price : null;
  }
}
