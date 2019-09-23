import { ITiledLayer, ITiledMap, ITiledObject, ITiledObjectGroup } from "./tiled";

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

  /** Get an object's tile coordinates */
  public getObjectTileCoordinates(object: ITiledObject): { x: number, y: number } {
    const x = Math.floor(object.x / this.data.tilewidth);
    let y = Math.floor(object.y / this.data.tileheight);

    if (object.gid !== undefined) { y--; }

    return { x, y };
  }

  /** Get an object from an object layer by their names */
  public getObjectByName(layerName: string, objectName: string): ITiledObject | undefined {
    const layer = this.getLayerByName<ITiledObjectGroup>(layerName);
    if (layer !== undefined && layer.type === "objectgroup") {
      for (const object of layer.objects) {
        if (object.name === objectName) {
          return object;
        }
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
