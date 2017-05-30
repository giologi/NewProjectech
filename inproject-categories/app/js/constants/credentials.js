/**
 * Created by User on 5/30/2017.
 */
export const API_URL = (process.env.NODE_ENV === 'production')
    ? 'http://35.163.103.194:3000'
    : 'http://35.163.103.194:3000';

// GENERIC API
export const API_CATEGORIES = '/api/category/';
export const API_CATEGORY_BY_NAME = '/api/category/{CATEGORY_NAME}';
