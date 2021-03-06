import React from 'react';

import FlexLayout from "flexlayout-react";
import style from "../../node_modules/flexlayout-react/style/light.css"; 
import TilesetMenu from "../ui/tileset/TilesetMenu";
import AddTilesetDialog from "../ui/tileset/AddTilesetDialog";
import TilesetViews from "../ui/tileset/TilesetViews";

import UIStore from "../store/UIStore";
import ModelStore from "../store/ModelStore";

var json = {
	global: {
    "tabSetEnableDrag": false,
    "tabEnableDrag": false,
    "tabSetEnableMaximize": false,
  },
	borders: [],
	layout:{
    "type": "row",
    "weight": 100, 
    "children": [
      {
        "type": "tabset",
        "weight": 100,
        "children": [{
          "type": "tab",
          "weight": 100,
          "name": "123",
          "component": "sub",
          "config": {
              "model": {
                "global": {
                  "tabSetEnableDrag": false,
                  "tabEnableDrag": false,
                  "tabSetEnableMaximize": false,
                },
                "layout": {
                  "type": "row",
                  "children": [
                    {
                      "type": "tabset",
                      "weight": 15,
                      "selected": 0,
                      "children": [
                        {
                          "type": "tab",
                          "name": "Properties",
                          "component":"grid",
                        }
                      ]
                    },
                    {
                      "type": "tabset",
                      "weight": 70,
                      "selected": 0,
                      "enableTabStrip": false,
                      "children": [
                        {
                          "type": "tab",
                          "name": "main",
                          "component":"grid",
                        }
                      ]
                    },
                    {
                      "type": "row",
                      "weight": 15,
                      "selected": 0,
                      "children": [
                        {
                          "type": "tabset",
                          "children": [
                            {
                              "type": "tab",
                              "name": "minimap"
                            }
                          ]
                        },
                        {
                          "type": "tabset",
                          "children": [
                            {
                              "type": "tab",
                              "name": "layer",
                              "component": "ant_icon",
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                "borders": []
              }
          }
          
        }]
      }
    ]
  }
};
class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {model: FlexLayout.Model.fromJson(json)};
    }

    factory(node) {
        var component = node.getComponent();
        if (component === "button") {
            return <div>{node.getName()}</div>;
        } else if (component === "sub") {
          var model = node.getExtraData().model;
          if (model == null) {
              node.getExtraData().model = FlexLayout.Model.fromJson(node.getConfig().model);
              model = node.getExtraData().model;
              // save submodel on save event
              node.setEventListener("save", function(p) {
                      node.getConfig().model = node.getExtraData().model.toJson();
                  }
              );
          }

          return <FlexLayout.Layout model={model} factory={this.factory.bind(this)}/>;
        } else if (component === "ant_icon") {
          return <div>
            <TilesetMenu store={UIStore}/>
            <TilesetViews 
              model_store={ModelStore.tilesets} 
              ui_store={UIStore.tilesets}
            />
            <AddTilesetDialog ui_store={UIStore} model_store={ModelStore.tilesets}/>
          </div>;
        }

    }

    render() {
        return (
            <FlexLayout.Layout model={this.state.model} factory={this.factory.bind(this)}/>
        )
    }
}
export default Grid;