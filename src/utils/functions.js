function hsl_to_rgb(h, s, l) {

    h /= 100;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s == 0) {

        r = g = b = l; // achromatic
    } else {

        function hue_to_rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;

        r = hue_to_rgb(p, q, h + 1/3);
        g = hue_to_rgb(p, q, h);
        b = hue_to_rgb(p, q, h - 1/3);
    }

    return [ r * 255, g * 255, b * 255 ];
}

function rgb_to_hex(r, g, b) {

    function rgbv_2_hex (value) {

        return Math.round(value).toString(16).padStart(2, "0");
    }

    return "#" + rgbv_2_hex(r) + rgbv_2_hex(g) + rgbv_2_hex(b) + "ff";
}

function hsl_to_hex(h, s, l) {

    const [r, g, b] = hsl_to_rgb(h, s, l);
    return rgb_to_hex(r, g, b);
}

function format_hex_color(color) {

    return color.length === 4 ? "#" + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2) + color.charAt(3) + color.charAt(3): color;
}

module.exports = {
    hsl_to_rgb: hsl_to_rgb,
    rgb_to_hex: rgb_to_hex,
    hsl_to_hex: hsl_to_hex,
    format_hex_color: format_hex_color,
}