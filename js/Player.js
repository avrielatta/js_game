export class Player {

    constructor(name, character, x, y) {
        this.name = name;
        this.character = character;
        this.x = x;
        this.y = y;
    }

    get name()                  { return this._name }
    get character()             { return this._character }
    get x()                     { return this._x }
    get y()                     { return this._y }

    set name(name)              { this._name = name }
    set character(character)    { this._character = character }
    set x(x)                    { this._x = x }
    set y(y)                    { this._y = y }

    updatePlayer(currentKeys) {
        if (currentKeys[0]) this.y -= 3;
        if (currentKeys[1]) this.x += 3;
        if (currentKeys[2]) this.y += 3;
        if (currentKeys[3]) this.x -= 3;
    }

}