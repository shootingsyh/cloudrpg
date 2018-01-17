import React from 'react';
import {Button, List} from "antd";

export default class TilesetMenu extends React.Component {
    showDialog = () => {
        this.props.store.dialogs.tileset_dialog.visible = true;
    }
    render() {
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
