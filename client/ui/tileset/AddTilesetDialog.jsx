import React from 'react';
import { Modal, Input, InputNumber} from 'antd';
import {observer} from 'mobx-react';
import Tileset from '../../model/Tileset';

export default observer(class AddTilesetDialog extends React.Component {
    constructor() {
        super();
    }
    onCancel = () => {
        this.clearDialog();
    }
    onOK = () => {
        let dialog_setting = this.props.ui_store.dialogs.tileset_dialog;
        this.props.model_store.push(new Tileset(
            dialog_setting.name,
            dialog_setting.pic,
            dialog_setting.width,
            dialog_setting.height
        ));
        this.props.ui_store.tilesets.active_key = (this.props.model_store.length - 1).toString();
        this.clearDialog();
    }
    clearDialog() {
        let dialog_setting = this.props.ui_store.dialogs.tileset_dialog;
        dialog_setting.visible = false;
        dialog_setting.pic = '';
        dialog_setting.width = 0;
        dialog_setting.height = 0;
        dialog_setting.name = '';
    }

    onNameChange = (e) => {
        this.props.ui_store.dialogs.tileset_dialog.name = e.target.value;
    }
    onPicChange = (e) => {
        this.props.ui_store.dialogs.tileset_dialog.pic = e.target.value;
    }
    onWidthChange = (e) => {
        this.props.ui_store.dialogs.tileset_dialog.width = e;
    }
    onHeightChange = (e) => {
        this.props.ui_store.dialogs.tileset_dialog.height = e;
    }
    render() {
        return <Modal
            title="Add Tileset"
            visible={this.props.ui_store.dialogs.tileset_dialog.visible}
            onOk={this.onOK}
            onCancel={this.onCancel}
            >
            <Input 
                placeholder="Tileset name" 
                value={this.props.ui_store.dialogs.tileset_dialog.name} 
                onChange={this.onNameChange}
            />
            <Input 
                placeholder="Tileset pic" 
                value={this.props.ui_store.dialogs.tileset_dialog.pic} 
                onChange={this.onPicChange}
            />
            <InputNumber 
                placeholder="Tileset width" 
                value={this.props.ui_store.dialogs.tileset_dialog.width} 
                onChange={this.onWidthChange}
            />
            <InputNumber 
                placeholder="Tileset height" 
                value={this.props.ui_store.dialogs.tileset_dialog.height} 
                onChange={this.onHeightChange}
            />
            </Modal>;
    }
})