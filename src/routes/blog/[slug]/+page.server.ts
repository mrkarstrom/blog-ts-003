import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const res = await fetch(`https://yesweb.se/wp-json/wp/v2/posts?slug=${params.slug}`);
    const posts = await res.json();

    if (!res.ok || posts.length === 0) {
        throw new Error('Post not found');
    }

    return {
        post: posts[0]
    };
};
