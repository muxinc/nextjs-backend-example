'use client';

import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";

export default function Page() {
	

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
  