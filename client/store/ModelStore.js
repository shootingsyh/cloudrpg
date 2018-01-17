import {observable} from 'mobx'
class ModelStore {
    @observable tilesets = [];
}
export default new ModelStore();