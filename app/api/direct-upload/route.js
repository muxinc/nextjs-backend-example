import Mux from "@mux/mux-node";
import fs from 'fs';

// This code assumes the following env vars are defined
//   process.env.MUX_TOKEN_ID
//   process.env.MUX_TOKEN_SECRET

const { Video } = new Mux();

export async function GET(request, { params }) {
	const playbackPolicy = params?.['playback-policy'] ?? 'public';
	const upload = await Video.Uploads.create({
		new_asset_settings: {
			cors_origin: '*',
			playback_policy: playbackPolicy
		},
	});
	return Response.json({endpoint: upload.url});
};
