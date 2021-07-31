import React from "react";
import { hsl_to_hex } from "../utils/functions";

class HexagonalColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            hue: props.hue || 0,
        };
    };

    componentWillReceiveProps(new_props) {

        this.setState(new_props);
    }

    _set_color = (color) => {

        this.setState({color});
        this._notify_color_change(color);
    };

    _notify_color_change = (color) => {

        color = color || this.state.color;

        if(this.props.onColorChange) { this.props.onColorChange(color)}
    };

    _on_color_click = (event, color) => {

        color = color || this.state.color;

        if(this.props.onColorClick) { this.props.onColorClick(event, color)}

    };

    _get_color_paths_from_hue = () => {

        const { hue } = this.state;

        let color_paths = [{fill:"#003366",d:"M72 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#336699",d:"M90 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#3366CC",d:"M108 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#003399",d:"M126 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#000099",d:"M144 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#0000CC",d:"M162 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#000066",d:"M180 15l-9 5-9-5V5l9-5 9 5z"},{fill:"#006666",d:"M63 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#006699",d:"M81 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#0099CC",d:"M99 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#0066CC",d:"M117 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#0033CC",d:"M135 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#0000FF",d:"M153 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#3333FF",d:"M171 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#333399",d:"M189 30l-9 5-9-5V20l9-5 9 5z"},{fill:"#669999",d:"M54 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#009999",d:"M72 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#33CCCC",d:"M90 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#00CCFF",d:"M108 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#0099FF",d:"M126 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#0066FF",d:"M144 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#3366FF",d:"M162 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#3333CC",d:"M180 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#666699",d:"M198 45l-9 5-9-5V35l9-5 9 5z"},{fill:"#339966",d:"M45 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#00CC99",d:"M63 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#00FFCC",d:"M81 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#00FFFF",d:"M99 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#33CCFF",d:"M117 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#3399FF",d:"M135 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#6699FF",d:"M153 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#6666FF",d:"M171 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#6600FF",d:"M189 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#6600CC",d:"M207 60l-9 5-9-5V50l9-5 9 5z"},{fill:"#339933",d:"M36 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#00CC66",d:"M54 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#00FF99",d:"M72 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#66FFCC",d:"M90 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#66FFFF",d:"M108 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#66CCFF",d:"M126 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#99CCFF",d:"M144 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#9999FF",d:"M162 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#9966FF",d:"M180 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#9933FF",d:"M198 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#9900FF",d:"M216 75l-9 5-9-5V65l9-5 9 5z"},{fill:"#006600",d:"M27 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#00CC00",d:"M45 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#00FF00",d:"M63 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#66FF99",d:"M81 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#99FFCC",d:"M99 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#CCFFFF",d:"M117 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#CCCCFF",d:"M135 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#CC99FF",d:"M153 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#CC66FF",d:"M171 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#CC33FF",d:"M189 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#CC00FF",d:"M207 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#9900CC",d:"M225 90l-9 5-9-5V80l9-5 9 5z"},{fill:"#003300",d:"M18 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#009933",d:"M36 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#33CC33",d:"M54 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#66FF66",d:"M72 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#99FF99",d:"M90 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#CCFFCC",d:"M108 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#FFFFFF",d:"M126 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#FFCCFF",d:"M144 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#FF99FF",d:"M162 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#FF66FF",d:"M180 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#FF00FF",d:"M198 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#CC00CC",d:"M216 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#660066",d:"M234 105l-9 5-9-5V95l9-5 9 5z"},{fill:"#336600",d:"M27 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#009900",d:"M45 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#66FF33",d:"M63 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#99FF66",d:"M81 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CCFF99",d:"M99 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFFFCC",d:"M117 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFCCCC",d:"M135 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF99CC",d:"M153 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF66CC",d:"M171 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF33CC",d:"M189 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC0099",d:"M207 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#993399",d:"M225 120l-9 5-9-5v-10l9-5 9 5z"},{fill:"#333300",d:"M36 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#669900",d:"M54 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#99FF33",d:"M72 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CCFF66",d:"M90 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFFF99",d:"M108 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFCC99",d:"M126 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF9999",d:"M144 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF6699",d:"M162 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF3399",d:"M180 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC3399",d:"M198 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#990099",d:"M216 135l-9 5-9-5v-10l9-5 9 5z"},{fill:"#666633",d:"M45 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#99CC00",d:"M63 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CCFF33",d:"M81 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFFF66",d:"M99 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFCC66",d:"M117 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF9966",d:"M135 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF6666",d:"M153 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF0066",d:"M171 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC6699",d:"M189 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#993366",d:"M207 150l-9 5-9-5v-10l9-5 9 5z"},{fill:"#999966",d:"M54 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CCCC00",d:"M72 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFFF00",d:"M90 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FFCC00",d:"M108 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF9933",d:"M126 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF6600",d:"M144 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF5050",d:"M162 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC0066",d:"M180 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#660033",d:"M198 165l-9 5-9-5v-10l9-5 9 5z"},{fill:"#996633",d:"M63 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC9900",d:"M81 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF9900",d:"M99 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC6600",d:"M117 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#FF3300",d:"M135 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#ff0000",d:"M153 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC0000",d:"M171 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#990033",d:"M189 180l-9 5-9-5v-10l9-5 9 5z"},{fill:"#663300",d:"M72 195l-9 5-9-5v-10l9-5 9 5z"},{fill:"#996600",d:"M90 195l-9 5-9-5v-10l9-5 9 5z"},{fill:"#CC3300",d:"M108 195l-9 5-9-5v-10l9-5 9 5z"},{fill:"#993300",d:"M126 195l-9 5-9-5v-10l9-5 9 5z"},{fill:"#990000",d:"M144 195l-9 5-9-5v-10l9-5 9 5z"},{fill:"#800000",d:"M162 195l-9 5-9-5v-10l9-5 9 5z"},{fill:"#993333",d:"M180 195l-9 5-9-5v-10l9-5 9 5z"}];
        if(hue === 0) { return color_paths; }

        const hexagon_row = [7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7];
        const hexagon_size = hexagon_row.reduce((accumulator, number) => accumulator + number, 0);

        color_paths = color_paths.map((color_path, index) => {

            if(index + 1 > hexagon_size) {

                return path;
            }

            let index_is_in_row_n = 0;
            let first_of_row_n_index = 0;

            for (let i = 0; i < hexagon_row.length; i++) {

                first_of_row_n_index += hexagon_row[i];

                if (first_of_row_n_index > index) {

                    index_is_in_row_n = i;
                    first_of_row_n_index -= hexagon_row[i];
                    break;
                }
            }

            const last_of_row_n_index = first_of_row_n_index + hexagon_row[index_is_in_row_n] - 1;
            const saturation_index = index_is_in_row_n <= 0 ? index: (index % first_of_row_n_index) + 1;
            const luminosity_index = index_is_in_row_n+1;

            let saturation = index === last_of_row_n_index ? 100: (100 / hexagon_row[index_is_in_row_n] * saturation_index);
            let luminosity = (100 / (1+hexagon_row.length) * luminosity_index);

            color_path.fill = hsl_to_hex(hue / 3.6, saturation, luminosity);
            return color_path;
        });

        return color_paths;
    }

    render() {

        const all_color_paths = this._get_color_paths_from_hue();
        const grey_color_paths = [{ fill: "#F8F8F8", d: "M36 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#DDD", d: "M54 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#B2B2B2", d: "M72 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#7F7F7F", d: "M90 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#5F5F5F", d: "M108 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#333", d: "M126 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#151515", d: "M144 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#000000", d: "M162 240l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#EAEAEA", d: "M45 255l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#C8C8C8", d: "M63 255l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#969696", d: "M81 255l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#777", d: "M99 255l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#4D4D4D", d: "M117 255l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#292929", d: "M135 255l-9 5-9-5v-10l9-5 9 5z" },  { fill: "#0B0B0B", d: "M153 255l-9 5-9-5v-10l9-5 9 5z" }];

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    isolation: "isolate",
                    pointerEvents: "none",
                    height: "100%",
                    width: "100%",
                }}
                viewBox="0 0 234 260"
                width={234}
                height={260}
                {...this.props}
            >
                <defs>
                    <clipPath id="prefix__a">
                        <path d="M0 0h234v260H0z" />
                    </clipPath>
                </defs>
                <defs>
                    <filter
                        id="prefix__b"
                        x="-200%"
                        y="-200%"
                        width="400%"
                        height="400%"
                        filterUnits="objectBoundingBox"
                        colorInterpolationFilters="sRGB"
                    >
                        <feGaussianBlur
                            xmlns="http://www.w3.org/2000/svg"
                            in="SourceGraphic"
                            stdDeviation={2.147}
                        />
                        <feOffset
                            xmlns="http://www.w3.org/2000/svg"
                            result="pf_100_offsetBlur"
                        />
                        <feFlood
                            xmlns="http://www.w3.org/2000/svg"
                            floodColor={this.state.color}
                            floodOpacity={0.65}
                        />
                        <feComposite
                            xmlns="http://www.w3.org/2000/svg"
                            in2="pf_100_offsetBlur"
                            operator="in"
                            result="pf_100_dropShadow"
                        />
                        <feBlend
                            xmlns="http://www.w3.org/2000/svg"
                            in="SourceGraphic"
                            in2="pf_100_dropShadow"
                        />
                    </filter>
                </defs>
                <g clipPath="url(#prefix__a)">

                    {all_color_paths.map((element, index) => {

                        return <path key={`all_color_paths_${index}`} style={{pointerEvents: "auto", cursor: "pointer"}} onClick={() => {this._set_color(element.fill)}} fill={element.fill} d={element.d} />;
                    })}

                    {grey_color_paths.map((element, index) => {

                        return <path key={`grey_color_paths_${index}`} style={{pointerEvents: "auto", cursor: "pointer"}} onClick={() => {this._set_color(element.fill)}} fill={element.fill} d={element.d} />;

                    })};

                    <g filter="url(#prefix__b)">
                        <path style={{pointerEvents: "auto", cursor: "pointer"}} onClick={(event) => {this._on_color_click(event, this.state.color)}} fill={this.state.color} d="M213.75 243.75L198 252.5l-15.75-8.75v-17.5L198 217.5l15.75 8.75z" />
                    </g>
                </g>
            </svg>
        );
    }
}

export default HexagonalColorPicker;
