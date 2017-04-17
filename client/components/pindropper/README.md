# PinDropper

PinDropper is the culmination of several management tools for D&D 3.5 edition
for using and maintaining a campaign.

## Features of PinDropper:

 1. MapLayer - (Planned)
 2. MapTools - (Planned)
 3. DrawTools - (Planned)
 4. Settings Area - (In Progress)
 5. Character Sheet - (In Progress)
 6. Dungeon Master Variants for each section - (Planned)
 7. Google Hangouts API integration - (Planned)
 8. Dice Roll Simulator - (Planned)

### MapLayer

This Contains the map area split into a scalable grid, with each cell containing
the ability for a sub grid of its own. This effect can be linklisted nLevels down.
New and independent maps can also be created at will.

- The Layer:
   - Contains:
     + `Grid Link` - Scalable grid that with each cell containing a link to a new
     "child" map layer. set up as a link list (JSON Object will probably contain linked ids)
     + `Drawing Pane` - The layer that lets lines, shapes, colors, etc to be
     added via brushes and other tools (similar to paint)
     + `Image Pane` - The Layer that holds an image which has the `Grid Link` and
     `Drawing Pane` layers transparently overlayed on top of it.

- Each Cell:
  - Acts as a link to a "local" map of that area, which loads a different map & id..


### MapTools
### DrawTools
### Settings Area
### Character Sheet
### Dungeon Master Variants for each section
### Google Hangouts API integration
### Dice Roll Simulator