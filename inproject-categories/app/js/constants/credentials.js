/**
 * Created by User on 5/30/2017.
 */
export const API_URL = (process.env.NODE_ENV === 'production')
    ? 'https://wix.chatsuite.im'
    : 'http://localhost:3000';

// GENERIC API
export const API_CATEGORIES = '/api/category/';
export const API_CATEGORY_BY_NAME = '/api/category/{CATEGORY_NAME}';
