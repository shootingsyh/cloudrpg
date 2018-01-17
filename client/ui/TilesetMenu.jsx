import React from 'react';
import {Button, List} from "antd";
import UIStore from '../store/UIStore';

export default class TilesetMenu extends React.Component {
    showDialog = () => {
        UIStore.dialogs.tileset_dialog.visible = true
    }
    render() {
        let UIStore = this.props.store;
        let data = [
            <Button 
                icon="file-add" 
                onClick={this.showDialog}/>,
            <Button icon="delete" />,
        ];
        return <List 
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => item}
            style={{margin:"10px"}}
        />;
    }
};
