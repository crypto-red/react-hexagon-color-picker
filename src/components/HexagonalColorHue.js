import React from "react";
import { hsl_to_hex } from "../utils/functions";


class CanvasPixels extends React.Component {

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

    _set_hue = (hue) => {

        this._notify_hue_change(hue);
    };

    _notify_hue_change = (hue) => {

        if(this.props.onHueChange) {

            this.props.onHueChange(hue);
        }else {

            this.setState({hue})
        }
    };

    _get_color_paths_from_hue = () => {

        let color_paths = [{ d: "M18 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M27 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M36 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M45 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M54 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M63 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M72 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M81 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M90 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M99 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M108 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M117 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M126 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M135 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M144 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M153 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M162 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M171 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M180 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M189 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M198 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M207 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M216 15l-9 5-9-5V5l9-5 9 5z"}, { d: "M225 30l-9 5-9-5V20l9-5 9 5z"}, { d: "M234 15l-9 5-9-5V5l9-5 9 5z"}];

        color_paths = color_paths.map((color_path, index, array) => {

            if(index === 0) {
                return {
                    d: color_path.d,
                    fill: "#000000",
                    hue: 0
                }
            }

            const hue = 360 * (index) / (array.length-1) ;

            return {
                d: color_path.d,
                fill: hsl_to_hex(hue / 3.6, 100, 50),
                hue: hue,
            }
        });

        return color_paths;
    }

    render() {

        const all_color_paths = this._get_color_paths_from_hue();

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    isolation: "isolate",
                    pointerEvents: "none",
                    height: "100%",
                    width: "100%",
                }}
                viewBox="0 0 234 35"
                width={234}
                height={35}
                {...this.props}
            >
                <defs>
                    <clipPath id="prefix__a">
                        <path d="M0 0h234v35H0z" />
                    </clipPath>
                </defs>

                <g clipPath="url(#prefix__a)">

                    {all_color_paths.map((element, index) => {

                        return <path key={`all_color_paths_${index}`} style={{pointerEvents: "auto", cursor: "pointer"}} onClick={() => {this._set_hue(element.hue)}} fill={element.fill} d={element.d} />;
                    })}
                </g>
            </svg>
        );
    }
}

export default CanvasPixels;
