# @mousepox/tiled

[Tiled map editor](https://www.mapeditor.org) helpers and [TypeScript](https://www.typescriptlang.org) definitions.

## Usage

```ts
import { ITiledObjectGroup, TiledMap } from "@mousepox/tiled";

// Create new TiledMap object from parsed Tiled JSON
const map = new TiledMap(parsedTiledJSON);

// Get an object group layer named "entities"
const entities = map.getLayerByName<ITiledObjectGroup>("entities");

// Get a custom map property
const foobar = map.getCustomPropertyValue<string>("foobar");
```
