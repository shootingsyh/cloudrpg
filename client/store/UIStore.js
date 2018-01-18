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
        hover: false,
        select: false,
        hover_on_idx: 0,
        select_idx: 0,
    }
}

export default new UIStore();