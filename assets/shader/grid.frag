uniform sampler2D u_texture;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;
in vec2 vUv;
out vec4 frag_color;

vec3 linearToSRGB(vec3 color) {
	return pow(color, vec3(1.0/2.2));
}
float grid_factor(vec2 coordinate, float cell_size) {
	vec2 fraction = fract(coordinate/cell_size);
	float line = max(step(0.98, fraction.x), step(0.98, fraction.y));
	return line;
}

void main(){
	vec4 tex_color = texture(u_texture, vUv);
	float grid_factor = grid_factor(gl_FragCoord.xy, 64.0);
	vec2 u_mouse_pixel = vec2((u_mouse.x+0.5)*u_resolution.x, (u_mouse.y+0.5)*u_resolution.y);
	float distance_from_mouse = length(gl_FragCoord.xy - u_mouse_pixel);
	float mouse_mask_inner = clamp(smoothstep(128.0, 10.0, distance_from_mouse),0.1, 1.0);
	float mouse_mask_outer = clamp(smoothstep(512.0, 10.0, distance_from_mouse),0.2, 0.8);
	float grid_factor_with_mask = mouse_mask_inner * mouse_mask_outer * grid_factor;
	vec4 color = mix(tex_color, vec4(1.0), grid_factor_with_mask);
	frag_color = vec4(linearToSRGB(color.rgb), 1.0);
}

