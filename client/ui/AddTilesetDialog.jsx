import React from 'react';
import { Modal, Input} from 'antd';
import {observer} from 'mobx-react';
import Tileset from '../model/Tileset';

export default observer(class AddTilesetDialog extends React.Component {
    constructor() {
        super();
        this.onOK = this.onOK.bind(this);
        this.onChange = this.onNameChange.bind(this);
    }
    onOK() {
        this.props.model_store.push(new Tileset(
            this.props.ui_store.name,
            this.props.ui_store.pic,
            this.props.ui_store.width,
            this.props.ui_store.height
        ));
        this.props.ui_store.visible = false;
        this.props.ui_store.pic = '';
        this.props.ui_store.width = 0;
        this.props.ui_store.height = 0;
        this.props.ui_store.name = '';
    }
    onNameChange(e) {
        this.props.ui_store.name = e.target.value;
    }
    render() {
        return <Modal
            title="Add Tileset"
            visible={this.props.ui_store.visible}
            onOk={this.onOK}
            onCancel={this.onOK}
            >
            <Input 
                placeholder="Tileset name" 
                value={this.props.ui_store.name} 
                onChange={this.onChange}
            />
            </Modal>;
    }
})