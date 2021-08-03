# react-hexagon-color-picker

Lightweight hexagon color picker for react (SVG)

![Preview](https://raw.githubusercontent.com/crypto-red/react-hexagon-color-picker/master/public/hexagonal_color_picker_preview.png)


```
import { HexagonalColorHue, HexagonalColorPicker } from "react-hexagon-color-picker";

<div style={{textAlign: "center", margin: 16}}>
	<div>
	    	<HexagonalColorPicker
			hue={_hue}
			color={_current_color}
			onColorChange={this._handle_current_color_change} // f("#444444")
			onColorClick={this._handle_color_menu_open}/> // f(event, "#444444")
	</div>
	<div style={{ margin: 16}}>
	    	<HexagonalColorHue
			hue={_hue}
			onHueChange={this._handle_hue_change}/> // f(345)
	</div>
</div>
```
