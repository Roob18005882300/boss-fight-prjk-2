// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0f000f00030202020202020102020202020209040b0c0c0c0c0c0c0c0c0c0c0c1208040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d08040f0a0a0a0a0a0a0a0a0a0a0a0d0804100e0e0e0e0e0e0e0e0e0e0e1108050606060606060606060606060607`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.doorOpenNorth,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
