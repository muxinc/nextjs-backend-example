import Mux from "@mux/mux-node";

// This code assumes the following env vars are defined
//   process.env.MUX_SIGNING_KEY (signing key ID)
//   process.env.MUX_PRIVATE_KEY (signing key secret)

export async function GET(request, { params }) {
	const playbackId = params['playback-id'];

	const playbackToken = Mux.JWT.signPlaybackId(playbackId);
	const thumbnailToken = Mux.JWT.signPlaybackId(playbackId, {type: 'thumbnail'});
	const storyboardToken = Mux.JWT.signPlaybackId(playbackId, {type: 'storyboard'});
    
	return Response.json({
		playbackToken,
		thumbnailToken,
		storyboardToken
	});
};
