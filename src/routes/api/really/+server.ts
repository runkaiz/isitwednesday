import { error, type RequestHandler } from "@sveltejs/kit";
import { isItWednesday, getSnark } from '$lib/helper';

export const GET: RequestHandler = ({ url }) => {
	const t = Number(url.searchParams.get('time') ?? '0');

    if (!isNaN(t) && t > 0) {
        const w = isItWednesday(t);
        const s = getSnark(w);

        return new Response(JSON.stringify({ wednesday: w, msg: s, time: String(new Date(t))}));
    } else {
        error(400, 'Hmmm, a traveler from beyond time and space?');
    }
};
