import {observable} from 'mobx'

class UIStore {
    @observable dialogs = {
        tileset_dialog: {
            visible: false,
            pic: '',
            width: 0,
            height: 0,
            name: '',
        }
    }
    @observable tilesets = {
        active_key: null,
    }
}

export default new UIStore();