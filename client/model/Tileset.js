import {observable, runInAction} from 'mobx'

class Tileset {
    @observable name = '';
    @observable image = '';
    @observable tile_width = 0;
    @observable tile_height = 0;
    constructor(name, image, tile_width, tile_height) {
        runInAction(() => {
            this.name = name;
            this.image = image;
            this.tile_width = tile_width;
            this.tile_height = tile_height;
        });
    }
}
export default Tileset;

