import type { PageServerLoad } from './$types';

export const load = (async () => {
    const res = await fetch('https://yesweb.se/wp-json/wp/v2/posts');

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();

    return {
        posts // Returning posts directly without nesting under `data`
    };
}) satisfies PageServerLoad;
