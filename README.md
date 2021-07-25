# react-hexagon-color-picker

Lightweight hexagon color picker for react full svg

![Preview](https://raw.githubusercontent.com/crypto-red/react-hexagon-color-picker/master/public/hexagonal_color_picker_preview.png)

```
import HexagonalColorPicker from "react-hexagon-color-picker";

<HexagonalColorPicker
    style={{width: "100%", height: 400, margin: 16}}
    color={_current_color} // "#ffffff"
    onColorChange={this._handle_current_color_change} // (color: "#ffffff")
    onColorClick={this._handle_color_menu_open} // (Event: event, color: "#ffffff")
/>

```