import Mux from "@mux/mux-node";

// This code assumes the following env vars are defined
//   process.env.MUX_TOKEN_ID (signing key ID)
//   process.env.MUX_TOKEN_SECRET (signing key ID)
//   process.env.MUX_SIGNING_KEY (signing key ID)
//   process.env.MUX_PRIVATE_KEY (signing key secret)
const mux = new Mux();

export async function GET(request, { params }) {
	const playbackId = params['playback-id'];
	const playbackToken = await mux.jwt.signPlaybackId(playbackId);
	const thumbnailToken = await mux.jwt.signPlaybackId(playbackId, {type: 'thumbnail'});
	const storyboardToken = await mux.jwt.signPlaybackId(playbackId, {type: 'storyboard'});
    
	return Response.json({
		playbackToken,
		thumbnailToken,
		storyboardToken
	});
};
