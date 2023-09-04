module.exports = async (url, options) => {
    const fetch = await import('node-fetch');
    return await fetch.default(url, options);
};
