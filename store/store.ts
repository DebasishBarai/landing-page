import { atom, selector } from "recoil";

export const blogPostState = atom({
    key: 'blogPostState',
    default: selector({
        key: 'blogPostStateSelector',
        get: async () => {
            const response = await fetch('/api/get-blog-posts');
            const blogPosts = await response.json();
            return blogPosts;
        }
    })
    })