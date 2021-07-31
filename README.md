# react-hexagon-color-picker

Lightweight hexagon color picker for react full svg

![Preview](https://raw.githubusercontent.com/crypto-red/react-hexagon-color-picker/master/public/hexagonal_color_picker_preview.png)

```
import { HexagonalColorPicker } from "react-hexagon-color-picker";

<HexagonalColorPicker
    style={{width: "100%", height: 400, margin: 16}}
    color={_current_color} // "#ffffff"
    border={null} // null || "#ffffff"
    onColorChange={this._handle_current_color_change} // (color: "#ffffff")
    onColorClick={this._handle_color_menu_open} // (Event: event, color: "#ffffff")
/>

```

![Preview](https://raw.githubusercontent.com/crypto-red/react-hexagon-color-picker/master/public/hexagonal_color_picker_preview_2.png)

```
import { HexagonalColorHue, HexagonalColorPicker } from "react-hexagon-color-picker";

<div style={{display: "flex", flexDirection: "row-reverse", width: 360, margin: 16}}>
    <div>
        <HexagonalColorPicker
            style={{height: 400}}
            hue={_hue} // 0 - 360
            color={_current_color} // "#ffffff"
            border={null} // null || "#ffffff"
            onColorChange={this._handle_current_color_change} // (color: "#ffffff")
            onColorClick={this._handle_color_menu_open}/> // (Event: event, color: "#ffffff")
    </div>
    <div style={{transform: "rotate(90deg)", margin: "16px 96px 16px 16px",}}>
        <HexagonalColorHue
            style={{height: 51}}
            border={null} // null || "#ffffff"
            hue={_hue} 
            onHueChange={this._handle_hue_change}/> // (hue: 0-360)
    </div>
</div>

```