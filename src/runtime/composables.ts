import Echo from "laravel-echo";

import Pusher from "pusher-js";
import { useState } from '#app'

function reverbConfiguration() {
  return useState('reverbConfig').value;
}

export function reverb() {
  window.Pusher = Pusher;

  return new Echo({
    broadcaster: 'reverb',
    encrypted: false,
    key: reverbConfiguration().REVERB_APP_KEY,
    wsHost: reverbConfiguration().REVERB_HOST,
    wsPort: reverbConfiguration().REVERB_PORT ?? 80,
    wssPort: reverbConfiguration().REVERB_PORT ?? 443,
    forceTLS: (reverbConfiguration().REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
  })
}

