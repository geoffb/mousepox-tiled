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

/** Tiled map */
export class TiledMap {

  /** Raw Tiled map data */
  public data: ITiledMap;

  constructor(data: ITiledMap) {
    this.data = data;
  }

  /** Get a layer by its name */
  public getLayerByName<T extends ITiledLayer>(name: string): T | undefined {
    for (const layer of this.data.layers) {
      if (layer.name === name) {
        return layer as T;
      }
    }
    return undefined;
  }

  /** Get the value of a custom property */
  public getCustomPropertyValue<T>(name: string): T | undefined {
    for (const prop of this.data.properties) {
      if (prop.name === name) {
        return prop.value;
      }
    }
    return undefined;
  }

}
