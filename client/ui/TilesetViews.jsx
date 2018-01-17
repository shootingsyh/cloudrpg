import { Tabs } from 'antd';
import React from 'react';
import _ from 'lodash'
import {observer} from 'mobx-react';

const TabPane = Tabs.TabPane;

@observer
class TilesetViews extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange = (active_key) => {
        this.props.ui_store.active_key = active_key;
    }
    onEdit = (targetKey, action) => {
        console.log(targetKey, action);
        let idx = parseInt(targetKey);
        if (action === "remove" && !isNaN(idx)) {
            this.props.model_store.remove(this.props.model_store[idx]);
        }
    }
    render() {
        return this.props.model_store.length > 0 ? (
            <Tabs
              onChange={this.onChange}
              activeKey={this.props.ui_store.active_key}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.props.model_store.map(
                  (tile, key) => <TabPane tab={tile.name} key={key.toString()} closable={true}>{tile.name}</TabPane>
              )}
            </Tabs>
          ) : null;
    }
}
export default TilesetViews;