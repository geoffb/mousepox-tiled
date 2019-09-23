/** These types and interfaces map to Tiled's JSON format */

/** Tiled custom property types */
export type TiledCustomPropertyType = "color" | "bool" | "string";

/** Tiled layer types */
export type TiledLayerType = "tilelayer" | "objectgroup";

/** Tiled map */
export interface ITiledMap {
  backgroundcolor: string;
  infinite: boolean;
  width: number;
  height: number;
  layers: ITiledLayer[];
  properties: ITiledCustomProperty[];
  tilewidth: number;
  tileheight: number;
}

/** Tiled custom property */
export interface ITiledCustomProperty {
  name: string;
  type: TiledCustomPropertyType;
  value: any;
}

/** Tiled layer */
export interface ITiledLayer {
  id: number;
  name: string;
  type: TiledLayerType;
  opacity: number;
  visible: boolean;
  x: number;
  h: number;
}

/** Tiled tile layer */
export interface ITiledTileLayer extends ITiledLayer {
  type: "tilelayer";
  data: number[];
  width: number;
  height: number;
}

/** Tiled object group */
export interface ITiledObjectGroup extends ITiledLayer {
  type: "objectgroup";
  objects: ITiledObject[];
}

/** Tile object */
export interface ITiledObject {
  id: number;
  name: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  visible: boolean;
  gid?: number;
}
