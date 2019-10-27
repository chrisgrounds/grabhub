export default class Card {
  _title: string;
  _subtitle: string;
  _language: string;
  _imgSrc: string;
  _href: string;
  _stars: string;

  constructor(
    _title: string, 
    _subtitle: string,
    _language: string, 
    _imgSrc: string, 
    _href: string, 
    _stars: string
  ){
    this._title = _title;
    this._subtitle = _subtitle;
    this._language = _language;
    this._imgSrc = _imgSrc;
    this._href = _href;
    this._stars = _stars;
  }

  public get title(): string {
    return this._title;
  }

  public get subtitle(): string {
    return this._subtitle;
  }

  public get language(): string {
    return this._language;
  }

  public get imgSrc(): string {
    return this._imgSrc;
  }

  public get href(): string {
    return this._href;
  }

  public get stars(): string {
    return this._stars;
  }
}
