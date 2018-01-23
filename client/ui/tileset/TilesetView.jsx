import React from 'react';
import Loader from '../../resource/Loader';
import {observer} from 'mobx-react';

@observer
export default class TilesetView extends React.Component {
    componentDidMount() {
        this.rerender();
    }
    componentDidUpdate() {
        this.rerender();
    }
    rerender() {
        const tileset = this.props.tileset;
        const pic = Loader.pictures[tileset.name];
        const canvas = this.refs.canvas.getContext('2d');
        canvas.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        canvas.drawImage(pic.baseTexture.source, 0, 0);
        canvas.beginPath();

        const pic_width = pic.width,
              pic_height = pic.height,
              tile_width = tileset.tile_width,
              tile_height = tileset.tile_height,
              n_tile_x = pic_width / tile_width,
              n_tile_y = pic_height / tile_height;
        for (let i = 0;i <= pic_width; i += tile_width) {
            canvas.moveTo(i, 0);
            canvas.lineTo(i, pic_height);
        }
        for (let i = 0;i <= pic_height; i += tile_height) {
            canvas.moveTo(0, i);
            canvas.lineTo(pic_width, i);
        }
        canvas.stroke();

        if (this.props.ui_store.select_x !== null && this.props.ui_store.select_y !== null) {
            const tile_x = this.props.ui_store.select_x,
                  tile_y = this.props.ui_store.select_y;
            canvas.fillStyle = 'rgba(0, 0, 0, 0.5)';
            canvas.fillRect(
                tile_x * tile_width, tile_y * tile_height,
                tile_width, tile_height,
            );
        }
    }
    onMouseDownHandler = (e) => {
        const tileset = this.props.tileset;
        const pic = Loader.pictures[tileset.name];
        const x = e.nativeEvent.offsetX,
              y = e.nativeEvent.offsetY,
              pic_width = pic.width,
              pic_height = pic.height,
              tile_width = tileset.tile_width,
              tile_height = tileset.tile_height;
        this.props.ui_store.select_x = Math.floor(x / tile_width);
        this.props.ui_store.select_y = Math.floor(y / tile_height);
    }
    render() {
        const pic = Loader.pictures['tile'];
        // force add dependency for mobx, so when these two values change, componenet get rerendered
        // The actual place we use them are in componenetDidUpdate, which won't add the track.
        const _unused_x_for_mobx = this.props.ui_store.select_x;
        const _unused_y_for_mobx = this.props.ui_store.select_y;
        return <canvas 
            ref="canvas" 
            width={pic.width} 
            height={pic.height}
            onMouseDown={this.onMouseDownHandler}
        />;
    }
}

