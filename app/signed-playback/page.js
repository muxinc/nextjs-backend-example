'use client';

import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";

export default function Page() {
	const [tokens, setTokens] = useState({});
	const [playbackIdInput, setPlaybackIdInput] = useState('');
	const [playbackId, setPlaybackId] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		let data;
		
		try {
			const response = await fetch(`/api/sign-token/${playbackIdInput}`);
			data = await response.json();
		} catch (error) {
			console.error(error);
			alert('Something went wrong, check the console for errors');
		}
		
		setTokens({...data});
		setPlaybackId(playbackIdInput);
	}

	return (
	  <main>
		<MuxPlayer
			playbackId={playbackId}
			tokens={{
				playback: tokens?.playbackToken,
				thumbnail: tokens?.thumbnailToken,
				storyboard: tokens?.storyboardToken
			}}
			autoPlay
		></MuxPlayer>
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Playback Id"
				value={playbackIdInput}
				onChange={(event) => setPlaybackIdInput(event.target.value)}
			/>
			<button type="submit">Play Video</button>
		</form>
	  </main>
	)
  }
  